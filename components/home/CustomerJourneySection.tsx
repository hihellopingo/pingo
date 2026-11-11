"use client";

import React, { useState, useEffect, useRef } from "react";
import { customerJourneyData } from "@/data/customerJourney";
import CustomerJourneyPreview from "./CustomerJourneyPreview";

export const CustomerJourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const data = customerJourneyData;

  // High-performance stage detection via IntersectionObserver (runs off main thread, zero layout thrashing)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-stage-index"));
            if (!isNaN(index)) {
              setActiveStage(index);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -35% 0px",
        threshold: 0.15,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data.stages.length]);

  return (
    <section
      id="customer-journey"
      aria-label="Pingo Customer Journey"
      className="relative py-16 sm:py-24 lg:py-32 z-10 bg-white dark:bg-[#100D1D]/70 border-b border-[#E5E7F0] dark:border-white/[0.06] transition-colors duration-200 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER (NO DIRECT LINKS OR TABS)               */}
        {/* ========================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F6FA] dark:bg-gradient-to-r dark:from-[#141126]/90 dark:to-[#100D1D]/90 border border-[#E5E7F0] dark:border-white/[0.08] shadow-sm dark:shadow-none mb-8 md:mb-12">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#782BFF] dark:text-[#A855F7] uppercase">
                {data.workflowLabel}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#782BFF] dark:bg-[#A855F7]" />
              <span className="text-xs text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono">
                Scroll to follow the customer experience
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171B2E] dark:text-white tracking-tight">
              {data.heading}
            </h3>
            <p className="text-sm sm:text-base text-[#5E647E] dark:text-[#D5D0E5] leading-relaxed font-normal">
              {data.description}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. TAWK.TO 2-COLUMN SCROLL LAYOUT                         */}
        {/* ========================================================= */}
        <div className="mt-6 md:mt-14 md:grid md:grid-cols-[1fr_1.1fr] md:gap-14">
          {/* Left Column: Natural scrolling stages */}
          <div className="relative md:pl-9">
            {/* Vertical timeline progress track */}
            <div
              aria-hidden="true"
              className="absolute bottom-24 left-[9px] top-24 hidden w-px bg-black/[0.08] dark:bg-white/[0.08] md:block"
            >
              <div
                className="w-full bg-gradient-to-b from-[#782BFF] to-[#3984FF] dark:from-[#A855F7]/40 dark:to-[#B5FF45] transition-[height] duration-300"
                style={{
                  height: `${((activeStage + 0.5) / data.stages.length) * 100}%`,
                }}
              />
            </div>

            {/* Stage items */}
            {data.stages.map((stage, idx) => {
              const isActive = activeStage === idx;

              return (
                <div
                  key={stage.id}
                  data-stage-index={idx}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className={`relative py-8 sm:py-14 md:py-24 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-35"
                  }`}
                >
                  {/* Glowing Node on the timeline */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-9 top-[104px] hidden h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 md:flex ${
                      isActive
                        ? "border-[#782BFF] dark:border-[#B5FF45] shadow-[0_0_14px_rgba(120,43,255,0.4)] dark:shadow-[0_0_14px_rgba(181,255,69,0.5)]"
                        : "border-slate-300 dark:border-white/20"
                    } bg-[#F8F9FE] dark:bg-[#080711]`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-[#782BFF] dark:bg-[#B5FF45]"
                          : "bg-transparent"
                      }`}
                    />
                  </span>

                  {/* Stage Eyebrow / Number */}
                  <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#782BFF] dark:text-[#A855F7] md:text-left flex items-center justify-center md:justify-start gap-2">
                    <span>· {stage.stepNumber}</span>
                    <span className="text-[#5E647E] dark:text-[#D5D0E5]/60">({stage.badge})</span>
                    {stage.isConditional && (
                      <span className="px-1.5 py-0.5 rounded bg-purple-50 dark:bg-purple-500/10 text-[#782BFF] dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 text-[9px] font-mono">
                        Conditional
                      </span>
                    )}
                  </div>

                  {/* Stage Title */}
                  <h3 className="mt-2.5 text-center text-xl font-semibold tracking-[-0.015em] text-[#171B2E] dark:text-white md:text-left md:text-[22px]">
                    {stage.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-[1.65] text-[#5E647E] dark:text-[#D5D0E5] md:mx-0 md:text-left">
                    {stage.description}
                  </p>

                  {/* Conditional Condition Note */}
                  {stage.conditionalCondition && (
                    <div className="mt-3 p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 text-xs text-[#782BFF] dark:text-purple-200/90 font-mono max-w-sm mx-auto md:mx-0">
                      ℹ {stage.conditionalCondition}
                    </div>
                  )}

                  {/* Mobile Preview (under each step on small screens) */}
                  <div className="mt-6 md:hidden">
                    <CustomerJourneyPreview activeStage={idx} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky pinned miniature dashboard on desktop */}
          <div className="hidden md:block">
            <div className="sticky top-[max(6rem,calc(50vh-240px))]">
              {/* Radial ambient glow behind preview */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 rounded-[30px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.18), transparent 65%)",
                  filter: "blur(14px)",
                }}
              />
              <CustomerJourneyPreview activeStage={activeStage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;
