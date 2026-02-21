import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { portfolioData } from "../portfolioData";
import resume from "../assets/anushka_karamchandani_resume.pdf";

const Hero = () => {
  const { personal } = portfolioData;

  /* TITLES (Product Manager removed) */
  const titles = [
    { text: "Project Manager", color: "text-emerald-200" },
    { text: "Technology Consultant", color: "text-amber-100" },
  ];

  /* COLOR ROTATION */
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
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-20"
    >
      <div className="max-w-8xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 
              text-cyan-300 border border-cyan-400/30 rounded-full text-sm font-semibold 
              backdrop-blur-md shadow-lg shadow-cyan-500/20">
                Available for Management & Tech Roles | Summer 2026 Internships
              </span>
            </motion.div>

            {/* NAME */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-bold text-white leading-tight text-2xl md:text-3xl lg:text-4xl"
            >
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Anushka Karamchandani
              </span>
            </motion.h2>

            {/* TYPEWRITER TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-2xl md:text-3xl font-semibold tracking-wide flex items-center gap-2"
            >
              <span className="text-slate-300">Aspiring</span>

              <span
                className={`${titles[titleIndex].color} min-w-[280px] transition-colors duration-500`}
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
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              {personal.tagline}
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              {/* LinkedIn */}
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                className="relative px-7 py-3 rounded-xl font-semibold text-white bg-slate-900 overflow-hidden"
              >
                <span className="absolute inset-0 rounded-xl pointer-events-none
                  border-l-2 border-b-2 border-teal-400" />
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect <ArrowRight size={18} />
                </span>
              </motion.a>

              {/* Resume */}
              <motion.a
                href={resume}
                download
                whileHover={{ y: -3, scale: 1.04 }}
                className="relative px-7 py-3 rounded-xl font-semibold text-white bg-slate-900 overflow-hidden"
              >
                <span className="absolute inset-0 rounded-xl pointer-events-none
                  border-l-2 border-b-2 border-teal-400" />
                <span className="relative z-10 flex items-center gap-2">
                  Resume <Download size={18} />
                </span>
              </motion.a>
            </motion.div>

          {/* /*  {/* SOCIAL LINKS */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-7 pl-4 pt-6"
            >
              {[
                { Icon: Linkedin, href: personal.linkedin },
                { Icon: Github, href: personal.github },
                { Icon: Mail, href: `mailto:${personal.email}` },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div> */}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">

              <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-yellow-400/20 rounded-full blur-3xl" />

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