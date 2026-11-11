"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  statisticsContent,
  StatisticItem,
  StatisticsSectionData,
} from "@/data/statistics";

export interface StatisticsSectionProps {
  content?: StatisticsSectionData;
  data?: StatisticItem[];
  className?: string;
}

function parseStatValue(raw: string) {
  const hasPlus = raw.includes("+");
  const numStr = raw.replace(/[^0-9]/g, "");
  const target = parseInt(numStr, 10);
  if (isNaN(target)) return { target: 0, suffix: raw, hasComma: false };

  return {
    target,
    suffix: hasPlus ? "+" : "",
    hasComma: target >= 1000,
  };
}

const AnimatedStatValue: React.FC<{ value: string; isVisible: boolean }> = ({
  value,
  isVisible,
}) => {
  const { target, suffix, hasComma } = parseStatValue(value);
  const [displayNumber, setDisplayNumber] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (!isVisible) return;
    if (target === 0) {
      setIsCompleted(true);
      return;
    }

    let animationFrameId: number;
    const duration = 3000; // 3 seconds count from 0 to target
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Decelerating easeOutQuart curve: rapid high-speed counting that smoothly lands on the target
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(target * easeProgress);

      setDisplayNumber(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayNumber(target);
        setIsCompleted(true);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target]);

  if (!isVisible) {
    return <span>0{suffix}</span>;
  }

  if (isCompleted) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {hasComma ? displayNumber.toLocaleString() : displayNumber}
      {suffix}
    </span>
  );
};

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  content = statisticsContent,
  data,
  className = "",
}) => {
  const items = data || content.items;
  const heading = content.heading;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only starts counting when user scrolls and reaches that part of the page
    let scrollTriggered = false;

    const onScrollCheck = () => {
      if (window.scrollY > 40) {
        scrollTriggered = true;
      }
    };
    window.addEventListener("scroll", onScrollCheck, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (window.scrollY > 40 || scrollTriggered) {
            setIsVisible(true);
            observer.disconnect();
            window.removeEventListener("scroll", onScrollCheck);
          } else {
            // If viewport is tall enough that it is initially visible, wait until user starts scrolling
            const handleScroll = () => {
              if (window.scrollY > 40) {
                setIsVisible(true);
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("scroll", onScrollCheck);
                observer.disconnect();
              }
            };
            window.addEventListener("scroll", handleScroll, { passive: true });
          }
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollCheck);
    };
  }, []);

  return (
    <section
      aria-label="Platform Statistics and AI Solutions"
      className={`relative py-8 sm:py-12 lg:py-14 z-10 overflow-hidden ${className}`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-[#635BFF]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative flex flex-col items-center text-center">
        {/* 1. Section Heading (Top, Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center leading-tight sm:leading-snug">
            <span className="block text-[#171B2E] dark:text-[#FFFFFF]">
              {heading.line1}
            </span>
            <span className="block bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent mt-1 sm:mt-1.5">
              {heading.line2}
            </span>
          </h2>
        </div>

        {/* 2. Statistics in a Single Horizontal Row on Desktop */}
        <div
          ref={cardRef}
          className="w-full rounded-2xl bg-[#F5F6FA] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] backdrop-blur-md px-3 py-6 sm:px-8 sm:py-9 shadow-sm dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 items-center divide-y md:divide-y-0 md:divide-x divide-[#E5E7F0] dark:divide-[#292D45]">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center text-center px-2 sm:px-4 ${
                  index === 0 || index === 1 ? "pb-5 md:pb-0" : "pt-5 md:pt-0"
                } ${index % 2 === 1 ? "border-l md:border-l-0 border-[#E5E7F0] dark:border-[#292D45]" : ""}`}
              >
                {/* Metric Number (Counts from 0 to target in 3 seconds upon scroll) */}
                <div className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] whitespace-nowrap">
                  <AnimatedStatValue value={item.value} isVisible={isVisible} />
                </div>

                {/* Metric Label */}
                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-base font-medium text-[#62677D] dark:text-[#B5BAD0] tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
