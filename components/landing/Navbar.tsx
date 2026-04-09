"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050a18]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ease-in-out ${scrolled ? "h-16" : "h-32"}`}>
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/aura_logo-no_background_cropped.png"
              alt="AURA"
              width={216}
              height={216}
              className={`object-contain w-auto transition-all duration-300 ease-in-out ${scrolled ? "h-14" : "h-24"}`}
            />
            <span className={`font-bold tracking-widest text-white group-hover:text-glow transition-all duration-300 ease-in-out ${scrolled ? "text-2xl" : "text-3xl"}`}>
              AURA
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-[#e2e8f0]/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#2d6aff] to-[#4da6ff] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4da6ff] border border-[#4da6ff]/50 rounded-lg hover:bg-[#4da6ff]/10 hover:border-[#4da6ff] transition-all duration-200 hover:shadow-[0_0_15px_rgba(77,166,255,0.2)]"
            >
              Request Demo
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-[#e2e8f0]/70 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed left-0 right-0 z-40 bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/5 md:hidden transition-all duration-300 ease-in-out ${scrolled ? "top-16" : "top-32"}`}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base text-[#e2e8f0]/80 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 w-full py-2.5 text-sm font-medium text-[#4da6ff] border border-[#4da6ff]/50 rounded-lg hover:bg-[#4da6ff]/10 transition-all duration-200"
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
