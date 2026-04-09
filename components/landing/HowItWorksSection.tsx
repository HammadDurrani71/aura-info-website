"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { MessageSquare, ScanSearch, Navigation } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Describe",
    description:
      "Enter a natural language description or apply attribute filters like clothing color, gender, or accessories.",
    color: "#2d6aff",
    glow: "rgba(45, 106, 255, 0.4)",
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
    color: "#4da6ff",
    glow: "rgba(77, 166, 255, 0.4)",
  },
];

const ORB_HALF = 8; // w-4 h-4 → 16px / 2

export default function HowItWorksSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const iconStartRef = useRef<HTMLDivElement>(null);
  const iconEndRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const orbX = useMotionValue(0);
  const orbSpringX = useSpring(orbX, { stiffness: 200, damping: 20 });

  const updateOrbFromClientX = useCallback((clientX: number) => {
    const row = lineRef.current;
    const i1 = iconStartRef.current;
    const i3 = iconEndRef.current;
    if (!row || !i1 || !i3) return;
    const rowRect = row.getBoundingClientRect();
    const i1Rect = i1.getBoundingClientRect();
    const i3Rect = i3.getBoundingClientRect();
    const leftBound = i1Rect.left - rowRect.left;
    const rightBound = i3Rect.right - rowRect.left;
    const mouseX = clientX - rowRect.left;
    const clampedCenter = Math.min(
      Math.max(mouseX, leftBound + ORB_HALF),
      rightBound - ORB_HALF
    );
    orbX.set(clampedCenter - ORB_HALF);
  }, [orbX]);

  const centerOrbOnTrack = useCallback(() => {
    const row = lineRef.current;
    const i1 = iconStartRef.current;
    const i3 = iconEndRef.current;
    if (!row || !i1 || !i3) return;
    const rowRect = row.getBoundingClientRect();
    const i1Rect = i1.getBoundingClientRect();
    const i3Rect = i3.getBoundingClientRect();
    const leftBound = i1Rect.left - rowRect.left;
    const rightBound = i3Rect.right - rowRect.left;
    const mid = (leftBound + rightBound) / 2;
    orbX.set(mid - ORB_HALF);
  }, [orbX]);

  useEffect(() => {
    if (!isHoveringSection) return;
    const onMove = (e: MouseEvent) => updateOrbFromClientX(e.clientX);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isHoveringSection, updateOrbFromClientX]);

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-[#050a18] overflow-hidden"
      onMouseEnter={() => {
        setIsHoveringSection(true);
        requestAnimationFrame(() => centerOrbOnTrack());
      }}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2d6aff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4da6ff]/30 bg-[#4da6ff]/10 text-[#67e8f9] text-sm font-medium mb-5">
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

          {/* ── Desktop layout ── */}
          <div className="hidden lg:block">

            <div ref={lineRef} className="relative grid grid-cols-3 gap-8">
              {/* Connector line — through vertical center of icons (104px / 2 = 52px) */}
              <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-[52px] z-[5] h-px -translate-y-1/2">
                {/* Base track */}
                <div className="absolute inset-0 bg-white/5 rounded-full" />
                {/* Animated fill */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                  style={{
                    originX: 0,
                    background:
                      "linear-gradient(90deg, #2d6aff 0%, #a78bfa 50%, #4da6ff 100%)",
                  }}
                  className="absolute inset-0 rounded-full"
                />
              </div>

              {/* Cursor-following orb on connector line (desktop) */}
              <motion.div
                className="pointer-events-none absolute top-[52px] left-0 z-20 h-4 w-4 -translate-y-1/2 rounded-full"
                style={{
                  x: orbSpringX,
                  background: "#4da6ff",
                  boxShadow: "0 0 12px 4px #4da6ff",
                }}
                animate={{ opacity: isHoveringSection ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />

              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Large decorative step number */}
                    <span
                      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center text-[8rem] font-bold leading-none text-white opacity-[0.04] select-none"
                      aria-hidden
                    >
                      {step.number}
                    </span>

                    <motion.div
                      ref={i === 0 ? iconStartRef : i === 2 ? iconEndRef : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      whileHover={{ scale: 1.08 }}
                      className="relative z-10 mb-8 flex h-[104px] w-[104px] shrink-0 items-center justify-center group"
                    >
                      {/* Outer ring */}
                      <div
                        className="absolute inset-0 rounded-full border opacity-20"
                        style={{ borderColor: step.color }}
                      />
                      {/* Inner circle */}
                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle, ${step.color}22 0%, ${step.color}08 100%)`,
                          border: `1.5px solid ${step.color}40`,
                        }}
                      >
                        <Icon size={30} style={{ color: step.color }} strokeWidth={1.5} />
                      </div>
                      {/* Glow on hover */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        style={{ backgroundColor: step.glow }}
                      />
                      {/* Number badge */}
                      <div
                        className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: step.color }}
                      >
                        {i + 1}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-[#e2e8f0]/55 text-base leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile layout — vertical stack, no connector line ── */}
          <div className="flex flex-col gap-10 lg:hidden">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Large decorative step number */}
                  <span
                    className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center text-[8rem] font-bold leading-none text-white opacity-[0.04] select-none"
                    aria-hidden
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 flex h-[104px] w-[104px] items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border opacity-20"
                      style={{ borderColor: step.color }}
                    />
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle, ${step.color}22 0%, ${step.color}08 100%)`,
                        border: `1.5px solid ${step.color}40`,
                      }}
                    >
                      <Icon size={30} style={{ color: step.color }} strokeWidth={1.5} />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="relative z-10 text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="relative z-10 text-[#e2e8f0]/55 text-base leading-relaxed max-w-xs">
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
          <div className="relative rounded-2xl border border-dashed border-white/10 bg-[#0a1628]/60 p-10 flex flex-col items-center justify-center gap-3 min-h-[200px]">
            <div className="flex gap-3">
              {["#2d6aff", "#a78bfa", "#4da6ff"].map((c, i) => (
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
