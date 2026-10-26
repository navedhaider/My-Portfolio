import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';
import { useToast } from '../../context/ToastContext';
import {
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Copy,
  Briefcase,
  GraduationCap,
  Code2,
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { addToast } = useToast();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Attempt download
    const link = document.createElement('a');
    link.href = portfolioData.personal.resumeDownloadPath;
    link.download = portfolioData.personal.resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    addToast({
      title: 'Resume Download Started',
      message: `Downloading ${portfolioData.personal.resumeFilename}.`,
      type: 'success',
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Curriculum Vitae / Resume"
      subtitle={`Engineering qualifications, technical competencies, and project history.`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">

        {/* Quick Highlights Summary Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-purple-500/10 border border-blue-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </h4>
              <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                {portfolioData.personal.role} • {portfolioData.personal.location}
              </p>
            </div>

            <Button
              variant="primary"
              size="sm"
              icon={Download}
              iconPosition="left"
              onClick={handleDownload}
            >
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Code2 className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>C#, ASP.NET Core, React, SQL</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Briefcase className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Clean Architecture & REST APIs</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <GraduationCap className="w-4 h-4 text-purple-500 shrink-0" />
              <span>B.Sc. CS • Era University</span>
            </div>
          </div>
        </div>

        {/* Resume Preview & Details */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <FileText className="w-4 h-4 text-cyan-500" />
            <span>Document Information</span>
          </div>
          <p className="leading-relaxed">
            Latest resume of <strong className="text-slate-800 dark:text-slate-200">Naved Haider</strong> covering experience as Software Developer at Criterion Tech, educational background (B.Sc. Computer Science), and core full-stack competencies.
          </p>
        </div>

        {/* Modal Close CTA */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={Download}
            onClick={handleDownload}
          >
            Download Now
          </Button>
        </div>

      </div>
    </Modal>
  );
};
