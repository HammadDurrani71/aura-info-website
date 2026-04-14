"use client";

import { motion } from "framer-motion";

const DEMO_VIDEO_ID = "eG1Ktc02rko";

export default function UseCasesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050a18] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d6aff]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4da6ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          id="demo-video"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 scroll-mt-44"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2d6aff]/30 bg-[#2d6aff]/10 text-[#a5b4fc] text-sm font-medium mb-5">
            Product demo
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            See AURA <span className="gradient-text">in action</span>
          </h2>
          <p className="text-[#e2e8f0]/50 text-lg max-w-xl mx-auto">
            Watch how AURA turns natural-language search into live tracking on your camera network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative rounded-2xl border border-white/10 bg-[#0a1628] overflow-hidden shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#060d1f]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden />
            <div className="flex-1 mx-4 h-7 rounded-lg bg-white/5 flex items-center justify-center px-3 min-w-0">
              <span className="text-xs text-white/40 truncate">
                youtu.be/{DEMO_VIDEO_ID}
              </span>
            </div>
          </div>

          <div className="relative w-full aspect-video bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?rel=0&modestbranding=1`}
              title="AURA product demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
