"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Programme", href: "#programme" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Boutique", href: "#boutique" },
  { label: "Contact", href: "#contact" },
];

const HELLOASSO_URL = "https://www.helloasso.com/associations/lacanau-ocean-handball/evenements/lacanau-beach-handball-xperience-2026";

export default function Header() {
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
          {/* Site name */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#accueil");
            }}
            className="flex flex-col leading-tight"
          >
            <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
              LBHX
            </span>
            <span className="text-white/90 text-xs md:text-sm font-medium hidden sm:block">
              Lacanau Beach Handball Xperience
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
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
              Inscrire mon équipe
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
              Inscription
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
