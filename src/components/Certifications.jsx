import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../portfolioData";

const Certifications = () => {
  const { certifications = [] } = portfolioData;

  if (!certifications.length) return null;

  /* 🔥 AUTO GLOW BASED ON ISSUER */
  const getIssuerStyle = (issuer = "") => {
    const i = issuer.toLowerCase();

    if (i.includes("ibm"))
      return "hover:shadow-blue-500/40 hover:border-blue-700 hover:border-2";

    if (i.includes("coursera"))
      return "hover:shadow-purple-500/40 hover:border-purple-700 hover:border-2";

    if (i.includes("oracle"))
      return "hover:shadow-red-500/40 hover:border-red-700 hover:border-2";

    if (i.includes("scrum"))
      return "hover:shadow-orange-500/40 hover:border-orange-700 hover:border-2";

    if (i.includes("devtown"))
      return "hover:shadow-violet-500/40 hover:border-violet-700 hover:border-2";

    return "hover:shadow-teal-500/40 hover:border-teal-700 hover:border-2";
  };

  return (
    <section
      id="certifications"
      className="py-24 bg-slate-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
          <p className="text-slate-400 mt-4 text-lg">
            Industry-recognized credentials
          </p>
        </div>

        {/* GRID — 4 CARDS PER ROW */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`
                bg-slate-800/60
                border border-slate-700
                rounded-lg
                overflow-hidden
                transition-all duration-300
                ${getIssuerStyle(cert.issuer)}
              `}
            >

              {/* HALF PREVIEW (NO SCROLLERS) */}
              <div className="h-32 bg-slate-900 border-b border-slate-700 overflow-hidden">
                <img
                  src={cert.preview}
                  alt={cert.name}
                  className="w-full h-full object-cover object-top pointer-events-none"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 space-y-2">

                <h3 className="text-sm font-bold text-white leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs text-slate-400">
                  {cert.issuer} • {cert.date}
                </p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills?.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="
                        text-[10px]
                        px-2 py-0.5
                        bg-slate-900
                        border border-slate-700
                        rounded
                        text-slate-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    window.open(cert.link || cert.preview, "_blank")
                  }
                  className="
                    text-xs font-medium
                    text-teal-400
                    hover:text-white
                    transition-colors
                  "
                >
                  View Credential →
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;