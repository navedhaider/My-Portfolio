import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';
import { useToast } from '../../context/ToastContext';
import { Briefcase, Send, CheckCircle2, Mail, Copy } from 'lucide-react';

export const HireMeModal = ({ isOpen, onClose }) => {
  const { addToast } = useToast();
  const [inquiryType, setInquiryType] = useState('Full-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { id: 'Full-time', label: 'Full-time Role' },
    { id: 'Contract', label: 'Contract / Project' },
    { id: 'API Architecture', label: 'API Architecture' },
    { id: 'Consultation', label: 'Tech Consultation' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    addToast({
      title: 'Email Copied!',
      message: `${portfolioData.personal.email} copied to clipboard.`,
      type: 'success',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      addToast({
        title: 'Required Fields Missing',
        message: 'Please provide both your name and email address.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto fallback link with pre-populated fields
    const subject = encodeURIComponent(
      `[Opportunity / Hire Inquiry - ${inquiryType}] from ${formData.name} (${formData.company || 'Direct'})`
    );
    const body = encodeURIComponent(
      `Hello ${portfolioData.personal.name},\n\n` +
      `Inquiry Type: ${inquiryType}\n` +
      `From: ${formData.name}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message || 'I would like to discuss an opportunity with you.'}\n\n` +
      `Best regards,\n${formData.name}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      // Open Gmail Web Composer directly in browser instead of launching desktop Outlook
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        portfolioData.personal.email
      )}&su=${subject}&body=${body}`;

      window.open(gmailUrl, '_blank');

      addToast({
        title: 'Opening Gmail Web',
        message: `Inquiry opened in Gmail for ${portfolioData.personal.email}.`,
        type: 'success',
      });
      onClose();
    }, 400);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Work With Me"
      subtitle={`Let's discuss how I can bring value to your engineering team or project.`}
      maxWidth="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Inquiry Type Selector */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Opportunity Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setInquiryType(type.id)}
                className={`text-xs py-2 px-3 rounded-lg border font-medium transition-all ${
                  inquiryType === type.id
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. sarah@company.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            Company / Organization (Optional)
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Apex Health Technologies"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            Project or Role Scope
          </label>
          <textarea
            rows="3"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me a bit about the role, tech stack, or problem you want to solve..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy {portfolioData.personal.email}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              loading={isSubmitting}
              icon={Send}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Send Inquiry
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
