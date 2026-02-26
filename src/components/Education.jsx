import React from "react";
import { MapPin, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { portfolioData } from "../portfolioData";

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="h-full"
            >
              <Card
                className="
                  h-full
                  p-5 sm:p-6 md:p-8
                  bg-slate-800/50
                  border border-slate-700
                  border-b-2 border-b-teal-400
                  rounded-xl
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-teal-500/20
                  hover:border-teal-400
                  group
                "
              >
                <div className="space-y-4">

                  {/* LOGO */}
                  <div
                    className="
                      w-16 h-16 sm:w-20 sm:h-20
                      rounded-2xl overflow-hidden
                      bg-slate-800
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* DEGREE */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-teal-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>

                  {/* META INFO */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      <span>{edu.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      <span>{edu.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award size={15} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                      Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="text-slate-300 text-sm flex gap-2"
                        >
                          <span className="text-teal-400">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SUBJECTS */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                      Key Subjects:
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="
                            px-3 py-1
                            text-xs sm:text-sm
                            rounded-full
                            bg-slate-800/60
                            text-slate-300
                            border border-slate-700
                            hover:border-teal-400
                            hover:text-teal-400
                            transition-colors
                          "
                        >
                          {subject}
                        </span>
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

export default Education;