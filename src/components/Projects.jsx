import React from 'react';
import { ExternalLink, Github, Target, FileText, Presentation } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../portfolioData';

const glassButton =
  "inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg " +
  "bg-slate-800/40 backdrop-blur-md " +
  "text-white font-medium text-sm " +
  "!border-l-2 !border-b-2 !border-amber-400 !border-t-0 !border-r-0 " +
  "shadow-md shadow-black/30 " +
  "hover:text-amber-400 " +
  "hover:shadow-amber-500/40 hover:shadow-lg " +
  "transform-gpu hover:scale-105 " +
  "transition-all duration-300";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Building solutions that create impact
          </p>
        </div>

        {/* Narrower grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="
                  bg-slate-800/50 border-slate-700
                  border-b-2 border-b-teal-400
                  hover:shadow-xl hover:shadow-teal-500/20
                  transition-all duration-300 hover:scale-[1.03]
                  overflow-hidden group
                "
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-teal-500/90 text-white border-none">
                      {project.role}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution */}
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-orange-400 font-semibold">Problem: </span>
                      <span className="text-slate-400">{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-teal-400 font-semibold">Solution: </span>
                      <span className="text-slate-400">{project.solution}</span>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex items-start gap-2 p-3 bg-slate-900/50 rounded-lg">
                    <Target className="text-emerald-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-slate-300">
                      {project.impact}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-slate-900 text-slate-400 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center gap-4 pt-2">
                    {project.report && project.ppt ? (
                      <>
                        <Button
                          size="sm"
                          className={glassButton}
                          onClick={() => window.open(project.report, "_blank")}
                        >
                          <FileText size={16} />
                          Report
                        </Button>

                        <Button
                          size="sm"
                          className={glassButton}
                          onClick={() => window.open(project.ppt, "_blank")}
                        >
                          <Presentation size={16} />
                          PPT
                        </Button>
                      </>
                    ) : (
                      <>
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                        )}

                        {project.live && (
                          <Button
                            size="sm"
                            className={glassButton}
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink size={16} />
                            Live
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
