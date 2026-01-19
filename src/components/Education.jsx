import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <Card
              key={edu.id}
              className="p-8 bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-teal-400" size={32} />
                </div>

                {/* Degree */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-teal-400 font-medium">{edu.institution}</p>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-2">
                        <span className="text-teal-400">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;