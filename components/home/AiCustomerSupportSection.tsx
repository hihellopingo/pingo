"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Headphones,
  MessageSquare,
  Ticket,
  User,
  Bot,
  ArrowRight,
  MoreHorizontal,
  Send,
  ShieldCheck,
  Check,
} from "lucide-react";
import { aiSupportData, AiSupportSectionData } from "@/data/aiSupport";
import { Icon3D } from "@/components/common/Icon3D";

export interface AiCustomerSupportSectionProps {
  data?: AiSupportSectionData;
  className?: string;
}

export const AiCustomerSupportSection: React.FC<AiCustomerSupportSectionProps> = ({
  data = aiSupportData,
  className = "",
}) => {
  const [autoEscalationActive, setAutoEscalationActive] = useState(true);

  return (
    <section
      id="solutions"
      aria-label="AI-Powered Customer Support"
      className={`relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAFAFE] dark:bg-[#0B0D19] transition-colors duration-200 ${className}`}
    >
      {/* Background ambient radial gradients & lighting */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#635BFF]/10 dark:bg-[#635BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[650px] h-[650px] bg-[#3984FF]/10 dark:bg-[#3984FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/3 w-[480px] h-[480px] bg-[#20C5D8]/8 dark:bg-[#20C5D8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headings & Core Feature Presentation         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 space-y-8 lg:space-y-10">
            {/* Header Content */}
            <div className="space-y-4">
              {/* Rounded pill label with headset icon */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
                <Headphones className="w-4 h-4 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
                <span>{data.badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.1]">
                {data.headingPart1}{" "}
                <span className="block sm:inline bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
                  {data.headingPart2}
                </span>
              </h2>

              {/* Subheading */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#171B2E] dark:text-[#FFFFFF] tracking-tight pt-1">
                {data.subheading}
              </h3>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-xl">
                {data.description}
              </p>
            </div>

            {/* Feature 1 & 2 Presentation */}
            <div className="space-y-6 sm:space-y-8 pt-2">
              {/* Feature 1: AI-Powered Chat */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <Icon3D icon={MessageSquare} color="violet" size="xl" className="mt-0.5" />

                <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                  <h4 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                    {data.features[0].title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-lg">
                    {data.features[0].description}
                  </p>
                </div>
              </div>

              {/* Feature 2: Built-in Ticketing */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <Icon3D icon={Ticket} color="cyan" size="xl" className="mt-0.5" />

                <div className="space-y-1 sm:space-y-1.5 pt-0.5">
                  <h4 className="text-lg sm:text-xl font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                    {data.features[1].title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-lg">
                    {data.features[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Clean Slanted Floating Product Showcase      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-center pt-8 sm:pt-10 lg:pt-0">
            
            {/* 3D Slanted Showcase Composition Container */}
            <div className="relative w-full max-w-[510px] [perspective:1400px]">

              {/* ------------------------------------------------------- */}
              {/* 1. TOP INTERFACE: Slanted Floating AI Chat Window       */}
              {/* ------------------------------------------------------- */}
              <div className="relative z-10 w-full ml-auto rounded-[28px] sm:rounded-[32px] bg-[#FFFFFF]/95 dark:bg-[#171A2E]/95 border border-[#E5E7F0] dark:border-[#292D45] shadow-[0_25px_60px_-12px_rgba(99,91,255,0.2),0_15px_30px_-8px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(99,91,255,0.18)] p-5 sm:p-6 overflow-hidden backdrop-blur-md transition-all duration-500 ease-out lg:[transform:perspective(1200px)_rotateY(-6deg)_rotateX(6deg)_rotateZ(-2.5deg)] lg:hover:[transform:perspective(1200px)_rotateY(-3deg)_rotateX(3deg)_rotateZ(-1deg)]">
                
                {/* Glossy top-edge reflection bar */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#635BFF]/40 to-transparent pointer-events-none" />

                {/* Chat Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0F2F8] dark:border-[#232742]">
                  <div className="flex items-center gap-3">
                    {/* Brand P logo box with neon ambient aura */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635BFF] to-[#3984FF] flex items-center justify-center text-white font-extrabold text-lg shadow-[0_4px_12px_rgba(99,91,255,0.4)] flex-shrink-0">
                      P
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base text-[#171B2E] dark:text-[#FFFFFF]">
                          {data.chatDemo.agentName}
                        </span>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981] animate-pulse" />
                          <span className="text-[11px] font-semibold text-[#10B981]">
                            {data.chatDemo.agentStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Header Actions */}
                  <div className="text-[#94A3B8] dark:text-[#64748B] hover:text-[#635BFF] transition-colors cursor-pointer p-1">
                    <MoreHorizontal className="w-5 h-5" />
                  </div>
                </div>

                {/* Chat Messages Body */}
                <div className="py-4 space-y-4">
                  {/* Message 1: Customer Question (Right-aligned) */}
                  <div className="flex items-end justify-end gap-2.5">
                    <div className="max-w-[82%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-[#F1F3F9] dark:bg-[#20253E] text-[#171B2E] dark:text-[#FFFFFF] text-xs sm:text-sm font-medium leading-relaxed shadow-sm">
                      {data.chatDemo.customerQuestion}
                    </div>

                    {/* Customer Avatar */}
                    <div className="w-7 h-7 rounded-full bg-[#E2E6F5] dark:bg-[#2D3356] text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <User className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Message 2: AI Agent Response (Left-aligned) */}
                  <div className="flex items-start gap-2.5">
                    {/* Bot Avatar with glowing cyan ring */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#635BFF]/25 to-[#20C5D8]/35 border border-[#20C5D8]/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(32,197,216,0.3)]">
                      <Bot className="w-4 h-4 text-[#635BFF] dark:text-[#20C5D8]" />
                    </div>

                    <div className="max-w-[86%] space-y-2">
                      <div className="p-3.5 sm:p-4 rounded-2xl rounded-tl-sm bg-[#F5F6FC] dark:bg-[#1E223D] text-[#171B2E] dark:text-[#FFFFFF] text-xs sm:text-sm leading-relaxed shadow-sm border border-[#E5E7F0]/60 dark:border-[#2D3252]/60">
                        <p>{data.chatDemo.aiResponse}</p>

                        {/* Interactive Action Button */}
                        <div className="pt-2">
                          <Link
                            href={data.chatDemo.actionHref}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDE9FE] dark:bg-[#2A264F] text-[#635BFF] dark:text-[#A5A0FF] hover:bg-[#E0D7FE] dark:hover:bg-[#342F66] transition-all text-xs font-semibold group cursor-pointer shadow-xs"
                          >
                            <span>{data.chatDemo.actionLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input Bar */}
                <div className="mt-1 rounded-full bg-[#F5F6FC] dark:bg-[#1E223D] border border-[#E5E7F0] dark:border-[#2D3252] px-4 py-2 flex items-center justify-between shadow-inner">
                  <span className="text-xs text-[#94A3B8] dark:text-[#64748B]">
                    {data.chatDemo.inputPlaceholder}
                  </span>
                  <button
                    type="button"
                    aria-label="Send message"
                    className="w-7 h-7 rounded-full bg-[#635BFF] hover:bg-[#5249E8] flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* ------------------------------------------------------- */}
              {/* 2. BOTTOM INTERFACE: Slanted Overlapping Ticket Panel   */}
              {/* ------------------------------------------------------- */}
              <div className="relative z-20 -mt-10 sm:-mt-12 w-full max-w-[470px] sm:max-w-[495px] mr-auto lg:-ml-8 rounded-[28px] sm:rounded-[32px] bg-[#FFFFFF]/95 dark:bg-[#171A2E]/95 border border-[#E5E7F0] dark:border-[#292D45] shadow-[0_35px_70px_-15px_rgba(15,23,42,0.22),0_0_35px_rgba(32,197,216,0.14)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.92),0_0_45px_rgba(57,132,255,0.2)] p-5 sm:p-6 backdrop-blur-md transition-all duration-500 ease-out lg:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(5deg)_rotateZ(-1.5deg)] lg:hover:[transform:perspective(1200px)_rotateY(-2deg)_rotateX(2deg)_rotateZ(-0.5deg)]">
                
                {/* Ticket Card Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#F0F2F8] dark:border-[#232742]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#3984FF] flex items-center justify-center text-white shadow-xs">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-sm sm:text-base text-[#171B2E] dark:text-[#FFFFFF] block">
                        {data.ticketDemo.title}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={data.ticketDemo.viewAllHref}
                    className="text-xs font-bold text-[#635BFF] dark:text-[#A5A0FF] flex items-center gap-1 hover:text-[#5249E8] transition-colors group"
                  >
                    <span>{data.ticketDemo.viewAllLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Two Distinct Ticket Creation Options (Cards inside panel) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-4">
                  
                  {/* OPTION 1: AI Agent Creates a Ticket */}
                  <div className="rounded-2xl bg-[#F8F9FE] dark:bg-[#1C2038] border border-[#EBEFF8] dark:border-[#2A3052] p-4 text-center flex flex-col items-center justify-between shadow-xs hover:border-[#635BFF]/40 transition-all duration-200">
                    <div className="flex flex-col items-center w-full">
                      <div className="w-9 h-9 rounded-full bg-[#EDE9FE] dark:bg-[#28254A] text-[#635BFF] dark:text-[#A5A0FF] flex items-center justify-center mb-2.5 shadow-xs">
                        <Bot className="w-5 h-5" />
                      </div>

                      <h5 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-tight mb-1">
                        AI Agent Creates a Ticket
                      </h5>

                      <span className="text-[10px] font-semibold text-[#635BFF] dark:text-[#20C5D8] px-2 py-0.5 rounded-full bg-[#635BFF]/10 dark:bg-[#635BFF]/20 mb-2">
                        When Resolution Requires Human Team
                      </span>

                      <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] leading-snug mb-3">
                        The AI Agent can create a support ticket when it cannot resolve an issue and ticket creation is appropriate.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setAutoEscalationActive(!autoEscalationActive)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 ${
                        autoEscalationActive
                          ? "bg-[#635BFF] hover:bg-[#5249E8] text-white"
                          : "bg-[#F0F2F8] dark:bg-[#252A48] text-[#62677D] dark:text-[#B5BAD0]"
                      }`}
                    >
                      {autoEscalationActive ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Enabled: Auto-Escalate</span>
                        </>
                      ) : (
                        <span>Enable Auto-Escalate</span>
                      )}
                    </button>
                  </div>

                  {/* OPTION 2: Customer Raises a Ticket */}
                  <div className="rounded-2xl bg-[#F8F9FE] dark:bg-[#1C2038] border border-[#EBEFF8] dark:border-[#2A3052] p-4 text-center flex flex-col items-center justify-between shadow-xs hover:border-[#3984FF]/40 transition-all duration-200">
                    <div className="flex flex-col items-center w-full">
                      <div className="w-9 h-9 rounded-full bg-[#E0F2FE] dark:bg-[#142B3D] text-[#0284C7] dark:text-[#20C5D8] flex items-center justify-center mb-2.5 shadow-xs">
                        <User className="w-5 h-5" />
                      </div>

                      <h5 className="text-xs sm:text-sm font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-tight mb-1">
                        Customer Raises a Ticket
                      </h5>

                      <span className="text-[10px] font-semibold text-[#0284C7] dark:text-[#20C5D8] px-2 py-0.5 rounded-full bg-[#3984FF]/10 dark:bg-[#3984FF]/20 mb-2">
                        Direct Self-Service Submission
                      </span>

                      <p className="text-[11px] text-[#62677D] dark:text-[#B5BAD0] leading-snug mb-3">
                        Customers can independently create their own support tickets whenever they need help.
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full py-2 px-3 rounded-xl border border-[#635BFF] dark:border-[#635BFF] text-[#635BFF] dark:text-[#A5A0FF] bg-white dark:bg-[#171A2E] hover:bg-[#635BFF]/5 text-xs font-semibold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] block text-center cursor-pointer"
                    >
                      Create Support Ticket
                    </Link>
                  </div>

                </div>

                {/* Assurance footer banner */}
                <div className="mt-3.5 pt-2.5 border-t border-[#F0F2F8] dark:border-[#232742] flex items-center justify-center gap-1.5 text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#20C5D8] flex-shrink-0" />
                  <span>Tickets are only initiated when human support is requested or appropriate.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiCustomerSupportSection;
