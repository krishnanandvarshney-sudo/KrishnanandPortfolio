import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  FileText,
  Presentation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { portfolioData } from "../portfolioData";

/* ---------- Glass Button ---------- */
const glassButton =
  "inline-flex items-center justify-center gap-2 px-3 py-1 rounded-lg " +
  "bg-slate-800/40 backdrop-blur-md text-white font-medium text-xs " +
  "!border-l-2 !border-b-2 !border-amber-400 !border-t-0 !border-r-0 " +
  "shadow-md shadow-black/30 hover:text-amber-400 " +
  "hover:shadow-amber-500/40 hover:shadow-lg " +
  "transform-gpu hover:scale-105 transition-all duration-300";

/* ---------- Swipe Logic ---------- */
const swipeConfidenceThreshold = 7000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Projects = () => {
  const { projects } = portfolioData;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex(
      (prev) => (prev + newDirection + projects.length) % projects.length
    );
  };

  const project = projects[index];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />

          <p className="text-slate-400 mt-4 text-lg">
            Building solutions that create impact
          </p>
        </div>

        {/* ---------- CAROUSEL ---------- */}
        <div className="relative max-w-2xl mx-auto">

          {/* PROJECT COUNTER */}
          <div className="text-center mb-3 text-teal-300 text-lg font-semibold tracking-wide">
            {index + 1} / {projects.length} projects
          </div>

          {/* ARROWS */}
          <div className="flex justify-center items-center gap-6 mb-5">

            <button
              onClick={() => paginate(-1)}
              className="
                p-3 rounded-full
                bg-slate-800/70 backdrop-blur-md
                border border-slate-600
                text-white
                hover:scale-110 hover:bg-slate-700
                transition-all duration-300
                shadow-[0_0_30px_rgba(20,184,166,0.35)]
                hover:shadow-teal-400/40
              "
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={() => paginate(1)}
              className="
                p-3 rounded-full
                bg-slate-800/70 backdrop-blur-md
                border border-slate-600
                text-white
                hover:scale-110 hover:bg-slate-700
                transition-all duration-300
                shadow-[0_0_30px_rgba(20,184,166,0.35)]
                hover:shadow-teal-400/40
              "
            >
              <ChevronRight size={30} />
            </button>

          </div>

          {/* DOT INDICATOR */}
          <div className="flex justify-center gap-2 mb-5">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-teal-400" : "w-2 bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* ---------- PROJECT CARD ---------- */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              whileDrag={{ scale: 0.97 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.25 }}
            >
              <Card
                className="
                  bg-slate-800/40
                  border border-slate-700
                  border-b-2 border-b-teal-400
                  overflow-hidden group
                  hover:shadow-lg hover:shadow-teal-500/10
                  transition-all duration-300
                "
              >

                {/* IMAGE */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

                  <div className="absolute top-2 left-2">
                    <Badge className="bg-teal-500/90 text-white border-none text-xs">
                      {project.role}
                    </Badge>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-3">

                  {/* PROJECT TITLE */}
                  <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* SUMMARY */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* RESPONSIBILITIES */}
                  <div className="space-y-1 text-xs">

                    <span className="text-teal-400 font-semibold">
                      Key Responsibilities:
                    </span>

                    <ul className="list-disc list-inside text-slate-400 space-y-1">

                      {project.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}

                    </ul>

                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-1">

                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-slate-900 text-slate-400 text-[10px]"
                      >
                        {tech}
                      </Badge>
                    ))}

                  </div>

                  {/* BUTTONS */}
                  <div className="flex justify-center gap-2 pt-2 flex-wrap">

                    {project.report && (
                      <Button
                        className={glassButton}
                        onClick={() => window.open(project.report, "_blank")}
                      >
                        <FileText size={14} /> Report
                      </Button>
                    )}

                    {project.ppt && (
                      <Button
                        className={glassButton}
                        onClick={() => window.open(project.ppt, "_blank")}
                      >
                        <Presentation size={14} /> PPT
                      </Button>
                    )}

                    {project.github && (
                      <Button
                        className={glassButton}
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={14} /> Code
                      </Button>
                    )}

                    {project.live && (
                      <Button
                        className={glassButton}
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink size={14} /> Live
                      </Button>
                    )}

                  </div>

                </div>

              </Card>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Projects;