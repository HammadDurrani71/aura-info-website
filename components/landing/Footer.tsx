"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#0a0a0f] border-t border-white/5 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#5b67f4]/30 to-transparent" />

      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#5b67f4]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Contact CTA section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to see{" "}
            <span className="gradient-text">AURA in action?</span>
          </h2>
          <p className="text-[#e2e8f0]/50 text-lg max-w-lg mx-auto mb-8">
            Reach out to Team VisionLink and request a live demo of the platform.
          </p>
          <a
            href="mailto:team@visionlink.ai"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5b67f4] to-[#4f58d4] text-white font-semibold text-base hover:from-[#6b77ff] hover:to-[#5b67f4] transition-all duration-300 shadow-lg shadow-[#5b67f4]/30 hover:shadow-[#5b67f4]/50 hover:scale-[1.02]"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-10" />

        {/* Footer columns */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10"
        >
          {/* Left: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                >
                  <defs>
                    <radialGradient id="eyeGradFooter" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="100%" stopColor="#5b67f4" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="16" cy="16" rx="14" ry="9" stroke="url(#eyeGradFooter)" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="4.5" fill="url(#eyeGradFooter)" />
                  <circle cx="17.5" cy="14.5" r="1.2" fill="white" opacity="0.6" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-widest text-white">AURA</span>
            </div>
            <p className="text-[#e2e8f0]/40 text-sm max-w-[200px] text-center md:text-left">
              Your security, reinvented.
            </p>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-sm text-[#e2e8f0]/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[#e2e8f0]/50 text-xs uppercase tracking-widest font-medium mb-1">
              Get in touch
            </p>
            <a
              href="mailto:team@visionlink.ai"
              className="flex items-center gap-2 text-sm text-[#00d4ff] hover:text-white transition-colors duration-200 group"
            >
              <Mail size={14} />
              team@visionlink.ai
              <ExternalLink
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="h-px bg-white/5 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#e2e8f0]/25 text-xs text-center sm:text-left">
            © 2026 Team VisionLink · University of Wollongong Dubai
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-[#e2e8f0]/25 text-xs">
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
