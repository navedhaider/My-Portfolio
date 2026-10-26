import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, Eye } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { Badge } from '../common/Badge';
import { ProjectVisual } from './ProjectVisual';
import { useToast } from '../../context/ToastContext';

export const ProjectCard = ({ project, onSelectProject }) => {
  const { addToast } = useToast();

  const handleLinkClick = (e, url, isConfigured, name) => {
    if (!url || !isConfigured) {
      e.preventDefault();
      addToast({
        title: 'Project Link Notice',
        message: `${name} is currently a project showcase. Add your repo or live link in src/data/portfolioData.js`,
        type: 'info',
      });
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass-card glass-card-hover rounded-2xl border overflow-hidden flex flex-col justify-between group"
    >
      <div>
        {/* Project Visual Header */}
        <div
          onClick={() => onSelectProject(project)}
          className="relative cursor-pointer overflow-hidden p-2.5 pb-0"
        >
          <ProjectVisual type={project.previewType} />
          {/* Overlay hover prompt */}
          <div className="absolute inset-2.5 rounded-xl bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-xs">
            <span className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              View Architecture & Details
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Badge & Category */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              {project.category}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
              {project.badge}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectProject(project)}
            className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" size="sm">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>System Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleLinkClick(e, project.links.github, project.links.isConfigured, 'GitHub Repository')
              }
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60"
              aria-label={`View ${project.title} source on GitHub`}
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleLinkClick(e, project.links.live, project.links.isConfigured, 'Live Application')
              }
              className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 hover:bg-blue-500/20 transition-colors border border-blue-500/20"
              aria-label={`View live demo of ${project.title}`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
