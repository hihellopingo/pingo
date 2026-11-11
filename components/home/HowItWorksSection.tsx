"use client";

import React, { useState, useEffect, useRef } from "react";
import { howItWorksSetupData } from "@/data/howItWorks";
import SetupWorkflowPreview from "./SetupWorkflowPreview";
import { CheckCircle2 } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const data = howItWorksSetupData;

  // High-performance step detection via IntersectionObserver (runs off main thread, zero layout thrashing)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step-index"));
            if (!isNaN(index)) {
              setActiveStep(index);
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
  }, [data.steps.length]);

  return (
    <section
      id="how-it-works"
      aria-label="How Pingo Works"
      className="relative py-16 sm:py-24 lg:py-32 z-10 bg-[#F8F9FE] dark:bg-[#080711] border-y border-[#E5E7F0] dark:border-white/[0.06] transition-colors duration-200 overflow-hidden"
    >
      {/* Background ambient radial glow accents */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. MASTER SECTION HEADER                                   */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.sectionLabel}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171B2E] dark:text-white leading-tight">
            From Setup to{" "}
            <span className="bg-gradient-to-r from-[#782BFF] via-[#A855F7] to-[#3984FF] dark:from-[#A855F7] dark:via-[#B57CFF] dark:to-[#782BFF] bg-clip-text text-transparent">
              Smarter Conversations.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E647E] dark:text-[#D5D0E5] leading-relaxed max-w-2xl mx-auto font-normal">
            {data.description}
          </p>
        </div>

        {/* Workflow Title Bar (Clean, no link pills) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-[#141126]/90 dark:to-[#100D1D]/90 border border-[#E5E7F0] dark:border-white/[0.08] shadow-sm dark:shadow-none mb-8 md:mb-12">
          <div className="space-y-1 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#782BFF] dark:text-[#B5FF45] uppercase">
                {data.workflowLabel}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#782BFF] dark:bg-[#B5FF45]" />
              <span className="text-xs text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono">
                Scroll to explore the setup workflow
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-white tracking-tight">
              {data.workflowHeading}
            </h3>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. TAWK.TO 2-COLUMN SCROLL LAYOUT                         */}
        {/* ========================================================= */}
        <div className="mt-6 md:mt-14 md:grid md:grid-cols-[1fr_1.1fr] md:gap-14">
          {/* Left Column: Natural scrolling steps */}
          <div className="relative md:pl-9">
            {/* Vertical connecting line */}
            <div
              aria-hidden="true"
              className="absolute bottom-24 left-[9px] top-24 hidden w-px bg-black/[0.08] dark:bg-white/[0.08] md:block"
            >
              <div
                className="w-full bg-gradient-to-b from-[#782BFF] to-[#3984FF] dark:from-[#782BFF]/40 dark:to-[#B5FF45] transition-[height] duration-300"
                style={{
                  height: `${((activeStep + 0.5) / data.steps.length) * 100}%`,
                }}
              />
            </div>

            {/* Steps in vertical scroll flow */}
            {data.steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.id}
                  data-step-index={idx}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className={`relative py-8 sm:py-14 md:py-24 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-35"
                  }`}
                >
                  {/* Glowing Node on the line */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-9 top-[104px] hidden h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 md:flex ${
                      isActive
                        ? "border-[#782BFF] dark:border-[#B5FF45] shadow-[0_0_14px_rgba(120,43,255,0.4)] dark:shadow-[0_0_14px_rgba(181,255,69,0.5)]"
                        : "border-slate-300 dark:border-white/20"
                    } bg-white dark:bg-[#080711]`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-[#782BFF] dark:bg-[#B5FF45]"
                          : "bg-transparent"
                      }`}
                    />
                  </span>

                  {/* Step Header */}
                  <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#782BFF] dark:text-[#B5FF45] md:text-left flex items-center justify-center md:justify-start gap-2">
                    <span>· {step.stepNumber}</span>
                    <span className="text-[#5E647E] dark:text-[#D5D0E5]/60">({step.badge})</span>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-2.5 text-center text-xl font-semibold tracking-[-0.015em] text-[#171B2E] dark:text-white md:text-left md:text-[22px]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-[1.65] text-[#5E647E] dark:text-[#D5D0E5] md:mx-0 md:text-left">
                    {step.description}
                  </p>

                  {/* Status Indicator */}
                  <div className="mt-4 flex justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 border border-[#782BFF]/30 dark:border-[#B5FF45]/30 text-[#782BFF] dark:text-[#B5FF45]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {step.statusText}
                    </span>
                  </div>

                  {/* Mobile Preview (under each step on small screens) */}
                  <div className="mt-6 md:hidden">
                    <SetupWorkflowPreview activeStep={idx} />
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
                    "radial-gradient(ellipse at 60% 40%, rgba(120,43,255,0.18), transparent 65%)",
                  filter: "blur(14px)",
                }}
              />
              <SetupWorkflowPreview activeStep={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
