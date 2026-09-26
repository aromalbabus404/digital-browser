"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface AboutProps {
  onNext: () => void;
}

export const About: React.FC<AboutProps> = ({ onNext }) => {
  const pillars = [
    {
      title: "Experience",
      desc: "Over a decade of specialized expertise in tropical swimming pool engineering and soil-adjusted foundation structures across South India.",
    },
    {
      title: "Design",
      desc: "Tailored 3D architectural spatial planning, glass mosaic patterns, and edge details harmonizing with contemporary & Kerala traditional home designs.",
    },
    {
      title: "Construction",
      desc: "Monolithic reinforced concrete casting, multi-stage waterproofing, and high-precision tile alignment with zero-leak guarantee.",
    },
    {
      title: "Maintenance",
      desc: "Comprehensive annual maintenance contracts (AMC), water testing, filter backwashing, and emergency chemical balancing.",
    },
    {
      title: "Customer Support",
      desc: "Dedicated post-handover technical support, equipment warranty assistance, and rapid site response in Alappuzha, Kochi, and pan-Kerala.",
    },
  ];

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Large Editorial Pool Image Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[380px] sm:h-[550px] rounded-lg overflow-hidden glass-panel border border-white/10 shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Master Pools Architectural Excellence"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute top-6 left-6 font-mono text-xs text-aqua tracking-widest uppercase bg-slate-950/80 px-3 py-1 rounded border border-aqua/30">
              ARCHITECTURAL PORTFOLIO
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-sm">
              <span className="font-display text-lg font-bold text-white block">
                MASTER POOLS ALAPPUZHA
              </span>
              <span className="text-xs text-slate-300 font-mono">
                Crafting Luxury Water Horizons Since 2014
              </span>
            </div>
          </motion.div>

          {/* Right Side: Editorial Text & Horizontal List Layout */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
                03 — ABOUT MASTER POOLS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
                "Built around quality. <br />
                <span className="bg-gradient-to-r from-aqua via-blue-400 to-white bg-clip-text text-transparent">
                  Designed around you."
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base font-light leading-relaxed border-l-2 border-aqua pl-4"
            >
              We believe a pool is not merely a basin of water; it is an architectural centerpiece that elevates property value, creates family memories, and provides wellness retreat at home.
            </motion.p>

            {/* Editorial List of 5 Pillars (No generic card grid!) */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex items-start gap-4 p-3.5 rounded-sm hover:bg-slate-900/60 transition-colors border-b border-white/5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-aqua/10 border border-aqua/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-aqua group-hover:text-slate-950 text-aqua transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-aqua transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onNext}
                className="btn-glass px-6 py-3 rounded-sm text-xs font-mono tracking-widest uppercase flex items-center gap-2"
              >
                <span>EXPLORE POOL COLLECTION</span>
                <ArrowRight className="w-4 h-4 text-aqua" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default About;
