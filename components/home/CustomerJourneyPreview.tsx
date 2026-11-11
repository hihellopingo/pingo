"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  MessageSquare,
  Bot,
  UserCheck,
  Ticket,
  Star,
  Sparkles,
  ArrowRight,
  GitBranch,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Send,
  User,
  Check,
} from "lucide-react";

interface CustomerJourneyPreviewProps {
  activeStage: number;
  activePath?: "ai" | "human" | "ticket";
}

const stageLabels: Record<number, string> = {
  0: "Visitor Arrival",
  1: "Live Chat",
  2: "AI Resolution",
  3: "Human Handoff",
  4: "Ticket Escalation",
  5: "Customer Feedback",
};

export const CustomerJourneyPreview: React.FC<CustomerJourneyPreviewProps> = ({
  activeStage,
  activePath,
}) => {
  const currentBadge =
    activePath === "ai"
      ? "AI Resolution Flow"
      : activePath === "human"
      ? "Human Handoff Flow"
      : activePath === "ticket"
      ? "Ticket Escalation Flow"
      : stageLabels[activeStage] || "Live Journey";
  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white dark:bg-[#141126]/90 border border-[#E5E7F0] dark:border-white/[0.08] backdrop-blur-xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden min-h-[350px] sm:min-h-[480px] flex flex-col justify-between transition-colors duration-200">
      {/* Top Window Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.06] bg-[#F5F6FA] dark:bg-[#100D1D]/90 transition-colors duration-200">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-xs font-mono text-[#62677D] dark:text-[#D5D0E5]/60 truncate max-w-[130px] sm:max-w-none">
            pingo.journey / stage-0{activeStage + 1}
          </span>
        </div>

        {/* Stage Status Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-[11px] text-[#782BFF] dark:text-purple-300 font-mono flex-shrink-0">
          <GitBranch className="w-3 h-3 text-[#782BFF] dark:text-[#B5FF45]" />
          <span className="truncate max-w-[120px] sm:max-w-none">{currentBadge}</span>
        </div>
      </div>

      {/* Main Interactive Stage Visualization */}
      <div className="relative p-4 sm:p-7 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STAGE 01: Customer Visits Your Website */}
          {activeStage === 0 && (
            <motion.div
              key="journey-0"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Miniature browser view */}
              <div className="p-4 rounded-xl bg-[#080711]/80 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-[#B5FF45] animate-ping" />
                    <span className="font-semibold">Visitor arrived</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#D5D0E5]/60">
                    Just now • Direct visit
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-[#D5D0E5] flex items-center justify-between">
                  <span>Browsing: /pricing-and-features</span>
                  <span className="text-[10px] text-[#B5FF45] font-mono">
                    Session Active
                  </span>
                </div>
              </div>

              {/* Floating Pingo Chat Launcher with Popup */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/25 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-white block">
                    Pingo Widget Available
                  </span>
                  <p className="text-[11px] text-[#D5D0E5]/80">
                    &ldquo;👋 Need any help finding the right solution?&rdquo;
                  </p>
                </div>

                {/* Floating Launcher bubble */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#782BFF] to-[#4C16B8] border border-white/20 shadow-[0_0_20px_rgba(120,43,255,0.6)] flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#B5FF45] border-2 border-[#141126]" />
                </div>
              </div>
            </motion.div>
          )}

          {/* STAGE 02: Start a Conversation */}
          {activeStage === 1 && (
            <motion.div
              key="journey-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Chat Window Header */}
              <div className="p-3 rounded-xl bg-[#080711]/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#782BFF] to-[#4C16B8] flex items-center justify-center text-white text-xs font-bold">
                    P
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Pingo AI Assistant
                    </h4>
                    <span className="text-[10px] text-[#B5FF45] font-mono">
                      ● Online & Ready
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-[#D5D0E5]/60 font-mono">
                  Live Chat
                </span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-2.5">
                {/* Customer Message */}
                <div className="flex items-start justify-end gap-2">
                  <div className="p-3 rounded-2xl rounded-tr-xs bg-gradient-to-r from-[#782BFF] to-[#5118BD] text-white text-xs max-w-[85%] shadow-md">
                    Hi! I want to know more about your product.
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] flex-shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Pingo Response */}
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-600/30 border border-purple-400/30 text-purple-300 flex items-center justify-center text-[10px] flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-[#B5FF45]" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-xs bg-[#080711]/90 border border-white/10 text-[#D5D0E5] text-xs max-w-[85%]">
                    Hello! I&apos;d be happy to help. What would you like to know?
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-2 pl-8 pt-1 text-[11px] text-[#D5D0E5]/60">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#B5FF45] animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </span>
                  <span>Customer is typing...</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STAGE 03: AI-Powered Assistance */}
          {activeStage === 2 && (
            <motion.div
              key="journey-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* AI Processing status banner */}
              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/25 flex items-center justify-between text-xs">
                <span className="text-white flex items-center gap-2 font-medium">
                  <Sparkles className="w-4 h-4 text-[#B5FF45] animate-spin" />
                  Pingo AI is responding...
                </span>
                <span className="text-[10px] font-mono text-purple-300">
                  Latency: 140ms
                </span>
              </div>

              {/* Knowledge Source Matched Box */}
              <div className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B5FF45]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Knowledge source matched ✓</span>
                </div>
                <p className="text-[11px] text-[#D5D0E5]/70 font-mono">
                  Indexed from: /docs/product-overview#features (Confidence:
                  98.4%)
                </p>
              </div>

              {/* Generated Answer */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">
                    Answer generated ✓
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/20 font-mono">
                    Accurate
                  </span>
                </div>
                <p className="text-xs text-[#D5D0E5] leading-relaxed">
                  Pingo brings intelligent automation and human communication
                  together to connect website visitors, answer questions, and
                  scale support.
                </p>
              </div>

              {/* Branch Decision Indicator */}
              <div className="p-2.5 rounded-xl bg-[#100D1D] border border-white/5 flex items-center justify-between text-[11px] text-[#D5D0E5]/70">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3 h-3 text-[#A855F7]" />
                  Branching Check
                </span>
                <span>
                  Query Resolved?{" "}
                  <strong className="text-[#B5FF45]">Yes ➔ Feedback</strong>
                </span>
              </div>
            </motion.div>
          )}

          {/* STAGE 04: Human Agent Handoff */}
          {activeStage === 3 && (
            <motion.div
              key="journey-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Trigger Notification */}
              <div className="p-3 rounded-xl bg-[#782BFF]/15 border border-[#782BFF]/30 flex items-center justify-between text-xs">
                <span className="text-white font-medium flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-violet-400" />
                  Human assistance required
                </span>
                <span className="text-[10px] font-mono text-purple-300">
                  Conditional Trigger
                </span>
              </div>

              {/* Transfer Progress Indicator */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#D5D0E5]">
                  <span>Transferring conversation...</span>
                  <span className="text-[#B5FF45] font-mono">
                    Agent assigned ✓
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                        S
                      </div>
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#B5FF45]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">
                        Sarah Jenkins
                      </h4>
                      <p className="text-[10px] text-[#D5D0E5]/70">
                        Senior Customer Specialist • Online
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-purple-300 font-mono">
                    Connected
                  </span>
                </div>
              </div>

              {/* Conversation History Preserved Banner */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#D5D0E5] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B5FF45] flex-shrink-0" />
                <span>
                  Complete conversation history and AI context transferred into
                  agent inbox.
                </span>
              </div>
            </motion.div>
          )}

          {/* STAGE 05: Ticketing System */}
          {activeStage === 4 && (
            <motion.div
              key="journey-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Ticket Card Header */}
              <div className="p-3.5 rounded-xl bg-[#080711]/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#A855F7]" />
                  <span className="text-xs font-mono font-bold text-white">
                    Ticket #PG-1024
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono">
                  Status: Open
                </span>
              </div>

              {/* Ticket Metadata Grid */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#D5D0E5]/70">Issue:</span>
                  <span className="text-white font-medium">
                    Product enquiry & Enterprise integration
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D5D0E5]/70">Assigned Team:</span>
                  <span className="text-violet-300 font-medium">
                    Support Team (Tier 2)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D5D0E5]/70">Priority:</span>
                  <span className="text-[#B5FF45] font-medium">High</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#D5D0E5]/70">Created:</span>
                  <span className="text-[#D5D0E5]/60 font-mono text-[11px]">
                    Nov 10, 2026 • Automated Escalation
                  </span>
                </div>
              </div>

              {/* Status footer */}
              <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between text-xs text-[#D5D0E5]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  Estimated SLA: &lt; 2 hours
                </span>
                <span className="text-[#B5FF45] font-mono text-[11px]">
                  Tracking Active ✓
                </span>
              </div>
            </motion.div>
          )}

          {/* STAGE 06: Customer Feedback */}
          {activeStage === 5 && (
            <motion.div
              key="journey-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Feedback Rating Card */}
              <div className="p-6 rounded-2xl bg-[#080711]/80 border border-white/10 text-center space-y-3">
                <h4 className="text-sm font-semibold text-white">
                  How was your experience?
                </h4>

                {/* 5 Glowing Stars */}
                <div className="flex items-center justify-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 fill-[#B5FF45] text-[#B5FF45] drop-shadow-[0_0_8px_rgba(181,255,69,0.7)]"
                    />
                  ))}
                </div>

                <p className="text-xs text-[#D5D0E5]/80 italic">
                  &ldquo;Instant answers from the AI, and the agent resolved my
                  inquiry in minutes. Outstanding!&rdquo;
                </p>
              </div>

              {/* Success Badge */}
              <div className="p-3.5 rounded-xl bg-[#B5FF45]/10 border border-[#B5FF45]/25 flex items-center justify-center gap-2 text-xs font-semibold text-[#B5FF45]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for your feedback! ✓ Rating submitted</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Stage Progress Bar */}
      <div className="px-5 py-3 border-t border-[#E5E7F0] dark:border-white/[0.06] bg-[#F5F6FA] dark:bg-[#100D1D]/70 flex items-center justify-between text-xs text-[#5E647E] dark:text-[#D5D0E5]/70 transition-colors duration-200">
        <span className="font-mono text-[11px]">
          Stage {activeStage + 1} of 6
        </span>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStage === idx
                  ? "w-6 bg-[#782BFF] dark:bg-[#B5FF45]"
                  : "w-1.5 bg-black/15 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerJourneyPreview;

