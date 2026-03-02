"use client";

import { motion } from "framer-motion";

const partners = [
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
  { name: "EHF EBT", logo: "/logo/EHF_EBT_logo_pos.png" },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 mx-4 md:mx-6">
      <div className="w-44 md:w-52 h-24 md:h-28 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300">
        <img
          src={logo}
          alt={name}
          title={name}
          className="max-h-16 md:max-h-20 max-w-full object-contain"
        />
      </div>
    </div>
  );
}

export default function Partenaires() {
  return (
    <section id="partenaires" className="py-20 md:py-28 bg-bleu-atlantique overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Nos Partenaires
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-white/80 text-lg">
            Ils nous font confiance et rendent l&apos;événement possible
          </p>
        </motion.div>
      </div>

      {/* Marquee - two identical strips side by side for seamless loop */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-bleu-atlantique to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-bleu-atlantique to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {/* First copy */}
          {partners.map((p, i) => (
            <LogoCard key={`a-${i}`} name={p.name} logo={p.logo} />
          ))}
          {/* Second copy (identical, ensures seamless loop) */}
          {partners.map((p, i) => (
            <LogoCard key={`b-${i}`} name={p.name} logo={p.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
