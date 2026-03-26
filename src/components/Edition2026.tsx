"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Edition2026() {
  const { tr } = useLanguage();

  return (
    <section
      id="edition-2026"
      className="relative py-20 md:py-28 bg-bleu-atlantique overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-orange-vif blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-bleu-clair blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {tr("edition.title")}
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            {tr("edition.subtitle")}
          </p>
        </motion.div>

        {/* Affiche horizontale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="bg-bleu-atlantique/80 px-6 py-3 text-left">
            <p className="text-sm font-semibold text-white/90 uppercase tracking-wide">
              {tr("edition.poster")}
            </p>
          </div>
          <div className="bg-bleu-atlantique/40 flex items-center justify-center">
            <img
              src="/images/canva-horizontal.png"
              alt="Affiche horizontale LBHX 2026"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </motion.div>

        {/* Liens de ressources - uniquement images cliquables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <p className="mb-4 text-center text-white/80 text-sm md:text-base">
            {tr("edition.cards.hint")}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Plaquette partenaires */}
            <a
              href="https://www.canva.com/design/DAG5JDpHfjs/vn2MwU30AQtyWoKOIwPLiA/edit?utm_content=DAG5JDpHfjs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src="/images/plaquette_partenaire.png"
                alt={tr("edition.plaquettePartenaires")}
                className="w-full h-48 md:h-52 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="px-4 py-3 bg-bleu-atlantique/90 text-white text-sm font-semibold">
                {tr("edition.card.partners")}
              </div>
            </a>

            {/* Plaquette FR */}
            <a
              href="https://drive.google.com/file/d/1fMF47XyLedKnDBclbCP9znZUMmfQQM_J/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src="/images/plaquette_francaise.png"
                alt={tr("edition.plaquetteFR")}
                className="w-full h-48 md:h-52 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="px-4 py-3 bg-bleu-atlantique/90 text-white text-sm font-semibold">
                {tr("edition.card.frTeams")}
              </div>
            </a>

            {/* Plaquette EN */}
            <a
              href="https://drive.google.com/file/d/1EGTDjdFkuzXFEa3GWHojaabTy1ZdFn-P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src="/images/plaquette_anglais.png"
                alt={tr("edition.plaquetteEN")}
                className="w-full h-48 md:h-52 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="px-4 py-3 bg-bleu-atlantique/90 text-white text-sm font-semibold">
                {tr("edition.card.enTeams")}
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
