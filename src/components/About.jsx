import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../portfolioData'

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: Target,
      text: about.highlights[0]
    },
    {
      icon: TrendingUp,
      text: about.highlights[1]
    },
    {
      icon: Users,
      text: about.highlights[2]
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Summary */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              {about.summary}
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg">
                      <Icon className="text-teal-400" size={24} />
                    </div>
                    <p className="text-slate-300 flex-1 pt-2">{highlight.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;