import React from "react";
import Hero from "@/components/home/Hero";
import StatisticsSection from "@/components/home/StatisticsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CustomerJourneySection from "@/components/home/CustomerJourneySection";
import AiCustomerSupportSection from "@/components/home/AiCustomerSupportSection";
import KnowledgeCenterSection from "@/components/home/KnowledgeCenterSection";
import ProductFeatures from "@/components/home/ProductFeatures";
import TicketingSection from "@/components/home/TicketingSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="relative bg-[#F8F9FE] dark:bg-[#080711] text-[#171B2E] dark:text-white transition-colors duration-200 overflow-x-clip max-w-full">
      <Hero />
      <StatisticsSection />
      <HowItWorksSection />
      <CustomerJourneySection />
      <AiCustomerSupportSection />
      <KnowledgeCenterSection />
      <ProductFeatures />
      <TicketingSection />
      <FinalCtaSection />
    </div>
  );
}
