"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData, Service } from "@/data/services";
import { getWhatsAppLink } from "./WhatsAppButton";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

export const ServicesBrowser: React.FC = () => {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const activeService: Service = servicesData[activeServiceIdx];

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
              07 — END-TO-END CAPABILITIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              SERVICES BROWSER
            </h2>
          </div>

          <span className="font-mono text-xs text-slate-400">
            TURNKEY SWIMMING POOL SOLUTIONS
          </span>
        </div>

        {/* 6 Service Selector Pills Grid / Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {servicesData.map((srv, idx) => {
            const isSelected = idx === activeServiceIdx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveServiceIdx(idx)}
                className={`p-3 rounded-md text-left transition-all border ${
                  isSelected
                    ? "bg-slate-900 border-aqua text-aqua shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    : "glass-panel text-slate-300 hover:border-aqua/50 hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] block opacity-70 mb-1">{srv.number}</span>
                <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider block">
                  {srv.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Service Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[420px] rounded-lg overflow-hidden glass-panel border border-white/10 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 font-mono text-4xl font-extrabold text-aqua drop-shadow-[0_0_10px_#00F0FF]">
                  {activeService.number}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column Specs */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id + "-content"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <div>
                  <span className="font-mono text-xs text-aqua uppercase tracking-widest block mb-1">
                    SERVICE {activeService.number}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                    {activeService.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-slate-300 mt-1">
                    {activeService.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {activeService.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest block">
                    SERVICE DELIVERABLES:
                  </span>
                  {activeService.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-aqua/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-aqua" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-4">
                  <a
                    href={getWhatsAppLink(`Hello Master Pools, I am interested in ${activeService.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>ENQUIRE ON WHATSAPP ({activeService.title})</span>
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

export default ServicesBrowser;
