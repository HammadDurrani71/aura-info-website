"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 80;
    const colors = ["#2d6aff", "#4da6ff", "#a78bfa"];

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 106, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function DashboardImage() {
  return (
    <div className="px-3 pb-3">
      <div
        className="relative overflow-hidden rounded-2xl border border-[#2d6aff]/30 bg-[#0a1628]"
        style={{ boxShadow: "0 0 40px rgba(45, 106, 255, 0.15)" }}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="/Aura_new_Dashboard.jpeg"
            alt="AURA dashboard overview"
            fill
            className="object-contain rounded-2xl"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a18] grid-bg">
      {/* Particle animation */}
      <ParticleCanvas />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2d6aff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4da6ff]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2d6aff]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2d6aff]/30 bg-[#2d6aff]/10 text-[#a5b4fc] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#4da6ff] animate-pulse" />
          AI-Powered Video Analytics Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-0"
        >
          <span className="text-white">Your Security,</span>
          <br />
          <span className="gradient-text">Reinvented.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-[#e2e8f0]/60 max-w-2xl leading-relaxed mb-0"
        >
          AURA transforms your existing CCTV network into an intelligent search,
          tracking, and alert system — powered by AI.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm text-[#94a3b8] mt-6 mb-10"
        >
          Democratizing intelligent video analytics for commercial spaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <button
            onClick={() => handleScroll("#how-it-works")}
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2d6aff] to-[#1a56e8] text-white font-semibold text-base hover:from-[#4d80ff] hover:to-[#2d6aff] transition-all duration-300 shadow-lg shadow-[#2d6aff]/30 hover:shadow-[#2d6aff]/50 hover:scale-[1.02]"
          >
            <Play size={16} className="group-hover:scale-110 transition-transform" />
            See How It Works
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-semibold text-base hover:border-[#4da6ff]/50 hover:text-[#4da6ff] hover:bg-[#4da6ff]/5 transition-all duration-300"
          >
            Request Demo
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Dashboard screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="w-full max-w-5xl"
        >
          <div className="relative rounded-2xl border border-white/10 bg-[#0a1628] overflow-hidden shadow-2xl shadow-black/50">
            {/* Faux browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#060d1f]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="flex-1 mx-4 h-6 rounded bg-white/5 flex items-center justify-center">
                <span className="text-xs text-white/30">aura.dashboard.app</span>
              </div>
            </div>
            <DashboardImage />
          </div>
          {/* Reflection glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#2d6aff]/20 blur-3xl rounded-full" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a18] to-transparent pointer-events-none" />
    </section>
  );
}
