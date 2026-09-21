import React from 'react';
import {
  FileDown,
  Printer,
  X,
  ExternalLink,
  CheckCircle2,
  Mail,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code2,
} from 'lucide-react';
import { PersonalInfo, EducationInfo } from '../types';
import { skillsList, projectsList, experiences, achievements } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: PersonalInfo;
  education: EducationInfo;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  personalInfo,
  education,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPlaceholder = () => {
    // Generates a neat formatted text resume download or triggers download
    const resumeText = `
${personalInfo.name.toUpperCase()}
${personalInfo.roleTitle}
Email: ${personalInfo.socialLinks.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.socialLinks.github} | LinkedIn: ${personalInfo.socialLinks.linkedin}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
${education.degree} in ${education.specialization}
${education.institution} (${education.startYear} - ${education.graduationYear})
Status: ${education.currentStatus} | CGPA: ${education.cgpa} / ${education.maxCgpa}
Relevant Coursework: ${education.coursework.join(', ')}

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
* Languages: C++, Java, Python, C, JavaScript, TypeScript
* Web Technologies: React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, REST APIs
* Databases & Tools: MySQL, MongoDB, Git, GitHub, VS Code, Postman, Linux

--------------------------------------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------------------------------------
${projectsList
  .map(
    (p) => `* ${p.title} (${p.technologies.join(', ')})
  - ${p.description}
  - Code: ${p.githubUrl} | Demo: ${p.liveDemoUrl}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
EXPERIENCE & LEADERSHIP
--------------------------------------------------------------------------------
${experiences
  .map(
    (e) => `* ${e.role} — ${e.organization} (${e.period})
  ${e.responsibilities.map((r) => `- ${r}`).join('\n  ')}`
  )
  .join('\n\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_CSE_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileDown className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {personalInfo.name} — Student Resume
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Updated for 2025/2026 Internships
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Resume or Save as PDF"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadPlaceholder}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Text/PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable ATS-Friendly Resume View */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500/30">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-5 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                  {personalInfo.roleTitle}
                </p>
              </div>

              <div className="mt-3 sm:mt-0 text-xs text-slate-400 space-y-1 font-mono">
                <p className="flex items-center gap-1.5 sm:justify-end">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  {personalInfo.socialLinks.email}
                </p>
                <p className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {personalInfo.location}
                </p>
                <p className="flex items-center gap-2 sm:justify-end">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 underline"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>

            {/* Resume Education */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                EDUCATION
              </h2>
              <div className="flex justify-between items-start pt-1">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {education.institution}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {education.degree} in {education.specialization} —{' '}
                    <span className="font-mono text-cyan-300 font-semibold">
                      CGPA: {education.cgpa}/{education.maxCgpa}
                    </span>
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {education.startYear} – {education.graduationYear}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                <strong className="text-slate-300">Relevant Coursework:</strong>{' '}
                {education.coursework.join(', ')}.
              </p>
            </section>

            {/* Resume Technical Skills */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="text-xs space-y-1 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white font-mono">Languages:</strong> C++, Java, Python, C, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3.
                </p>
                <p>
                  <strong className="text-white font-mono">Web Frameworks:</strong> React.js, Node.js, Express.js, Tailwind CSS, REST APIs.
                </p>
                <p>
                  <strong className="text-white font-mono">Databases & Tools:</strong> MySQL, MongoDB, Git, GitHub, VS Code, Postman, Linux/Bash.
                </p>
                <p>
                  <strong className="text-white font-mono">CS Fundamentals:</strong> Data Structures & Algorithms, OOP, Database Systems, Computer Networks, OS.
                </p>
              </div>
            </section>

            {/* Resume Projects */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                KEY TECHNICAL PROJECTS
              </h2>
              {projectsList.slice(0, 3).map((p) => (
                <div key={p.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white text-sm">
                      {p.title.split(' - ')[0]}{' '}
                      <span className="font-normal font-mono text-cyan-300 text-xs">
                        | {p.technologies.slice(0, 4).join(', ')}
                      </span>
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      GitHub Repo & Live Demo
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                    {p.keyFeatures.slice(0, 2).map((kf, i) => (
                      <li key={i}>{kf}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Resume Experience */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                EXPERIENCE & LEADERSHIP
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white">
                      {exp.role} — <span className="text-cyan-300">{exp.organization}</span>
                    </h3>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Resume Achievements */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                HONORS & CERTIFICATIONS
              </h2>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>
                  • <strong>CodeStorm National Hackathon:</strong> 1st Runner-Up out of 80+ engineering teams.
                </li>
                <li>
                  • <strong>Meta Front-End Developer Specialization:</strong> Verified 9-course certification (Coursera).
                </li>
                <li>
                  • <strong>Problem Solving:</strong> 500+ LeetCode problems solved & 5-Star HackerRank badge in C++ & Java.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
