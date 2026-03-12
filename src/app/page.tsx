"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Edition2026 from "@/components/Edition2026";
import Concept from "@/components/Concept";
import Programme from "@/components/Programme";
import Engagements from "@/components/Engagements";
import ChiffresCles from "@/components/ChiffresCles";
import Partenaires from "@/components/Partenaires";
import Boutique from "@/components/Boutique";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Edition2026 />
        <Concept />
        <Programme />
        <Engagements />
        <ChiffresCles />
        <Partenaires />
        <Boutique />
      </main>
      <Footer />
      <LanguageSwitcher />
    </LanguageProvider>
  );
}
