import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../portfolioData";

const Leadership = () => {
  const { leadership = [] } = portfolioData;

  if (!leadership.length) return null;

  return (
    <section id="leadership" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
          <p className="text-slate-400 mt-4 text-lg">
            Impact beyond academics and projects
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid sm:grid-cols-2 gap-5">

          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="
                group
                bg-slate-800/50
                border border-slate-700
                border-b-2 border-b-teal-400
                rounded-xl
                p-5
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
                    transition-transform
                  "
                >
                  <Award className="text-amber-400" size={18} />
                </div>

                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
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