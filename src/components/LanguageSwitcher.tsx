"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { type Lang, langLabels } from "@/i18n/translations";

const languages: { code: Lang; flag: string; name: string }[] = [
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
];

export default function LanguageSwitcher() {
  const { lang, setLang, tr } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-[9999]">
      {/* Dropdown (opens upward) */}
      {open && (
        <div className="absolute bottom-full right-0 mb-2 w-44 bg-bleu-atlantique/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                l.code === lang
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">{l.flag}</span>
              <span>{l.name}</span>
              <span className="ml-auto text-xs text-white/50">{langLabels[l.code]}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-bleu-atlantique/90 hover:bg-bleu-atlantique backdrop-blur-md text-white font-semibold px-4 py-3 rounded-full shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
        aria-label={tr("lang.button")}
      >
        <span className="text-sm font-semibold">{langLabels[lang]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
