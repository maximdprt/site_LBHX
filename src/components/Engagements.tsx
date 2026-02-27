"use client";

import { motion } from "framer-motion";

const engagements = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Éco-responsabilité",
    description:
      "Choix du site en lien avec l'ONF. Utilisation d'emballages réutilisables et tri des déchets avec le syndicat intercommunal SMICOTOM.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Social & Inclusion",
    description:
      "Invitations pour les publics bénéficiaires de logements sociaux (Gironde Habitat) et mise en place d'un chantier jeunes.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Mixité",
    description:
      "Événement respectant strictement la mixité concernant les participants et les récompenses.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="py-20 md:py-28 bg-bleu-atlantique text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Nos Engagements</h2>
          <div className="mt-4 w-24 h-1 bg-jaune-sable mx-auto rounded-full" />
          <p className="mt-4 text-white/70 text-lg">
            Un événement responsable et inclusif
          </p>
        </motion.div>

        {/* 3 columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-jaune-sable/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-jaune-sable/15 text-jaune-sable mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-white/75 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
