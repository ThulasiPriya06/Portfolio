import React, { useState } from 'react';
import {
  Briefcase,
  Trophy,
  Award,
  Code2,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookmarkCheck,
} from 'lucide-react';
import { ExperienceItem, AchievementItem } from '../types';
import { experiences, achievements } from '../data/portfolioData';

export const ExperienceAchievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'achievements'>('experience');

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>EXPERIENCE & ACCOMPLISHMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Internships, Hackathons & Milestones
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Practical contributions, competitive hackathon awards, verified certifications, and coding problem-solving milestones.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <button
              id="tab-experience"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience & Roles</span>
            </button>
            <button
              id="tab-achievements"
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'achievements'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Achievements & Certs</span>
            </button>
          </div>
        </div>

        {/* Professional Seeking Opportunities Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/40 to-slate-900/60 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Internship & Entry-Level Seeking Note
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Currently seeking opportunities to gain industry experience, learn from senior engineers, and contribute to real-world software products.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 whitespace-nowrap transition-colors flex items-center gap-1.5"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tab Content: Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className="rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 hover:border-cyan-500/30 transition-all text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="text-right sm:text-right text-xs text-slate-400 font-mono">
                    <p className="flex items-center gap-1 text-slate-300 font-medium sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </p>
                    <p className="flex items-center gap-1 mt-0.5 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-300 leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Core Tools:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Achievements & Certifications */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                id={`ach-card-${ach.id}`}
                className="rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
                      {ach.type}
                    </span>
                    {ach.badge && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                        {ach.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {ach.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-1 font-mono">
                    <span className="text-slate-300">{ach.organization}</span>
                    <span>{ach.date}</span>
                  </div>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center text-xs text-cyan-400 font-medium">
                  <BookmarkCheck className="w-4 h-4 mr-1.5" />
                  <span>Verified Student Accomplishment</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
