import React from 'react';

export interface Skill {
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  icon: string;
}

export interface Experience {
  companyZh: string;
  companyEn: string;
  roleZh: string;
  roleEn: string;
  period: string;
  descriptionZh: string[];
  descriptionEn: string[];
}

export interface Project {
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  descriptionZh: string;
  descriptionEn: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string; 
  demoUrl?: string;
  isPersonal: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}