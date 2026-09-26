"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "CONSULTATION",
      subtitle: "Site Survey & Vision Alignment",
      desc: "Initial site evaluation in Kerala, soil analysis, property measurements, budget planning, and aesthetic vision discussion.",
    },
    {
      num: "02",
      title: "DESIGN",
      subtitle: "3D CAD & Architectural Modeling",
      desc: "Photorealistic 3D rendering, spatial placement, material sampling, and tile pattern selection tailored to your architecture.",
    },
    {
      num: "03",
      title: "ENGINEERING",
      subtitle: "Structural & Hydraulic Blueprints",
      desc: "Reinforced concrete structural calculation, pipe flow hydraulics, balance tank sizing, and electrical pump load designs.",
    },
    {
      num: "04",
      title: "CONSTRUCTION",
      subtitle: "Excavation & Monolithic Concrete",
      desc: "Precision excavation, rebar reinforcement, high-strength waterproof RCC casting, and dual elastomeric membrane sealing.",
    },
    {
      num: "05",
      title: "INSTALLATION",
      subtitle: "Tiling & Filtration Equipment Setup",
      desc: "Spanish/Italian mosaic tile grouting, sand filter plant fitting, LED underwater light wiring, and salt chlorinator setup.",
    },
    {
      num: "06",
      title: "HANDOVER",
      subtitle: "Hydrostatic Testing & Client Briefing",
      desc: "Water filling, 72-hour hydrostatic leak testing, chemical balancing, client operational training, and warranty issuance.",
    },
    {
      num: "07",
      title: "MAINTENANCE",
      subtitle: "Annual AMC & Water Quality Servicing",
      desc: "Regular scheduled servicing, filter backwashing, vacuum cleaning, and 24/7 technical support in Alappuzha & across Kerala.",
    },
  ];

  const [hoveredStep, setHoveredStep] = useState<number | null>(0);

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
              08 — WORKFLOW METHODOLOGY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              7-STEP EXECUTION PROCESS
            </h2>
          </div>

          <span className="font-mono text-xs text-slate-400">
            FROM CONCEPT TO CRYSTAL WATER
          </span>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isHovered = hoveredStep === idx;
            return (
              <motion.div
                key={step.num}
                onMouseEnter={() => setHoveredStep(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative p-4 rounded-lg border transition-all cursor-pointer ${
                  isHovered
                    ? "bg-slate-900 border-aqua text-aqua shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    : "glass-panel border-white/10 text-white hover:border-aqua/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-aqua">{step.num}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-3 h-3 text-slate-600" />
                  )}
                </div>
                <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] font-mono text-slate-400 leading-tight">
                  {step.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Step Active Info Box */}
        {hoveredStep !== null && (
          <motion.div
            key={hoveredStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel-accent p-6 rounded-lg max-w-3xl mx-auto flex items-start gap-4 border border-aqua/30"
          >
            <div className="w-10 h-10 rounded-full bg-aqua text-slate-950 font-extrabold flex items-center justify-center shrink-0">
              {steps[hoveredStep].num}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-display text-lg font-bold text-white uppercase">
                  STAGE {steps[hoveredStep].num}: {steps[hoveredStep].title}
                </h4>
                <span className="font-mono text-xs text-aqua">({steps[hoveredStep].subtitle})</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {steps[hoveredStep].desc}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default Process;
