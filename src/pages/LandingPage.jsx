import React from "react";
import Header from "../components/landing-page/Header";
import Hero from "../components/landing-page/Hero";
import Features from "../components/landing-page/Features";
import SocialProof from "../components/landing-page/SocialProof";
import Pricing from "../components/landing-page/Pricing";
import FAQ from "../components/landing-page/Faqs";
import Footer from "../components/landing-page/Footer";

export default function LandingPage() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
