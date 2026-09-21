import React, { useState } from 'react';
import {
  Code,
  Layers,
  Terminal,
  Database,
  Search,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';
import { skillsList } from '../data/portfolioData';

const categories: { label: string; value: 'All' | SkillCategory; icon: React.ReactNode }[] = [
  { label: 'All Skills', value: 'All', icon: <Layers className="w-4 h-4" /> },
  { label: 'Frontend', value: 'Frontend', icon: <Code className="w-4 h-4" /> },
  { label: 'Backend', value: 'Backend', icon: <Terminal className="w-4 h-4" /> },
  { label: 'Programming', value: 'Programming', icon: <Cpu className="w-4 h-4" /> },
  { label: 'Database & Tools', value: 'Database & Tools', icon: <Database className="w-4 h-4" /> },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsList.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="px-2 py-0.5 text-[11px] font-medium font-mono rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            Proficient
          </span>
        );
      case 'Intermediate':
        return (
          <span className="px-2 py-0.5 text-[11px] font-medium font-mono rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
            Intermediate
          </span>
        );
      case 'Familiar':
        return (
          <span className="px-2 py-0.5 text-[11px] font-medium font-mono rounded bg-slate-800 text-slate-400 border border-slate-700">
            Familiar
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              An honest, transparent view of the technologies, languages, and tools I use to design and build software.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="skill-search-input"
              type="text"
              placeholder="Search e.g. React, C++, SQL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                id={`skills-tab-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/70 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.value === 'All'
                    ? skillsList.length
                    : skillsList.filter((s) => s.category === cat.value).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="group p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">{skill.category}</p>
                  </div>
                </div>

                {getLevelBadge(skill.level)}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Hands-on Experience:</span>
                <span className="font-mono text-slate-300 font-medium">
                  {skill.yearsOrConfidence}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-xs text-cyan-400 underline font-mono"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Honest Self-Assessment Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p>
            <strong className="text-slate-200">Honesty First:</strong> I believe in presenting my capabilities transparently. Skills marked as <em>Proficient</em> are supported by deployed projects and frequent coding practice; <em>Intermediate</em> represents solid conceptual and implementation knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};
