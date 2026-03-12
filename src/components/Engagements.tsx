"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Engagements() {
  const { tr } = useLanguage();

  const engagements = [
    {
      img: "/images/Recycle editable logo, environment vector icon.jpg",
      title: tr("engagements.eco.title"),
      description: tr("engagements.eco.desc"),
    },
    {
      img: "/images/télécharger_-_2026-03-12T150830.073-removebg-preview.png",
      title: tr("engagements.social.title"),
      description: tr("engagements.social.desc"),
    },
    {
      img: "/images/télécharger - 2026-03-12T150913.991.jpg",
      title: tr("engagements.mixite.title"),
      description: tr("engagements.mixite.desc"),
    },
  ];

  return (
    <section id="engagements" className="relative py-20 md:py-28 bg-bleu-atlantique text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/IMG_7621.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">{tr("engagements.title")}</h2>
          <div className="mt-4 w-24 h-1 bg-bleu-clair mx-auto rounded-full" />
          <p className="mt-4 text-white text-lg">
            {tr("engagements.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-bleu-clair/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/15 text-white mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img
                  src={encodeURI(item.img)}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-white leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
