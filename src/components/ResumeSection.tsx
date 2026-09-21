import React from 'react';
import { FileDown, Eye, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { PersonalInfo } from '../types';

interface ResumeSectionProps {
  personalInfo: PersonalInfo;
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  personalInfo,
  onOpenResume,
}) => {
  return (
    <section id="resume-section" className="py-16 md:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden text-center sm:text-left">
          {/* Subtle background effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
            <div className="sm:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RECRUITER QUICK ACCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Looking for a Motivated CSE Intern or Junior Developer?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                My resume provides a complete breakdown of coursework, core technologies, software engineering projects, and leadership roles.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  ATS Friendly
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Updated 2025/2026
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  One-Page Format
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="sm:col-span-4 flex flex-col gap-3">
              <button
                id="resume-cta-primary-btn"
                onClick={onOpenResume}
                className="w-full py-3.5 px-6 rounded-2xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                id="resume-cta-preview-btn"
                onClick={onOpenResume}
                className="w-full py-3 px-6 rounded-2xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Full Screen Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
