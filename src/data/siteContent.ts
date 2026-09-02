export interface ProfileLink {
  label: string;
  href: string;
}

export const profileLinks: ProfileLink[] = [
  { label: "Twitch", href: "https://www.twitch.tv/eldoorr" },
  { label: "YouTube", href: "https://www.youtube.com/@eldor-devs" },
  { label: "TikTok", href: "https://www.tiktok.com/@eldordevs" },
  { label: "X", href: "https://twitter.com/eldor4747" },
  { label: "Discord", href: "https://discord.gg/TYfC9JJe5R" },
];

export interface FeaturedVideo {
  id: string;
  title: string;
  type: "Video" | "Short";
}

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "Grl-7al_lJ8",
    title: "I Was Coached By A Pro Player",
    type: "Video",
  },
  {
    id: "sCaBBWwhdCY",
    title: "Feinberg Reacts to My Zero Cycle",
    type: "Video",
  },
  {
    id: "9WT1ZoyxfQc",
    title: "Hardcore, But I Lose Health Every Second...",
    type: "Video",
  },
  {
    id: "iYLvnMUZWUA",
    title: "I Beat Minecraft in 15 Minutes",
    type: "Video",
  },
];

export const featuredShorts: FeaturedVideo[] = [
  {
    id: "NHd0MLjOtIs",
    title: "Minecraft but Everything Is Frogs",
    type: "Short",
  },
  {
    id: "Z83uzBKsfn0",
    title: "New Ranked PB",
    type: "Short",
  },
  {
    id: "TzEIwSAKHmA",
    title: "Easy Speedrun Lava Trick",
    type: "Short",
  },
  {
    id: "8RoJWFcXiyk",
    title: "New Ranked PBs",
    type: "Short",
  },
];
