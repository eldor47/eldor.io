import type { NextApiRequest, NextApiResponse } from "next";

interface RankedApiResponse {
  status: string;
  data?: {
    nickname: string;
    eloRate: number | null;
    eloRank: number | null;
    statistics?: {
      season?: {
        wins?: { ranked?: number };
        playedMatches?: { ranked?: number };
      };
    };
  };
}

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const rankedResponse = await fetch(
      "https://api.mcsrranked.com/users/eldooor",
      {
        headers: { Accept: "application/json" },
      },
    );

    if (!rankedResponse.ok) {
      throw new Error(`MCSR Ranked returned ${rankedResponse.status}`);
    }

    const profile = (await rankedResponse.json()) as RankedApiResponse;

    if (profile.status !== "success" || !profile.data) {
      throw new Error("MCSR Ranked profile was unavailable");
    }

    response.setHeader(
      "Cache-Control",
      "s-maxage=30, stale-while-revalidate=300",
    );
    response.status(200).json({
      nickname: profile.data.nickname,
      elo: profile.data.eloRate,
      leaderboardRank: profile.data.eloRank,
      seasonWins: profile.data.statistics?.season?.wins?.ranked ?? null,
      seasonMatches:
        profile.data.statistics?.season?.playedMatches?.ranked ?? null,
    });
  } catch {
    response
      .status(502)
      .json({ error: "Ranked profile is temporarily unavailable." });
  }
}
