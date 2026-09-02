import type { NextApiRequest, NextApiResponse } from "next";
import { fetchTexture, getEldorTextures } from "~/lib/mojangTextures";

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const textures = await getEldorTextures();

    if (!textures.cape) {
      response.status(404).json({ error: "No cape on this profile." });
      return;
    }

    const body = await fetchTexture(textures.cape);

    response.setHeader("Content-Type", "image/png");
    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    response.status(200).send(body);
  } catch {
    response.status(502).json({ error: "Minecraft cape is unavailable." });
  }
}
