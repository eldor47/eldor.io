import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gameDevProjects, pluginProjects, profileLinks } from '~/data/siteContent';
import Hero from './Hero';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a78bfa]">{eyebrow}</p>
    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
    <p className="mt-4 text-base leading-7 text-white/72 md:text-lg">{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>eldor | Speedrunner, Game Developer, Minecraft Plugins</title>
        <meta
          name="description"
          content="eldor is a speedrunner, game developer, and Minecraft plugin creator building game systems, creator content, and Paper server plugins."
        />
        <meta property="og:title" content="eldor | Speedrunner, Game Developer, Minecraft Plugins" />
        <meta
          property="og:description"
          content="Watch streams, find videos, and explore Minecraft plugins from eldor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eldor.io/" />
        <meta property="og:image" content="https://eldor.io/emotes/wow.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="eldor | Speedrunner, Game Developer, Minecraft Plugins"
        />
        <meta
          name="twitter:description"
          content="Creator hub for streams, videos, experiments, and Minecraft plugins."
        />
        <meta name="twitter:image" content="https://eldor.io/emotes/wow.png" />
        <link rel="canonical" href="https://eldor.io/" />
      </Head>

      <Navbar />

      <div className="relative overflow-hidden">
        <Hero />

        <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About"
              title="Speedrunning, game dev, and Minecraft plugins under one roof."
              description="I stream on Twitch, post to YouTube and TikTok, build games in Godot, and ship real plugins for Minecraft servers."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="rounded-[28px] border border-white/10 bg-[#120f22]/80 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#86efac]">
                  Who I am
                </p>
                <h3 className="mt-4 text-3xl font-bold text-white">I play games obsessively and then build them.</h3>
                <p className="mt-5 text-lg leading-8 text-white/75">
                  I am a speedrunner, game developer, and Minecraft plugin creator. That means
                  routing faster runs, making games feel better than they did before, and shipping
                  Paper plugins that real servers actually run.
                </p>
                <p className="mt-5 text-lg leading-8 text-white/75">
                  My streams, videos, and releases all feed into the same thing: getting better at
                  making and playing games, and bringing people along for it.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                className="grid gap-4"
              >
                <div className="rounded-3xl border border-white/10 bg-[#17122c]/80 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c4b5fd]">
                        Active Platforms
                      </p>
                      <p className="mt-3 text-2xl font-bold text-white">
                        Streaming, clips, plugins, and community.
                      </p>
                    </div>
                    <Image
                      src="/emotes/smile.png"
                      alt="Smile emote accent"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                  </div>
                  <p className="mt-4 text-white/72">
                    Live on Twitch, posting to YouTube and TikTok, shipping plugins to Modrinth,
                    and hanging out in the Eldor Ribbits Discord.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#17122c]/80 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c4b5fd]">
                        Community
                      </p>
                      <p className="mt-3 text-2xl font-bold text-white">Eldor Ribbits Discord is live.</p>
                    </div>
                    <Image
                      src="/emotes/wow.png"
                      alt="Wow emote accent"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                  </div>
                  <p className="mt-4 text-white/72">
                    Join the server for stream chat, plugin updates, speedrun discussion, and
                    general gaming.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="plugins" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Minecraft Plugins"
              title="Minecraft plugins I have built and released."
              description="Tools and systems made for Paper and Spigot servers, with a focus on utility, progression, and fun."
            />

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://modrinth.com/user/eldor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#22c55e]/30 bg-[#22c55e]/12 px-5 py-2.5 text-sm font-semibold text-[#dcfce7] transition-colors hover:border-[#22c55e]/50 hover:bg-[#22c55e]/18"
              >
                View Modrinth Profile
              </a>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70">
                Paper and Spigot focused builds
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pluginProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="dev" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Game Development"
              title="Game projects, prototypes, and experiments."
              description="A mix of gameplay systems, minigames, and interactive builds across web and game development."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {gameDevProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="links" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Watch / Follow"
              title="Find me across all platforms."
              description="Watch streams, catch videos, follow clips, browse plugins, or join the community."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {profileLinks.map((link, index) => {
                const isDisabled = link.comingSoon;

                const card = (
                  <div
                    className={`h-full rounded-3xl border p-6 backdrop-blur transition-all ${
                      isDisabled
                        ? 'border-dashed border-white/10 bg-white/5 text-white/55'
                        : 'border-white/10 bg-[#120f22]/80 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:shadow-[0_18px_60px_rgba(91,33,182,0.2)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-2xl font-bold text-white">{link.label}</p>
                        <p className="mt-3 max-w-sm text-white/70">{link.description}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${
                          isDisabled
                            ? 'border border-white/10 bg-white/5 text-white/55'
                            : 'border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#c4b5fd]'
                        }`}
                      >
                        {isDisabled ? 'Coming soon' : 'Open'}
                      </span>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.06 }}
                  >
                    {isDisabled ? (
                      card
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {card}
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Contact"
              title="Reach out or come hang out."
              description="Whether you want to talk plugins, collaborate on a project, or just follow along, I am easy to find."
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,15,34,0.94),rgba(22,18,42,0.88))] p-8 text-center shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur md:p-10"
            >
              <p className="text-lg leading-8 text-white/78">
                Hit me up on{' '}
                <a
                  href="https://twitter.com/eldor4747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-[#8b5cf6] decoration-2 underline-offset-4"
                >
                  X
                </a>{' '}
                or email me at{' '}
                <a
                  href="mailto:eldor474747@gmail.com"
                  className="font-semibold text-white underline decoration-[#8b5cf6] decoration-2 underline-offset-4"
                >
                  eldor474747@gmail.com
                </a>
                . You can also catch me live on Twitch, follow the TikTok and YouTube for clips and
                videos, grab my plugins from Modrinth, or join the Discord community.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:eldor474747@gmail.com"
                  className="inline-flex items-center rounded-xl bg-[#7c3aed] px-5 py-3 font-semibold text-white shadow-[0_14px_35px_rgba(124,58,237,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Email Me
                </a>
                <a
                  href="https://www.twitch.tv/eldoorr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/85 transition-colors hover:border-white/30 hover:text-white"
                >
                  Open Twitch
                </a>
                <a
                  href="https://discord.gg/TYfC9JJe5R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-[#22c55e]/25 bg-[#22c55e]/10 px-5 py-3 font-semibold text-[#dcfce7] transition-colors hover:border-[#22c55e]/45 hover:bg-[#22c55e]/15"
                >
                  Join Discord
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#120f22]/80 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-center text-sm text-white/55 md:flex-row md:items-center md:justify-between md:text-left">
            <p>&copy; {new Date().getFullYear()} eldor. Built around speedruns, game dev, and Minecraft plugins.</p>
            <p>Streaming links and Discord are live.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
