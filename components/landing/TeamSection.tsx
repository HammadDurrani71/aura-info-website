"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    initials: "H",
    name: "Hammad Durrani",
    role: "Frontend Lead",
    studentId: "8548535",
    gradient: "from-[#2d6aff] to-[#6b9fff]",
    ringColor: "rgba(45, 106, 255, 0.4)",
  },
  {
    initials: "U",
    name: "Usman Farooq",
    role: "Project Lead",
    studentId: "9532710",
    gradient: "from-[#4da6ff] to-[#0ea5e9]",
    ringColor: "rgba(77, 166, 255, 0.4)",
  },
  {
    initials: "R",
    name: "Rudra Lakhani",
    role: "Backend & ML",
    studentId: "8320433",
    gradient: "from-[#a78bfa] to-[#7c3aed]",
    ringColor: "rgba(167, 139, 250, 0.4)",
  },
  {
    initials: "H",
    name: "Hala Abu Salem",
    role: "ML & Attributes",
    studentId: "7826606",
    gradient: "from-[#f472b6] to-[#ec4899]",
    ringColor: "rgba(244, 114, 182, 0.4)",
  },
  {
    initials: "H",
    name: "Muhammad Hamza Siddiqui",
    role: "Security & Dashboard",
    studentId: "8699720",
    gradient: "from-[#34d399] to-[#059669]",
    ringColor: "rgba(52, 211, 153, 0.4)",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-[#050a18] overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2d6aff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 text-[#c4b5fd] text-sm font-medium mb-5">
            The People Behind AURA
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Meet{" "}
            <span className="gradient-text">Team VisionLink</span>
          </h2>

          {/* University badge */}
          <a
            href="http://uowdubai.ac.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3"
          >
            <div className="w-5 h-5 rounded bg-gradient-to-br from-[#003865] to-[#0059a3] flex items-center justify-center text-[8px] font-bold text-white">
              UW
            </div>
            <span className="text-[#e2e8f0]/40 text-sm font-medium">
              University of Wollongong Dubai
            </span>
          </a>
        </motion.div>

        {/* Team cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={`${member.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/8 bg-[#111118] w-52 cursor-default transition-all duration-300 hover:border-white/15"
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #060d1f 100%)",
              }}
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                >
                  {member.initials}
                </div>
                {/* Ring glow on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-md"
                  style={{ backgroundColor: member.ringColor }}
                />
                {/* Online indicator */}
                <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#050a18] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Name & role */}
              <div className="text-center w-full">
                <p className="text-white font-semibold text-sm">{member.name}</p>
                <p className="text-[#e2e8f0]/45 text-xs mt-0.5">{member.role}</p>
                <p className="text-[#e2e8f0]/35 text-[10px] mt-1.5 font-mono tabular-nums tracking-wide">
                  Student ID · {member.studentId}
                </p>
              </div>

              {/* Hover gradient underline */}
              <div
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full bg-gradient-to-r ${member.gradient}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Built with love tag */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[#e2e8f0]/25 text-sm mt-12"
        >
          Built with passion at UOWD · Computer Science Capstone Project 2026
        </motion.p>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center scroll-mt-28 mt-10"
        >
          <a
            href="mailto:team.auravisionai@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-[#2d6aff] to-[#1a56e8] text-white text-sm font-semibold hover:from-[#4d80ff] hover:to-[#2d6aff] transition-all duration-300 shadow-lg shadow-[#2d6aff]/25 hover:shadow-[#2d6aff]/40"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
