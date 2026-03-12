"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Programme() {
  const { tr } = useLanguage();

  const events = [
    { date: tr("programme.ev1.date"), title: tr("programme.ev1.title"), description: tr("programme.ev1.desc"), accent: "bg-bleu-clair" },
    { date: tr("programme.ev2.date"), title: tr("programme.ev2.title"), description: tr("programme.ev2.desc"), accent: "bg-orange-vif" },
    { date: tr("programme.ev3.date"), title: tr("programme.ev3.title"), description: tr("programme.ev3.desc"), accent: "bg-bleu-clair" },
    { date: tr("programme.ev4.date"), title: tr("programme.ev4.title"), description: tr("programme.ev4.desc"), accent: "bg-orange-vif" },
    { date: tr("programme.ev5.date"), title: tr("programme.ev5.title"), description: tr("programme.ev5.desc"), accent: "bg-bleu-clair" },
    { date: tr("programme.ev6.date"), title: tr("programme.ev6.title"), description: tr("programme.ev6.desc"), accent: "bg-bleu-clair" },
  ];

  return (
    <section id="programme" className="relative py-20 md:py-28 bg-bleu-atlantique overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/IMG_7615.jpg"
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
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {tr("programme.title")}
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-white/80 text-lg">
            {tr("programme.subtitle")}
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
                {tr("programme.photoSunset")}
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
                {tr("programme.photoNight")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Download plaquette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <a
            href="/documents/plaquette-participants.pdf"
            download="LBHX-Dossier-2026-Participants.pdf"
            className="inline-flex items-center gap-3 bg-bleu-atlantique hover:bg-bleu-atlantique/90 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {tr("programme.download")}
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/30 md:-translate-x-px" />

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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-bleu-atlantique shadow-md -translate-x-1/2 z-10">
                  <div className={`w-full h-full rounded-full ${event.accent}`} />
                </div>

                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${event.accent}`}
                    >
                      {event.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white/90">
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
