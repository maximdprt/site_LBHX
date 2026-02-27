import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Programme from "@/components/Programme";
import Engagements from "@/components/Engagements";
import ChiffresCles from "@/components/ChiffresCles";
import Partenaires from "@/components/Partenaires";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Programme />
        <Engagements />
        <ChiffresCles />
        <Partenaires />
      </main>
      <Footer />
    </>
  );
}
