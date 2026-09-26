"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  label?: string;
  variant?: "floating" | "button" | "icon";
  size?: "sm" | "md" | "lg";
}

export const getWhatsAppLink = (customMessage?: string) => {
  const phone = "919020501210";
  const defaultText = "Hello Master Pools, I am interested in your swimming pool services.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  className = "",
  label = "WHATSAPP US",
  variant = "button",
  size = "md",
}) => {
  const link = getWhatsAppLink(message);

  if (variant === "floating") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Master Pools on WhatsApp"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 border border-emerald-300/40 backdrop-blur-md ${className}`}
      >
        <MessageCircle className="w-6 h-6 fill-slate-950 stroke-emerald-500" />
        <span className="hidden sm:inline text-xs tracking-wider uppercase">WhatsApp Us</span>
      </a>
    );
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-7 py-3.5 text-sm sm:text-base gap-2.5",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold tracking-wider uppercase rounded-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 fill-slate-950 stroke-emerald-500 shrink-0" />
      <span>{label}</span>
    </a>
  );
};

export default WhatsAppButton;
