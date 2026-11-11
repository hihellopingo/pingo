"use client";

import React from "react";
import {
  BookOpen,
  Package,
  FolderKanban,
  Database,
  LayoutGrid,
  ArrowDown,
} from "lucide-react";
import {
  knowledgeCenterContent,
  KnowledgeCenterSectionContent,
} from "@/data/knowledgeCenter";

export interface KnowledgeCenterSectionProps {
  data?: KnowledgeCenterSectionContent;
  className?: string;
}

export const KnowledgeCenterSection: React.FC<KnowledgeCenterSectionProps> = ({
  data = knowledgeCenterContent,
  className = "",
}) => {
  return (
    <section
      id="knowledge-center"
      aria-label="Knowledge Center Management"
      className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200 ${className}`}
    >
      {/* Background ambient lighting glows matching surrounding page sections */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#635BFF]/6 dark:bg-[#635BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[650px] h-[650px] bg-[#3984FF]/6 dark:bg-[#3984FF]/12 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-[480px] h-[480px] bg-[#20C5D8]/5 dark:bg-[#20C5D8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. SECTION HEADING                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-4">
          {/* Small Label Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <BookOpen className="w-4 h-4 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
            <span>{data.badge}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            {data.headingPart1}{" "}
            <span className="block sm:inline bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              {data.headingPart2}
            </span>
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN VISUAL: Knowledge Architecture Diagram (Seamless)  */}
        {/* ========================================================= */}
        <div className="relative mb-12 sm:mb-14 lg:mb-16">
          
          <div className="relative z-10">
            {/* ------------------------------------------------------- */}
            {/* Central Pingo Element (Top Origin Node)                  */}
            {/* ------------------------------------------------------- */}
            <div className="flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#635BFF]/35 dark:border-[#635BFF]/50 shadow-[0_8px_25px_rgba(99,91,255,0.18)] dark:shadow-[0_8px_25px_rgba(99,91,255,0.35)] transition-all duration-300 hover:scale-105">
                {/* Pingo brand P badge */}
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635BFF] via-[#3984FF] to-[#20C5D8] flex items-center justify-center text-white font-extrabold text-base shadow-sm flex-shrink-0">
                  P
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      {data.hubLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                    {data.hubSubtext}
                  </p>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------- */}
            {/* Clean Connecting Lines: Desktop SVG Branching Bus       */}
            {/* ------------------------------------------------------- */}
            <div className="hidden lg:block w-full max-w-4xl mx-auto my-1">
              <svg
                viewBox="0 0 900 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-16 sm:h-20 overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  {/* Gradients for connecting lines */}
                  <linearGradient id="busStem" x1="450" y1="0" x2="450" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#635BFF" />
                    <stop offset="1" stopColor="#3984FF" />
                  </linearGradient>
                  <linearGradient id="branchLeft" x1="450" y1="35" x2="150" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#635BFF" />
                    <stop offset="1" stopColor="#635BFF" />
                  </linearGradient>
                  <linearGradient id="branchCenter" x1="450" y1="35" x2="450" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3984FF" />
                    <stop offset="1" stopColor="#3984FF" />
                  </linearGradient>
                  <linearGradient id="branchRight" x1="450" y1="35" x2="750" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3984FF" />
                    <stop offset="1" stopColor="#20C5D8" />
                  </linearGradient>
                </defs>

                {/* Central vertical drop from Pingo */}
                <path d="M 450 0 V 35" stroke="url(#busStem)" strokeWidth="2.5" strokeDasharray="4 4" />

                {/* Branch line to Product A (Left) */}
                <path
                  d="M 450 35 C 450 60, 150 30, 150 80"
                  stroke="url(#branchLeft)"
                  strokeWidth="2.5"
                />

                {/* Vertical drop to Product B (Center) */}
                <path
                  d="M 450 35 V 80"
                  stroke="url(#branchCenter)"
                  strokeWidth="2.5"
                />

                {/* Branch line to Product C (Right) */}
                <path
                  d="M 450 35 C 450 60, 750 30, 750 80"
                  stroke="url(#branchRight)"
                  strokeWidth="2.5"
                />

                {/* Intersection Pulse Nodes */}
                <circle cx="450" cy="35" r="4.5" fill="#635BFF" className="animate-pulse" />
                <circle cx="150" cy="78" r="3.5" fill="#635BFF" />
                <circle cx="450" cy="78" r="3.5" fill="#3984FF" />
                <circle cx="750" cy="78" r="3.5" fill="#20C5D8" />
              </svg>
            </div>

            {/* Mobile / Tablet Connector Spacer */}
            <div className="lg:hidden flex justify-center py-4">
              <div className="w-[2px] h-8 bg-gradient-to-b from-[#635BFF] via-[#3984FF] to-[#20C5D8]" />
            </div>

            {/* ------------------------------------------------------- */}
            {/* Three Product Flows: Horizontal 3-Column Architecture    */}
            {/* ------------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 max-w-5xl mx-auto">
              {data.products.map((product) => {
                const colorConfig =
                  product.color === "violet"
                    ? {
                        primaryHex: "#635BFF",
                        badgeBg: "bg-[#EDE9FE] dark:bg-[#25224A]",
                        badgeText: "text-[#635BFF] dark:text-[#A5A0FF]",
                        borderAccent: "border-[#635BFF]/35 dark:border-[#635BFF]/50",
                        glowColor: "rgba(99,91,255,0.12)",
                        connectorStroke: "from-[#635BFF] to-[#635BFF]/40",
                        cardBg: "bg-[#FFFFFF] dark:bg-[#171A2E]",
                      }
                    : product.color === "blue"
                    ? {
                        primaryHex: "#3984FF",
                        badgeBg: "bg-[#E0F2FE] dark:bg-[#142A3D]",
                        badgeText: "text-[#0284C7] dark:text-[#38BDF8]",
                        borderAccent: "border-[#3984FF]/35 dark:border-[#3984FF]/50",
                        glowColor: "rgba(57,132,255,0.12)",
                        connectorStroke: "from-[#3984FF] to-[#3984FF]/40",
                        cardBg: "bg-[#FFFFFF] dark:bg-[#171A2E]",
                      }
                    : {
                        primaryHex: "#20C5D8",
                        badgeBg: "bg-[#E0F7FA] dark:bg-[#122E3B]",
                        badgeText: "text-[#00A3C4] dark:text-[#20C5D8]",
                        borderAccent: "border-[#20C5D8]/35 dark:border-[#20C5D8]/50",
                        glowColor: "rgba(32,197,216,0.12)",
                        connectorStroke: "from-[#20C5D8] to-[#20C5D8]/40",
                        cardBg: "bg-[#FFFFFF] dark:bg-[#171A2E]",
                      };

                return (
                  <div
                    key={product.id}
                    className="flex flex-col items-center space-y-3 relative group"
                  >
                    {/* NODE 1: Product Element */}
                    <div
                      className={`w-full ${colorConfig.cardBg} border ${colorConfig.borderAccent} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${colorConfig.badgeBg} ${colorConfig.badgeText} flex items-center justify-center flex-shrink-0 shadow-xs`}
                        >
                          <Package className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] truncate">
                              {product.productLabel}
                            </h4>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colorConfig.badgeBg} ${colorConfig.badgeText}`}
                            >
                              {product.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] truncate">
                            Product Boundary
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* VERTICAL CONNECTOR 1 */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-[2px] h-5 bg-gradient-to-b ${colorConfig.connectorStroke}`}
                      />
                      <ArrowDown
                        className="w-3.5 h-3.5 -mt-0.5"
                        style={{ color: colorConfig.primaryHex }}
                      />
                    </div>

                    {/* NODE 2: Dedicated Knowledge Center Element */}
                    <div
                      className={`w-full ${colorConfig.cardBg} border ${colorConfig.borderAccent} rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 relative`}
                      style={{
                        boxShadow: `0 8px 24px -6px ${colorConfig.glowColor}`,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${colorConfig.badgeBg} ${colorConfig.badgeText} flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5`}
                        >
                          <FolderKanban className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider block ${colorConfig.badgeText} mb-0.5`}
                          >
                            Workspace Layer
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                            {product.centerTitle}
                          </h4>
                          <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] leading-snug mt-1">
                            {product.centerDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* VERTICAL CONNECTOR 2 */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-[2px] h-5 bg-gradient-to-b ${colorConfig.connectorStroke}`}
                      />
                      <ArrowDown
                        className="w-3.5 h-3.5 -mt-0.5"
                        style={{ color: colorConfig.primaryHex }}
                      />
                    </div>

                    {/* NODE 3: Separate Knowledge Base Element */}
                    <div
                      className={`w-full ${colorConfig.cardBg} border ${colorConfig.borderAccent} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${colorConfig.badgeBg} ${colorConfig.badgeText} flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5`}
                        >
                          <Database className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider block ${colorConfig.badgeText} mb-0.5`}
                          >
                            Storage Layer
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                            {product.baseTitle}
                          </h4>
                          <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] leading-snug mt-1">
                            {product.baseDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. BOTTOM BENEFITS: Seamless Horizontal Layout             */}
        {/* ========================================================= */}
        <div className="border-t border-[#E5E7F0] dark:border-[#292D45] pt-10 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E5E7F0] dark:divide-[#292D45]">
            {data.benefits.map((benefit, idx) => {
              const iconStyles =
                idx === 0
                  ? {
                      bg: "bg-[#635BFF]/10 dark:bg-[#635BFF]/20 text-[#635BFF] dark:text-[#A5A0FF] border-[#635BFF]/20",
                      Icon: FolderKanban,
                    }
                  : idx === 1
                  ? {
                      bg: "bg-[#3984FF]/10 dark:bg-[#3984FF]/20 text-[#3984FF] dark:text-[#38BDF8] border-[#3984FF]/20",
                      Icon: Database,
                    }
                  : {
                      bg: "bg-[#20C5D8]/10 dark:bg-[#20C5D8]/20 text-[#00A3C4] dark:text-[#20C5D8] border-[#20C5D8]/25",
                      Icon: LayoutGrid,
                    };

              const IconComponent = iconStyles.Icon;

              return (
                <div
                  key={benefit.id}
                  className={`flex items-start gap-4 ${
                    idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""
                  }`}
                >
                  {/* Small elegant icon */}
                  <div
                    className={`w-10 h-10 rounded-xl ${iconStyles.bg} border flex items-center justify-center flex-shrink-0 shadow-xs`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Text content */}
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default KnowledgeCenterSection;
