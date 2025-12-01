import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.nameZh} <span className="text-base font-normal text-slate-500">| {PERSONAL_INFO.nameEn}</span></h3>
            <p className="text-slate-400 text-sm max-w-xs mb-1">
              期待 AI 产品经理相关机会。
            </p>
            <p className="text-slate-600 text-xs max-w-xs">
              Open to opportunities in AI Product Management.
            </p>
          </div>

          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-slate-400 hover:text-white hover:scale-110 transition-all"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.nameEn}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;