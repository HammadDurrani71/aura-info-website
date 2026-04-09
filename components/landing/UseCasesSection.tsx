"use client";

import { motion } from "framer-motion";
import { Shield, Baby, AlertTriangle, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Shoplifter Detection",
    description:
      "Security describes the suspect. AURA traces their path from entry to exit in seconds.",
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.15)",
    tag: "Loss Prevention",
  },
  {
    icon: Baby,
    emoji: "👶",
    title: "Lost Child Alert",
    description:
      "A panicked parent's description triggers an instant cross-camera search and locates the child.",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.15)",
    tag: "Child Safety",
  },
  {
    icon: AlertTriangle,
    emoji: "⚠️",
    title: "Proactive Threat Prevention",
    description:
      "A known offender enters. AURA alerts security before anything happens.",
    color: "#2d6aff",
    glow: "rgba(45, 106, 255, 0.15)",
    tag: "Threat Intelligence",
  },
  {
    icon: Building2,
    emoji: "🏢",
    title: "Corporate Campus Security",
    description:
      "Monitor office buildings and university campuses. AURA brings affordable, intelligent surveillance to any mid-sized organization.",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.15)",
    tag: "Enterprise",
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050a18] overflow-hidden">
      {/* Subtle separator top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef4444]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2d6aff]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ef4444]/30 bg-[#ef4444]/10 text-[#fca5a5] text-sm font-medium mb-5">
            Real-World Scenarios
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Built for{" "}
            <span className="gradient-text">real-world scenarios</span>
          </h2>
          <p className="text-[#e2e8f0]/50 text-lg max-w-xl mx-auto">
            From shoplifting prevention to child safety — AURA handles the scenarios that matter most.
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative rounded-2xl border border-white/8 bg-[#0a1628] p-7 overflow-hidden transition-all duration-300 hover:border-white/15"
              >
                {/* Glow background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${useCase.glow} 0%, transparent 60%)`,
                  }}
                />

                {/* Tag */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-5"
                  style={{
                    backgroundColor: `${useCase.color}15`,
                    color: useCase.color,
                    border: `1px solid ${useCase.color}25`,
                  }}
                >
                  {useCase.tag}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${useCase.color}15`,
                    border: `1px solid ${useCase.color}25`,
                  }}
                >
                  <span className="text-2xl">{useCase.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-3">
                  {useCase.title}
                </h3>
                <p className="text-[#e2e8f0]/55 text-sm leading-relaxed">
                  {useCase.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${useCase.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Quote / callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-[#e2e8f0]/35 text-sm">
            AURA is designed for security teams, mall operators, and law enforcement who need answers fast.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
