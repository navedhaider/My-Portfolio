import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Database,
  Layout,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Layers,
  Cpu,
  Database,
  Layout,
  ShieldCheck,
  CheckCircle2,
};

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="About Me"
          title="Engineering Reliability &"
          highlight="Performance"
          description={about.intro}
        />

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            {about.story.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-50/50 dark:bg-slate-900/30 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Education & Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl p-6 border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Education & Background
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Academic foundation in computer science
                  </p>
                </div>
              </div>

              {about.education.map((edu, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-blue-500/40 pl-4 py-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-500" />
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {edu.institution}
                  </p>
                  {edu.department && (
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {edu.department}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Strengths Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Core Technical Pillars & Strengths
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Disciplined architectural practices applied to everyday software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.strengths.map((item, idx) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
