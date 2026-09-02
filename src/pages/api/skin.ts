import type { NextApiRequest, NextApiResponse } from "next";
import { fetchTexture, getEldorTextures } from "~/lib/mojangTextures";

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const textures = await getEldorTextures();
    const body = await fetchTexture(textures.skin);

    response.setHeader("Content-Type", "image/png");
    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    response.status(200).send(body);
  } catch {
    response.status(502).json({ error: "Minecraft skin is unavailable." });
  }
}
