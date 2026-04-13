"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050a18] border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/aura_logo-no_background_cropped.png"
              alt="AURA"
              width={96}
              height={96}
              className="object-contain h-12 w-auto"
            />
            <div>
              <p className="text-white font-semibold tracking-[0.18em] text-sm">AURA</p>
              <p className="text-[#e2e8f0]/45 text-xs">Surveillance & Analytics Platform</p>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end w-fit text-left">
            <p className="text-[#e2e8f0]/65 text-xs uppercase tracking-[0.16em] mb-2">Get in touch</p>
            <a
              href="mailto:team.auravisionai@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#4da6ff] hover:text-white transition-colors duration-200"
            >
              <Mail size={14} />
              <span className="text-sm">team.auravisionai@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/aura_uowd?igsh=MWFoeDRmbzAza2YxNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-[#e2e8f0]/60 hover:text-[#f472b6] transition-colors duration-200"
            >
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
              <span className="text-sm">@aura_uowd</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="h-px bg-white/10 my-6" />
        <p className="text-[#e2e8f0]/35 text-xs text-center">
          © 2026 Team VisionLink. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
