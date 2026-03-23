import type { Project } from "~/types/project";

export interface ProfileLink {
  label: string;
  href: string;
  description: string;
  comingSoon?: boolean;
}

export const creatorHighlights = [
  {
    title: "Speedrunner",
    description: "Routing faster paths, optimizing movement, and pushing games to their limits.",
  },
  {
    title: "Game developer",
    description: "Building games and interactive systems across Godot, the web, and Minecraft.",
  },
  {
    title: "Plugin creator",
    description: "Shipping Paper and Spigot plugins that run on real servers and solve real problems.",
  },
];

export const creatorStats = [
  {
    label: "RSG PB",
    value: "15:30",
    description: "Current random seed speedrun personal best.",
    href: "https://www.youtube.com/watch?v=iYLvnMUZWUA",
    ctaLabel: "Watch VOD",
  },
  {
    label: "Plugins Live",
    value: "3",
    description: "Public plugins on Modrinth with 1,500+ downloads.",
  },
  {
    label: "Platforms",
    value: "5+",
    description: "Twitch, YouTube, TikTok, Modrinth, and Discord.",
  },
] as const;

export const profileLinks: ProfileLink[] = [
  {
    label: "Twitch",
    href: "https://www.twitch.tv/eldoorr",
    description: "Streams, live gameplay, and dev energy.",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@eldor-devs",
    description: "Videos, highlights, and creator updates.",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@eldordevs",
    description: "Short-form clips and quick posts.",
  },
  {
    label: "Modrinth",
    href: "https://modrinth.com/user/eldor",
    description: "My public Minecraft plugin profile.",
  },
  {
    label: "X",
    href: "https://twitter.com/eldor4747",
    description: "Quick updates and conversations.",
  },
  {
    label: "Discord",
    href: "https://discord.gg/TYfC9JJe5R",
    description: "Join the Eldor Ribbits community.",
  },
];

export const pluginProjects: Project[] = [
  {
    eyebrow: "Featured Plugin",
    title: "ChestLockLite",
    description:
      "Container protection for Paper servers with owner locks, trusted players, passwords, and lightweight SQLite storage.",
    link: "https://modrinth.com/plugin/chestlocklite",
    ctaLabel: "View on Modrinth",
    tags: ["Paper 1.21+", "Protection", "SQLite"],
    featured: true,
  },
  {
    eyebrow: "Featured Plugin",
    title: "QuestLogs",
    description:
      "A quest and challenge plugin with GUI quest books, tracked player stats, timed challenges, and configurable rewards.",
    link: "https://modrinth.com/plugin/quest-logs",
    ctaLabel: "View on Modrinth",
    tags: ["Adventure", "Stats", "Challenges"],
    featured: true,
  },
  {
    eyebrow: "Featured Plugin",
    title: "GrokChat",
    description:
      "An AI-powered chat plugin that brings contextual Grok responses into Minecraft servers with mentions and auto-response tools.",
    link: "https://modrinth.com/plugin/grokchat",
    ctaLabel: "View on Modrinth",
    tags: ["AI", "Chat", "Utility"],
    featured: true,
  },
];

export const gameDevProjects: Project[] = [
  {
    eyebrow: "Game Development",
    title: "Top Blast",
    description:
      "A Godot-built minigame project focused on arcade feel, game loops, and playful moment-to-moment action.",
    link: "https://github.com/eldor47",
    ctaLabel: "See my work",
    tags: ["Godot", "Arcade", "Prototype"],
  },
  {
    eyebrow: "Minecraft Systems",
    title: "MobRoyale",
    description:
      "A custom Spigot wave-based PVE plugin built around combat pressure, enemy pacing, and replayable encounters.",
    link: "https://github.com/eldor47/MobRoyale",
    ctaLabel: "Open project",
    tags: ["Spigot", "PVE", "Wave Defense"],
  },
  {
    eyebrow: "Interactive Experiments",
    title: "$COQ Combo",
    description:
      "A Suika-inspired browser minigame built for a hackathon, designed around satisfying chaining and quick replayability.",
    link: "https://coq-combo.vercel.app/",
    ctaLabel: "Play project",
    tags: ["Web Game", "Hackathon", "2nd Place"],
  },
];

