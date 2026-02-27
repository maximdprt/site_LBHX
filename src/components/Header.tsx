"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le Concept", href: "#concept" },
  { label: "Programme 2026", href: "#programme" },
  { label: "Engagements", href: "#engagements" },
  { label: "Chiffres Clés", href: "#chiffres" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

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
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#accueil");
            }}
            className="flex items-center gap-3"
          >
            <img
              src="/images/story.psd.png"
              alt="Logo LBHX"
              className="h-12 md:h-16 w-auto drop-shadow-lg brightness-0 invert"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base md:text-lg tracking-tight">
                LBHX
              </span>
              <span className="text-jaune-sable text-[10px] md:text-xs font-medium hidden sm:block">
                Beach Handball Xperience
              </span>
            </div>
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
                className="px-3 py-2 text-sm text-white/90 hover:text-jaune-sable font-medium transition-colors duration-200 rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
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
              className="block px-4 py-3 text-white/90 hover:text-jaune-sable hover:bg-white/10 rounded-md font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
