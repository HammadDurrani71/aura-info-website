"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

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
    <footer id="contact" className="relative bg-[#050a18] border-t border-white/5 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#2d6aff]/30 to-transparent" />

      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2d6aff]/5 rounded-full blur-[120px] pointer-events-none" />

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
            href="mailto:hammad.durrani7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2d6aff] to-[#1a56e8] text-white font-semibold text-base hover:from-[#4d80ff] hover:to-[#2d6aff] transition-all duration-300 shadow-lg shadow-[#2d6aff]/30 hover:shadow-[#2d6aff]/50 hover:scale-[1.02]"
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
              <Image
                src="/aura_logo-no_background_cropped.png"
                alt="AURA"
                width={192}
                height={192}
                className="object-contain h-20 w-auto"
              />
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
              href="mailto:hammad.durrani7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#4da6ff] hover:text-white transition-colors duration-200 group"
            >
              <Mail size={14} />
              hammad.durrani7@gmail.com
              <ExternalLink
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.instagram.com/aura_uowd?igsh=MWFoeDRmbzAza2YxNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#e2e8f0]/50 hover:text-[#f472b6] transition-colors duration-200 group"
            >
              {/* Instagram SVG — lucide dropped this icon in recent versions */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @aura_uowd
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
            © 2026 Team VisionLink ·{" "}
            <a
              href="http://uowdubai.ac.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-[#4da6ff]/75 hover:decoration-[#4da6ff]/40"
            >
              University of Wollongong Dubai
            </a>
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
