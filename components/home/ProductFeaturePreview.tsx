"use client";

import React from "react";
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
  CheckCircle2,
  Sparkles,
  GitBranch,
  ArrowRight,
  Clock,
  Send,
  User,
  Search,
  Lock,
  Zap,
  Globe,
  FileText,
  Activity,
  TrendingUp,
  Share2,
  RefreshCw,
  Radio,
} from "lucide-react";

interface ProductFeaturePreviewProps {
  activeModuleIndex: number;
}

export const ProductFeaturePreview: React.FC<ProductFeaturePreviewProps> = ({
  activeModuleIndex,
}) => {
  const windowTitles = [
    "pingo.ai / agent-workflow-engine",
    "pingo.knowledge / index-sync",
    "pingo.inbox / unified-workspace",
    "pingo.helpdesk / ticket-queue",
    "pingo.team / roles-and-access",
    "pingo.analytics / real-time-insights",
    "pingo.integrations / connected-ecosystem",
    "pingo.security / governance-and-compliance",
  ];

  const modulePills = [
    "AI Automation Engine",
    "Knowledge Base Synced",
    "Unified Omnichannel Inbox",
    "Helpdesk & SLA Queue",
    "Team & Access Control",
    "Intelligence & CSAT",
    "4 Live Channels",
    "Enterprise Security Active",
  ];

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white dark:bg-[#141126]/90 border border-[#E5E7F0] dark:border-white/[0.08] backdrop-blur-xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden min-h-[350px] sm:min-h-[500px] flex flex-col justify-between transition-colors duration-200">
      {/* Top Window Chrome Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.06] bg-[#F5F6FA] dark:bg-[#100D1D]/90 transition-colors duration-200">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-xs font-mono text-[#62677D] dark:text-[#D5D0E5]/60 truncate max-w-[120px] sm:max-w-none">
            {windowTitles[activeModuleIndex] || "pingo.module"}
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#782BFF]/10 dark:bg-[#782BFF]/15 border border-[#782BFF]/20 dark:border-[#782BFF]/30 text-[11px] text-[#782BFF] dark:text-[#D5D0E5] font-mono flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] dark:bg-[#B5FF45] animate-pulse" />
          <span className="truncate max-w-[125px] sm:max-w-none">{modulePills[activeModuleIndex]}</span>
        </div>
      </div>

      {/* Main Interactive Stage Visualization */}
      <div className="relative p-4 sm:p-7 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* ========================================================= */}
          {/* MODULE 01: AI Automation                                  */}
          {/* ========================================================= */}
          {activeModuleIndex === 0 && (
            <motion.div
              key="feat-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Agent Runtime Bar with Moving Star */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Spinning star icon */}
                  <Sparkles className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-spin [animation-duration:3s]" />
                  <span>Autonomous AI Agent Active</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-[#B5FF45] bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#782BFF]/20 dark:border-[#B5FF45]/20 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#782BFF] dark:bg-[#B5FF45] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#782BFF] dark:bg-[#B5FF45]"></span>
                  </span>
                  <span>118ms • 98.4% Confidence</span>
                </span>
              </div>

              {/* Chat Simulation */}
              <div className="p-4 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-xs bg-[#782BFF] text-white max-w-[85%] shadow-sm">
                    Can Pingo automatically escalate urgent billing queries to tier-2 agents?
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#E5E7F0] dark:bg-white/10 flex items-center justify-center text-[10px] text-[#171B2E] dark:text-white flex-shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-600/30 border border-purple-200 dark:border-purple-400/30 text-[#782BFF] dark:text-[#B5FF45] flex items-center justify-center text-[10px] flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-xs bg-white dark:bg-white/[0.04] border border-[#E5E7F0] dark:border-white/10 text-[#171B2E] dark:text-[#D5D0E5] max-w-[88%] space-y-1.5 shadow-sm dark:shadow-none">
                    <p>
                      Yes! Pingo detects billing intents, tags urgency, and triggers an automated handover to your Tier-2 finance support team with full conversation context.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#10B981] dark:text-[#B5FF45]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Knowledge source: /docs/escalation-rules#tier2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Execution Node */}
              <div className="p-3 rounded-xl bg-[#F0F2FA] dark:bg-[#100D1D] border border-purple-200 dark:border-purple-500/20 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#171B2E] dark:text-[#D5D0E5]">
                  <GitBranch className="w-3.5 h-3.5 text-[#782BFF] dark:text-[#A855F7]" />
                  <span>Rule: Intent = &quot;Billing Urgent&quot;</span>
                </div>
                <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">Auto-Assign: Tier-2 ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 02: Knowledge Management                           */}
          {/* ========================================================= */}
          {activeModuleIndex === 1 && (
            <motion.div
              key="feat-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Crawler Status with Moving Object */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Spinning crawler radar */}
                  <RefreshCw className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-spin [animation-duration:4s]" />
                  <span>Knowledge Centers &amp; Crawler</span>
                </span>
                <span className="text-[10px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/70 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3984FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3984FF]"></span>
                  </span>
                  <span>1,420 Articles Active</span>
                </span>
              </div>

              {/* Ingested Sources List */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-2.5">
                {[
                  {
                    icon: Globe,
                    title: "Website Crawler: yourcompany.com/docs",
                    meta: "342 pages indexed • 100% healthy",
                    status: "Synced",
                  },
                  {
                    icon: FileText,
                    title: "API_Documentation_v3.pdf",
                    meta: "18 pages parsed • Semantic chunks built",
                    status: "Ready",
                  },
                  {
                    icon: Database,
                    title: "Customer Support FAQs",
                    meta: "84 Q&As mapped • Vector embeddings ready",
                    status: "Live",
                  },
                ].map((src, i) => {
                  const SIcon = src.icon;
                  return (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-white dark:bg-white/[0.02] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-xs shadow-sm dark:shadow-none"
                    >
                      <div className="flex items-center gap-2.5">
                        <SIcon className="w-4 h-4 text-[#782BFF] dark:text-[#A855F7]" />
                        <div>
                          <div className="font-semibold text-[#171B2E] dark:text-white text-[11px] sm:text-xs">
                            {src.title}
                          </div>
                          <div className="text-[10px] text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono">
                            {src.meta}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10B981]/10 dark:bg-[#B5FF45]/10 text-[#10B981] dark:text-[#B5FF45] border border-[#10B981]/20 dark:border-[#B5FF45]/20">
                        {src.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Semantic Query Simulator with Bouncing Zap */}
              <div className="p-2.5 rounded-xl bg-[#F0F2FA] dark:bg-[#100D1D] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-[#171B2E] dark:text-[#D5D0E5]/80">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#782BFF] dark:text-[#B5FF45] animate-bounce" />
                  Vector Search: &quot;turnaround SLA&quot;
                </span>
                <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">Match: 0.99 ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 03: Conversation Management                       */}
          {/* ========================================================= */}
          {activeModuleIndex === 2 && (
            <motion.div
              key="feat-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Header with Moving Radio Broadcast */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Pulsing radio waves */}
                  <Radio className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-pulse" />
                  <span>Unified Omnichannel Inbox</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-[#B5FF45] bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#782BFF]/20 dark:border-[#B5FF45]/20">
                  3 Active Queues
                </span>
              </div>

              {/* Active Conversations Feed */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-2">
                {[
                  {
                    name: "Sarah Miller (Acme Corp)",
                    msg: "How do we connect our WhatsApp business number?",
                    channel: "Web Chat",
                    time: "2m ago",
                    badge: "AI Handover",
                  },
                  {
                    name: "David Kim (TechFlow)",
                    msg: "Thanks! That resolved the webhook issue.",
                    channel: "WhatsApp",
                    time: "5m ago",
                    badge: "Resolved ✓",
                  },
                  {
                    name: "Elena Rostova",
                    msg: "Looking for an enterprise quote for 50 agents.",
                    channel: "Instagram",
                    time: "12m ago",
                    badge: "High Priority",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white dark:bg-white/[0.02] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-xs shadow-sm dark:shadow-none"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#171B2E] dark:text-white text-[11px] sm:text-xs">
                          {item.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-500/10 text-[#782BFF] dark:text-purple-300 font-mono">
                          {item.channel}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#5E647E] dark:text-[#D5D0E5]/70 line-clamp-1 mt-0.5">
                        {item.msg}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#5E647E]/70 dark:text-[#D5D0E5]/50 block">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-mono text-[#10B981] dark:text-[#B5FF45]">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Routing Macro with Bouncing Typing Indicator */}
              <div className="p-2.5 rounded-xl bg-[#F0F2FA] dark:bg-[#100D1D] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#5E647E] dark:text-[#D5D0E5]/70 flex items-center gap-1.5">
                  <span className="flex items-center gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#782BFF] dark:bg-[#B5FF45] animate-bounce" />
                    <span className="w-1 h-1 rounded-full bg-[#782BFF] dark:bg-[#B5FF45] animate-bounce [animation-delay:150ms]" />
                    <span className="w-1 h-1 rounded-full bg-[#782BFF] dark:bg-[#B5FF45] animate-bounce [animation-delay:300ms]" />
                  </span>
                  <span>Context Routing:</span>
                </span>
                <span className="text-[#171B2E] dark:text-white font-medium">Smart Skill Handover Enabled ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 04: Helpdesk & Ticketing                           */}
          {/* ========================================================= */}
          {activeModuleIndex === 3 && (
            <motion.div
              key="feat-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Header with Moving Heartbeat Activity */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Bouncing activity heartbeat */}
                  <Activity className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-bounce" />
                  <span>Helpdesk Ticket Queue</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-[#B5FF45] bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#782BFF]/20 dark:border-[#B5FF45]/20">
                  99.4% SLA Adherence
                </span>
              </div>

              {/* Tickets Table */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-2">
                {[
                  {
                    id: "#PG-1048",
                    title: "API rate limit exceeded on webhook payload",
                    pri: "P1 Urgent",
                    priColor: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
                    status: "In Progress",
                    sla: "18m remaining",
                  },
                  {
                    id: "#PG-1049",
                    title: "Custom domain SSL certificate renewal",
                    pri: "P3 Medium",
                    priColor: "text-amber-600 dark:text-yellow-400 bg-amber-100 dark:bg-yellow-500/10 border-amber-200 dark:border-yellow-500/20",
                    status: "Open",
                    sla: "2h remaining",
                  },
                  {
                    id: "#PG-1047",
                    title: "Billing invoice reconciliation Q1",
                    pri: "P4 Low",
                    priColor: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
                    status: "Resolved ✓",
                    sla: "Met SLA",
                  },
                ].map((ticket, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white dark:bg-white/[0.02] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-xs shadow-sm dark:shadow-none"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#782BFF] dark:text-purple-300 font-bold text-[11px]">
                          {ticket.id}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded border font-mono ${ticket.priColor}`}
                        >
                          {ticket.pri}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#171B2E] dark:text-white mt-0.5">{ticket.title}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/60 block">
                        {ticket.sla}
                      </span>
                      <span className="text-[10px] font-mono text-[#10B981] dark:text-[#B5FF45]">
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* External Sync Bar with Spinning Clock */}
              <div className="p-2.5 rounded-xl bg-[#F0F2FA] dark:bg-[#100D1D] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#5E647E] dark:text-[#D5D0E5]/70 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#782BFF] dark:text-[#B5FF45] animate-spin [animation-duration:12s]" />
                  <span>Integrations:</span>
                </span>
                <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">Jira &amp; Zendesk 2-Way Sync Active ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 05: Customer & Team Management                     */}
          {/* ========================================================= */}
          {activeModuleIndex === 4 && (
            <motion.div
              key="feat-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Header with Moving User Beacon */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Pulsing user beacon */}
                  <Users className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-pulse" />
                  <span>Team Roles &amp; Agent Assignment</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-purple-300">
                  25 Agents Online
                </span>
              </div>

              {/* Agent Roster */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-2">
                {[
                  {
                    name: "Alex Rivera",
                    role: "Support Admin",
                    chats: "4 Active Chats",
                    csat: "4.9 ★",
                    status: "Active Now",
                  },
                  {
                    name: "Maya Patel",
                    role: "Senior Support Agent",
                    chats: "3 Active Chats",
                    csat: "5.0 ★",
                    status: "Active Now",
                  },
                  {
                    name: "Marcus Chen",
                    role: "Technical Specialist",
                    chats: "5 Tickets In Review",
                    csat: "4.8 ★",
                    status: "In Queue",
                  },
                ].map((agent, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white dark:bg-white/[0.02] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-xs shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#782BFF] to-[#4C16B8] flex items-center justify-center text-white text-[10px] font-bold">
                          {agent.name[0]}
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10B981] dark:bg-[#B5FF45] border border-white dark:border-[#141126]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#171B2E] dark:text-white text-[11px] sm:text-xs">
                          {agent.name}
                        </div>
                        <div className="text-[10px] text-[#782BFF] dark:text-purple-300 font-mono">
                          {agent.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/70 block">
                        {agent.chats}
                      </span>
                      <span className="text-[10px] font-mono text-[#10B981] dark:text-[#B5FF45]">
                        CSAT: {agent.csat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* SSO Auth Bar */}
              <div className="p-2.5 rounded-xl bg-[#F0F2FA] dark:bg-[#100D1D] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#5E647E] dark:text-[#D5D0E5]/70">Authentication:</span>
                <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">SSO / SAML 2.0 (Okta &amp; Google) ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 06: Analytics & Intelligence                       */}
          {/* ========================================================= */}
          {activeModuleIndex === 5 && (
            <motion.div
              key="feat-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Header with Moving Trend Rocket */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Bouncing trend up icon */}
                  <TrendingUp className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-bounce" />
                  <span>Analytics &amp; Sentiment Insights</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-[#B5FF45] bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#782BFF]/20 dark:border-[#B5FF45]/20">
                  Live Telemetry
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 text-center shadow-sm dark:shadow-none">
                  <div className="text-lg font-bold text-[#171B2E] dark:text-white tracking-tight">14,280</div>
                  <div className="text-[10px] text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono mt-0.5">
                    Conversations
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 text-center shadow-sm dark:shadow-none">
                  <div className="text-lg font-bold text-[#10B981] dark:text-[#B5FF45] tracking-tight">86.2%</div>
                  <div className="text-[10px] text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono mt-0.5">
                    AI Resolution
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 text-center shadow-sm dark:shadow-none">
                  <div className="text-lg font-bold text-[#782BFF] dark:text-purple-300 tracking-tight">4.92 ★</div>
                  <div className="text-[10px] text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono mt-0.5">
                    Avg CSAT
                  </div>
                </div>
              </div>

              {/* Weekly Volume & Sentiment Graph */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/70">
                  <span>Weekly Interaction Distribution</span>
                  <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">92% Positive Sentiment</span>
                </div>

                <div className="flex items-end justify-between gap-2 h-20 pt-2 px-1">
                  {[
                    { day: "Mon", h: "60%" },
                    { day: "Tue", h: "75%" },
                    { day: "Wed", h: "90%" },
                    { day: "Thu", h: "85%" },
                    { day: "Fri", h: "95%" },
                    { day: "Sat", h: "45%" },
                    { day: "Sun", h: "50%" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-[#E5E7F0] dark:bg-white/[0.05] rounded-t-sm h-full flex items-end">
                        <div
                          className="w-full rounded-t-sm bg-gradient-to-t from-[#782BFF] to-[#10B981] dark:to-[#B5FF45] transition-all duration-300"
                          style={{ height: bar.h }}
                        />
                      </div>
                      <span className="text-[9px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/50">
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 07: Integrations & Channels                        */}
          {/* ========================================================= */}
          {activeModuleIndex === 6 && (
            <motion.div
              key="feat-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Header with Moving Spinning Network Hub */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Spinning network share hub */}
                  <Share2 className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-spin [animation-duration:6s]" />
                  <span>Omnichannel Integration Ecosystem</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-[#B5FF45] bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#782BFF]/20 dark:border-[#B5FF45]/20">
                  4 Live Channels
                </span>
              </div>

              {/* Channels Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { name: "JavaScript Web Widget", status: "Active", ok: true },
                  { name: "WhatsApp Business API", status: "Connected", ok: true },
                  { name: "Instagram Direct", status: "Connected", ok: true },
                  { name: "WordPress Integration", status: "Available", ok: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 flex items-center justify-between text-xs shadow-sm dark:shadow-none"
                  >
                    <div>
                      <div className="font-semibold text-[#171B2E] dark:text-white text-[11px]">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-[#5E647E] dark:text-[#D5D0E5]/60 font-mono mt-0.5">
                        {item.status}
                      </div>
                    </div>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.status === "Available"
                          ? "bg-[#3984FF] dark:bg-[#20C5D8] shadow-[0_0_6px_#3984FF] dark:shadow-[0_0_6px_#20C5D8]"
                          : "bg-[#10B981] dark:bg-[#B5FF45] shadow-[0_0_6px_#10B981] dark:shadow-[0_0_6px_#B5FF45]"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Embed snippet callout */}
              <div className="p-3 rounded-xl bg-[#F0F2FA] dark:bg-[#080711] border border-[#E5E7F0] dark:border-white/10 font-mono text-[10px] text-[#171B2E] dark:text-[#D5D0E5] flex items-center justify-between">
                <span>&lt;script src=&quot;https://cdn.pingo.ai/v2/embed.js&quot; async&gt;</span>
                <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">Copied ✓</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* MODULE 08: Security & Administration                      */}
          {/* ========================================================= */}
          {activeModuleIndex === 7 && (
            <motion.div
              key="feat-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Header with Moving Security Lock */}
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-[#171B2E] dark:text-white flex items-center gap-2 font-medium">
                  {/* MOVING OBJECT: Pulsing lock / shield */}
                  <Lock className="w-4 h-4 text-[#782BFF] dark:text-[#B5FF45] animate-pulse" />
                  <span>Security, Governance &amp; Compliance</span>
                </span>
                <span className="text-[10px] font-mono text-[#782BFF] dark:text-[#B5FF45] bg-[#782BFF]/10 dark:bg-[#B5FF45]/10 px-2 py-0.5 rounded border border-[#782BFF]/20 dark:border-[#B5FF45]/20">
                  SOC2 Type II
                </span>
              </div>

              {/* Compliance Badges */}
              <div className="grid grid-cols-3 gap-2">
                {["SOC2 Type II", "GDPR Ready", "AES-256 Bit"].map((badge, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-[#E5E7F0] dark:border-white/10 text-center font-mono text-[11px] text-[#782BFF] dark:text-purple-200 shadow-sm dark:shadow-none"
                  >
                    ✓ {badge}
                  </div>
                ))}
              </div>

              {/* Audit Log Stream */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-[#080711]/70 border border-[#E5E7F0] dark:border-white/10 space-y-2">
                <div className="text-[10px] font-mono text-[#5E647E] dark:text-[#D5D0E5]/60 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Live Audit Log Stream</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] dark:bg-[#B5FF45] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981] dark:bg-[#B5FF45]"></span>
                  </span>
                </div>
                {[
                  {
                    time: "16:42:10",
                    event: "Admin login (MFA verified)",
                    ip: "192.168.1.1",
                    status: "SUCCESS",
                  },
                  {
                    time: "16:38:05",
                    event: "API Key rotated (Production)",
                    ip: "Actor: Maya P.",
                    status: "ENCRYPTED",
                  },
                  {
                    time: "16:20:12",
                    event: "Knowledge base auto-crawled",
                    ip: "internal.docs",
                    status: "COMPLETED",
                  },
                ].map((log, i) => (
                  <div
                    key={i}
                    className="p-2 rounded bg-white dark:bg-white/[0.02] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px] font-mono shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#5E647E] dark:text-[#D5D0E5]/50">{log.time}</span>
                      <span className="text-[#171B2E] dark:text-white">{log.event}</span>
                    </div>
                    <span className="text-[#10B981] dark:text-[#B5FF45] text-[10px] font-semibold">{log.status}</span>
                  </div>
                ))}
              </div>

              {/* Encryption Banner */}
              <div className="p-2.5 rounded-xl bg-[#F0F2FA] dark:bg-[#100D1D] border border-[#E5E7F0] dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#5E647E] dark:text-[#D5D0E5]/70">Data Protection:</span>
                <span className="text-[#10B981] dark:text-[#B5FF45] font-semibold">TLS 1.3 in Transit • At Rest AES-256 ✓</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductFeaturePreview;
