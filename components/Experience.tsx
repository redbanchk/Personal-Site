import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">工作经历</h2>
        <h3 className="text-xl text-slate-500 mb-12">Work Experience</h3>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-primary group-hover:bg-primary transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-xl">
                <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-slate-800 shadow-sm hover:shadow-md hover:border-slate-600 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                     <h3 className="font-bold text-xl text-white">{exp.companyZh}</h3>
                     <p className="text-xs text-slate-500">{exp.companyEn}</p>
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium mt-1 sm:mt-0 shrink-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-slate-200 font-bold text-lg">{exp.roleZh}</div>
                  <div className="text-slate-500 text-sm">{exp.roleEn}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm">
                      {exp.descriptionZh.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-slate-700/50 pt-3">
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-500 text-xs italic">
                      {exp.descriptionEn.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;