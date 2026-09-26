"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { productsData, Product } from "@/data/products";
import { getWhatsAppLink } from "./WhatsAppButton";
import { Eye, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface PoolEquipmentProps {
  onOpenProductDetail: (product: Product) => void;
}

export const PoolEquipment: React.FC<PoolEquipmentProps> = ({ onOpenProductDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Pumps",
    "Filters",
    "Pool Lighting",
    "Fountains",
    "Overflow Gratings",
    "Water Treatment",
    "Accessories",
  ];

  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs text-aqua tracking-widest uppercase block mb-1">
              09 — HARDWARE & ACCESSORIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              POOL EQUIPMENT
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-mono text-xs uppercase transition-all ${
                    isSelected
                      ? "bg-aqua text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                      : "glass-panel text-slate-300 hover:border-aqua/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-5 rounded-lg border border-white/10 hover:border-aqua/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-48 rounded overflow-hidden mb-4 bg-slate-900 border border-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-aqua border border-aqua/30 uppercase">
                      {product.category}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-aqua transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-xs font-light line-clamp-2 mb-3">
                    {product.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Price Banner */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 mb-4">
                    <span className="font-mono text-[10px] text-slate-400 uppercase">PRICE STATUS</span>
                    <span className="font-mono text-xs font-bold text-aqua uppercase">
                      {product.price}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="btn-glass py-2 rounded text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 stroke-aqua" />
                      <span>DETAILS</span>
                    </button>

                    <a
                      href={getWhatsAppLink(`Hello Master Pools, I would like to know the price and details of ${product.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 rounded text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                      <span>ENQUIRE</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default PoolEquipment;
