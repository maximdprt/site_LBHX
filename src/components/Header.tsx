"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const HELLOASSO_URL =
  "https://www.helloasso.com/associations/lacanau-ocehand/evenements/lacanau-beach-handball-xperience";

export default function Header() {
  const { tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: tr("nav.accueil"), href: "#accueil" },
    { label: tr("nav.edition"), href: "#edition-2026" },
    { label: tr("nav.programme"), href: "#programme" },
    { label: tr("nav.partenaires"), href: "#partenaires" },
    { label: tr("nav.boutique"), href: "#boutique" },
    { label: tr("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bleu-atlantique/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex flex-col leading-tight gap-1 mt-12 md:mt-14">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#accueil");
              }}
              className="flex flex-col"
            >
              <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
                LBHX
              </span>
              <span className="text-white/90 text-xs md:text-sm font-medium hidden sm:block">
                Lacanau Beach Handball Xperience
              </span>
            </a>
            <div className="flex items-center gap-2 mt-1">
              <a
                href="https://www.facebook.com/LacanauBeachHandXperience"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-bleu-atlantique flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lacanauxperience/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-bleu-atlantique flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zm6.406-1.683a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lacanau-beach-handball-xperience/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-bleu-atlantique flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.1h4.4V24H.3V8.1zM8.339 8.1h4.215v2.163h.06c.586-1.11 2.017-2.283 4.152-2.283 4.44 0 5.261 2.924 5.261 6.722V24h-4.4v-8.036c0-1.916-.034-4.377-2.668-4.377-2.67 0-3.079 2.086-3.079 4.243V24h-4.4V8.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="px-3 py-2 text-base text-white hover:text-white/90 font-medium transition-colors duration-200 rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={HELLOASSO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {tr("nav.inscription")}
            </a>
          </nav>

          {/* Mobile: inscription + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={HELLOASSO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-3 py-2 rounded-full shadow-md transition-all duration-300"
            >
              {tr("nav.inscriptionShort")}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-bleu-atlantique/95 backdrop-blur-md px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className="block px-4 py-3 text-base text-white hover:text-white/90 hover:bg-white/10 rounded-md font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
