import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../portfolioData';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Hero = () => {
  const { personal } = portfolioData;

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
const titles = [
  { text: "Product Manager", color: "text-sky-300" },
  { text: "Project Manager", color: "text-emerald-200" }, // light green
  { text: "Technology Consultant", color: "text-amber-100" }, // cream
];



const [titleIndex, setTitleIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTitleIndex((i) => (i + 1) % titles.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      <div className="max-w-8xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="inline-block">
              <span className="px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 
text-cyan-300 border border-cyan-400/30 rounded-full text-sm font-semibold 
backdrop-blur-md shadow-lg shadow-cyan-500/20">


                Available for Management & Tech Roles | Summer 2026 Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-bold text-white leading-tight text-2xl md:text-3xl lg:text-4xl"
            >
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Anushka Karamchandani
              </span>
            </motion.h2>

            {/* Rotating Title */}
          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.55 }}
  className={`text-2xl md:text-3xl font-semibold  ${titles[titleIndex].color}`}
 // drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] -- if want to glow
>
  <Typewriter
    key={titleIndex}
    words={[titles[titleIndex].text]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={40}
    delaySpeed={1000}
  />
</motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
           {/* CTA Buttons */}
{/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.95 }}
  className="flex flex-wrap gap-6 pt-6"
>
  {/* Let's Connect */}
  <motion.button
    whileHover={{ y: -3, scale: 1.04 }}
    className="relative px-7 py-3 rounded-xl font-semibold text-white bg-slate-900 overflow-hidden"
  >
    {/* Glow Border */}
    <span className="absolute inset-0 rounded-xl pointer-events-none
      border-l-2 border-b-2 border-teal-400
      shadow-[inset_0_-6px_12px_-6px_rgba(45,212,191,0.6),inset_6px_0_12px_-6px_rgba(45,212,191,0.6)]">
    </span>

    <span className="relative z-10 flex items-center gap-2">
      Let's Connect <ArrowRight size={18} />
    </span>
  </motion.button>

  {/* Resume */}
  <motion.a
    href="src/assets/anushka_karamchandani_resume.pdf"
    download
    whileHover={{ y: -3, scale: 1.04 }}
    className="relative px-7 py-3 rounded-xl font-semibold text-white bg-slate-900 overflow-hidden"
  >
    {/* Glow Border */}
    <span className="absolute inset-0 rounded-xl pointer-events-none
      border-l-2 border-b-2 border-teal-400
      shadow-[inset_0_-6px_12px_-6px_rgba(45,212,191,0.6),inset_6px_0_12px_-6px_rgba(45,212,191,0.6)]">
    </span>

    <span className="relative z-10 flex items-center gap-2">
      Resume <Download size={18} />
    </span>
  </motion.a>
</motion.div>


            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-7 pl-4 pt-6"
            >
              {[{ Icon: Linkedin, href: personal.linkedin }, { Icon: Github, href: personal.github }, { Icon: Mail, href: `mailto:${personal.email}` }].map(({ Icon, href }, i) => (
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
            </motion.div>
          </motion.div>

        {/* Right Content - Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, delay: 0.4 }}
  className="relative"
>
  <div className="relative w-full max-w-md mx-auto">
    {/* Glow Background */}
    <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-yellow-400/20 rounded-full blur-3xl" />

    {/* Profile Image */}
    <div className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
      <img
        src={personal.photo}
        alt={personal.name}
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Floating Cream Orb */}
<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full opacity-25 blur-2xl animate-pulse" />

{/* Floating Teal Orb */}
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full opacity-20 blur-2xl animate-pulse delay-1000" />

  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;  