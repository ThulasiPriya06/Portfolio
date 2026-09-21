import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowRight,
  Code2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { PersonalInfo } from '../types';
import { heroTypingRoles, quickStats } from '../data/portfolioData';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenResume }) => {
  // Typing animation state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = heroTypingRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 400;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % heroTypingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow & developer grid texture */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions and CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs text-cyan-300 shadow-sm shadow-cyan-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                {personalInfo.availability}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono text-cyan-400 font-semibold tracking-wide">
                Hello, I'm
              </p>
              <h1
                id="hero-name-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              >
                {personalInfo.name}
              </h1>

              {/* Title & Role */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300">
                {personalInfo.roleTitle}
              </h2>

              {/* Typing Animation Showcase */}
              <div className="flex items-center gap-2 pt-1 font-mono text-base sm:text-lg text-slate-300">
                <span className="text-slate-500">&gt;</span>
                <span className="text-cyan-400 font-bold min-h-[28px] inline-block">
                  {displayedText}
                </span>
                <span className="w-2 h-5 bg-cyan-400 inline-block animate-pulse" />
              </div>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons (Primary & Secondary CTAs) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-primary-cta"
                href="#projects"
                onClick={scrollToProjects}
                className="px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-resume-cta"
                onClick={onOpenResume}
                className="px-6 py-3 text-sm sm:text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  id="hero-social-github"
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-linkedin"
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-social-email"
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all duration-200"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {personalInfo.socialLinks.leetcode && (
                  <a
                    id="hero-social-leetcode"
                    href={personalInfo.socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 flex items-center justify-center font-mono text-xs font-semibold gap-1 transition-all duration-200"
                    title="LeetCode Profile"
                  >
                    <span>LC</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-30 blur-lg" />

              {/* Main Avatar Card */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl">
                {/* Window Controls Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    portfolio.dev
                  </span>
                </div>

                {/* Profile Image & Avatar */}
                <div className="mt-4 relative overflow-hidden rounded-2xl aspect-square bg-slate-950 border border-slate-800 group">
                  <img
                    id="hero-avatar-image"
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.avatar-fallback')) {
                        const fallback = document.createElement('div');
                        fallback.className =
                          'avatar-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-cyan-400 font-bold text-5xl';
                        fallback.innerHTML = `<span>AC</span><span class="text-xs font-mono text-slate-400 mt-2">CSE Student</span>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {personalInfo.name}
                      </p>
                      <p className="text-xs text-cyan-300 font-mono">
                        {personalInfo.collegeStatus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating micro-badges around photo */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-400">Specialty</p>
                    <p className="text-xs font-bold text-cyan-300 mt-0.5">Full Stack</p>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-400">Algorithms</p>
                    <p className="text-xs font-bold text-blue-300 mt-0.5">C++ / Java</p>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                    <p className="text-[10px] uppercase font-mono text-slate-400">Focus</p>
                    <p className="text-xs font-bold text-emerald-300 mt-0.5">React & Node</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, i) => (
            <div
              key={stat.label}
              id={`quick-stat-${i}`}
              className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-sm text-left hover:border-slate-700 transition-colors"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono text-cyan-400">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
