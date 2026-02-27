"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Teaser-LBHX-compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-bleu-atlantique/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.img
          src="/images/story.psd.png"
          alt="Logo LBHX"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-40 sm:w-52 md:w-64 mb-6 brightness-0 invert drop-shadow-2xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-shadow-lg leading-tight"
        >
          Lacanau Beach
          <br />
          <span className="text-jaune-sable">Handball Xperience</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 font-light text-shadow"
        >
          Concept N°1 de Beach Handball en France
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl text-jaune-sable font-semibold text-shadow"
        >
          Du 12 au 14 juin 2026
        </motion.p>

        <motion.a
          href="#concept"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#concept")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 inline-block bg-orange-vif hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Découvrir l&apos;événement
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="w-8 h-8 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
