import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '~/data/projects';
import Hero from './Hero';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>eldor | Software Engineer | Web3</title>
      </Head>
      <Navbar />
      <div className="pt-16 relative">
        <Head>
          <meta name="description" content="Eldor — Software Engineer building sleek, intuitive web experiences with React, Next.js, and creative UI." />
          <meta property="og:title" content="eldor | Software Engineer | Web3" />
          <meta property="og:description" content="Engineer crafting sleek and intuitive experiences. Explore projects and get in touch." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://" />
          <meta property="og:image" content="/images/topblast.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-28 px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Selected Work
          </motion.h2>
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-28 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
          >
            Get in touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glow-border bg-[#1A1323]/70 p-8 rounded-xl text-center">
              <p className="text-lg text-white/85">
                For inquiries, DM{' '}
                <a
                  href="https://twitter.com/eldor4747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#6B46C1] decoration-2 underline-offset-4 hover:text-white"
                >
                  @eldor4747
                </a>{' '}
                on X or email{' '}
                <a
                  href="mailto:eldor474747@gmail.com"
                  className="underline decoration-[#6B46C1] decoration-2 underline-offset-4 hover:text-white"
                >
                  eldor474747@gmail.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1F1A38] py-6">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            © {new Date().getFullYear()} eldor. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
