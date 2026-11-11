"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Database,
  Bot,
  Users,
  Palette,
  Code2,
  CheckCircle2,
  Loader2,
  FileText,
  HelpCircle,
  Package,
  Sparkles,
  Sliders,
  Copy,
  MessageSquare,
  ShieldCheck,
  Check,
} from "lucide-react";

interface SetupWorkflowPreviewProps {
  activeStep: number;
}

export const SetupWorkflowPreview: React.FC<SetupWorkflowPreviewProps> = ({
  activeStep,
}) => {
  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white dark:bg-[#141126]/90 border border-[#E5E7F0] dark:border-white/[0.08] backdrop-blur-xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden min-h-[350px] sm:min-h-[480px] flex flex-col justify-between transition-colors duration-200">
      {/* Top OS Window Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-[#E5E7F0] dark:border-white/[0.06] bg-[#F5F6FA] dark:bg-[#100D1D]/90 transition-colors duration-200">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-xs font-mono text-[#62677D] dark:text-[#D5D0E5]/60 truncate max-w-[130px] sm:max-w-none">
            pingo.console / setup-flow / step-0{activeStep + 1}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#782BFF]/10 dark:bg-white/[0.04] border border-[#782BFF]/20 dark:border-white/5 text-[11px] text-[#782BFF] dark:text-[#B5FF45] font-mono flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] dark:bg-[#B5FF45] animate-pulse" />
          Live Preview
        </div>
      </div>

      {/* Main Interactive Screen with Smooth AnimatePresence */}
      <div className="relative p-4 sm:p-7 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 01: Connect Your Website */}
          {activeStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Browser Preview Bar */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#080711]/80 border border-white/10 text-xs text-[#D5D0E5]">
                <Globe className="w-4 h-4 text-[#782BFF] flex-shrink-0" />
                <span className="text-white/40 font-mono">https://</span>
                <span className="text-white font-mono font-medium">
                  yourbusiness.com
                </span>
                <span className="ml-auto px-2 py-0.5 rounded-md bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/20 text-[10px] font-mono">
                  Connected
                </span>
              </div>

              {/* Crawling Progress Box */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D5D0E5] flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-[#A855F7] animate-spin" />
                    Scanning website content...
                  </span>
                  <span className="text-white font-mono font-semibold">
                    100%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#782BFF] via-[#A855F7] to-[#B5FF45]"
                    initial={{ width: "20%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-[#D5D0E5]/80">
                  <div className="p-2 rounded-lg bg-[#080711]/50 border border-white/5">
                    <span className="text-white/50 block">Pages discovered</span>
                    <span className="text-white font-semibold font-mono text-sm">
                      24 pages
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#080711]/50 border border-white/5">
                    <span className="text-white/50 block">Scan duration</span>
                    <span className="text-white font-semibold font-mono text-sm">
                      1.8 seconds
                    </span>
                  </div>
                </div>
              </div>

              {/* Status pill banner */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#B5FF45]/10 border border-[#B5FF45]/25 text-xs text-[#B5FF45] font-medium">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Connection successful ✓ Website index ready for ingestion</span>
              </div>
            </motion.div>
          )}

          {/* STEP 02: Build Your Knowledge Centers */}
          {activeStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between text-xs text-[#D5D0E5]">
                <span className="font-semibold text-white">
                  Active Knowledge Centers
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#782BFF]/20 text-violet-300 border border-purple-500/20 text-[10px]">
                  3 Sources Connected
                </span>
              </div>

              {/* 3 Knowledge cards */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080711]/70 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">
                        Website Content
                      </h4>
                      <p className="text-[11px] text-[#D5D0E5]/70">
                        24 scanned pages • Auto-sync on publish
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#B5FF45] flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ready
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080711]/70 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                      <Package className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">
                        Product Information
                      </h4>
                      <p className="text-[11px] text-[#D5D0E5]/70">
                        Specifications, pricing models, catalog
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#B5FF45] flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ready
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#080711]/70 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#B5FF45]/15 border border-[#B5FF45]/30 flex items-center justify-center text-[#B5FF45]">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">
                        FAQs & Documentation
                      </h4>
                      <p className="text-[11px] text-[#D5D0E5]/70">
                        Support articles, returns, guides
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#B5FF45] flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ready
                  </span>
                </div>
              </div>

              {/* Status bottom bar */}
              <div className="p-2.5 rounded-xl bg-[#B5FF45]/10 border border-[#B5FF45]/25 flex items-center justify-between text-xs">
                <span className="text-[#B5FF45] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Knowledge Ready ✓
                </span>
                <span className="text-[11px] text-[#D5D0E5]/70 font-mono">
                  Vector index synced
                </span>
              </div>
            </motion.div>
          )}

          {/* STEP 03: Develop Your AI Agent */}
          {activeStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Agent Settings Header */}
              <div className="p-3.5 rounded-xl bg-[#080711]/70 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#782BFF] to-[#4C16B8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(120,43,255,0.4)]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Pingo AI Assistant
                    </h4>
                    <p className="text-[11px] text-[#D5D0E5]/70">
                      Knowledge sources: 3 connected
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/30 text-[10px] font-mono font-medium">
                  Status: Ready ✓
                </span>
              </div>

              {/* Behavior & Guardrails Preview */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#D5D0E5]">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <Sliders className="w-3.5 h-3.5 text-violet-400" />
                    Tone & Guardrails
                  </span>
                  <span className="text-violet-300 font-mono text-[11px]">
                    Empathetic & Precise
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-[#080711]/50 border border-white/5 text-[11px] text-[#D5D0E5]/80 font-mono leading-relaxed">
                  System: Answer user inquiries strictly using verified
                  knowledge base. Escalate gracefully when confidence &lt; 92%.
                </div>
              </div>

              {/* Sample Response Preview Bubble */}
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-purple-300 font-semibold block">
                  Simulated Output Preview
                </span>
                <p className="text-xs text-white leading-relaxed">
                  &ldquo;Hello! I can explain your product options, guide you
                  through our knowledge base, or connect you with our team in real
                  time.&rdquo;
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 04: Create Your Support Team */}
          {activeStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-violet-400" />
                  <span className="font-semibold text-white">Support Team</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#B5FF45]/10 text-[#B5FF45] border border-[#B5FF45]/20 text-[10px] font-mono">
                  3 Agents Online
                </span>
              </div>

              {/* Team member cards */}
              <div className="space-y-2">
                {[
                  {
                    name: "Sarah Jenkins",
                    role: "General Support",
                    status: "Online",
                    activeChats: "2 active",
                    avatarBg: "bg-purple-600",
                  },
                  {
                    name: "Alex Rivera",
                    role: "Technical Inquiries",
                    status: "Online",
                    activeChats: "1 active",
                    avatarBg: "bg-indigo-600",
                  },
                  {
                    name: "Elena Rostova",
                    role: "Customer Success",
                    status: "Online",
                    activeChats: "Available",
                    avatarBg: "bg-violet-600",
                  },
                ].map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#080711]/70 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div
                          className={`w-8 h-8 rounded-full ${agent.avatarBg} text-white text-xs font-bold flex items-center justify-center`}
                        >
                          {agent.name[0]}
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#B5FF45] ring-2 ring-[#080711]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">
                          {agent.name}
                        </h4>
                        <p className="text-[11px] text-[#D5D0E5]/70">
                          {agent.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      {agent.activeChats}
                    </span>
                  </div>
                ))}
              </div>

              {/* Assignment Rule preview */}
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-[#D5D0E5]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B5FF45]" />
                  Smart conversation handoff
                </span>
                <span className="text-[#B5FF45] font-mono text-[11px]">
                  Enabled ✓
                </span>
              </div>
            </motion.div>
          )}

          {/* STEP 05: Customize Your Chat Widget */}
          {activeStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">
                  Customize Your Widget
                </span>
                <span className="text-[10px] text-violet-300 font-mono">
                  Theme: Glass Dark
                </span>
              </div>

              {/* Color Swatches */}
              <div className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 space-y-2">
                <span className="text-[11px] text-[#D5D0E5]/80 block font-medium">
                  Brand Colour
                </span>
                <div className="flex items-center gap-2.5">
                  {[
                    { color: "#782BFF", name: "Primary Purple", selected: true },
                    { color: "#A855F7", name: "Violet", selected: false },
                    { color: "#B5FF45", name: "Neon Green", selected: false },
                    { color: "#3984FF", name: "Electric Blue", selected: false },
                  ].map((swatch) => (
                    <div
                      key={swatch.color}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        swatch.selected
                          ? "ring-2 ring-white scale-110 shadow-[0_0_12px_rgba(120,43,255,0.7)]"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: swatch.color }}
                    >
                      {swatch.selected && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </div>
                  ))}
                  <span className="ml-2 text-xs font-mono text-purple-300">
                    #782BFF
                  </span>
                </div>
              </div>

              {/* Welcome Message input preview */}
              <div className="p-3 rounded-xl bg-[#080711]/70 border border-white/10 space-y-1">
                <span className="text-[11px] text-[#D5D0E5]/80 font-medium block">
                  Welcome Message
                </span>
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-white">
                  &ldquo;Hello! Welcome to our store. How can we help you
                  today?&rdquo;
                </div>
              </div>

              {/* Floating Launcher Preview */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-[#D5D0E5]">Widget Preview</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#782BFF] to-[#4C16B8] border border-white/20 shadow-[0_0_20px_rgba(120,43,255,0.5)] flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 06: Deploy Pingo */}
          {activeStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3.5"
            >
              {/* Code Editor Header */}
              <div className="flex items-center justify-between text-xs text-[#D5D0E5]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#B5FF45]" />
                  <span className="font-semibold text-white">
                    Pingo Installation Script
                  </span>
                </div>
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] text-[#D5D0E5] cursor-default"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>

              {/* Code block */}
              <div className="p-3.5 rounded-xl bg-[#080711] border border-white/10 font-mono text-[11px] text-[#D5D0E5] space-y-1 overflow-x-auto leading-relaxed">
                <span className="text-[#A855F7]">&lt;!-- Pingo Live Chat --&gt;</span>
                <div className="text-white">
                  <span className="text-violet-400">&lt;script</span>{" "}
                  <span className="text-[#B5FF45]">src</span>=
                  <span className="text-purple-300">
                    &quot;https://cdn.pingo.ai/v1/widget.js&quot;
                  </span>
                  <br />
                  &nbsp;&nbsp;<span className="text-[#B5FF45]">data-pingo-id</span>=
                  <span className="text-purple-300">&quot;pg_live_8910&quot;</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-[#B5FF45]">async</span>
                  <span className="text-violet-400">&gt;&lt;/script&gt;</span>
                </div>
              </div>

              {/* Success Deployment Status Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-[#100D1D] to-[#141126] border border-[#B5FF45]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B5FF45]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Script added successfully ✓</span>
                </div>
                <p className="text-xs text-white">
                  Your widget is ready! Pingo is now active and monitoring
                  conversations on your domain.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Step Indicator Bar */}
      <div className="px-5 py-3 border-t border-[#E5E7F0] dark:border-white/[0.06] bg-[#F5F6FA] dark:bg-[#100D1D]/70 flex items-center justify-between text-xs text-[#5E647E] dark:text-[#D5D0E5]/70 transition-colors duration-200">
        <span className="font-mono text-[11px]">
          Step {activeStep + 1} of 6
        </span>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx
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

export default SetupWorkflowPreview;

