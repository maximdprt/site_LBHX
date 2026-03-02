"use client";

import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "FFHandball + Ligue + Comité", logo: "/logo/ffHB + Ligue + comité.png" },
  { name: "Médoc Atlantique", logo: "/logo/medoc atlantique.png" },
  { name: "Gironde le Département", logo: "/logo/Gironde le departement.png" },
  { name: "Café Maritime", logo: "/logo/café maritime.png" },
  { name: "Caraïbos", logo: "/logo/caraibos.png" },
  { name: "ON AIR", logo: "/logo/ON AIR.png" },
  { name: "Efficity", logo: "/logo/efficity.png" },
  { name: "Gedimat", logo: "/logo/gedimat.png" },
  { name: "La Canaulaise", logo: "/logo/la canaulaise.png" },
  { name: "Les Briconautes", logo: "/logo/les briconautes.png" },
  { name: "Sunset Lacanau", logo: "/logo/sunset Lacanau.png" },
  { name: "Vital Parc", logo: "/logo/vital parc.png" },
  { name: "Banana", logo: "/logo/banana.png" },
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
              <div className="w-52 h-28 bg-blanc-sable border border-bleu-clair/10 rounded-xl flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
