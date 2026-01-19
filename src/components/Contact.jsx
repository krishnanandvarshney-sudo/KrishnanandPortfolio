import React from 'react';
import { Mail, Linkedin, Github, MapPin, Heart } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <section id='contact'>
      <footer className="bg-[#020617] border-t border-slate-800 py-16 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        {/* <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div> */}
        <p className="text-slate-400 mb-10 max-w-xl">
          I'm always open to discussing product management opportunities, collaboration, or
          just chatting about technology and innovation.
        </p>

        {/* Contact Links Grid */}
        <div className="w-full space-y-4">
          {/* Email */}
          <a 
            href={`mailto:${personal.email}`}
            className="flex items-center p-4 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-teal-500 transition-all group"
          >
            <div className="p-3 bg-teal-500/10 rounded-lg text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-white font-medium">{personal.email}</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Linkedin size={24} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="text-white font-medium">Connect with me</p>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-purple-500 transition-all group"
          >
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Github size={24} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="text-white font-medium">Check out my work</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center p-4 rounded-xl bg-[#0f172a] border border-slate-800">
            <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
              <MapPin size={24} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-sm text-slate-400">Location</p>
              <p className="text-white font-medium">{personal.location || "Your City, Country"}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 w-full">
          <p className="text-slate-500 text-sm">
            © {currentYear} {personal.name}. Built with{' '}
            <Heart className="inline text-red-500" size={14} />
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Contact;