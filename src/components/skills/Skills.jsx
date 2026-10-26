import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  Layers,
  Wrench,
  Sparkles,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { portfolioData } from '../../data/portfolioData';

const categoryIcons = {
  all: Sparkles,
  backend: Server,
  frontend: Layout,
  database: Database,
  architecture: Layers,
  tools: Wrench,
};

export const Skills = () => {
  const { categories, items } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Stack & Engineering"
          highlight="Toolbox"
          description="A specialized full-stack skillset honed around high-performance .NET backends, relational databases, and dynamic React user interfaces."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border-blue-500'
                    : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-cyan-500'}`} />
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    isSelected
                      ? 'bg-blue-700 text-blue-100'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {cat.id === 'all'
                    ? items.length
                    : items.filter((s) => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="glass-card glass-card-hover rounded-xl p-5 border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                      {skill.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 dark:text-slate-500 capitalize">
                    {skill.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {skill.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Architecture Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 text-center max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span className="font-bold text-blue-600 dark:text-cyan-400">Clean Code Standard:</span>{' '}
            All backends are built with asynchronous pipelines, explicit DTO contracts, structured error responses, and dependency injection.
          </p>
        </div>

      </div>
    </section>
  );
};
