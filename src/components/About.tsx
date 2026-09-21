import React, { useState } from 'react';
import {
  GraduationCap,
  Code2,
  FolderGit2,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Target,
  Compass,
} from 'lucide-react';
import { PersonalInfo } from '../types';
import { journeyTimeline } from '../data/portfolioData';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  FolderGit2: <FolderGit2 className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
};

export const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const [selectedStep, setSelectedStep] = useState<string>(journeyTimeline[0].id);

  const activeStep = journeyTimeline.find((s) => s.id === selectedStep) || journeyTimeline[0];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Foundations & Passion for the Web
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A snapshot into my academic background, technical curiosities, and journey as a Computer Science student.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            {personalInfo.extendedBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Focus Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Career Goal</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Become a high-caliber professional Web Developer & Software Engineer.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Continuous Growth</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Building practical full-stack projects alongside core algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <GraduationCap className="w-36 h-36 text-cyan-400" />
              </div>

              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Undergraduate Profile
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="font-semibold text-white font-mono">3rd Year (Sem 6)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Major</span>
                  <span className="font-semibold text-cyan-300">Computer Science & Eng.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Expected Graduation</span>
                  <span className="font-semibold text-white font-mono">Spring 2027</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Core Interests</span>
                  <span className="font-semibold text-white">Web Dev, DSA, Systems</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Looking For</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    Summer 2025/2026 Internships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Interactive Progression Timeline: Education → Skills → Projects → Career Goals */}
        <div className="mt-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Strategic Roadmap
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Education → Skills → Projects → Career Goals
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Tap any milestone along my student journey to inspect core coursework, technical achievements, and career roadmap.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {journeyTimeline.map((step, index) => {
              const isSelected = selectedStep === step.id;
              return (
                <button
                  key={step.id}
                  id={`timeline-tab-${step.id}`}
                  onClick={() => setSelectedStep(step.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/70 shadow-lg shadow-cyan-950/40 translate-y-[-2px]'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      {iconMap[step.iconName] || <Code2 className="w-5 h-5" />}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      Phase 0{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                      {step.title.split('. ')[1]}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Content View */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {activeStep.subtitle}
                </span>
                <h4 className="text-lg font-bold text-white pt-1">
                  {activeStep.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              <div className="md:col-span-5 bg-slate-900/70 rounded-xl p-4 border border-slate-800/80">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                  Key Milestones & Focus Areas
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeStep.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
