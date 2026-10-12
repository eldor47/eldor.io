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

export interface FeaturedTikTok {
  id: string;
  title: string;
}

export const featuredVideos: FeaturedVideo[] = [
  {
    id: "geoT1Gus6jo",
    title: "We Speedran Minecraft's Most Cursed Seed",
    type: "Video",
  },
  {
    id: "ORZ0bh2wreo",
    title: "Minecraft Speedrun, But TNT Keeps Falling On Me",
    type: "Video",
  },
  {
    id: "_9SFFYoc36I",
    title: "I Added Moon Gravity to Minecraft Speedrunning",
    type: "Video",
  },
  {
    id: "PEGdt4jXkdI",
    title: "Minecraft Chained Together with My Brother Broke Me...",
    type: "Video",
  },
];

export const featuredShorts: FeaturedVideo[] = [
  {
    id: "s_298xez4u0",
    title: "Eldor x Sorvnt 1v1 Battle",
    type: "Short",
  },
  {
    id: "oab8a5fB2mY",
    title: "Biggest Speedrun Fumble",
    type: "Short",
  },
  {
    id: "AUb8lFmkBl8",
    title: "Minecraft Speedrun, But TNT Keeps Falling On Me",
    type: "Short",
  },
  {
    id: "mM7kXKiXkzE",
    title: "The Sift Dimension Bunny Is Evil",
    type: "Short",
  },
];

export const featuredTikToks: FeaturedTikTok[] = [
  {
    id: "7695903556221619487",
    title: "Can These Speedrunners Beat This Cursed Seed?",
  },
  {
    id: "7694766536908623134",
    title: "New PB, But Not a Sub 10",
  },
  {
    id: "7694751690850897183",
    title: "1v1 with Shaun Highlights",
  },
  {
    id: "7690858555209043230",
    title: "The New Aurora Cape Looks Amazing",
  },
];
