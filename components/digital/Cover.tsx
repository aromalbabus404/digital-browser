"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

interface CoverProps {
  onStartExploring: () => void;
}

export const Cover: React.FC<CoverProps> = ({ onStartExploring }) => {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-4 sm:p-12 md:p-16 overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=90"
          alt="Master Pools Luxury Swimming Pool"
          fill
          priority
          className="object-cover object-center scale-105 transform animate-float filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Top Placeholder Spacing for Fixed Nav */}
      <div className="relative z-10 pt-14 sm:pt-20" />

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto px-4">
        {/* Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-aqua/30 mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-aqua animate-ping" />
          <span className="font-mono text-[10px] sm:text-xs tracking-widest text-aqua uppercase">
            MASTER POOLS • KERALA
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-extrabold text-3xl sm:text-6xl md:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-4 sm:mb-6"
        >
          DESIGNING <br />
          <span className="bg-gradient-to-r from-white via-aqua to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            DREAM POOLS.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-light tracking-wide mb-6 sm:mb-8"
        >
          Premium Swimming Pool <br className="hidden sm:inline" />
          <span className="font-semibold text-white">Design • Construction • Maintenance</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onStartExploring}
            className="btn-aqua group px-7 py-3.5 sm:px-8 sm:py-4 rounded-sm text-xs sm:text-base font-bold tracking-widest uppercase flex items-center gap-3 shadow-[0_0_30px_rgba(0,240,255,0.4)] active:scale-95 transition-transform"
          >
            <span>START EXPLORING</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Footer Info & Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 pb-20 sm:pb-20 border-t border-white/10 pt-3"
      >
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-widest text-slate-400 uppercase">
          <MapPin className="w-3.5 h-3.5 text-aqua" />
          <span>Alappuzha • Kerala • India</span>
        </div>

        <button
          onClick={onStartExploring}
          className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-widest text-slate-400 hover:text-aqua transition-colors animate-bounce"
        >
          <span>SWIPE OR SCROLL TO BEGIN</span>
          <ChevronDown className="w-3.5 h-3.5 text-aqua" />
        </button>
      </motion.div>
    </section>
  );
};

export default Cover;
