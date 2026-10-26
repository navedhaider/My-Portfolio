import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { SectionHeading } from '../common/SectionHeading';
import { ContactForm } from './ContactForm';
import { portfolioData } from '../../data/portfolioData';
import { useToast } from '../../context/ToastContext';

export const Contact = ({ initialSubject = '' }) => {
  const { addToast } = useToast();
  const { contact, personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    addToast({
      title: 'Email Copied!',
      message: `${personal.email} copied to clipboard.`,
      type: 'success',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Get in Touch"
          title="Let's Discuss Opportunities &"
          highlight="Projects"
          description={contact.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email Copy Card */}
            <div className="glass-card rounded-2xl p-6 border relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Direct Email
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Always open for discussions
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-slate-800 dark:text-slate-200 truncate mr-2">
                  {personal.email}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      personal.email
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/40 transition-colors cursor-pointer"
                    title="Open in Gmail (Web Browser)"
                    aria-label="Open in Gmail Web"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-500" />
                <span>{contact.responseTime}</span>
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="glass-card rounded-2xl p-6 border space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Location & Availability
              </h4>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{personal.availability}</span>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="glass-card rounded-2xl p-6 border space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Professional Networks
              </h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-cyan-500" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">View Repos</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-500 group-hover:text-cyan-500" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Connect</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border shadow-xl">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <MessageSquare className="w-5 h-5 text-cyan-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              <ContactForm initialSubject={initialSubject} />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
