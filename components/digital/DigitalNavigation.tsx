"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, Phone, MessageCircle, Play, Pause, Sparkles } from "lucide-react";
import PageIndicator from "./PageIndicator";
import { getWhatsAppLink } from "./WhatsAppButton";
import { AnimationStyle } from "./DigitalBrowser";

interface DigitalNavigationProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
  sectionTitles: { page: number; title: string }[];
  isAutoPlay?: boolean;
  onToggleAutoPlay?: () => void;
  animationStyle?: AnimationStyle;
  onToggleAnimationStyle?: () => void;
}

export const DigitalNavigation: React.FC<DigitalNavigationProps> = ({
  currentPage,
  totalPages,
  onNavigate,
  sectionTitles,
  isAutoPlay = false,
  onToggleAutoPlay,
  animationStyle = "parallax",
  onToggleAnimationStyle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectSection = (pageNumber: number) => {
    onNavigate(pageNumber);
    setIsMenuOpen(false);
  };

  const styleLabels: Record<AnimationStyle, string> = {
    parallax: "PARALLAX",
    flip: "3D FLIP",
    vertical: "VERTICAL",
  };

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 glass-panel border-b border-white/10">
        {/* Brand Logo */}
        <button
          onClick={() => handleSelectSection(1)}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-aqua to-blue-600 flex items-center justify-center font-extrabold text-slate-950 text-sm tracking-tighter shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            MP
          </div>
          <div>
            <span className="block font-display text-base sm:text-lg font-bold tracking-widest text-white group-hover:text-aqua transition-colors">
              MASTER POOLS
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase">
              Digital Catalog • Kerala
            </span>
          </div>
        </button>

        {/* Top Right Counter, Transition Style Switcher, Auto Play Button & Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <PageIndicator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageSelect={onNavigate}
            className="hidden lg:flex"
          />

          <span className="lg:hidden font-mono text-xs font-semibold text-aqua">
            {String(currentPage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
          </span>

          {/* Animation Style Switcher */}
          {onToggleAnimationStyle && (
            <button
              onClick={onToggleAnimationStyle}
              aria-label="Switch transition animation style"
              title="Click to switch transition style (Parallax / 3D Flip / Vertical)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm glass-panel border-white/10 hover:border-aqua/50 text-slate-300 hover:text-white font-mono text-[11px] tracking-widest uppercase transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 stroke-aqua shrink-0" />
              <span className="hidden md:inline text-[10px]">{styleLabels[animationStyle]} MODE</span>
            </button>
          )}

          {/* Auto Scroll / Presentation Mode Button */}
          {onToggleAutoPlay && (
            <button
              onClick={onToggleAutoPlay}
              aria-label={isAutoPlay ? "Pause Auto Presentation" : "Start Auto Presentation"}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-sm border font-mono text-[11px] sm:text-xs tracking-widest uppercase transition-all ${
                isAutoPlay
                  ? "bg-aqua text-slate-950 font-bold border-aqua shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "glass-panel text-white border-white/10 hover:border-aqua/50 hover:text-aqua"
              }`}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-slate-950" />
                  <span className="hidden sm:inline">AUTO ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-aqua stroke-none" />
                  <span className="hidden sm:inline">AUTO PLAY</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-sm glass-panel hover:border-aqua/50 text-white font-mono text-xs tracking-widest uppercase transition-all hover:text-aqua"
          >
            <Menu className="w-4 h-4 stroke-aqua" />
            <span className="hidden sm:inline">MENU</span>
          </button>
        </div>
      </header>

      {/* Bottom Minimal Control Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 glass-panel border-t border-white/10">
        <button
          onClick={() => onNavigate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono tracking-widest uppercase transition-all ${
            currentPage === 1
              ? "opacity-30 cursor-not-allowed text-slate-500"
              : "text-white hover:text-aqua hover:bg-white/5 active:scale-95"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PREVIOUS</span>
        </button>

        {/* Center Progress Line on Mobile */}
        <div className="flex-1 max-w-[140px] sm:max-w-[220px] mx-4 md:hidden">
          <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-aqua shadow-[0_0_8px_#00F0FF] transition-all duration-300"
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => onNavigate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono tracking-widest uppercase transition-all ${
            currentPage === totalPages
              ? "opacity-30 cursor-not-allowed text-slate-500"
              : "text-white hover:text-aqua hover:bg-white/5 active:scale-95"
          }`}
        >
          <span>NEXT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

      {/* Full-Screen Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Row of Overlay */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="font-display text-xl sm:text-2xl font-bold tracking-widest text-white">
                  MASTER POOLS
                </span>
                <p className="font-mono text-xs text-aqua tracking-widest">
                  ARCHITECTURAL DIGITAL PORTFOLIO
                </p>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 sm:p-3 rounded-full glass-panel hover:bg-white/10 text-slate-300 hover:text-white transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 stroke-aqua" />
              </button>
            </div>

            {/* Middle Grid of 12 Sections */}
            <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto w-full">
              {sectionTitles.map((item) => {
                const isActive = item.page === currentPage;
                const formattedNum = String(item.page).padStart(2, "0");
                return (
                  <button
                    key={item.page}
                    onClick={() => handleSelectSection(item.page)}
                    className={`group flex items-center justify-between p-4 sm:p-5 rounded-lg border text-left transition-all ${
                      isActive
                        ? "bg-slate-900 border-aqua text-aqua shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                        : "bg-slate-900/40 border-white/10 hover:border-aqua/50 text-white hover:bg-slate-900/80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs sm:text-sm text-slate-400 group-hover:text-aqua">
                        {formattedNum}
                      </span>
                      <span className="font-display text-sm sm:text-base font-semibold tracking-wider uppercase">
                        {item.title}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-aqua shadow-[0_0_8px_#00F0FF]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left text-xs font-mono text-slate-400">
                Alappuzha • Kerala • India | +91 9020501210
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+919020501210"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm glass-panel hover:border-aqua/50 text-white text-xs font-mono uppercase"
                >
                  <Phone className="w-3.5 h-3.5 stroke-aqua" />
                  <span>Call Now</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DigitalNavigation;
