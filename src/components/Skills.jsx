import React from 'react';
import { motion } from "framer-motion";
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Lightbulb, Code, Wrench, Heart } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Management Skills',
      icon: Lightbulb,
      skills: skills.product,
      color: 'from-teal-500 to-emerald-500',
      skillColor: 'text-teal-400',
      glow: 'hover:shadow-teal-500/20',
      hoverBorder: 'hover:border-teal-400',
      titleHover: 'group-hover:text-teal-400',
    },
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      color: 'from-orange-500 to-pink-500',
      skillColor: 'text-orange-400',
      glow: 'hover:shadow-orange-500/20',
      hoverBorder: 'hover:border-orange-400',
      titleHover: 'group-hover:text-orange-400',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-blue-500 to-cyan-500',
      skillColor: 'text-blue-400',
      glow: 'hover:shadow-blue-500/20',
      hoverBorder: 'hover:border-blue-400',
      titleHover: 'group-hover:text-blue-400',
    },
    {
      title: 'Soft Skills',
      icon: Heart,
      skills: skills.soft,
      color: 'from-purple-500 to-pink-500',
      skillColor: 'text-purple-400',
      glow: 'hover:shadow-purple-500/20',
      hoverBorder: 'hover:border-purple-400',
      titleHover: 'group-hover:text-purple-400',
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
          <p className="text-slate-400 mt-4 text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Card
                  className={`
                    h-full
                    group
                    p-8 bg-slate-900/50 
                    border border-slate-800
                    border-b-2 border-b-teal-400
                    rounded-xl
                    transition-all duration-300
                    hover:shadow-xl ${category.glow}
                    ${category.hoverBorder}
                  `}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`
                        p-3 bg-gradient-to-br ${category.color}
                        bg-opacity-20 rounded-lg
                        transition-transform duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-white transition-colors ${category.titleHover}`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className={`
                          bg-slate-800 
                          ${category.skillColor}
                          font-semibold
                          text-sm
                          px-5 py-2.5
                          hover:bg-slate-700 
                          transition-all
                        `}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
