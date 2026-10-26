import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';

export const ResumeSection = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-slate-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Curriculum Vitae"
          title="Formal Qualifications &"
          highlight="Resume"
          description="A consolidated summary of software engineering capabilities, architectural patterns, and practical full-stack experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Summary */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold border border-blue-500/20">
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document Ready</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Looking for a Full Stack .NET Engineer?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Download my comprehensive resume for an in-depth breakdown of technical proficiencies in ASP.NET Core, SQL Server, Clean Architecture, and React.js development.
              </p>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>ASP.NET Core Web APIs & REST</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>SQL Server & Stored Procedures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Entity Framework Core & Dapper</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>React.js Frontend Integration</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  {portfolioData.personal.resumeFilename}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Standard PDF Format
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                icon={Download}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = portfolioData.personal.resumeDownloadPath;
                  link.download = portfolioData.personal.resumeFilename;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full"
              >
                Download Resume
              </Button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
