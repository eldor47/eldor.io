import { useEffect, useState } from "react";

interface RankedProfile {
  nickname: string;
  elo: number | null;
  leaderboardRank: number | null;
  seasonWins: number | null;
  seasonMatches: number | null;
}

const getDivision = (elo: number | null) => {
  if (elo === null) return "Placements";
  if (elo >= 2000) return "Netherite";
  if (elo >= 1500)
    return `Diamond ${1 + Math.min(2, Math.floor((elo - 1500) / 167))}`;
  if (elo >= 1200)
    return `Emerald ${1 + Math.min(2, Math.floor((elo - 1200) / 100))}`;
  if (elo >= 900)
    return `Gold ${1 + Math.min(2, Math.floor((elo - 900) / 100))}`;
  if (elo >= 600)
    return `Iron ${1 + Math.min(2, Math.floor((elo - 600) / 100))}`;
  return "Coal";
};

const McsrCard = () => {
  const [profile, setProfile] = useState<RankedProfile | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/mcsr", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Profile unavailable");
        return response.json() as Promise<RankedProfile>;
      })
      .then(setProfile)
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError")
          setUnavailable(true);
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-lime-200/20 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_40%),linear-gradient(145deg,#102319,#08150f)] p-7 shadow-[0_24px_80px_rgba(2,30,16,0.45)]">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime-300">
              Live MCSR Ranked
            </p>
            <h3 className="mt-2 text-3xl font-black text-white">
              {profile?.nickname ?? "eldooor"}
            </h3>
          </div>
          <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-100">
            API live
          </span>
        </div>

        {unavailable ? (
          <p className="mt-8 text-emerald-50/70">
            Ranked stats are taking a quick pond break. Try again soon.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-widest text-emerald-100/60">
                Current Elo
              </p>
              <p className="mt-2 text-4xl font-black text-white">
                {profile?.elo ?? "—"}
              </p>
              <p className="mt-1 font-semibold text-lime-300">
                {profile ? getDivision(profile.elo) : "Loading…"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-widest text-emerald-100/60">
                Leaderboard
              </p>
              <p className="mt-2 text-4xl font-black text-white">
                {profile?.leaderboardRank
                  ? `#${profile.leaderboardRank.toLocaleString()}`
                  : "—"}
              </p>
              <p className="mt-1 text-sm text-emerald-100/60">Global rank</p>
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-emerald-50/65">
          <span>
            Peak: <strong className="text-white">Emerald 3</strong>
          </span>
          {profile &&
          profile.seasonWins !== null &&
          profile.seasonMatches !== null ? (
            <span>
              {profile.seasonWins}/{profile.seasonMatches} season wins
            </span>
          ) : null}
        </div>

        <a
          href="https://mcsrranked.com/stats"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-lime-300 transition-colors hover:text-lime-200"
        >
          View full ranked profile{" "}
          <span aria-hidden className="ml-2">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default McsrCard;
