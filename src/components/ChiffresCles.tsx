"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ChiffresCles() {
  const { tr } = useLanguage();

  const stats = [
    {
      value: 4344827,
      suffix: "+",
      label: tr("chiffres.stat1.label"),
      sublabel: tr("chiffres.stat1.sublabel"),
      isLogo: true,
      logoSrc: "/images/Descargar vector de diseño de icono de logotipo de ojo gratis.jpg",
      icon: null,
    },
    {
      value: 25,
      suffix: "%",
      label: tr("chiffres.stat2.label"),
      sublabel: tr("chiffres.stat2.sublabel"),
      isLogo: true,
      logoSrc: "/images/Globe_Logo_PNG-removebg-preview.png",
      icon: null,
    },
    {
      value: 0,
      suffix: "",
      label: tr("chiffres.stat3.label"),
      sublabel: tr("chiffres.stat3.sublabel"),
      isText: true,
      displayText: "EHF",
      isLogo: true,
      logoSrc: "/logo/EHF_EBT_logo_pos.png",
      icon: null,
    },
  ];

  return (
    <section id="chiffres" className="py-20 md:py-28 bg-bleu-atlantique">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {tr("chiffres.title")}
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 text-white mb-6 overflow-hidden">
                {stat.isLogo ? (
                  <img
                    src={encodeURI(stat.logoSrc as string)}
                    alt={stat.label}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) parent.innerHTML = '<span class="text-2xl font-bold">EHF</span>';
                    }}
                  />
                ) : (
                  stat.icon
                )}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.isText ? (
                  <span>{stat.displayText}</span>
                ) : (
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                )}
              </div>
              <p className="text-lg font-semibold text-white">
                {stat.label}
              </p>
              <p className="text-sm text-white/80 mt-1">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
