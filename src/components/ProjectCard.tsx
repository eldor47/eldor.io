import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '~/types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="block rounded-xl overflow-hidden bg-[#1A1323]/80 backdrop-blur glow-border transition-all min-h-[420px] hover:shadow-[0_20px_60px_rgba(107,70,193,0.25)]"
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={1200}
        height={768}
        className="w-full h-64 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white tracking-wide">{project.title}</h3>
        <p className="text-white/80">{project.description}</p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
