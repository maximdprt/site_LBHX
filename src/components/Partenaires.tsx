"use client";

import { motion } from "framer-motion";

const partners = [
  "Ville de Lacanau",
  "Médoc Atlantique",
  "FFHandball",
  "EHF Beach Handball",
  "Gironde Habitat",
  "SMICOTOM",
  "ONF",
  "Région Nouvelle-Aquitaine",
  "Département Gironde",
  "Café Maritime",
  "Caraïbos",
];

export default function Partenaires() {
  return (
    <section id="partenaires" className="py-20 md:py-28 bg-white overflow-hidden">
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
            Nos Partenaires
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-bleu-atlantique/60 text-lg">
            Ils nous font confiance et rendent l&apos;événement possible
          </p>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <div className="w-48 h-24 bg-blanc-sable border border-bleu-clair/10 rounded-xl flex items-center justify-center px-4 hover:shadow-md transition-shadow duration-300">
                <span className="text-sm font-semibold text-bleu-atlantique/60 text-center">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p className="text-sm text-bleu-atlantique/40">
          Espace réservé — Les logos des partenaires seront intégrés prochainement
        </p>
      </div>
    </section>
  );
}
