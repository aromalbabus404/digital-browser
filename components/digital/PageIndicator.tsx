"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageIndicatorProps {
  currentPage: number; // 1 to 12
  totalPages: number;  // 12
  onPageSelect?: (page: number) => void;
  className?: string;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentPage,
  totalPages = 12,
  onPageSelect,
  className = "",
}) => {
  const formattedCurrent = String(currentPage).padStart(2, "0");
  const formattedTotal = String(totalPages).padStart(2, "0");
  const progressPercent = (currentPage / totalPages) * 100;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-aqua">
        {formattedCurrent} <span className="text-slate-500">/</span> {formattedTotal}
      </span>

      {/* Progress Bar */}
      <div className="relative w-20 sm:w-32 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-aqua shadow-[0_0_8px_#00F0FF]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Interactive Dots for Desktop */}
      <div className="hidden lg:flex items-center gap-1.5 ml-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNum = index + 1;
          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              onClick={() => onPageSelect && onPageSelect(pageNum)}
              aria-label={`Jump to slide ${pageNum}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 bg-aqua shadow-[0_0_6px_#00F0FF]"
                  : "w-1.5 bg-slate-700 hover:bg-slate-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageIndicator;
