import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { ExperienceAchievements } from './components/ExperienceAchievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

import { personalInfo as initialPersonalInfo, educationData as initialEducation } from './data/portfolioData';
import { PersonalInfo, EducationInfo } from './types';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);
  const [education, setEducation] = useState<EducationInfo>(initialEducation);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Sync dark class to html document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Sticky Navigation */}
      <Navbar
        personalInfo={personalInfo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero
          personalInfo={personalInfo}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <About personalInfo={personalInfo} />

        <Skills />

        <Projects />

        <Education education={education} />

        <ExperienceAchievements />

        <ResumeSection
          personalInfo={personalInfo}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        <Contact personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />

      {/* Dedicated Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        personalInfo={personalInfo}
        education={education}
      />

      {/* Quick Profile Customizer Modal */}
      <ProfileCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
      />
    </div>
  );
}
