"use client";

import { motion } from "framer-motion";

export default function Boutique() {
  return (
    <section id="boutique" className="py-20 md:py-28 bg-blanc-sable">
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
            Boutique
          </h2>
          <div className="mt-4 w-24 h-1 bg-orange-vif mx-auto rounded-full" />
          <p className="mt-4 text-bleu-atlantique/60 text-lg">
            Les produits officiels LBHX
          </p>
        </motion.div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-12 md:p-16 shadow-lg border border-bleu-clair/10 max-w-2xl mx-auto">
            <svg
              className="w-16 h-16 text-bleu-clair/40 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-bleu-atlantique mb-3">
              Bientôt disponible
            </h3>
            <p className="text-bleu-atlantique/60 text-lg">
              La boutique officielle LBHX arrive prochainement.
              <br />
              Découvrez bientôt les produits de l&apos;événement !
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
