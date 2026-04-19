import React from 'react';
import { SKILLS } from '../constants';
import { Brain, Users, Briefcase, Code, Globe, Activity } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
};

const Skills: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">关于我 About Me</h2>
        <h3 className="text-2xl font-bold text-white mb-8">个人优势 Personal Advantages</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-slate-700 hover:border-primary/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                {iconMap[skill.icon] || <Activity className="w-8 h-8" />}
              </div>
              <div className="mb-3">
                <h4 className="text-xl font-bold text-white">{skill.titleZh}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{skill.titleEn}</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-2 flex-1">{skill.descriptionZh}</p>
              <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-700/50 pt-2 mt-auto">{skill.descriptionEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
