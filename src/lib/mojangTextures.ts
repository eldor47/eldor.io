const PROFILE_UUID = "35793d7311b24bd89ea197d741e1b4b6";

interface MojangTextures {
  textures?: {
    SKIN?: { url?: string };
    CAPE?: { url?: string };
  };
}

let cached:
  | {
      skin: string;
      cape: string | null;
    }
  | undefined;

export async function getEldorTextures() {
  if (cached) return cached;

  const profileResponse = await fetch(
    `https://sessionserver.mojang.com/session/minecraft/profile/${PROFILE_UUID}`,
  );

  if (!profileResponse.ok) {
    throw new Error(`Mojang profile returned ${profileResponse.status}`);
  }

  const profile = (await profileResponse.json()) as {
    properties?: { name: string; value: string }[];
  };
  const encoded = profile.properties?.find(
    (property) => property.name === "textures",
  )?.value;

  if (!encoded) {
    throw new Error("Mojang profile did not include textures");
  }

  const textures = JSON.parse(
    Buffer.from(encoded, "base64").toString("utf8"),
  ) as MojangTextures;

  cached = {
    skin: (textures.textures?.SKIN?.url ?? "").replace("http://", "https://"),
    cape: textures.textures?.CAPE?.url
      ? textures.textures.CAPE.url.replace("http://", "https://")
      : null,
  };

  if (!cached.skin) {
    throw new Error("Mojang profile did not include a skin");
  }

  return cached;
}

export async function fetchTexture(url: string) {
  const textureResponse = await fetch(url);

  if (!textureResponse.ok) {
    throw new Error(`Texture request returned ${textureResponse.status}`);
  }

  return Buffer.from(await textureResponse.arrayBuffer());
}
