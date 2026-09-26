"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getWhatsAppLink, WhatsAppButton } from "./WhatsAppButton";
import { Phone, MapPin, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    poolType: "Residential Villa Pool",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Master Pools, I would like to get a quote.\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nPool Type: ${formData.poolType}\nMessage: ${formData.message}`;
    window.open(getWhatsAppLink(text), "_blank");
    setFormSubmitted(true);
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto-custom">
      <div className="relative z-10 pt-16 sm:pt-20 max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="font-mono text-xs text-aqua tracking-widest uppercase block">
                12 — START YOUR PROJECT
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
                LET'S BUILD <br />
                <span className="bg-gradient-to-r from-aqua via-blue-400 to-white bg-clip-text text-transparent">
                  YOUR DREAM POOL.
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                Whether you are planning a private luxury villa pool, a commercial resort lagoon, or need expert pool maintenance in Kerala, Master Pools is at your service.
              </p>
            </motion.div>

            {/* Direct Contact Info List */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="tel:+919020501210"
                className="flex items-center gap-4 p-4 rounded-lg glass-panel hover:border-aqua/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-aqua/20 flex items-center justify-center shrink-0 group-hover:bg-aqua transition-colors">
                  <Phone className="w-5 h-5 stroke-aqua group-hover:stroke-slate-950" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">DIRECT PHONE</span>
                  <span className="font-display font-bold text-lg text-white group-hover:text-aqua transition-colors">
                    +91 9020501210
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg glass-panel">
                <div className="w-10 h-10 rounded-full bg-aqua/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 stroke-aqua" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">HEADQUARTERS</span>
                  <span className="font-display font-bold text-base text-white">
                    Master Pools
                  </span>
                  <span className="text-xs text-slate-300 block">Alappuzha, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                label="WHATSAPP US"
                variant="button"
                size="lg"
              />
              <a
                href="tel:+919020501210"
                className="btn-glass px-6 py-3.5 rounded text-xs font-mono uppercase tracking-wider flex items-center gap-2"
              >
                <Phone className="w-4 h-4 stroke-aqua" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Right Column Interactive Quote Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/15 shadow-2xl space-y-4">
              <div className="border-b border-white/10 pb-4">
                <h3 className="font-display font-bold text-xl text-white uppercase">
                  GET A QUOTE
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  SUBMIT DETAILS FOR INSTANT WHATSAPP CONSULTATION
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-[11px] text-slate-300 uppercase block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-900/90 border border-white/15 rounded p-3 text-sm text-white placeholder-slate-500 focus:border-aqua focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-slate-300 uppercase block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full bg-slate-900/90 border border-white/15 rounded p-3 text-sm text-white placeholder-slate-500 focus:border-aqua focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-slate-300 uppercase block mb-1">
                      Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Alappuzha / Kochi"
                      className="w-full bg-slate-900/90 border border-white/15 rounded p-3 text-sm text-white placeholder-slate-500 focus:border-aqua focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-slate-300 uppercase block mb-1">
                    Pool Category
                  </label>
                  <select
                    value={formData.poolType}
                    onChange={(e) => setFormData({ ...formData, poolType: e.target.value })}
                    className="w-full bg-slate-900/90 border border-white/15 rounded p-3 text-sm text-white focus:border-aqua focus:outline-none transition-colors"
                  >
                    <option value="Residential Villa Pool">Residential Villa Pool</option>
                    <option value="Infinity Edge Pool">Infinity Edge Pool</option>
                    <option value="Resort Commercial Pool">Resort Commercial Pool</option>
                    <option value="Rooftop Sky Pool">Rooftop Sky Pool</option>
                    <option value="Jacuzzi Hydrotherapy Pool">Jacuzzi Hydrotherapy Pool</option>
                    <option value="Pool Renovation / AMC">Pool Renovation / Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-slate-300 uppercase block mb-1">
                    Message / Project Scope
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide approximate size or site requirements..."
                    className="w-full bg-slate-900/90 border border-white/15 rounded p-3 text-sm text-white placeholder-slate-500 focus:border-aqua focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-aqua py-3.5 rounded text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST QUOTE VIA WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 sm:pb-20" />
    </section>
  );
};

export default Contact;
