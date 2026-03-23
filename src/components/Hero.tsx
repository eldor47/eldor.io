import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { creatorHighlights, creatorStats, profileLinks } from "~/data/siteContent";

const featuredLinks = profileLinks;

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[96vh] items-center overflow-hidden px-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="site-bg" aria-hidden>
        <div className="aurora" />
        <div className="aurora aurora-2" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex rounded-full border border-[#8b5cf6]/30 bg-[#120f24]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#c4b5fd]"
          >
            Speedrunner / Game Developer / Minecraft Plugins
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-6 bg-[linear-gradient(180deg,#ffffff,rgba(255,255,255,0.74))] bg-clip-text pb-1 text-5xl font-extrabold leading-tight tracking-tight text-transparent drop-shadow-[0_8px_24px_rgba(107,70,193,0.25)] md:text-7xl md:leading-[1.05]"
          >
            I build game systems, chase speed, and ship Minecraft plugins.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            I am eldor, a creator focused on speedrunning, game development, and Minecraft
            plugin design. This site is my hub for streams, videos, experiments, and the server
            tools I am building for players.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://www.twitch.tv/eldoorr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-[#7c3aed] px-6 py-3 font-semibold text-white shadow-[0_14px_45px_rgba(124,58,237,0.42)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(124,58,237,0.5)]"
            >
              Watch on Twitch
            </a>
            <a
              href="#plugins"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 transition-colors hover:border-white/30 hover:text-white"
            >
              Explore Plugins
            </a>
            <a
              href="#links"
              className="inline-flex items-center rounded-xl border border-[#22c55e]/25 bg-[#22c55e]/10 px-6 py-3 font-semibold text-[#dcfce7] transition-colors hover:border-[#22c55e]/40 hover:bg-[#22c55e]/15"
            >
              Follow Everywhere
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {creatorHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-white/10 bg-[#110d20]/75 p-4 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a78bfa]">
                  {highlight.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/72">{highlight.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {featuredLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-[#8b5cf6]/50 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-10 top-8 z-20 hidden rotate-[-8deg] rounded-2xl border border-white/15 bg-[#0f0c1d]/90 p-3 shadow-[0_14px_40px_rgba(0,0,0,0.35)] md:block">
            <Image
              src="/emotes/smile.png"
              alt="Smile emote"
              width={64}
              height={64}
              className="h-16 w-16 rounded-xl object-cover"
            />
          </div>

          <div className="absolute -right-8 bottom-14 z-20 hidden rotate-[10deg] rounded-2xl border border-white/15 bg-[#0f0c1d]/90 p-3 shadow-[0_14px_40px_rgba(0,0,0,0.35)] lg:block">
            <Image
              src="/emotes/wow.png"
              alt="Wow emote"
              width={64}
              height={64}
              className="h-16 w-16 rounded-xl object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(17,13,32,0.92),rgba(14,12,24,0.86))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur">
            <div className="rounded-[24px] border border-[#8b5cf6]/20 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.24),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c4b5fd]">
                    Creator Stats
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white">What I am grinding right now</h2>
                </div>
                <Image
                  src="/emotes/animated_frog.gif"
                  alt="Animated frog emote"
                  width={80}
                  height={80}
                  unoptimized
                  className="h-20 w-20 rounded-2xl object-cover"
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {creatorStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#86efac]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{stat.description}</p>
                    {"href" in stat && stat.href ? (
                      <a
                        href={stat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-sm font-semibold text-[#c4b5fd] transition-colors hover:text-white"
                      >
                        {"ctaLabel" in stat ? stat.ctaLabel : "Open"}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#86efac]">
                  Right now
                </p>
                <p className="mt-2 text-white/75">
                  Actively streaming on Twitch, pushing my speedrun PB, releasing plugins on
                  Modrinth, and posting gameplay content to YouTube and TikTok.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
