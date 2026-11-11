"use client";

import React, { useState, useEffect } from "react";
import { productFeaturesData } from "@/data/productFeatures";
import ProductFeaturePreview from "./ProductFeaturePreview";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Database,
  MessagesSquare,
  Ticket,
  Users,
  BarChart3,
  Layers,
  ShieldCheck,
};

export const ProductFeatures: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const data = productFeaturesData;
  const modules = data.modules;

  const prevIndex = (activeModuleIndex - 1 + modules.length) % modules.length;
  const nextIndex = (activeModuleIndex + 1) % modules.length;

  const handlePrev = () => {
    setActiveModuleIndex((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveModuleIndex((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modules.length]);

  // Reusable Card Renderer for Center & Flanking Cards
  const renderCard = (modIndex: number, isCenter: boolean) => {
    const mod = modules[modIndex];
    const CardIcon = iconMap[mod.iconName] || Bot;

    return (
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-4 sm:p-8 lg:p-10 rounded-3xl transition-all duration-300 ${
          isCenter
            ? "bg-white/95 dark:bg-[#141126]/95 border border-[#E5E7F0] dark:border-white/[0.08] backdrop-blur-2xl shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            : "bg-white/70 dark:bg-[#141126]/60 border border-[#E5E7F0]/60 dark:border-white/[0.05] pointer-events-none"
        }`}
      >
        {/* Left Column: Module Information */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left">
          {/* Module Header Row */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#782BFF] to-[#4C16B8] border border-violet-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(120,43,255,0.35)] flex-shrink-0">
              <CardIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#782BFF] dark:text-[#B5FF45]">
                  MODULE {mod.moduleNumber}
                </span>
                {mod.isPrimary && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 border border-[#782BFF]/30 dark:border-[#B5FF45]/30 text-[#782BFF] dark:text-[#B5FF45] text-[10px] font-mono font-semibold uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5" />
                    Primary
                  </span>
                )}
              </div>
              <span className="text-xs text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono">
                Pingo Core Platform
              </span>
            </div>
          </div>

          {/* Module Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#171B2E] dark:text-white tracking-tight leading-tight">
            {mod.title}
          </h3>

          {/* Short Descriptive Headline */}
          <p className="text-sm sm:text-base font-semibold text-[#782BFF] dark:text-[#A855F7] leading-snug">
            {mod.headline}
          </p>

          {/* Feature Explanation */}
          <p className="text-sm sm:text-base text-[#5E647E] dark:text-[#D5D0E5] leading-relaxed font-normal">
            {mod.description}
          </p>

          {/* Feature Chips */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {mod.features.map((feat) => (
                <span
                  key={feat}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#F0F2FA] dark:bg-white/[0.04] text-[#171B2E] dark:text-[#D5D0E5]/80 border border-[#E5E7F0] dark:border-white/[0.06]"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Highlighted Enterprise AI Workflows Panel (AI Automation) - fully optimized for dark theme */}
          {mod.enterpriseHighlight && (
            <div className="mt-4 p-4 rounded-xl bg-purple-50/90 dark:bg-[#100D1D] border border-purple-200 dark:border-[#782BFF]/40 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors duration-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#782BFF] dark:bg-[#B5FF45] shadow-[0_0_8px_#782BFF] dark:shadow-[0_0_8px_#B5FF45]" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#782BFF] dark:text-[#B5FF45] uppercase">
                  {mod.enterpriseHighlight.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5E647E] dark:text-[#D5D0E5] leading-relaxed font-normal">
                {mod.enterpriseHighlight.description}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Live Preview Card */}
        <div className="lg:col-span-7 relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[30px]"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(120,43,255,0.15), transparent 65%)",
              filter: "blur(14px)",
            }}
          />
          <ProductFeaturePreview activeModuleIndex={modIndex} />
        </div>
      </div>
    );
  };

  return (
    <section
      id="product-features"
      aria-label="Pingo Product Features"
      className="relative py-20 sm:py-24 lg:py-32 z-10 bg-[#F8F9FE] dark:bg-[#080711] border-b border-[#E5E7F0] dark:border-white/[0.06] transition-colors duration-200 overflow-hidden"
    >
      {/* Background ambient radial glow accents */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#782BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[650px] h-[650px] bg-[#4C16B8]/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. SECTION INTRO (TAWK.TO STYLE)                          */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-block">
            <span className="pill-badge">
              <span className="pill-dot" />
              <span>{data.sectionLabel}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171B2E] dark:text-white leading-tight">
            {data.headingPart1}{" "}
            <span className="bg-gradient-to-r from-[#782BFF] via-[#A855F7] to-[#3984FF] dark:from-[#A855F7] dark:via-[#B57CFF] dark:to-[#782BFF] bg-clip-text text-transparent">
              {data.headingPart2}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5E647E] dark:text-[#D5D0E5] leading-relaxed max-w-2xl mx-auto font-normal">
            {data.description}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. 3D FLOATING CAROUSEL WITH BLURRED PREV/NEXT SLIDES     */}
        {/* ========================================================= */}
        <div
          className="relative w-full py-4 sm:py-6 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Card Flank (Blurred Peek on Left) */}
          <div
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            aria-label={`Previous feature: ${modules[prevIndex].title}`}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-[75%] lg:-left-[68%] xl:-left-[58%] w-full max-w-4xl lg:max-w-5xl z-10 scale-[0.84] blur-[3.5px] opacity-35 hover:opacity-75 hover:blur-[1px] transition-all duration-300 cursor-pointer pointer-events-auto select-none rounded-3xl overflow-hidden shadow-2xl"
          >
            {renderCard(prevIndex, false)}
          </div>

          {/* Active Card (Center, Floating Elegantly) */}
          <div className="relative z-20 w-full max-w-5xl mx-auto animate-float-subtle">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModuleIndex}
                initial={{ opacity: 0.85, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.85, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {renderCard(activeModuleIndex, true)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Card Flank (Blurred Peek on Right) */}
          <div
            onClick={handleNext}
            role="button"
            tabIndex={0}
            aria-label={`Next feature: ${modules[nextIndex].title}`}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[75%] lg:-right-[68%] xl:-right-[58%] w-full max-w-4xl lg:max-w-5xl z-10 scale-[0.84] blur-[3.5px] opacity-35 hover:opacity-75 hover:blur-[1px] transition-all duration-300 cursor-pointer pointer-events-auto select-none rounded-3xl overflow-hidden shadow-2xl"
          >
            {renderCard(nextIndex, false)}
          </div>

          {/* Navigation Chevron Left */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous module"
            className="hidden sm:flex absolute left-1 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-[#141126]/90 border border-[#E5E7F0] dark:border-white/10 hover:border-[#782BFF] text-[#171B2E] dark:text-[#D5D0E5] hover:text-[#782BFF] dark:hover:text-white items-center justify-center backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Chevron Right */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next module"
            className="hidden sm:flex absolute right-1 sm:right-3 lg:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-[#141126]/90 border border-[#E5E7F0] dark:border-white/10 hover:border-[#782BFF] text-[#171B2E] dark:text-[#D5D0E5] hover:text-[#782BFF] dark:hover:text-white items-center justify-center backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* 3. CAROUSEL DOT INDICATORS & MOBILE CONTROLS              */}
        {/* ========================================================= */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {/* Mobile Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous module"
            className="sm:hidden p-2 rounded-full bg-white dark:bg-[#141126] border border-[#E5E7F0] dark:border-white/10 text-[#171B2E] dark:text-[#D5D0E5] shadow-md active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {modules.map((_, idx) => {
              const isActive = activeModuleIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveModuleIndex(idx)}
                  aria-label={`Go to module ${idx + 1}`}
                  aria-current={isActive}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 bg-[#782BFF] dark:bg-[#B5FF45] shadow-[0_0_8px_rgba(120,43,255,0.6)] dark:shadow-[0_0_8px_#B5FF45]"
                      : "w-2 bg-black/15 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/40"
                  }`}
                />
              );
            })}
          </div>

          {/* Mobile Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next module"
            className="sm:hidden p-2 rounded-full bg-white dark:bg-[#141126] border border-[#E5E7F0] dark:border-white/10 text-[#171B2E] dark:text-[#D5D0E5] shadow-md active:scale-95 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Editorial Tagline */}
        <p className="mx-auto mt-6 max-w-lg text-center text-xs sm:text-sm leading-relaxed text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono">
          Every module connected. One intelligent AI-powered platform for modern customer operations.
        </p>
      </div>
    </section>
  );
};

export default ProductFeatures;
