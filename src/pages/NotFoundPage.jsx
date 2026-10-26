import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-grid-pattern relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-3xl p-8 sm:p-12 border max-w-lg w-full text-center shadow-2xl relative z-10"
      >
        <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 font-mono">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-4">
          Route Not Found
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          The requested endpoint or resource does not exist. Just like an unmapped REST API route, here is a clean redirect home.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" size="md" icon={Home} className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
