import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { portfolioData } from "../portfolioData";
import resume from "../assets/Varshney_Krishnanand_Resume.pdf";

const Hero = () => {
  const { personal } = portfolioData;

  const titles = [
    { text: "Product Manager", color: "text-emerald-200" },
    { text: "NYU Graduate student", color: "text-amber-100" },
    { text: "Industrial Operations Leader", color: "text-amber-50" },
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex items-center
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
        pt-20
        overflow-x-hidden
      "
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-center md:text-left"
          >

            {/* FIXED BADGE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  text-center

                  px-4 sm:px-5
                  py-2

                  text-xs sm:text-sm
                  leading-relaxed
                  font-semibold

                  max-w-full
                  whitespace-normal

                  bg-gradient-to-r
                  from-cyan-500/20
                  to-teal-500/20

                  text-cyan-300
                  border border-cyan-400/30
                  rounded-full

                  backdrop-blur-md
                  shadow-lg shadow-cyan-500/20
                "
              >
                Available for Management & Tech Roles | Summer 2026 Internships
              </span>
            </motion.div>

            {/* NAME */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-bold text-white leading-tight text-2xl sm:text-3xl lg:text-4xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Krishnanand Varshney
              </span>
            </motion.h2>

            {/* TYPEWRITER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="
                text-xl sm:text-2xl lg:text-3xl
                font-semibold tracking-wide
                flex flex-wrap
                justify-center md:justify-start
                items-center gap-2
              "
            >
              <span className="text-slate-300">Aspiring</span>

              <span
                className={`
                  ${titles[titleIndex].color}
                  min-w-[180px] sm:min-w-[260px]
                  transition-colors duration-500
                `}
              >
                <Typewriter
                  words={titles.map((t) => t.text)}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={55}
                  deleteSpeed={25}
                  delaySpeed={1200}
                />
              </span>
            </motion.div>

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="
                text-base sm:text-lg
                text-slate-400
                leading-relaxed
                max-w-xl
                mx-auto md:mx-0
              "
            >
              {personal.tagline}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="
                flex flex-col sm:flex-row
                gap-4 sm:gap-6
                pt-4
                justify-center md:justify-start
              "
            >
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                className="relative px-6 py-3 rounded-xl font-semibold text-white bg-slate-900 overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 rounded-xl pointer-events-none border-l-2 border-b-2 border-teal-400" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Connect <ArrowRight size={18} />
                </span>
              </motion.a>

              <motion.a
                href={resume}
                download
                whileHover={{ y: -3, scale: 1.04 }}
                className="relative px-6 py-3 rounded-xl font-semibold text-white bg-slate-900 overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 rounded-xl pointer-events-none border-l-2 border-b-2 border-teal-400" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Resume <Download size={18} />
                </span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[85%] sm:w-[70%] md:w-full max-w-md">

              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-yellow-400/20 rounded-full blur-3xl" />

              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;