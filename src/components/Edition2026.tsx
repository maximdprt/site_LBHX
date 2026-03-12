"use client";

import { motion } from "framer-motion";

export default function Edition2026() {
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
            Édition 2026
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Découvrez l&apos;affiche officielle et les documents clés de
            l&apos;édition 2026 du Lacanau Beach Handball Xperience.
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
              Affiche officielle — Tournoi 12–14 juin 2026
            </p>
          </div>
          <div className="bg-bleu-atlantique/40 flex items-center justify-center">
            <img
              src="/images/canva-horizontal.png"
              alt="Affiche horizontale LBHX 2026"
              className="w-full max-h-[420px] object-contain"
            />
          </div>
        </motion.div>

        {/* Liens de ressources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          <a
            href="https://www.canva.com/design/DAG5JDpHfjs/vn2MwU30AQtyWoKOIwPLiA/edit?utm_content=DAG5JDpHfjs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-lg">📄</span>
            <span>Plaquette Partenaires</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1Rv5l1lYGuMUXlYf4hx8-yq_YDt1k5eEm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-lg">🇫🇷</span>
            <span>Plaquette Participants (FR)</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1K3833shCZ1K0NdstoZxUIg2HmEWSyFZq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-lg">🇬🇧</span>
            <span>Plaquette Participants (EN)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

