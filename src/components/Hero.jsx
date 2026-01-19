import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../portfolioData'
import { Typewriter } from "react-simple-typewriter";

// import { portfolioData } from './Skills';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      <div className="max-w-8xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full text-sm font-medium border border-teal-500/20">
                Available for Product & Tech Roles | Summer 2026 Internships
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-medium">
              {personal.title}
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4  pt-4 ">
              <Button
                size="lg"
                className="  text-white font-medium   transition-all hover:scale-105"
                onClick={scrollToContact}
              >
                Let's Connect
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <a href="src/assets/anushka_karamchandani_resume.pdf" download="anushka_karamchandani.pdf" className='focus:outline-none'>
                              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-medium transition-all hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Resume
              </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-7 pl-4 pt-6">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient Blob Background */}
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
              
              {/* Profile Image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;