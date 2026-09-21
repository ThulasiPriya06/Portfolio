import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { EducationInfo } from '../types';

interface EducationProps {
  education: EducationInfo;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Coursework
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            My formal Computer Science Engineering foundation, core university coursework, and academic milestones.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree Details Left Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500 text-slate-950">
                  {education.currentStatus}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {education.startYear} – {education.graduationYear}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {education.degree} in {education.specialization}
                </h3>
                <p className="text-base sm:text-lg text-cyan-300 font-medium mt-1">
                  {education.institution}
                </p>
                <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {education.location}
                </p>
              </div>

              {/* CGPA Card */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Cumulative Grade Point (CGPA)</p>
                  <p className="text-lg font-extrabold text-white font-mono">
                    <span className="text-cyan-400">{education.cgpa}</span> / {education.maxCgpa}
                    <span className="ml-2 text-xs font-sans text-emerald-400 font-semibold">(Top 5% Cohort)</span>
                  </p>
                </div>
              </div>

              {/* Academic Honors */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Academic Honors & Leadership
                </p>
                <div className="space-y-2">
                  {education.academicHonors.map((honor, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Relevant Coursework Right Column */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 text-left">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Relevant Coursework
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs text-slate-300 font-medium hover:border-cyan-500/30 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] text-slate-400 leading-relaxed font-mono">
                * Course curriculum includes extensive lab practicals, algorithmic problem analysis, and team-based software engineering sprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
