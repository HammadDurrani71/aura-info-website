"use client";

import { motion } from "framer-motion";
import { Search, Map, Bell, SlidersHorizontal, BarChart3, Target } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Natural Language Search",
    description:
      "Describe a person in plain English. AURA finds them instantly across all cameras.",
    color: "#5b67f4",
    glow: "rgba(91, 103, 244, 0.3)",
  },
  {
    icon: Map,
    title: "Cross-Camera Path Tracking",
    description:
      "Watch a person's full journey across your entire camera network on an interactive 2D map.",
    color: "#00d4ff",
    glow: "rgba(0, 212, 255, 0.3)",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Instant notifications when a watchlisted individual is detected. Location shown live on the map.",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.3)",
  },
  {
    icon: SlidersHorizontal,
    title: "Attribute-Based Filtering",
    description:
      "Filter by clothing color, gender, age group, accessories. Find who you're looking for fast.",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.3)",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Heatmaps, peak hours, customer flow patterns. Turn surveillance into business intelligence.",
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.3)",
  },
  {
    icon: Target,
    title: "Watchlist Management",
    description:
      "Add persons of interest, set alert priorities, and monitor known individuals proactively.",
    color: "#f472b6",
    glow: "rgba(244, 114, 182, 0.3)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#5b67f4]/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#5b67f4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5b67f4]/30 bg-[#5b67f4]/10 text-[#a5b4fc] text-sm font-medium mb-5">
            Platform Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">secure your space</span>
          </h2>
          <p className="text-[#e2e8f0]/50 text-lg max-w-xl mx-auto">
            Six powerful modules working in harmony — built for security teams who need speed and precision.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative p-6 rounded-2xl border border-white/8 bg-[#111118] overflow-hidden cursor-default transition-all duration-300 hover:border-white/15"
                style={{
                  background: `linear-gradient(135deg, #111118 0%, #0d0d15 100%)`,
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${feature.glow.replace("0.3", "0.08")} 0%, transparent 60%)`,
                  }}
                />

                {/* Top border glow on hover */}
                <div
                  className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.color}18`,
                    border: `1px solid ${feature.color}30`,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: feature.color }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2.5 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#e2e8f0]/50 text-sm leading-relaxed group-hover:text-[#e2e8f0]/65 transition-colors">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${feature.glow.replace("0.3", "0.15")}, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
