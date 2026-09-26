"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const testimonial: Testimonial = testimonialsData[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-5xl mx-auto w-full my-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-2">
            11 — CLIENT TESTIMONIALS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            CLIENT REVIEWS
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-2">
            TRUSTED BY RESIDENTIAL VILLA OWNERS & LEADING RESORTS ACROSS KERALA
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-panel p-8 sm:p-12 rounded-2xl border border-white/15 shadow-2xl space-y-6">
          <Quote className="w-12 h-12 stroke-aqua/30 fill-aqua/10 mx-auto" />

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-display text-lg sm:text-2xl md:text-3xl text-white font-light leading-relaxed max-w-3xl mx-auto italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Details */}
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-aqua uppercase">
                  {testimonial.author}
                </h3>
                <p className="font-mono text-xs text-slate-300">
                  {testimonial.role} • <span className="text-white">{testimonial.location}</span>
                </p>
                <span className="inline-block mt-2 font-mono text-[10px] bg-slate-900 px-3 py-1 rounded text-slate-400 border border-white/10 uppercase">
                  Project: {testimonial.projectType}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows & Dots */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 stroke-aqua" />
            </button>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIdx ? "w-8 bg-aqua" : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next review"
              className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5 stroke-aqua" />
            </button>
          </div>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default Testimonials;
