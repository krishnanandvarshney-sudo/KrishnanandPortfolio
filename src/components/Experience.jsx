import React, { useRef } from "react";
import { MapPin, UserRound } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../portfolioData";

const Experience = () => {
  const { experience } = portfolioData;
  const containerRef = useRef(null);

  /* Scroll progress */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const personY = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
          <p className="text-slate-400 mt-4 text-lg">
            Building products that make a difference
          </p>
        </div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative">

          {/* Static line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-slate-700/40 -translate-x-1/2 hidden md:block" />

          {/* Animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="
              absolute left-1/2 top-0 w-[3px]
              bg-gradient-to-b from-teal-400 to-emerald-500
              -translate-x-1/2 hidden md:block
              shadow-[0_0_25px_rgba(20,184,166,0.6)]
            "
          />

          {/* Moving journey icon */}
          <motion.div
            style={{ top: personY }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-30"
          >
            <div className="
              p-2 rounded-full bg-slate-900
              border border-teal-400
              shadow-[0_0_25px_rgba(20,184,166,0.8)]
            ">
              <UserRound size={18} className="text-teal-300" />
            </div>
          </motion.div>

          <div className="space-y-20">

            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1], // smooth cinematic easing
                  }}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >

                  {/* DOT + DATE */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 z-20">

                    <div
                      className={`
                        absolute top-[-4px]
                        ${isLeft ? "left-10 text-left" : "-left-48 text-right"}
                        w-40 whitespace-nowrap
                      `}
                    >
                      <p className="text-teal-300 text-lg font-bold tracking-wide">
                        {exp.duration}
                      </p>
                    </div>

                    <motion.div
                      whileInView={{ scale: [0.6, 1.3, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="
                        w-6 h-6 rounded-full
                        bg-teal-400
                        shadow-[0_0_25px_rgba(20,184,166,0.9)]
                        border-2 border-slate-950
                      " />
                    </motion.div>
                  </div>

                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full md:w-[46%]"
                  >
                    <Card
                      className="
                        p-6
                        bg-slate-900/60
                        border border-slate-800
                        border-b-2 border-b-teal-400
                        rounded-xl
                        hover:shadow-xl hover:shadow-teal-500/20
                        transition-all duration-300
                        group
                      "
                    >
                      <div className="flex gap-4">

                        {/* Logo */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold text-white">
                            {exp.role}
                          </h3>

                          <p className="text-teal-400 font-medium">
                            {exp.company}
                          </p>

                          <Badge
                            variant="outline"
                            className="
                              border-orange-500/60
                              text-orange-300
                              bg-orange-500/10
                              rounded-full w-fit
                            "
                          >
                            {exp.type}
                          </Badge>

                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <MapPin size={15} />
                            <span>{exp.location}</span>
                          </div>

                          <ul className="space-y-2 text-sm">
                            {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                              <li key={idx} className="text-slate-300 flex gap-2">
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