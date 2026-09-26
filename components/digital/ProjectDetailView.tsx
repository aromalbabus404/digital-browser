"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { getWhatsAppLink, WhatsAppButton } from "./WhatsAppButton";
import { X, MapPin, CheckCircle, Phone } from "lucide-react";

interface ProjectDetailViewProps {
  project: Project;
  onClose?: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(project.coverImage);

  const whatsappMessage = `Hello Master Pools, I am interested in your ${project.title} project (${project.location}).`;

  return (
    <div className="relative w-full h-full min-h-screen bg-slate-950 text-white p-6 sm:p-12 overflow-y-auto-custom">
      {/* Top Modal / Header Bar */}
      <div className="pt-16 sm:pt-20 max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
            06 — PROJECT ARCHIVE DETAIL
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            {project.title}
          </h2>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all flex items-center gap-2"
          >
            <span className="font-mono text-xs uppercase hidden sm:inline">Back to Catalog</span>
            <X className="w-6 h-6 stroke-aqua" />
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-24">
        {/* Left Column: Gallery Viewer */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Selected Image */}
          <div className="relative h-[320px] sm:h-[480px] rounded-lg overflow-hidden glass-panel border border-white/10 shadow-2xl">
            <Image
              src={activeImage}
              alt={project.title}
              fill
              priority
              className="object-cover transition-all duration-500"
            />
          </div>

          {/* Thumbnails Row */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded overflow-hidden shrink-0 transition-all border ${
                    activeImage === img
                      ? "border-aqua scale-95 shadow-[0_0_12px_#00F0FF]"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Project Technical Specs & Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-lg border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">Category</span>
                <span className="text-sm font-bold text-aqua uppercase">{project.category}</span>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">Year Built</span>
                <span className="text-sm font-bold text-white uppercase">{project.completionYear}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-aqua shrink-0" />
              <span>{project.location}</span>
            </div>

            <div>
              <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-2">DESCRIPTION</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {project.fullDesc}
              </p>
            </div>

            {/* Features List */}
            <div>
              <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-3">KEY FEATURES</h3>
              <div className="grid grid-cols-1 gap-2">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-aqua shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            {project.specs && (
              <div className="border-t border-white/10 pt-4 space-y-2">
                <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-2">TECHNICAL SPECIFICATIONS</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900/60 p-2.5 rounded">
                    <span className="text-slate-400 block">Dimensions</span>
                    <span className="font-bold text-white">{project.specs.dimensions}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded">
                    <span className="text-slate-400 block">Depth</span>
                    <span className="font-bold text-white">{project.specs.depth}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded">
                    <span className="text-slate-400 block">Finish</span>
                    <span className="font-bold text-white">{project.specs.finish}</span>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded">
                    <span className="text-slate-400 block">Volume</span>
                    <span className="font-bold text-white">{project.specs.waterVolume}</span>
                  </div>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <WhatsAppButton
                message={whatsappMessage}
                label="GET SIMILAR POOL"
                variant="button"
                size="md"
                className="w-full sm:w-auto"
              />
              <a
                href="tel:+919020501210"
                className="btn-glass px-5 py-2.5 rounded text-xs font-mono tracking-widest uppercase text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 stroke-aqua" />
                <span>CALL +91 9020501210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
