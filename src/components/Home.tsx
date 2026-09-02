import React from "react";
import Head from "next/head";
import {
  featuredShorts,
  featuredVideos,
  profileLinks,
} from "~/data/siteContent";
import EmoteStickers from "./EmoteStickers";
import FrogHopper from "./FrogHopper";
import Hero from "./Hero";
import Navbar from "./Navbar";
import VideoCard from "./VideoCard";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>eldor | MCSR Ranked Speedrunner</title>
        <meta
          name="description"
          content="eldor is a Minecraft speedrunner. Watch MCSR Ranked videos and Shorts, and check live Elo. Peak rank: Emerald 3."
        />
        <meta
          name="keywords"
          content="eldor, eldooor, MCSR Ranked, Minecraft speedrunner, Emerald 3, YouTube"
        />
        <meta name="author" content="eldor" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="eldor | MCSR Ranked Speedrunner" />
        <meta
          property="og:description"
          content="Live MCSR Ranked Elo, latest YouTube videos, and links."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eldor.io/" />
        <meta property="og:image" content="https://eldor.io/emotes/wow.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="eldor | MCSR Ranked Speedrunner" />
        <meta
          name="twitter:description"
          content="Live MCSR Ranked Elo, latest YouTube videos, and links."
        />
        <meta name="twitter:image" content="https://eldor.io/emotes/wow.png" />
        <link rel="canonical" href="https://eldor.io/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "eldor",
              alternateName: "eldooor",
              url: "https://eldor.io/",
              description: "MCSR Ranked speedrunner and Minecraft creator.",
              sameAs: profileLinks.map((link) => link.href),
            }),
          }}
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
              Shorts
            </h2>
            <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredShorts.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            <h3
              id="videos"
              className="mb-6 mt-14 scroll-mt-20 text-center text-2xl font-bold text-white"
            >
              Videos
            </h3>
            <div className="grid items-start gap-5 md:grid-cols-2">
              {featuredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        <section id="links" className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-white">Links</h2>
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
          © {new Date().getFullYear()} eldor
        </footer>
      </div>
    </>
  );
};

export default Home;
