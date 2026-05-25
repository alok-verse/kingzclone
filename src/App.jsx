import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import LiveBanner from "./components/LiveBanner.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import MarketTicker from "./components/MarketTicker.jsx";
import Features from "./components/Features.jsx";
import VideoPreview from "./components/VideoPreview.jsx";
import Glossary from "./components/Glossary.jsx";
import TraderTools from "./components/TraderTools.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import LocationMap from "./components/LocationMap.jsx";
import Footer from "./components/Footer.jsx";
import FloatingActions from "./components/FloatingActions.jsx";

export default function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section") || window.location.hash.replace("#", "");

    if (!section) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ block: "start" });
    }, 400);
  }, []);

  return (
    <>
      <Navbar />
      <LiveBanner />
      <main>
        <Hero />
        <Stats />
        <MarketTicker />
        <Features />
        <VideoPreview />
        <Glossary />
        <TraderTools />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LocationMap />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
