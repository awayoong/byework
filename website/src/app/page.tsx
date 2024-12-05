import React from "react";
import TopSection from "./components/TopSection";
import PricingSection from "./components/PricingSection";
import FeaturesSection from "./components/FeaturesSection";
import FlowSection from "./components/FlowSection";
import FloatingButton from "./components/FloatingButton";
import FaqSection from "./components/FaqSection";
import CompareSection from "./components/CompareSection";

export default function Home() {
  return (
    <div>
      <TopSection />
      <PricingSection />
      <FeaturesSection />
      <FlowSection />
      <FloatingButton />
      <FaqSection />
      <CompareSection />
    </div>
  );
}
