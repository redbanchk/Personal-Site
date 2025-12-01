import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code, X, ZoomIn } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">精选项目</h2>
           <h3 className="text-xl text-slate-500 mb-4">Featured Projects</h3>
           <p className="text-slate-400 max-w-2xl mx-auto text-sm">
             包含企业级实战项目与个人开源贡献 (Includes Enterprise Initiatives & Open Source)
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container with Preview Trigger */}
              <div 
                className="relative h-64 overflow-hidden bg-slate-800 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                 {/* Image */}
                 <img 
                   src={project.imageUrl} 
                   alt={project.titleZh} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                 />
                 
                 {/* Overlay - visible on hover */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      <span className="text-sm font-medium">预览 Preview</span>
                    </div>
                 </div>
                 
                 {/* Badge */}
                 <div className="absolute top-4 left-4">
                   <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg ${project.isPersonal ? 'bg-primary text-white' : 'bg-purple-600 text-white'}`}>
                     {project.categoryZh}
                   </span>
                 </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                   <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                     {project.titleZh}
                   </h3>
                   <p className="text-sm text-slate-500 font-medium">{project.titleEn}</p>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                   <p className="text-slate-300 text-sm leading-relaxed">
                     {project.descriptionZh}
                   </p>
                   <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-700/50 pt-2">
                     {project.descriptionEn}
                   </p>
                </div>
                
                {/* Tech Stack & Links */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 flex items-center gap-1"
                      >
                        <Code className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer" 
                          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-primary transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="bg-black flex items-center justify-center p-2 h-[400px] lg:h-[600px]">
                 <img 
                   src={selectedProject.imageUrl} 
                   alt={selectedProject.titleZh} 
                   className="max-w-full max-h-full object-contain"
                 />
               </div>
               <div className="p-8 overflow-y-auto max-h-[400px] lg:max-h-[600px]">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.titleZh}</h3>
                  <p className="text-lg text-slate-500 mb-6">{selectedProject.titleEn}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">项目介绍 Description</h4>
                      <p className="text-slate-300 text-sm leading-relaxed mb-2">{selectedProject.descriptionZh}</p>
                      <p className="text-slate-500 text-sm leading-relaxed italic">{selectedProject.descriptionEn}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">技术栈 Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-800 text-slate-200 text-sm rounded-full border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.githubUrl && (
                      <div className="flex gap-4 pt-4">
                          <a 
                            href={selectedProject.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 py-3 bg-slate-800 text-white rounded-lg text-center font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                          >
                            <Github className="w-5 h-5" />
                            GitHub
                          </a>
                      </div>
                    )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;