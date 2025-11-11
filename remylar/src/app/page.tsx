 "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  Cpu,
} from "lucide-react";

export default function Home() {
  const floatingNodes = [
    {
      id: "signals",
      title: "Signal Graph",
      subtitle: "Streaming decisions",
      position: "top-[10%] left-[6%]",
      delay: 0,
    },
    {
      id: "governance",
      title: "Policy Guard",
      subtitle: "LLM governance sync",
      position: "bottom-[18%] left-[12%]",
      delay: 0.2,
    },
    {
      id: "autopilot",
      title: "Ops Autopilot",
      subtitle: "Human in the loop",
      position: "top-[18%] right-[12%]",
      delay: 0.4,
    },
  ];

  const workflowPillars = [
    {
      id: "synthesis",
      icon: <Sparkles className="h-4 w-4 text-sky-200" />,
      title: "Synthesis Engine",
      description: "Compresses fragmented data into temporal memory blocks.",
      metric: "+92%",
      status: "Workflow completion",
    },
    {
      id: "assurance",
      icon: <ShieldCheck className="h-4 w-4 text-emerald-200" />,
      title: "Trust Assurance",
      description: "Granular access controls with real-time lineage replay.",
      metric: "12ms",
      status: "Policy override latency",
    },
    {
      id: "cortex",
      icon: <Cpu className="h-4 w-4 text-indigo-200" />,
      title: "Intent Cortex",
      description: "Routes each prompt to the optimal inference fleet.",
      metric: "5.6x",
      status: "Cost efficiency",
    },
  ];

  const timeline = [
    {
      stage: "Ingest",
      detail: "Encrypted connectors normalize data from CRM, ERP, email, and knowledge bases.",
      value: "143B events / day",
    },
    {
      stage: "Orchestrate",
      detail: "Adaptive graph planner decomposes workflows with deterministic checkpoints.",
      value: "Context window aware",
    },
    {
      stage: "Deliver",
      detail: "Live copilots push insight packets into enterprise tools with audit replay.",
      value: "Native to Slack, ServiceNow",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent">
      <div aria-hidden className="grain-overlay" />
      <div aria-hidden className="mesh-grid" />
      <div aria-hidden className="orb-gradient orb-gradient--blue" />
      <div aria-hidden className="orb-gradient orb-gradient--violet" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-20 px-6 pb-24 pt-24 md:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <header className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="relative flex flex-1 flex-col gap-12">
            <div className="badge-glow inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-sky-100/90">
              <Workflow className="h-3.5 w-3.5 text-sky-200" />
              REMYLAR • WORKFLOW INTELLIGENCE CLOUD
            </div>

            <div className="space-y-7">
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-transparent bg-gradient-to-r from-sky-200 via-white to-purple-200 bg-clip-text">
                  Turn your enterprise data into workflow intelligence
                </span>{" "}
                that evolves in real time.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200/80 md:text-xl md:leading-9">
                Remylar is the AI infrastructure tier built to convert siloed systems into a living neural memory.
                We sequence every signal, align it to policy, and ship autonomous copilots that stay in lockstep with your business.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#consult"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:shadow-[0_20px_80px_rgba(94,149,255,0.35)]"
              >
                Design a private runbook
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#blueprint"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10 hover:border-white/25"
              >
                See the data blueprint
              </Link>
            </div>

            <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-4">
                <div className="node-ring relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/70 to-cyan-400/60 shadow-[0_10px_45px_rgba(65,132,255,0.45)]">
                  <span className="relative text-sm font-semibold tracking-wide">24/7</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90">Critical response</p>
                  <p className="text-xs text-slate-300/70">Zero downtime inference mesh</p>
                </div>
              </div>
              <div className="divider-gradient hidden md:block" />
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300/70">
                <span className="rounded-full bg-white/5 px-3 py-1">SOC 2 Type II</span>
                <span className="rounded-full bg-white/5 px-3 py-1">HIPAA Aligned</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Global data residency</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Hybrid deployment</span>
              </div>
            </div>
          </div>

          <div className="relative flex max-w-xl flex-1 flex-col gap-6">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.02] p-8 shadow-[0_25px_80px_rgba(7,15,34,0.65)] backdrop-blur-2xl">
              <div className="pipeline-curve" aria-hidden>
                <svg viewBox="0 0 420 320" fill="none">
                  <path d="M15 280C95 210 140 260 210 180C280 100 310 120 360 60C410 0 430 20 430 20" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-200/80 uppercase tracking-[0.3em]">
                  Workflow Telemetry
                </p>
                <span className="rounded-full border border-sky-400/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-sky-200/80">
                  LIVE
                </span>
              </div>
              <div className="mt-8 space-y-5">
                {timeline.map((item) => (
                  <div key={item.stage} className="edge-gradient--dark relative overflow-hidden rounded-3xl p-5">
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-100">
                      <span>{item.stage}</span>
                      <span className="text-xs text-sky-200/80">{item.value}</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-300/80">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h2 className="text-xs uppercase tracking-[0.28em] text-slate-200/80">
                Pillars of orchestration
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {workflowPillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="group edge-gradient rounded-3xl p-4 transition duration-300 hover:scale-[1.01] hover:shadow-[0_18px_70px_rgba(72,129,255,0.35)]"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                        {pillar.icon}
                      </div>
                      <p className="text-sm font-semibold text-white">{pillar.title}</p>
                    </div>
                    <p className="text-xs leading-5 text-slate-200/75">{pillar.description}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-100/70">
                      <span className="font-semibold tracking-wide text-slate-100">{pillar.metric}</span>
                      <span>{pillar.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="relative flex flex-col gap-12">
          <div id="blueprint" className="relative rounded-[40px] border border-white/10 bg-white/[0.03] px-8 py-10 backdrop-blur-xl lg:px-12">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-70" />
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  The enterprise command layer for autonomous workflows
                </h2>
                <p className="text-base leading-7 text-slate-200/70">
                  Remylar fuses knowledge, operations, and governance into a single nervous system.
                  We harden every workflow with deterministic guardrails while retaining the creativity of generative agents.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-200/80">Memory Mesh</p>
                  <h3 className="mt-3 text-base font-semibold text-white">Continuously learning workflows</h3>
                  <p className="mt-2 text-sm text-slate-200/75">
                    Temporal embeddings preserve decisions, making every future action context aware.
                  </p>
                </article>
                <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]">
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-200/80">Control Fabric</p>
                  <h3 className="mt-3 text-base font-semibold text-white">Regulate every inference edge</h3>
                  <p className="mt-2 text-sm text-slate-200/75">
                    Versioned policy layers trace every output with instant rollback and audit export.
                  </p>
                </article>
              </div>
            </div>
            {floatingNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 0.9, y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  delay: node.delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className={`absolute ${node.position} hidden lg:block`}
              >
                <div className="node-ring relative w-[220px] rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-2xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
                    {node.title}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">{node.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            id="consult"
            className="flex flex-col justify-between gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 backdrop-blur-xl lg:flex-row lg:items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-200/70">
                Trusted by operators
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                48 of the Fortune 200 run mission-critical decisions through Remylar.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Financial Services
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Global Supply Chain
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Biopharma
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Telecom
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
