import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

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
      whileHover={{ scale: 1.05 }}
      className="block rounded-lg overflow-hidden shadow-lg bg-[#1A1323] hover:shadow-xl transition-shadow min-h-[400px]"
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
