import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Terminal,
  Database,
  Layers,
  Sparkles,
  CheckCircle,
  FileCode,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';


import { portfolioData } from '../../data/portfolioData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const Hero = ({ onOpenResume, onOpenHireMe }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.personal.secondaryRoles;

  // Cycle through secondary roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.availability}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] sm:leading-[1.15]"
            >
              Hi, I'm{' '}
              <span className="text-gradient-primary">
                {portfolioData.personal.name}
              </span>
              <br />
              <span className="text-slate-800 dark:text-slate-200 text-2xl sm:text-4xl lg:text-5xl font-bold">
                Full Stack .NET Developer
              </span>
            </motion.h1>

            {/* Animated Dynamic Role Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-h-10 sm:h-12 flex flex-wrap items-center mt-3 text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300"
            >
              <span className="text-slate-500 dark:text-slate-400 mr-2">Specializing in:</span>
              <div className="relative overflow-hidden inline-block h-8">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block font-semibold text-cyan-600 dark:text-cyan-400"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              {portfolioData.personal.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={Download}
                onClick={onOpenResume}
                className="w-full sm:w-auto"
              >
                Resume
              </Button>
            </motion.div>

            {/* Social Links & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-5"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors border border-slate-200 dark:border-slate-800"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors border border-slate-200 dark:border-slate-800"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors border border-slate-200 dark:border-slate-800"
                  aria-label="Email Directly"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:flex items-center gap-1.5 ml-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code & Architecture Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glowing Border Card */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-purple-500/30 shadow-2xl">
              
              {/* Terminal Card Window */}
              <div className="rounded-xl bg-slate-900/95 text-slate-200 border border-slate-800/80 p-5 backdrop-blur-xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Program.cs — ASP.NET Core
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-cyan-400 border border-cyan-500/20">
                    .NET 8.0
                  </span>
                </div>

                {/* Code Snippet Display */}
                <div className="font-mono text-xs leading-relaxed space-y-1.5 text-slate-300 py-1">
                  <p className="text-slate-500">// Configure clean dependency injection</p>
                  <p>
                    <span className="text-purple-400">builder</span>.Services.
                    <span className="text-sky-300">AddScoped</span>&lt;
                    <span className="text-emerald-300">IAppointmentService</span>,{' '}
                    <span className="text-emerald-300">AppointmentService</span>&gt;();
                  </p>
                  <p>
                    <span className="text-purple-400">builder</span>.Services.
                    <span className="text-sky-300">AddAuthentication</span>(
                    <span className="text-amber-300">JwtBearer</span>);
                  </p>
                  <p className="text-slate-500 mt-2">// Map secure minimal API endpoints</p>
                  <p>
                    <span className="text-purple-400">app</span>.
                    <span className="text-sky-300">MapPost</span>(
                    <span className="text-amber-200">"/api/v1/appointments/book"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">async</span> (
                    <span className="text-emerald-300">BookRequest</span> req,{' '}
                    <span className="text-emerald-300">IAppointmentService</span> svc) =&gt;
                  </p>
                  <p className="pl-8 text-cyan-300">
                    <span className="text-purple-400">await</span> svc.
                    <span className="text-sky-200">ScheduleSlotAsync</span>(req)
                  </p>
                  <p className="pl-4">
                    ).<span className="text-sky-300">RequireAuthorization</span>(
                    <span className="text-amber-200">"PatientRole"</span>);
                  </p>
                </div>

                {/* Live Architecture Status Indicators */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-200 text-[11px]">Clean Architecture</p>
                      <p className="text-[10px] text-slate-400">SOLID & Repositories</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-200 text-[11px]">SQL Server & MySQL</p>
                      <p className="text-[10px] text-slate-400">Stored Procs & EF</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Quick Stats Cards */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {portfolioData.personal.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-3 text-center border transition-all hover:border-cyan-500/40"
                >
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{stat.value}</p>
                  <span className="inline-block mt-1 text-[10px] text-cyan-600 dark:text-cyan-400 font-mono">
                    {stat.highlight}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
