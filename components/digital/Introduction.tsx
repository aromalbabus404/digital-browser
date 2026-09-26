"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Compass, ShieldCheck, ArrowRight } from "lucide-react";

interface IntroductionProps {
  onNext: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onNext }) => {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs text-aqua tracking-widest uppercase mb-2 block">
                02 — INTRODUCTION
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight">
                "Spaces designed <br />
                <span className="bg-gradient-to-r from-aqua to-blue-400 bg-clip-text text-transparent">
                  around water."
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed font-light"
            >
              Master Pools creates state-of-the-art swimming pools for residential luxury villas, heritage resorts, boutique hotels, and commercial aquatic facilities. Based in Alappuzha, Kerala, we combine precision civil engineering with architectural elegance to bring water backdrops to life.
            </motion.p>

            {/* Key Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 p-4 rounded-sm glass-panel">
                <Compass className="w-6 h-6 stroke-aqua shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white text-sm">Bespoke Architecture</h3>
                  <p className="text-xs text-slate-400">Custom shapes, infinity edges, and natural stone integrations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-sm glass-panel">
                <ShieldCheck className="w-6 h-6 stroke-aqua shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white text-sm">Turnkey Execution</h3>
                  <p className="text-xs text-slate-400">From structural RCC shell to advanced water filtration plants.</p>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-aqua">10+</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">100+</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-aqua">PAN INDIA</div>
                <div className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                  Service Delivery
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Image Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[300px] sm:h-[450px] rounded-lg overflow-hidden glass-panel border border-white/15 shadow-2xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80"
              alt="Master Pools Architectural Water Space"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-sm border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-aqua block">ALAPPUZHA HEADQUARTERS</span>
                  <span className="text-xs font-bold text-white uppercase">Kerala, India</span>
                </div>
                <button
                  onClick={onNext}
                  className="p-2 rounded bg-aqua text-slate-950 font-bold hover:scale-105 transition-transform"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default Introduction;
