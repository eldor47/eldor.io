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
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#130f22]/80 backdrop-blur transition-all hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:shadow-[0_22px_70px_rgba(91,33,182,0.28)]"
    >
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1200}
          height={768}
          className="h-64 w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="relative h-36 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.38),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_45%),linear-gradient(135deg,rgba(19,15,34,1),rgba(28,22,49,1))]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex h-full items-end justify-between p-5">
            <div>
              {project.eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c4b5fd]">
                  {project.eyebrow}
                </p>
              ) : null}
              <p className="mt-2 text-sm text-white/70">
                {project.featured ? 'Featured build' : 'Open project'}
              </p>
            </div>
            <span className="rounded-full border border-[#8b5cf6]/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Open
            </span>
          </div>
        </div>
      )}

      <div className="space-y-4 p-6">
        {project.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a78bfa]">
            {project.eyebrow}
          </p>
        ) : null}

        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
          <p className="text-white/78">{project.description}</p>
        </div>

        {project.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex items-center justify-between pt-2 text-sm font-semibold text-[#d8b4fe]">
          <span>{project.ctaLabel ?? 'Open project'}</span>
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            -&gt;
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
