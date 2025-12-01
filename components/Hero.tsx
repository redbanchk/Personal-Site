import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark pt-20 pb-10">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm md:text-base animate-fade-in-up mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-2">
                {PERSONAL_INFO.nameZh}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light">{PERSONAL_INFO.nameEn}</p>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-200">
                {PERSONAL_INFO.titleZh}
              </h3>
              <p className="text-lg md:text-xl text-slate-500 mt-1 font-light">
                {PERSONAL_INFO.titleEn}
              </p>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-primary backdrop-blur-sm">
               <p className="text-lg text-slate-300 leading-relaxed font-medium">
                 {PERSONAL_INFO.taglineZh}
               </p>
               <p className="text-sm text-slate-500 mt-1">
                 {PERSONAL_INFO.taglineEn}
               </p>
            </div>

            <p className="text-sm text-slate-400 font-mono">
              {PERSONAL_INFO.summaryZh}
              <br/>
              <span className="text-slate-600 text-xs">{PERSONAL_INFO.summaryEn}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
              <a 
                href="#projects"
                className="px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-all flex items-center gap-2 group"
              >
                <span>查看项目 Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                className="px-8 py-3 border border-slate-600 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
                onClick={() => alert("简历下载功能 Resume Download")}
              >
                <Download className="w-4 h-4" />
                <span>下载简历 Resume</span>
              </button>
            </div>
          </div>

          {/* Right Content - Photos */}
          {/* We need a composition of two photos: one 2:3 and one 1:1 */}
          <div className="relative flex-1 w-full max-w-md lg:max-w-lg h-[400px] md:h-[500px] order-1 lg:order-2 flex items-center justify-center">
             <div className="relative w-full h-full">
                {/* 2:3 Photo - Back/Right */}
                <div className="absolute right-0 top-0 w-[55%] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10 bg-slate-800">
                  <img 
                    src={PERSONAL_INFO.portrait2_3} 
                    alt="Portrait 2:3" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                
                {/* 1:1 Photo - Front/Left */}
                <div className="absolute left-0 bottom-10 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-20 bg-slate-800">
                   <img 
                    src={PERSONAL_INFO.portrait1_1} 
                    alt="Portrait 1:1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;