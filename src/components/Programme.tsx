"use client";

import { motion } from "framer-motion";

const events = [
  {
    date: "11 Juin",
    title: "Soirée Partenaires",
    description: "Lancement officiel avec nos partenaires pour ouvrir les festivités.",
    accent: "bg-bleu-clair",
  },
  {
    date: "12 Juin",
    title: "Cérémonie d'ouverture",
    description: "Coup d'envoi du LBHX 2026 avec la parade des équipes.",
    accent: "bg-orange-vif",
  },
  {
    date: "12–13 Juin",
    title: "Matchs en nocturne",
    description: "Vivez l'intensité du Beach Handball sous les projecteurs, face à l'océan.",
    accent: "bg-bleu-clair",
  },
  {
    date: "12–14 Juin",
    title: "Tournoi international Adultes",
    description:
      "Compétition Hommes et Femmes avec la présence de l'Équipe de France A Masculine.",
    accent: "bg-orange-vif",
  },
  {
    date: "13–14 Juin",
    title: "Tournoi Jeunes & Shoot-out Contest",
    description: "Place à la relève ! Tournoi dédié aux jeunes talents et concours de tirs spectaculaires.",
    accent: "bg-bleu-clair",
  },
  {
    date: "Dimanche 14 Juin",
    title: "Les Finales & Shoot-out Contest",
    description:
      "Le All-Star Game du Beach Handball. Finales épiques pour clôturer le LBHX 2026.",
    accent: "bg-bleu-clair",
  },
];

export default function Programme() {
  return (
    <section id="programme" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/IMG_7615.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-bleu-atlantique">
            Programme 2026
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-bleu-atlantique/60 text-lg">
            Lacanau Océan — Maison de la Glisse
          </p>
        </motion.div>

        {/* Photo gallery */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="/images/IMG_7615.jpg"
              alt="Coucher de soleil sur le terrain de Beach Handball à Lacanau"
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bleu-atlantique/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-base md:text-lg font-semibold text-shadow">
                Matchs au coucher de soleil face à l&apos;Atlantique
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="/images/DSC01964.jpg"
              alt="Match nocturne au LBHX"
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bleu-atlantique/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-base md:text-lg font-semibold text-shadow">
                Compétition nocturne
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-bleu-clair/30 md:-translate-x-px" />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start mb-10 md:mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10">
                  <div className={`w-full h-full rounded-full ${event.accent}`} />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-bleu-clair/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${event.accent}`}
                    >
                      {event.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-bleu-atlantique">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-bleu-atlantique/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
