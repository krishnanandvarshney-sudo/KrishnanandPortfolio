import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

import { Lightbulb, Code, Wrench, Heart } from 'lucide-react';
import { portfolioData } from '../portfolioData'
export const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Product Skills',
      icon: Lightbulb,
      skills: skills.product,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      color: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      skills: skills.soft,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 text-lg">Tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-slate-800 text-slate-300 hover:bg-teal-500/20 hover:text-teal-400 hover:scale-105 transition-all px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;