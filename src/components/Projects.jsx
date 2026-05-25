import React, { useRef, useState, useEffect } from "react";

import {
  ChevronLeft,
  ChevronRight,
  X,
  FileText,
  Presentation,
  Github,
  ExternalLink,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { portfolioData } from "../portfolioData";

const glassButton =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg " +
  "bg-slate-800/70 backdrop-blur-md text-white font-medium text-sm " +
  "border border-slate-700 hover:border-teal-400 " +
  "hover:text-teal-400 transition-all duration-300";

const Projects = () => {
  const { projects } = portfolioData;

  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);

  /* ---------- AUTO SLIDER ---------- */

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  /* ---------- NEXT ---------- */

  const nextSlide = () => {
    const next = (activeIndex + 1) % projects.length;

    setActiveIndex(next);

    sliderRef.current?.scrollTo({
      left: next * 360,
      behavior: "smooth",
    });
  };

  /* ---------- PREVIOUS ---------- */

  const prevSlide = () => {
    const prev =
      activeIndex === 0
        ? projects.length - 1
        : activeIndex - 1;

    setActiveIndex(prev);

    sliderRef.current?.scrollTo({
      left: prev * 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="py-20 bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* ---------- HEADING ---------- */}

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <div
            className="
              w-20 h-1
              bg-gradient-to-r
              from-teal-500
              to-emerald-500
              mx-auto mt-4
            "
          />

          <p className="text-slate-400 mt-4">
            Business Analysis & Strategy Work
          </p>

        </div>

        {/* ---------- COUNTER ---------- */}

        <div className="flex justify-center mb-8">

          <div
            className="
              px-5 py-2 rounded-full
              bg-slate-900
              border border-teal-500/30
              text-teal-300 font-semibold
            "
          >
            {activeIndex + 1} / {projects.length} Projects
          </div>

        </div>

        <div className="relative">

          {/* ---------- LEFT BUTTON ---------- */}

          <button
            onClick={prevSlide}
            className="
              absolute left-0 top-1/2
              -translate-y-1/2
              z-20

              p-3 rounded-full

              bg-slate-800/90
              hover:bg-teal-500

              transition-all
            "
          >
            <ChevronLeft
              size={30}
              className="text-white"
            />
          </button>

          {/* ---------- RIGHT BUTTON ---------- */}

          <button
            onClick={nextSlide}
            className="
              absolute right-0 top-1/2
              -translate-y-1/2
              z-20

              p-3 rounded-full

              bg-slate-800/90
              hover:bg-teal-500

              transition-all
            "
          >
            <ChevronRight
              size={30}
              className="text-white"
            />
          </button>

          {/* ---------- CAROUSEL ---------- */}

          <div
            ref={sliderRef}
            className="
              flex gap-6

              overflow-x-auto
              scroll-smooth
              scrollbar-hide

              px-12
              pb-8
            "
          >

            {projects.map((project, index) => (

              <motion.div
                key={project.id}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                <Card
                  onClick={() =>
                    setSelectedProject(project)
                  }
                  className={`
                    min-w-[340px]
                    h-[220px]

                    p-0
                    bg-transparent

                    shrink-0
                    cursor-pointer

                    overflow-hidden
                    rounded-2xl

                    transition-all
                    duration-500

                    ${
                      activeIndex === index
                        ? `
                          scale-[1.02]
                          z-10

                          border-2
                          border-teal-400

                          shadow-[0_0_35px_rgba(45,212,191,0.45)]
                        `
                        : `
                          opacity-60
                          scale-95

                          border
                          border-slate-700
                        `
                    }
                  `}
                >

                  <div
                    className="
                      relative
                      w-full
                      h-full
                    "
                  >

                    {/* IMAGE */}

                    <img
                      src={project.image}
                      alt={project.name}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/50
                        to-transparent
                      "
                    />

                    {/* TITLE */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                      "
                    >

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-white
                          leading-snug
                        "
                      >
                        {project.name}
                      </h3>

                    </div>

                  </div>

                </Card>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ---------- MODAL ---------- */}

        <AnimatePresence>

          {selectedProject && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed inset-0

                bg-black/80
                backdrop-blur-sm

                z-50

                flex
                justify-center
                items-center

                p-6
              "
            >

              <motion.div
                initial={{
                  scale: 0.85,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.85,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  bg-slate-900

                  rounded-2xl
                  overflow-hidden

                  max-w-4xl
                  w-full

                  relative

                  border
                  border-slate-700
                "
              >

                {/* CLOSE */}

                <button
                  onClick={() =>
                    setSelectedProject(null)
                  }
                  className="
                    absolute
                    right-4
                    top-4
                    z-20

                    p-2
                    rounded-full

                    bg-black/40

                    hover:bg-teal-500

                    transition-all
                  "
                >
                  <X className="text-white" />
                </button>

                {/* IMAGE */}

                <div className="relative">

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="
                      w-full
                      h-72
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-slate-900
                      via-black/40
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                    "
                  >

                    <Badge className="bg-teal-500 mb-4">
                      {selectedProject.role}
                    </Badge>

                    <h2
                      className="
                        text-4xl
                        font-bold
                        text-white
                      "
                    >
                      {selectedProject.name}
                    </h2>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  {/* PROBLEM */}

                  <div className="mb-6">

                    <p
                      className="
                        text-orange-400
                        font-semibold
                        mb-2
                        text-lg
                      "
                    >
                      Problem
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>

                  </div>

                  {/* ACHIEVEMENT */}

                  <div className="mb-6">

                    <p
                      className="
                        text-emerald-400
                        font-semibold
                        mb-2
                        text-lg
                      "
                    >
                      Achievement
                    </p>

                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.achievement}
                    </p>

                  </div>

                  {/* TECHNOLOGIES */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mb-8
                    "
                  >

                    {selectedProject.technologies.map(
                      (tech, i) => (

                        <Badge
                          key={i}
                          className="
                            bg-slate-800
                            text-slate-300
                            border border-slate-700
                          "
                        >
                          {tech}
                        </Badge>

                      )
                    )}

                  </div>

                  {/* BUTTONS */}

                  <div className="flex flex-wrap gap-3">

                    {selectedProject.report && (

                      <Button
                        className={glassButton}
                        onClick={() =>
                          window.open(
                            selectedProject.report,
                            "_blank"
                          )
                        }
                      >
                        <FileText size={15} />
                        Report
                      </Button>

                    )}

                    {selectedProject.ppt && (

                      <Button
                        className={glassButton}
                        onClick={() =>
                          window.open(
                            selectedProject.ppt,
                            "_blank"
                          )
                        }
                      >
                        <Presentation size={15} />
                        PPT
                      </Button>

                    )}

                    {selectedProject.github && (

                      <Button
                        className={glassButton}
                        onClick={() =>
                          window.open(
                            selectedProject.github,
                            "_blank"
                          )
                        }
                      >
                        <Github size={15} />
                        Code
                      </Button>

                    )}

                    {selectedProject.live && (

                      <Button
                        className={glassButton}
                        onClick={() =>
                          window.open(
                            selectedProject.live,
                            "_blank"
                          )
                        }
                      >
                        <ExternalLink size={15} />
                        Live
                      </Button>

                    )}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;