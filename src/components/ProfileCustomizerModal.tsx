import React, { useState } from 'react';
import {
  Sliders,
  X,
  Check,
  RotateCcw,
  Sparkles,
  Info,
  Code2,
  Copy,
} from 'lucide-react';
import { PersonalInfo, EducationInfo } from '../types';
import { personalInfo as defaultPersonalInfo, educationData as defaultEducation } from '../data/portfolioData';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  education: EducationInfo;
  setEducation: React.Dispatch<React.SetStateAction<EducationInfo>>;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  isOpen,
  onClose,
  personalInfo,
  setPersonalInfo,
  education,
  setEducation,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setPersonalInfo(defaultPersonalInfo);
    setEducation(defaultEducation);
  };

  const copyConfigSnippet = () => {
    const configSnippet = `// In src/data/portfolioData.ts:
export const personalInfo = ${JSON.stringify(personalInfo, null, 2)};
export const educationData = ${JSON.stringify(education, null, 2)};
`;
    navigator.clipboard.writeText(configSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
    <div
      id="customizer-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Live Portfolio Customizer
              </h3>
              <p className="text-xs text-slate-400">
                Change your information below to immediately see updates on the page.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="Reset to defaults"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left text-sm">
          {/* Info Banner */}
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300 flex items-start gap-3">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Code Customization File</p>
              <p className="text-slate-300 mt-0.5">
                All these properties and full project/skill definitions are centrally stored in <code className="bg-slate-950 px-1.5 py-0.5 rounded text-cyan-300 font-mono">src/data/portfolioData.ts</code> for effortless permanent editing.
              </p>
            </div>
          </div>

          {/* Personal Info Group */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={personalInfo.name}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Title / Headline
                </label>
                <input
                  type="text"
                  value={personalInfo.roleTitle}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, roleTitle: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  College Standing
                </label>
                <input
                  type="text"
                  value={personalInfo.collegeStatus}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, collegeStatus: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={personalInfo.location}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, location: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Short Hero Bio
              </label>
              <textarea
                rows={2}
                value={personalInfo.shortBio}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, shortBio: e.target.value })
                }
                className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>
          </div>

          {/* Education Group */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1">
              Education & Academics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  College / University Name
                </label>
                <input
                  type="text"
                  value={education.institution}
                  onChange={(e) =>
                    setEducation({ ...education, institution: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Degree & Major
                </label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) =>
                    setEducation({ ...education, degree: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Expected Graduation
                </label>
                <input
                  type="text"
                  value={education.graduationYear}
                  onChange={(e) =>
                    setEducation({ ...education, graduationYear: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  CGPA / Grade
                </label>
                <input
                  type="text"
                  value={education.cgpa}
                  onChange={(e) =>
                    setEducation({ ...education, cgpa: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Social Links Group */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800 pb-1">
              Contact & Social URLs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={personalInfo.socialLinks.email}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      socialLinks: { ...personalInfo.socialLinks, email: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="url"
                  value={personalInfo.socialLinks.github}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      socialLinks: { ...personalInfo.socialLinks, github: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={personalInfo.socialLinks.linkedin}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      socialLinks: { ...personalInfo.socialLinks, linkedin: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Avatar Photo URL
                </label>
                <input
                  type="url"
                  value={personalInfo.avatarUrl}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, avatarUrl: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <button
            onClick={copyConfigSnippet}
            className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            {copiedCode ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy TypeScript JSON</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-sm"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
