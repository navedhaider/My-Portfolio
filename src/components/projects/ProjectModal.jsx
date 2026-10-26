import React from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ProjectVisual } from './ProjectVisual';
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { useToast } from '../../context/ToastContext';

export const ProjectModal = ({ project, isOpen, onClose, onSelectForInquiry }) => {
  const { addToast } = useToast();

  if (!project) return null;

  const handleLinkClick = (e, url, isConfigured, name) => {
    if (!url || !isConfigured) {
      e.preventDefault();
      addToast({
        title: 'Repository Configuration',
        message: `${name} is currently a project showcase. You can link your actual repository in src/data/portfolioData.js`,
        type: 'info',
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.badge}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        
        {/* Project Visual Display */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <ProjectVisual type={project.previewType} />
        </div>

        {/* Overview & Problem Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              System Overview
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
              Core Problem Solved
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-cyan-500" />
            <span>Architecture & Backend Engineering Highlights</span>
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.architectureHighlights.map((arch, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
            Key Implemented Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feat, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Badges */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Technologies & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                handleLinkClick(e, project.links.github, project.links.isConfigured, 'GitHub Repository')
              }
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-slate-800 dark:text-slate-100 hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto border border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleLinkClick(e, project.links.live, project.links.isConfigured, 'Live Application')
                }
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors w-full sm:w-auto shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onClose();
              if (onSelectForInquiry) onSelectForInquiry(project.title);
            }}
          >
            Inquire About This Architecture →
          </Button>
        </div>

      </div>
    </Modal>
  );
};
