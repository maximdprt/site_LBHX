"use client";

import { motion } from "framer-motion";

export default function Concept() {
  return (
    <section id="concept" className="py-20 md:py-28 bg-blanc-sable overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-bleu-atlantique">
            Le Concept
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
        </motion.div>

        {/* Main layout: image collage + text */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left: Image collage (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative"
          >
            {/* Main match photo */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/IMG_7652.jpg"
                alt="Match de Beach Handball au LBHX avec le public et l'océan en arrière-plan"
                className="w-full h-[350px] sm:h-[420px] md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bleu-atlantique/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-orange-vif/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Compétition internationale
                  </span>
                  <span className="bg-bleu-clair/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Face à l&apos;Atlantique
                  </span>
                </div>
              </div>
            </div>

            {/* Floating affiche */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-10 -right-4 md:-right-8 w-40 md:w-52 z-20 hidden sm:block"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/affiche sans logo.png"
                  alt="Affiche officielle du LBHX 2026"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-orange-vif/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-jaune-sable/15 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right: Text content (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-bleu-clair/10 mb-6">
              <p className="text-base md:text-lg leading-relaxed text-bleu-atlantique/80">
                Créé à l&apos;initiative de{" "}
                <span className="font-semibold text-bleu-atlantique">
                  Paul Mourioux, Rémi Desbonnet, Hubert Gaget et Thierry Mayeur
                </span>{" "}
                en 2021, le LBHX est le tournoi de Beach Handball international
                et mixte qui mêle compétition et ambiance festive au bord de
                l&apos;Atlantique.
              </p>
            </div>

            <div className="bg-bleu-atlantique rounded-2xl p-6 md:p-8 shadow-lg mb-6">
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                Plus qu&apos;un simple tournoi, c&apos;est une véritable{" "}
                <span className="text-jaune-sable font-semibold">
                  vitrine du Beach Handball
                </span>{" "}
                où le public peut aussi découvrir la discipline grâce à des
                initiations et profiter d&apos;animations variées.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-bleu-clair/10 border border-bleu-clair/20 px-4 py-2.5 rounded-xl">
                <svg className="w-5 h-5 text-bleu-clair" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-bleu-atlantique">
                  International
                </span>
              </div>
              <div className="flex items-center gap-2 bg-orange-vif/10 border border-orange-vif/20 px-4 py-2.5 rounded-xl">
                <svg className="w-5 h-5 text-orange-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-semibold text-bleu-atlantique">
                  Mixte
                </span>
              </div>
              <div className="flex items-center gap-2 bg-jaune-sable/15 border border-jaune-sable/25 px-4 py-2.5 rounded-xl">
                <svg className="w-5 h-5 text-orange-vif" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-bleu-atlantique">
                  Festif
                </span>
              </div>
            </div>

            {/* Affiche mobile only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:hidden"
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img
                  src="/images/affiche sans logo.png"
                  alt="Affiche officielle du LBHX 2026"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
