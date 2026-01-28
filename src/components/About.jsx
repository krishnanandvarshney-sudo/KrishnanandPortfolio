import React from "react";
import { Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { portfolioData } from "../portfolioData";

/* ---------------- Framer Motion Variants ---------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ---------------- Component ---------------- */

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: Target,
      title: about.highlights[0].title,
      description: about.highlights[0].description,
      titleColor: "text-sky-300",
    },
    {
      icon: TrendingUp,
      title: about.highlights[1].title,
      description: about.highlights[1].description,
      titleColor: "text-emerald-200",
    },
    {
      icon: Users,
      title: about.highlights[2].title,
      description: about.highlights[2].description,
      titleColor: "text-amber-100",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* -------- Section Header -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* -------- Left: Summary -------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {about.summary}
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              With a background in{" "}
              <span className="text-white font-medium">
                computer science, consulting, and management
              </span>
              , I bring a{" "}
              <span className="text-white font-medium">
                structured, analytical approach
              </span>{" "}
              to solving complex problems—whether it’s improving a product,
              managing a project, or advising on technology decisions.
            </p>
          </motion.div>

          {/* -------- Right: Highlight Cards -------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card
                    className="
                      group relative p-6
                      bg-slate-800/60
                      rounded-xl

                      border border-slate-700
                      border-b-2 border-b-teal-400

                      transition-all duration-300 ease-out
                      hover:shadow-xl hover:shadow-teal-500/20
                      hover:border-teal-400
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="
                        p-3 bg-slate-700/40 rounded-lg
                        transition-transform duration-300
                        group-hover:rotate-6
                        group-hover:scale-110
                      ">
                        <Icon className="text-teal-400" size={24} />
                      </div>

                      <div>
                        <h3 className={`font-semibold mb-1 ${item.titleColor}`}>
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
