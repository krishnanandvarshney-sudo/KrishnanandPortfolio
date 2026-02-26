import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../portfolioData";

const Leadership = () => {
  const { leadership = [] } = portfolioData;

  if (!leadership.length) return null;

  return (
    <section
      id="leadership"
      className="py-16 md:py-24 bg-slate-950 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Achievements
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />

          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Impact beyond academics and projects
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.015 }}
              className="
                group
                bg-slate-800/50
                border border-slate-700
                border-b-2 border-b-teal-400
                rounded-xl
                p-4 sm:p-5
                transition-all duration-300
                hover:shadow-xl hover:shadow-teal-500/20
                hover:border-teal-400
              "
            >
              <div className="flex items-start gap-3">

                <div
                  className="
                    p-2 rounded-lg
                    bg-slate-900
                    border border-slate-700
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <Award
                    className="text-amber-400"
                    size={16}
                  />
                </div>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Leadership;