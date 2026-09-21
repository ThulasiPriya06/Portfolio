export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
  leetcode?: string;
}

export interface PersonalInfo {
  name: string;
  roleTitle: string;
  collegeStatus: string;
  tagline: string;
  shortBio: string;
  extendedBio: string[];
  location: string;
  avatarUrl: string;
  availability: string;
  socialLinks: SocialLinks;
  resumeUrl: string;
}

export interface TimelineStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  details: string[];
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Programming' | 'Database & Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: 'Proficient' | 'Intermediate' | 'Familiar';
  yearsOrConfidence: string;
  icon?: string;
  featured?: boolean;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Frontend' | 'Algorithms & Systems';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Algorithms & Systems';
  tagline: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  image: string;
  featured?: boolean;
  metrics?: string;
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  startYear: string;
  graduationYear: string;
  currentStatus: string;
  cgpa: string;
  maxCgpa: string;
  coursework: string[];
  academicHonors: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  badge?: string;
  type: 'hackathon' | 'certification' | 'coding' | 'leadership';
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Open Source' | 'Campus Leadership';
  responsibilities: string[];
  technologies: string[];
}
