import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Top Blast',
    description: 'Godot 4 based $AVAX ecosystem minigame',
    imageUrl: '/images/topblast.png',
    link: 'https://github.com/eldor47',
  },
  {
    title: 'Woofy Metadata',
    description: 'Web app for tracking cozyverse Woofy NFT reveal status and wallets',
    imageUrl: '/images/woofytracker.png',
    link: 'https://woofy-meta.vercel.app',
  },
  {
    title: 'Mobroyale',
    description: 'Custom minecraft Spigot plugin for PVE wave based system 1.21.4',
    imageUrl: '/images/pve.png',
    link: 'https://github.com/eldor47/MobRoyale',
  },
  {
    title: '$COQ Combo',
    description: 'Suika inspired "combo" minigame entry for 2024 $COQ hackathon. Placed 2nd',
    imageUrl: '/images/combo.png',
    link: 'https://coq-combo.vercel.app/',
  },
  {
    title: 'Baecafe',
    description: 'Developed main UI and backend systems for baecafe NFT ecosystem',
    imageUrl: '/images/baecafe.png',
    link: 'https://www.baecafe.xyz/',
  },
  {
    title: 'Wavenest',
    description: 'Simple web based sound player and playlist system',
    imageUrl: '/images/wavenest.png',
    link: 'https://www.wavenest.io/',
  },
  // Add more projects as needed.
];

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>eldor | Software Engineer | Web3</title>
      </Head>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center p-4"
          style={{ backgroundColor: 'var(--background-color)' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-4xl font-bold text-white"
          >
            Innovating the Web, One Experience at a Time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
            className="mt-4 text-lg text-gray-300"
          >
            I am an engineer crafting sleek and intuitive experiences. Check out my{' '}
            <a
              href="https://github.com/eldor47"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#6B46C1]"
            >
              GitHub
            </a>
            .
          </motion.p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-32 px-4 md:px-64"
          style={{ backgroundColor: '#35304b' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-3xl font-bold text-center mb-10 text-white"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-8"
          style={{ backgroundColor: '#1F1A38' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-3xl font-bold text-center mb-10 text-white"
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            className="max-w-lg mx-auto text-center"
          >
            <p className="text-lg text-gray-300">
              For inquiries, DM{' '}
              <a
                href="https://twitter.com/eldor4747"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#6B46C1]"
              >
                @eldor4747
              </a>{' '}
              on X or email{' '}
              <a
                href="mailto:eldor474747@gmail.com"
                className="underline text-[#6B46C1]"
              >
                eldor474747@gmail.com
              </a>
              .
            </p>
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
