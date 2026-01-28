import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from "framer-motion";
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 text-lg">
            Building products that make a difference
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Card
                className="
                  p-6
                  max-w-5xl
                  mx-auto
                  bg-slate-900/50
                  border border-slate-800
                  border-b-2 border-b-teal-400
                  rounded-xl
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-teal-500/20
                  hover:border-teal-400
                  group
                "
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="
                    w-20 h-20 rounded-xl overflow-hidden
                    border border-slate-700 bg-slate-800
                    transition-transform duration-300
                    group-hover:scale-110
                  ">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-teal-400 font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <Badge
                        variant="outline"
                        className="
                          border-orange-500/60
                          text-orange-300
                          bg-orange-500/10
                          text-sm md:text-base
                          px-4 py-1.5
                          rounded-full
                          font-medium
                          w-fit
                        "
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-teal-400">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements?.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-slate-300 flex items-start gap-2"
                            >
                              <span className="text-orange-400">★</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="
                            bg-slate-800
                            text-slate-300
                            hover:bg-teal-500/20
                            hover:text-teal-400
                            transition-colors
                          "
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
