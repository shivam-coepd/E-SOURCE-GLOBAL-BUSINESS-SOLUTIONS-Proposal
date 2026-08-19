import Header from "./components/Header";
import Hero from "./components/Hero";
import DualWing from "./components/DualWing";
import Landscape from "./components/Landscape";
import Roadmap from "./components/Roadmap";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DualWing />
        <Landscape />
        <Roadmap />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
