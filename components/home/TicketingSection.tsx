"use client";

import React from "react";
import Link from "next/link";
import {
  Ticket,
  TicketPlus,
  UserCheck,
  Clock,
  MessageSquareLock,
  History,
  Blocks,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { ticketingData, TicketingSectionData } from "@/data/ticketing";
import { Icon3D } from "@/components/common/Icon3D";

export interface TicketingSectionProps {
  data?: TicketingSectionData;
  className?: string;
}

export const TicketingSection: React.FC<TicketingSectionProps> = ({
  data = ticketingData,
  className = "",
}) => {
  return (
    <section
      id="ticketing"
      aria-label="Built-in Ticketing System"
      className={`relative pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[#FFFFFF] dark:bg-[#0B0D19] transition-colors duration-200 ${className}`}
    >
      {/* Ambient background lighting glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#635BFF]/6 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[650px] h-[650px] bg-[#3984FF]/6 dark:bg-[#3984FF]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-[#20C5D8]/5 dark:bg-[#20C5D8]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. SECTION INTRODUCTION (Moved upward, tighter top space) */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 space-y-3">
          {/* Label Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#635BFF]/30 dark:border-[#635BFF]/50 bg-[#F0EDFF] dark:bg-[#1D1B3A] text-[#635BFF] dark:text-[#A5A0FF] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Ticket className="w-4 h-4 text-[#635BFF] dark:text-[#A5A0FF] flex-shrink-0" />
            <span>{data.badge}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171B2E] dark:text-[#FFFFFF] leading-[1.15]">
            Built-in{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#3984FF] to-[#20C5D8] bg-clip-text text-transparent">
              Ticketing System
            </span>
          </h2>

          {/* Subheading */}
          <h3 className="text-lg sm:text-xl font-semibold text-[#171B2E] dark:text-[#FFFFFF] tracking-tight">
            {data.subheading}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. TWO-COLUMN MAIN PRESENTATION                           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ------------------------------------------------------- */}
          {/* LEFT COLUMN: Ticket Management Dashboard                */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#E5E7F0] dark:border-[#292D45] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all">
              
              {/* Dashboard Top Filter Bar */}
              <div className="px-5 sm:px-6 py-4 border-b border-[#E5E7F0] dark:border-[#292D45] bg-[#F5F6FF]/70 dark:bg-[#121528] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                  <span className="px-3 py-1 rounded-xl bg-[#635BFF] text-white text-xs font-semibold shadow-xs flex-shrink-0">
                    All Tickets (28)
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1E38] border border-[#E5E7F0] dark:border-[#292D45] text-[#62677D] dark:text-[#B5BAD0] text-xs font-medium flex-shrink-0">
                    Open (8)
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1E38] border border-[#E5E7F0] dark:border-[#292D45] text-[#62677D] dark:text-[#B5BAD0] text-xs font-medium flex-shrink-0">
                    In Progress (14)
                  </span>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-xl bg-[#FFFFFF] dark:bg-[#1A1E38] border border-[#E5E7F0] dark:border-[#292D45] text-[#62677D] dark:text-[#B5BAD0] text-xs font-medium flex-shrink-0">
                    Resolved (6)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#635BFF] dark:text-[#A5A0FF] font-semibold flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="hidden sm:inline">Live Sync</span>
                </div>
              </div>

              {/* Active Ticket Focused Panel */}
              <div className="p-5 sm:p-7 space-y-6">
                
                {/* Ticket Header & Status Pills */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5E7F0] dark:border-[#292D45]">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-lg bg-[#635BFF]/10 text-[#635BFF] dark:bg-[#635BFF]/20 dark:text-[#A5A0FF] text-xs font-bold border border-[#635BFF]/20">
                      {data.dashboard.ticketId}
                    </span>
                    <span className="text-xs text-[#62677D] dark:text-[#B5BAD0]">
                      {data.dashboard.metrics.created}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {data.dashboard.status}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#635BFF]/15 text-[#635BFF] dark:text-[#A5A0FF] border border-[#635BFF]/30">
                      {data.dashboard.priority}
                    </span>
                  </div>
                </div>

                {/* Customer Issue Title */}
                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                    {data.dashboard.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#62677D] dark:text-[#B5BAD0]">
                    <span>
                      Customer:{" "}
                      <strong className="text-[#171B2E] dark:text-[#FFFFFF] font-semibold">
                        {data.dashboard.customer.name}
                      </strong>{" "}
                      ({data.dashboard.customer.company})
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-[#635BFF] dark:text-[#20C5D8] font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      {data.dashboard.customer.source}
                    </span>
                  </div>
                </div>

                {/* Metadata Grid (Agent, Channel, SLA) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {/* Assigned Agent */}
                  <div className="p-3 rounded-2xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#62677D] dark:text-[#B5BAD0] tracking-wider block">
                      Assigned Agent
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#3984FF] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {data.dashboard.assignedAgent.initials}
                      </div>
                      <span className="text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] truncate">
                        {data.dashboard.assignedAgent.name}
                      </span>
                    </div>
                  </div>

                  {/* Channel Source */}
                  <div className="p-3 rounded-2xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#62677D] dark:text-[#B5BAD0] tracking-wider block">
                      Channel Origin
                    </span>
                    <span className="text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] truncate block">
                      {data.dashboard.metrics.channel}
                    </span>
                  </div>

                  {/* SLA Response */}
                  <div className="p-3 rounded-2xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#62677D] dark:text-[#B5BAD0] tracking-wider block">
                      SLA Performance
                    </span>
                    <span className="text-xs font-semibold text-[#10B981] flex items-center gap-1 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      {data.dashboard.metrics.sla}
                    </span>
                  </div>
                </div>

                {/* Subtle Internal Note & Activity Preview */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#171B2E] dark:text-[#FFFFFF]">
                      <Lock className="w-3.5 h-3.5 text-[#635BFF]" />
                      <span>Internal Notes (Private Collaboration)</span>
                    </div>
                    <span className="text-[11px] text-[#62677D] dark:text-[#B5BAD0]">
                      Only visible to agents
                    </span>
                  </div>

                  {/* Internal Note Bubble */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F6FF] dark:bg-[#121630] border border-[#635BFF]/30 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-[#635BFF] dark:text-[#A5A0FF]">
                        {data.dashboard.internalNote.author}
                      </span>
                      <span className="text-[#62677D] dark:text-[#B5BAD0]">
                        {data.dashboard.internalNote.timeAgo}
                      </span>
                    </div>
                    <p className="text-xs text-[#171B2E] dark:text-[#FFFFFF] leading-relaxed">
                      {data.dashboard.internalNote.content}
                    </p>
                  </div>

                  {/* Audit Trail Activity Line */}
                  <div className="flex items-start gap-2 text-[11px] text-[#62677D] dark:text-[#B5BAD0] pt-1">
                    <History className="w-3.5 h-3.5 text-[#3984FF] flex-shrink-0 mt-0.5" />
                    <span>
                      Audit: {data.dashboard.auditLog.event} ({data.dashboard.auditLog.timeAgo})
                    </span>
                  </div>
                </div>

                {/* Dashboard Action Footer */}
                <div className="pt-4 border-t border-[#E5E7F0] dark:border-[#292D45] flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF]">
                    <span>Status: In Progress</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#62677D]" />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] text-xs font-semibold text-[#171B2E] dark:text-[#FFFFFF] hover:bg-[#E5E7F0] dark:hover:bg-[#202540] transition-colors cursor-pointer"
                    >
                      + Add Note
                    </button>
                    <button
                      type="button"
                      className="px-4 py-1.5 rounded-xl bg-[#635BFF] hover:bg-[#5249E8] text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      Reply to Customer
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT COLUMN: Feature List with 3D Tactile Icons        */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-2">
            
            <div className="divide-y divide-[#E5E7F0] dark:divide-[#292D45]">
              {data.features.map((feature) => {
                const IconComponent =
                  feature.iconName === "TicketPlus"
                    ? TicketPlus
                    : feature.iconName === "UserCheck"
                    ? UserCheck
                    : feature.iconName === "Clock"
                    ? Clock
                    : feature.iconName === "MessageSquareLock"
                    ? MessageSquareLock
                    : feature.iconName === "History"
                    ? History
                    : Blocks;

                return (
                  <div
                    key={feature.id}
                    className="py-4 sm:py-4.5 first:pt-0 last:pb-0 flex items-start gap-4 group"
                  >
                    {/* 3D Tactile Icon */}
                    <Icon3D
                      icon={IconComponent}
                      color={feature.color}
                      size="md"
                      className="mt-0.5"
                    />

                    {/* Content */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#635BFF] dark:text-[#20C5D8]">
                          {feature.number}
                        </span>
                        <h4 className="text-base font-bold text-[#171B2E] dark:text-[#FFFFFF] leading-snug">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#62677D] dark:text-[#B5BAD0] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. SIMPLIFIED ENTERPRISE INTEGRATION BANNER               */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 rounded-3xl bg-[#F5F6FA] dark:bg-[#101326] border border-[#E5E7F0] dark:border-[#292D45] p-7 sm:p-9 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#635BFF]/10 via-[#3984FF]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Banner Left: Label, Heading, Description */}
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#171A2E] border border-[#635BFF]/30 dark:border-[#635BFF]/40 text-[#635BFF] dark:text-[#A5A0FF] text-[11px] font-bold tracking-wider uppercase shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#20C5D8]" />
                <span>{data.enterpriseBanner.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171B2E] dark:text-[#FFFFFF] tracking-tight">
                {data.enterpriseBanner.heading}
              </h3>

              <p className="text-sm sm:text-base text-[#62677D] dark:text-[#B5BAD0] leading-relaxed max-w-2xl">
                {data.enterpriseBanner.description}
              </p>
            </div>

            {/* Banner Right: Single CTA Button Only */}
            <div className="lg:col-span-4 flex items-center lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#635BFF] to-[#3984FF] hover:from-[#5249E8] hover:to-[#2B75E6] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Explore Enterprise Integration</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TicketingSection;
