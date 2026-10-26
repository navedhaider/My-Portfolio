import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Server,
  Database,
  Code2,
  Wrench,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';

const serviceIcons = {
  Globe,
  Server,
  Database,
  Code2,
  Wrench,
};

export const Services = ({ onSelectService }) => {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Specialized Services"
          title="Full Stack Capabilities &"
          highlight="Solutions"
          description="Delivering end-to-end engineering excellence from structured .NET backend architectures to responsive, performant user interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border flex flex-col justify-between relative overflow-hidden ${
                  service.popular
                    ? 'border-blue-500/40 ring-1 ring-blue-500/20'
                    : ''
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Requested
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Request Collaboration</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
