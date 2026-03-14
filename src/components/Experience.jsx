import React, { useRef } from "react";
import { MapPin, UserRound } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../portfolioData";

const Experience = () => {
  const { experience } = portfolioData;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const personY = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            Building products that make a difference
          </p>
        </div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative">

          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-slate-700/40 -translate-x-1/2" />

          <motion.div
            style={{ height: lineHeight }}
            className="hidden md:block absolute left-1/2 top-0 w-[3px]
              bg-gradient-to-b from-teal-400 to-emerald-500
              -translate-x-1/2 shadow-[0_0_25px_rgba(20,184,166,0.6)]"
          />

          {/* Moving icon */}
          <motion.div
            style={{ top: personY }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-30"
          >
            <div className="p-2 rounded-full bg-slate-900 border border-teal-400
              shadow-[0_0_25px_rgba(20,184,166,0.8)]">
              <UserRound size={18} className="text-teal-300" />
            </div>
          </motion.div>

          <div className="space-y-12 md:space-y-20">

            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >

                  {/* DATE + DOT */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 z-20">

                    <div
                      className={`absolute top-[-6px] ${
                        isLeft
                          ? "left-10 text-left"
                          : "-left-52 text-right"
                      } w-44`}
                    >
                      <p className="text-teal-300 text-base lg:text-lg font-bold whitespace-nowrap">
                        {exp.duration}
                      </p>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-teal-400
                      shadow-[0_0_25px_rgba(20,184,166,0.9)]
                      border-2 border-slate-950" />
                  </div>

                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="w-full md:w-[45%]"
                  >
                    <Card
                      className="p-5 md:p-6 bg-slate-900/60 border border-slate-800
                      border-b-2 border-b-teal-400 rounded-xl
                      hover:shadow-xl hover:shadow-teal-500/20
                      transition-all duration-300 group"
                    >

                      {/* MOBILE DATE */}
                      <p className="md:hidden text-teal-300 text-sm font-semibold mb-3">
                        {exp.duration}
                      </p>

                      <div className="flex gap-4">

                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden
                          border border-slate-700 bg-slate-800 shrink-0">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-cover
                            group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg md:text-xl font-bold text-white">
                            {exp.role}
                          </h3>

                          <p className="text-teal-400 font-medium text-sm md:text-base">
                            {exp.company}
                          </p>

                          <Badge
                            variant="outline"
                            className="border-orange-500/60 text-orange-300
                            bg-orange-500/10 rounded-full w-fit text-xs"
                          >
                            {exp.type}
                          </Badge>

                          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>

                          {/* RESPONSIBILITIES */}
                          <ul className="space-y-2 text-sm mt-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="text-slate-300 flex gap-2 leading-relaxed"
                              >
                                <span className="text-teal-400">▸</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;