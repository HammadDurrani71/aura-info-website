"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, ScanSearch, Navigation } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Describe",
    description:
      "Enter a natural language description or apply attribute filters like clothing color, gender, or accessories.",
    color: "#5b67f4",
    glow: "rgba(91, 103, 244, 0.4)",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Search",
    description:
      "AURA scans your entire camera network and returns timestamped matches ranked by confidence.",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.4)",
  },
  {
    number: "03",
    icon: Navigation,
    title: "Track",
    description:
      "Select a match and watch their full path light up on the 2D mall map in real-time.",
    color: "#00d4ff",
    glow: "rgba(0, 212, 255, 0.4)",
  },
];

export default function HowItWorksSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#5b67f4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#67e8f9] text-sm font-medium mb-5">
            Simple Workflow
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            From description to location{" "}
            <span className="gradient-text">in seconds</span>
          </h2>
          <p className="text-[#e2e8f0]/50 text-lg max-w-xl mx-auto">
            Three intuitive steps powered by computer vision and natural language processing.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connector line (desktop) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px"
          >
            <div className="relative w-full h-full">
              {/* Base line */}
              <div className="absolute inset-0 bg-white/5 rounded-full" />
              {/* Animated fill */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                style={{
                  originX: 0,
                  background:
                    "linear-gradient(90deg, #5b67f4 0%, #a78bfa 50%, #00d4ff 100%)",
                }}
                className="absolute inset-0 rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center lg:items-start lg:text-left group"
                >
                  {/* Step icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative w-[104px] h-[104px] flex items-center justify-center mb-6"
                  >
                    {/* Outer ring */}
                    <div
                      className="absolute inset-0 rounded-full border opacity-20"
                      style={{ borderColor: step.color }}
                    />
                    {/* Inner filled circle */}
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle, ${step.color}22 0%, ${step.color}08 100%)`,
                        border: `1.5px solid ${step.color}40`,
                      }}
                    >
                      <Icon
                        size={30}
                        style={{ color: step.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{ backgroundColor: step.glow }}
                    />
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </motion.div>

                  {/* Large number background */}
                  <div className="relative mb-3">
                    <span
                      className="text-8xl font-black leading-none select-none pointer-events-none absolute -top-6 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-5"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white relative z-10">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-[#e2e8f0]/55 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 w-full"
        >
          <div className="relative rounded-2xl border border-dashed border-white/10 bg-[#111118]/60 p-10 flex flex-col items-center justify-center gap-3 min-h-[200px]">
            <div className="flex gap-3">
              {["#5b67f4", "#a78bfa", "#00d4ff"].map((c, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: c, animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-[#e2e8f0]/30 text-sm font-medium font-mono">
              [ ADD HOW IT WORKS ILLUSTRATION HERE ]
            </span>
            <span className="text-[#e2e8f0]/15 text-xs">
              Suggested: workflow diagram or animated GIF
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
