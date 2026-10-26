import React, { useState } from 'react';
import { Navbar } from '../components/common/Navbar';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Skills } from '../components/skills/Skills';
import { Projects } from '../components/projects/Projects';
import { Experience } from '../components/experience/Experience';
import { Services } from '../components/services/Services';
import { ResumeSection } from '../components/resume/ResumeSection';
import { ResumeModal } from '../components/resume/ResumeModal';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/common/Footer';
import { HireMeModal } from '../components/contact/HireMeModal';

export const HomePage = () => {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  const handleSelectService = (serviceTitle) => {
    setContactSubject(`Inquiry regarding ${serviceTitle}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForContact = (projectTitle) => {
    setContactSubject(`Question about ${projectTitle} architecture`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#070D19] dark:text-slate-100 transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenHireMe={() => setIsHireMeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenHireMe={() => setIsHireMeOpen(true)}
        />
        <About />
        <Skills />
        <Projects onSelectProjectForContact={handleSelectProjectForContact} />
        <Experience />
        <Services onSelectService={handleSelectService} />
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Hire Me Inquiry Modal */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};
