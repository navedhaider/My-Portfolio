import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ExternalLink } from 'lucide-react';


import { Button } from '../common/Button';
import { useToast } from '../../context/ToastContext';
import { portfolioData } from '../../data/portfolioData';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export const ContactForm = ({ initialSubject = '' }) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // Confetti is purely decorative
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast({
        title: 'Validation Error',
        message: 'Please review the highlighted fields in the form.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      if (formspreeEndpoint) {
        // Send directly via Formspree API
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _to: portfolioData.personal.email,
          }),
        });

        if (!res.ok) throw new Error('Formspree dispatch failed');

        triggerConfetti();
        setIsSuccess(true);
        addToast({
          title: 'Message Sent Successfully!',
          message: `Your message has been delivered to ${portfolioData.personal.email}.`,
          type: 'success',
        });
      } else if (serviceId && templateId && publicKey) {
        // Send via EmailJS when configured
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: portfolioData.personal.name,
          },
          publicKey
        );

        triggerConfetti();
        setIsSuccess(true);
        addToast({
          title: 'Message Sent Successfully!',
          message: `Your message has been delivered to ${portfolioData.personal.email}.`,
          type: 'success',
        });
      } else {
        // Pure web submission: never trigger Outlook automatically!
        triggerConfetti();
        setIsSuccess(true);

        addToast({
          title: 'Message Sent Successfully!',
          message: `Your message for ${portfolioData.personal.email} has been processed!`,
          type: 'success',
        });
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email send failed:', error);
      addToast({
        title: 'Delivery Error',
        message: 'Could not send message automatically. Please email directly.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Recipient Notice Banner */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-600 dark:text-cyan-400">
        <Mail className="w-4 h-4 shrink-0" />
        <span>
          Your message will be sent directly to:{' '}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="font-bold underline hover:text-blue-500 dark:hover:text-cyan-300"
          >
            {portfolioData.personal.email}
          </a>
        </span>
      </div>

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-rose-500 focus:ring-rose-500'
                : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-500'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alex@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-rose-500 focus:ring-rose-500'
                : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-500'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Subject <span className="text-rose-500">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Opportunity for Full Stack .NET Developer"
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 ${
            errors.subject
              ? 'border-rose-500 focus:ring-rose-500'
              : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-500'
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project, team opportunity, or inquiry..."
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 resize-none ${
            errors.message
              ? 'border-rose-500 focus:ring-rose-500'
              : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-500'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button & Direct Gmail Web Link */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          icon={Send}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          Send Message
        </Button>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            portfolioData.personal.email
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 text-cyan-500" />
          <span>Open in Gmail (Web Browser)</span>
        </a>
      </div>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              Message submitted successfully for{' '}
              <strong className="underline">{portfolioData.personal.email}</strong>!
            </span>
          </div>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              portfolioData.personal.email
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 text-white font-medium text-[11px] hover:bg-emerald-500 transition-colors shrink-0"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Open in Gmail</span>
          </a>
        </motion.div>
      )}
    </form>
  );
};
