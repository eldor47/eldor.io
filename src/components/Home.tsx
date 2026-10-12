import React from "react";
import Head from "next/head";
import {
  featuredShorts,
  featuredTikToks,
  featuredVideos,
  profileLinks,
} from "~/data/siteContent";
import EmoteStickers from "./EmoteStickers";
import FrogHopper from "./FrogHopper";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TikTokCard from "./TikTokCard";
import VideoCard from "./VideoCard";

const pageTitle = "eldor | Minecraft Speedrunner | eldor.io";
const pageDescription =
  "eldor is a Minecraft speedrunner and MCSR Ranked creator (IGN eldooor). Official site for YouTube videos, TikToks, live Elo, and streams at eldor.io.";
const ogImage = "https://i.ytimg.com/vi/geoT1Gus6jo/maxresdefault.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://eldor.io/#website",
      url: "https://eldor.io/",
      name: "eldor",
      alternateName: ["eldor.io", "eldooor", "eldor-devs"],
      description: pageDescription,
      inLanguage: "en",
      publisher: { "@id": "https://eldor.io/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://eldor.io/#person",
      name: "eldor",
      alternateName: ["eldooor", "eldor-devs", "eldoorr"],
      url: "https://eldor.io/",
      image: "https://eldor.io/emotes/wow.png",
      jobTitle: "Minecraft speedrunner",
      description:
        "Minecraft speedrunner and MCSR Ranked creator known as eldor. Minecraft IGN eldooor. Peak rank Emerald 3.",
      sameAs: profileLinks.map((link) => link.href),
    },
    {
      "@type": "ProfilePage",
      "@id": "https://eldor.io/#profile",
      url: "https://eldor.io/",
      name: pageTitle,
      isPartOf: { "@id": "https://eldor.io/#website" },
      mainEntity: { "@id": "https://eldor.io/#person" },
    },
    ...featuredVideos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: `${video.title} by eldor`,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      author: { "@id": "https://eldor.io/#person" },
    })),
  ],
};

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="eldor, eldor.io, eldooor, eldor-devs, eldoorr, Minecraft speedrunner, MCSR Ranked, Emerald 3, YouTube, TikTok"
        />
        <meta name="author" content="eldor" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://eldor.io/" />
        <meta property="og:site_name" content="eldor" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://eldor.io/" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="eldor Minecraft speedrun video"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eldor4747" />
        <meta name="twitter:creator" content="@eldor4747" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar />
      <EmoteStickers />
      <FrogHopper />

      <div className="relative overflow-hidden">
        <Hero />

        <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2
              id="shorts"
              className="mb-8 scroll-mt-20 text-center text-2xl font-bold text-white"
            >
              eldor Shorts
            </h2>
            <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredShorts.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            <h2
              id="tiktok"
              className="mb-6 mt-14 scroll-mt-20 text-center text-2xl font-bold text-white"
            >
              eldor on TikTok
            </h2>
            <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredTikToks.map((video) => (
                <TikTokCard key={video.id} video={video} />
              ))}
            </div>

            <h2
              id="videos"
              className="mb-6 mt-14 scroll-mt-20 text-center text-2xl font-bold text-white"
            >
              eldor YouTube Videos
            </h2>
            <div className="grid items-start gap-5 md:grid-cols-2">
              {featuredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        <section id="links" className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-white">Follow eldor</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-lime-200/15 bg-[#0b1c12]/90 px-5 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:border-lime-300/50 hover:text-lime-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-lime-200/10 py-6 text-center text-sm text-white/45">
          © {new Date().getFullYear()} eldor · eldor.io
        </footer>
      </div>
    </>
  );
};

export default Home;
