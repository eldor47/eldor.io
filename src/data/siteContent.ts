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
    id: "Q7Q5EDtjedo",
    title: "Minecraft Speedrunning | Frog — Oct 1",
    type: "Video",
  },
  {
    id: "4XKUXcIhQXY",
    title: "Minecraft Dungeons II Release!",
    type: "Video",
  },
  {
    id: "N-aPqMiGWdU",
    title: "Minecraft Speedrunning | Frog — Sep 30",
    type: "Video",
  },
  {
    id: "xFL1_7xH1FE",
    title: "Minecraft Speedrunning | Frog — Sep 29",
    type: "Video",
  },
];

export const featuredShorts: FeaturedVideo[] = [
  {
    id: "nEoIPf_XHfo",
    title: "How to Get Aurora Cape",
    type: "Short",
  },
  {
    id: "mM7kXKiXkzE",
    title: "The Sift Dimension Bunny Is Evil",
    type: "Short",
  },
  {
    id: "xZWEoS2lXbE",
    title: "I Added Moon Gravity to Minecraft Speedrunning",
    type: "Short",
  },
  {
    id: "W8GOosh73FY",
    title: "Failing Sub 10 Minute Speedrun",
    type: "Short",
  },
];
