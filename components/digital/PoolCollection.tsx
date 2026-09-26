"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { poolCollectionData, PoolCategory } from "@/data/poolCollection";
import { getWhatsAppLink } from "./WhatsAppButton";
import { ArrowUpRight, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface PoolCollectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const PoolCollection: React.FC<PoolCollectionProps> = ({ onSelectCategory }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory: PoolCategory = poolCollectionData[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? poolCollectionData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === poolCollectionData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
              04 — ARCHITECTURAL STYLES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              POOL COLLECTION
            </h2>
          </div>

          {/* Interactive Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {poolCollectionData.map((cat, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-mono text-xs uppercase transition-all ${
                    isSelected
                      ? "bg-aqua text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      : "glass-panel text-slate-300 hover:border-aqua/50 hover:text-white"
                  }`}
                >
                  {cat.number} {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Display Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Large Image Visual */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[480px] rounded-lg overflow-hidden glass-panel border border-white/10 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-6 left-6 font-mono text-3xl font-extrabold text-aqua drop-shadow-[0_0_10px_#00F0FF]">
                  {activeCategory.number}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Arrows on Image */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
              <button
                onClick={handlePrev}
                aria-label="Previous Category"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-aqua" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Category"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-aqua" />
              </button>
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <span className="font-mono text-xs text-aqua tracking-widest uppercase">
                  CATEGORY {activeCategory.number} OF 06
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
                  {activeCategory.name}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-slate-300">
                  {activeCategory.subtitle}
                </p>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Features Pill List */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest block">
                    KEY DESIGN FEATURES:
                  </span>
                  {activeCategory.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-xs sm:text-sm text-white">
                      <div className="w-4 h-4 rounded-full bg-aqua/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-aqua" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(activeCategory.name)}
                    className="btn-aqua px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                  >
                    <span>EXPLORE PROJECTS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Hello Master Pools, I am interested in building a ${activeCategory.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass px-6 py-3 rounded-sm text-xs font-mono tracking-widest uppercase text-emerald-400 hover:text-emerald-300 hover:border-emerald-400/50"
                  >
                    WHATSAPP ENQUIRY
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default PoolCollection;
