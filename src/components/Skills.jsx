import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Lightbulb, Code, Wrench, Heart } from "lucide-react";
import { portfolioData } from "../portfolioData";
import { Cpu } from "lucide-react";
import { Users } from "lucide-react";

export const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Management Skills",
      icon: Lightbulb,
      skills: skills.product,
      color: "from-teal-500 to-emerald-500",
      skillColor: "text-teal-400",
      glow: "hover:shadow-teal-500/20",
      hoverBorder: "hover:border-teal-400",
      titleHover: "group-hover:text-teal-400",
    },
    {
      title: "Leadership & Communication",
      icon: Users,
      skills: skills.soft,
      color: "from-purple-500 to-pink-500",
      skillColor: "text-purple-400",
      glow: "hover:shadow-purple-500/20",
      hoverBorder: "hover:border-purple-400",
      titleHover: "group-hover:text-purple-400",
    },
   
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: skills.tools,
      color: "from-blue-500 to-cyan-500",
      skillColor: "text-blue-400",
      glow: "hover:shadow-blue-500/20",
      hoverBorder: "hover:border-blue-400",
      titleHover: "group-hover:text-blue-400",
    },
    
     {
      title: "Hardware Skills",
      icon: Cpu,
      skills: skills.technical,
      color: "from-orange-500 to-pink-500",
      skillColor: "text-orange-400",
      glow: "hover:shadow-orange-500/20",
      hoverBorder: "hover:border-orange-400",
      titleHover: "group-hover:text-orange-400",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Tools and technologies I work with
          </p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="h-full"
              >
                <Card
                  className={`
                    h-full
                    group
                    p-5 sm:p-6
                    bg-slate-900/50
                    border border-slate-800
                    border-b-2 border-b-teal-400
                    rounded-xl
                    transition-all duration-300
                    hover:shadow-xl ${category.glow}
                    ${category.hoverBorder}
                  `}
                >
                  {/* HEADER */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`
                        p-2.5 sm:p-3
                        bg-gradient-to-br ${category.color}
                        rounded-lg
                        transition-transform duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon className="text-white" size={18} />
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold text-white transition-colors ${category.titleHover}`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* SKILLS BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className={`
                          bg-slate-800
                          ${category.skillColor}
                          text-[11px] sm:text-xs
                          font-semibold
                          px-2.5 sm:px-3 py-1
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