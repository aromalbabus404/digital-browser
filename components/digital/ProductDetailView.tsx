"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { getWhatsAppLink } from "./WhatsAppButton";
import { X, CheckCircle, Tag, Layers, Check, Phone } from "lucide-react";

interface ProductDetailViewProps {
  product: Product;
  onClose?: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onClose }) => {
  const whatsappMsg = `Hello Master Pools, I would like to know the price and details of ${product.name}.`;

  return (
    <div className="relative w-full h-full min-h-screen bg-slate-950 text-white p-6 sm:p-12 overflow-y-auto-custom">
      {/* Top Bar */}
      <div className="pt-16 sm:pt-20 max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
            10 — EQUIPMENT CATALOG SPECIFICATION
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase">
            {product.name}
          </h2>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-3 rounded-full glass-panel hover:bg-white/10 text-white transition-all flex items-center gap-2"
          >
            <span className="font-mono text-xs uppercase hidden sm:inline">Back to Equipment</span>
            <X className="w-6 h-6 stroke-aqua" />
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-24">
        {/* Left Image View */}
        <div className="lg:col-span-6">
          <div className="relative h-[340px] sm:h-[480px] rounded-lg overflow-hidden glass-panel border border-white/10 shadow-2xl">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            <div className="absolute top-4 left-4 font-mono text-xs text-slate-950 font-bold bg-aqua px-3 py-1 rounded uppercase shadow-[0_0_10px_#00F0FF]">
              {product.category}
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded border border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-300">ESTIMATED PRICE</span>
              <span className="font-mono text-sm font-extrabold text-aqua">{product.price}</span>
            </div>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-lg border border-white/10 space-y-6">
            <div>
              <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-2">OVERVIEW</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {product.fullDesc}
              </p>
            </div>

            {/* Specs Table */}
            <div>
              <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-3">TECHNICAL SPECIFICATIONS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="bg-slate-900/70 p-3 rounded border border-white/5">
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">{key}</span>
                    <span className="font-bold text-white mt-0.5 block">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-2">APPLICATIONS</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="font-mono text-xs text-slate-200 bg-slate-900 px-3 py-1.5 rounded border border-white/10 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-aqua" />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="font-mono text-xs text-aqua tracking-widest uppercase mb-2">AVAILABLE VARIANTS</h3>
              <div className="space-y-1.5">
                {product.variants.map((v) => (
                  <div key={v} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch gap-3">
              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aqua px-6 py-3.5 rounded text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Tag className="w-4 h-4" />
                <span>REQUEST PRICE ON WHATSAPP</span>
              </a>

              <a
                href="tel:+919020501210"
                className="btn-glass px-5 py-3.5 rounded text-xs font-mono uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 stroke-aqua" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
