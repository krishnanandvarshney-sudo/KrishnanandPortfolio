import React from 'react';
import { Code, ExternalLink, Github, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../portfolioData';

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
          <p className="text-slate-400 mt-4 text-lg">Building solutions that create impact</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                
                {/* Role Badge */}
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
                  <p className="text-sm text-slate-300">{project.impact}</p>
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
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.live && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;