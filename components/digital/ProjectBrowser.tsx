"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Eye } from "lucide-react";
import { getWhatsAppLink } from "./WhatsAppButton";

interface ProjectBrowserProps {
  onOpenProjectDetail: (project: Project) => void;
}

export const ProjectBrowser: React.FC<ProjectBrowserProps> = ({ onOpenProjectDetail }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const project: Project = projectsData[currentIdx];
  const totalProjects = projectsData.length;

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
              05 — FEATURED REALIZATIONS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              PROJECT BROWSER
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-aqua font-bold">
              {String(currentIdx + 1).padStart(2, "0")} / {String(totalProjects).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Project"
                className="p-2.5 rounded glass-panel hover:bg-white/10 text-white transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-aqua" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Project"
                className="p-2.5 rounded glass-panel hover:bg-white/10 text-white transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-aqua" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Architectural Card Display */}
        <div className="relative rounded-xl overflow-hidden glass-panel border border-white/15 shadow-2xl min-h-[450px] sm:min-h-[520px] flex flex-col justify-end p-6 sm:p-12 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
            </motion.div>
          </AnimatePresence>

          {/* Project Details Overlay Card */}
          <div className="relative z-10 max-w-3xl space-y-4">
            <motion.div
              key={project.id + "-info"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold text-slate-950 bg-aqua px-3 py-1 rounded-sm uppercase tracking-wider shadow-[0_0_12px_#00F0FF]">
                  PROJECT {String(currentIdx + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-slate-300 uppercase tracking-widest bg-slate-900/80 px-3 py-1 rounded border border-white/10">
                  {project.type}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
                {project.title}
              </h3>

              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-aqua uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-aqua shrink-0" />
                <span>{project.location}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{project.completionYear}</span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl line-clamp-2">
                {project.shortDesc}
              </p>
            </motion.div>

            {/* Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenProjectDetail(project)}
                className="btn-aqua px-6 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>VIEW PROJECT DETAILS</span>
              </button>

              <a
                href={getWhatsAppLink(`Hello Master Pools, I am interested in your ${project.title} project in ${project.location}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass px-6 py-3.5 rounded-sm text-xs font-mono tracking-widest uppercase text-emerald-400 hover:text-emerald-300 hover:border-emerald-400/50"
              >
                WHATSAPP ENQUIRY
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default ProjectBrowser;
