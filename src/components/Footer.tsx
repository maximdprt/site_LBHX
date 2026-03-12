"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-bleu-atlantique text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 — About */}
          <div>
            <p className="text-white leading-relaxed mb-6">
              Lacanau Beach Handball Xperience — Le concept N°1 de Beach
              Handball en France. Du 12 au 14 juin 2026 à Lacanau Océan.
            </p>
            {/* Logos */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/story.psd.png"
                alt="Logo LBHX"
                className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-lg"
              />
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-2 ring-white/30 bg-bleu-atlantique flex items-center justify-center">
                <img
                  src="/images/logo sans coupe blanc.png"
                  alt="Logo Club Handball Lacanau (blanc)"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/LacanauBeachHandXperience"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bleu-clair/30 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lacanauxperience"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bleu-clair/30 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lacanau-beach-handball-xperience/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bleu-clair/30 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.1h4.4V24H.3V8.1zM8.339 8.1h4.215v2.163h.06c.586-1.11 2.017-2.283 4.152-2.283 4.44 0 5.261 2.924 5.261 6.722V24h-4.4v-8.036c0-1.916-.034-4.377-2.668-4.377-2.67 0-3.079 2.086-3.079 4.243V24h-4.4V8.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Programme", href: "#programme" },
                { label: "Partenaires", href: "#partenaires" },
                { label: "Boutique", href: "#boutique" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white hover:text-white/90 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/80 mb-1">Organisation</p>
                <p className="text-white">
                  Paul Mourioux —{" "}
                  <a
                    href="mailto:paulmourioux@yahoo.fr"
                    className="text-white hover:underline"
                  >
                    paulmourioux@yahoo.fr
                  </a>
                </p>
                <p className="text-white mt-1">
                  Carinne Laborde —{" "}
                  <a
                    href="mailto:carinnelaborde@yahoo.fr"
                    className="text-white hover:underline"
                  >
                    carinnelaborde@yahoo.fr
                  </a>
                </p>
              </div>
              <div>
                <p className="text-sm text-white/80 mb-1">
                  Commission Partenaires
                </p>
                <p className="text-white">
                  Hubert Gaget —{" "}
                  <a
                    href="mailto:partenaires@lacanau-ocehand.fr"
                    className="text-white hover:underline"
                  >
                    partenaires@lacanau-ocehand.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            &copy; 2026 LBHX — Lacanau Beach Handball Xperience. Tous droits
            réservés.
          </p>
          <p className="text-sm text-white/80">
            Lacanau Océan — Maison de la Glisse — Entrée gratuite
          </p>
        </div>
      </div>
    </footer>
  );
}
