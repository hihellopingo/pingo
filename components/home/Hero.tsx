"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden">
      {/* Floating animation */}
      <style>{`
        @keyframes pingoHeroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .hero-floating-robot {
          animation: pingoHeroFloat 3.5s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-floating-robot {
            animation: none;
          }
        }
      `}</style>

      <div className="max-w-7xl xl:max-w-[1340px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Responsive Hero Copy */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 z-10">
            {/* Main Headline */}
            <h1 className="w-full text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[3.25rem] font-bold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.16]">
              <span className="block">
                Smarter customer conversations.
              </span>
              <span className="block bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent mt-1">
                Powered by AI. Backed by humans.
              </span>
            </h1>

            {/* Supporting Content */}
            <p className="max-w-2xl text-center lg:text-left text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed font-normal">
              Give your customers instant answers with AI agents trained on your
              business knowledge. When a conversation needs a human touch,
              seamlessly connect customers with your support team — without
              losing context. Build knowledge centers, manage conversations,
              support customers, and understand every interaction from one
              unified platform.
            </p>

            {/* Single CTA Button */}
            <div className="pt-2 flex justify-center lg:justify-start w-full">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2E74E6] border border-white/20 shadow-[0_0_25px_rgba(99,91,255,0.4)] hover:shadow-[0_0_35px_rgba(99,91,255,0.65)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Get started for free</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Seamlessly Floating Transparent Robot Mascot */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 w-full">
            {/* Mascot Image Container: Floating transparent mascot, zero background shape, zero border */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] hero-floating-robot">
              <Image
                src="/images/pingo-robot-hero.png"
                alt="Pingo 3D Robot Mascot with Talk, Chat, Information, and Support badges"
                width={1024}
                height={768}
                className="w-full h-auto object-contain block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
