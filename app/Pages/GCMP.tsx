'use client'

import {  motion, type Transition } from "framer-motion";
import { Users, Target, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CodingProgram() {
  const shiftBlocks = [
    {
      label: "Old way",
      title: "Tutorial treadmill",
      description:
        "Collect courses, rewatch the same videos, and hope confidence appears someday.",
      items: [
        "Memorize syntax before touching anything real",
        "Paste AI snippets without understanding trade-offs",
        "Ship nothing because nobody reviews your code",
      ],
      footer: "Result: you know buzzwords, not decisions.",
      highlight: false,
    },
    {
      label: "G-CMP way",
      title: "Product apprenticeship",
      description:
        "Own a production-grade roadmap with a mentor who behaves like your product owner.",
      items: [
        "Start with a real brief and measurable outcomes",
        "Pair with mentors who explain the why behind every change",
        "Ship, review, refactor, and document like a real team",
      ],
      footer: "Result: your portfolio reads like release notes, not tutorials.",
      highlight: true,
    },
  ];

  const mentorshipSignals = [
    { label: "Mentor Response", value: "Fast reply" },
    { label: "Learning Style", value: "Build real projects" },
    { label: "Focus Area", value: "Code & Product" },
  ];

  const mentorshipStack = [
    {
      icon: Users,
      title: "Weekly planning & guidance",
      meta: "Mandatory sessions",
      copy: "You will start with an individual project guided by your mentor. Later, you’ll move into a group product where group of developers work together to build a complete real-world application.",
    },
    {
      icon: Zap,
      title: "Quick help when you’re stuck",
      meta: "Fast reply",
      copy: "If you’re blocked, you can reach out anytime. Share your doubts, code, or designs and get clear, direct guidance without waiting for the next session.",
    },
    {
      icon: Target,
      title: "Real product reviews",
      meta: "Code + UX",
      copy: "Mentors review your work like real product owners. They look at code quality, user experience, and decisions behind the implementation—not just whether it works.",
    },
  ];

  const buildPhases = [
    {
      step: "1",
      title: "Pick a project",
      copy: "Your mentor assigns a scoped, real brief instead of a tutorial so you always know the user, the constraints, and what success looks like.",
      outcome: "Shared definition of done with clear acceptance tests.",
    },
    {
      step: "2",
      title: "Build & struggle",
      copy: "You write production-grade code, break things, and get targeted guidance only when you need it. Every blocker turns into a design conversation.",
      outcome: "Working feature slices that ship every sprint.",
    },
    {
      step: "3",
      title: "Ship & iterate",
      copy: "Deploy, demo, gather feedback, and refactor. Mentors review like product owners so you internalize trade-offs, not just fixes.",
      outcome: "A release note-worthy project with measurable impact.",
    },
  ];

  const tracks = [
  {
    title: "AI Product Development",
    description:
      "Learn how to build AI-powered products using real-world use cases.",
    color: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-200",
    badge: "border-purple-300 bg-purple-50 text-purple-700",
  },
  {
    title: "Full Stack Development",
    description:
      "Understand end-to-end application development from frontend to backend.",
    color: "from-[#FA773A]/10 to-[#FA773A]/5",
    borderColor: "border-[#FA773A]/30",
    badge: "border-[#FA773A]/30 bg-[#FA773A]/10 text-[#FA773A]",
  },
  {
    title: "Cloud-Native Development",
    description:
      "Learn how to develop, deploy, scale, and manage applications on the Cloud.",
    color: "from-cyan-50 to-cyan-100/50",
    borderColor: "border-cyan-200",
    badge: "border-cyan-300 bg-cyan-50 text-cyan-700",
  },
  {
    title: "Agentic AI Development",
    description:
      "Explore how intelligent agents work and how to build autonomous AI systems",
    color: "from-amber-50 to-amber-100/50",
    borderColor: "border-amber-200",
    badge: "border-amber-300 bg-amber-50 text-amber-700",
  },
  {
    title: "DMIF Custom Coding Track",
    description:
      "A customized, project-first coding track aligned to all type of Industry needs.",
    color: "from-emerald-50 to-emerald-100/50",
    borderColor: "border-emerald-200",
    badge: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
];

  const viewportConfig = { once: true, amount: 0.3 };
  const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionTransition: Transition = {
    duration: 0.7,
    ease: [0.22, 0.55, 0.25, 0.95] as const,
  };
  const motionSectionProps = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: viewportConfig,
    variants: sectionVariants,
    transition: sectionTransition,
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        {...motionSectionProps}
        className="relative pt-20 pb-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid gap-10 items-center lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-l font-bold tracking-[0.2em] text-[#FA773A] uppercase">
              DMIF G-CMP <br/>Global Coding Mentorship Program 
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black">
              Build first.
              <br />
              Learn next.
              <br />
              <span className="text-[#FA773A]">Master forever.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Real mentorship for real engineers.
              <br />
              No lectures. Just projects.
            </p>
            <Link
              href="/#contact"
              className="group max-w-fit inline-flex items-center gap-3 rounded-full bg-[#FA773A] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FA773A]/80"
            >
              Start building
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-0">
            <img
              className="w-full max-w-lg object-contain"
              src="/illustration.svg"
              alt="Mentor guiding a student through code"
            />
          </div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <motion.section
        {...motionSectionProps}
        className="bg-[#FA773A] items-center justify-center py-12 px-6"
      >
        <div className="max-w-6xl mx-auto grid gap-8 text-center sm:text-left md:grid-cols-3">
          {[
            { stat: "100%", label: "Project-based learning" },
            { stat: "1-on-1", label: "Dedicated Mentorship" },
            { stat: "Real", label: "Production-grade code" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <p className="text-2xl sm:text-3xl w-full text-center font-bold text-white">
                {item.stat}
              </p>
              <p className="text-gray-300 w-full text-center text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* The Shift */}
      <motion.section {...motionSectionProps} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FA773A]">
              The shift
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Stop Tutorials. Start Building.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600">
              A simple comparison of what changes when you stop consuming
              content and start owning production-grade releases with mentors
              who care about outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {shiftBlocks.map((block) => (
              <article
                key={block.label}
                className={`relative overflow-hidden rounded-4xl border p-8 transition-all duration-300  ${
                  block.highlight
                    ? "border-transparent bg-[#FA773A] text-white"
                    : "border-gray-100 bg-white text-gray-900"
                }`}
              >
                <div className="relative flex flex-col gap-5">
                  <span
                    className={`inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.4em] ${
                      block.highlight ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {block.label}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`text-xl font-semibold ${
                        block.highlight ? "text-white" : "text-black"
                      }`}
                    >
                      {block.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        block.highlight ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {block.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                            block.highlight
                              ? "bg-white/25 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {block.highlight ? "✓" : "—"}
                        </span>
                        <p
                          className={`text-sm leading-relaxed ${
                            block.highlight ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`text-xs ${
                      block.highlight ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {block.footer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...motionSectionProps} className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Before G-CMP",
              copy: "Endless tutorials, zero clarity. The code editor feels like a wall, not a playground.",
              tone: "bg-rose-50",
              image: "/ill3.svg",
              alt: "Student feeling stuck and frustrated while learning alone",
            },
            {
              title: "After G-CMP",
              copy: "Guided sprints, real mentorship, and your own shipped products that prove your skills.",
              tone: "bg-emerald-50",
              image: "/ill2.svg",
              alt: "Confident student collaborating online and celebrating progress",
            },
          ].map(({ title, copy, tone, image, alt }) => (
            <figure
              key={title}
              className={`${tone} flex flex-col gap-4 rounded-[28px] p-7 shadow-inner`}
            >
              <img
                className="h-56 w-full rounded-xl object-cover"
                src={image}
                alt={alt}
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {copy}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section {...motionSectionProps} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FA773A]/70">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              How it works
            </h2>
            <p className="text-sm text-gray-500">
              A tight three-step cadence keeps you shipping: scope with your
              mentor, build relentlessly, then iterate based on real feedback.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {buildPhases.map((card, index) => (
              <article
                key={card.step}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white  p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FA773A]/10 text-sm font-semibold text-[#FA773A]">
                      {card.step}
                    </span>
                    <h3 className="text-base font-semibold text-black">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#FA773A]/50">
                    Step {index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.copy}
                </p>
                <div className="h-px bg-linear-to-r from-transparent via-[#FA773A]/20 to-transparent" />
                <div className="flex flex-col gap-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-400">
                    Outcome
                  </p>
                  <p className="text-sm text-gray-800">{card.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>
  {/* Tracks Showcase */}
      <motion.section {...motionSectionProps} className="py-20 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FA773A]">
              Learning Paths
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Choose Your Track
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600">
              Specialized learning paths designed to take you from beginner to industry-ready across different areas of modern development.
            </p>
          </div>
 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Row 1 – 3 cards */}
      {tracks.slice(0, 3).map((track) => (
        <article
          key={track.title}
          className={`group relative overflow-hidden rounded-2xl border ${track.borderColor} bg-linear-to-br ${track.color} p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
        >
          <div className="relative flex h-full flex-col gap-4">
            <div
              className={`inline-flex w-fit rounded-full border ${track.badge} px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em]`}
            >
              Track
            </div>

            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
              {track.title}
            </h3>

            <p className="grow text-sm text-gray-700 leading-relaxed">
              {track.description}
            </p>

          </div>
        </article>
      ))}

      {/* Row 2 – 2 cards */}
      <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
        {tracks.slice(3).map((track) => (
          <article
            key={track.title}
            className={`group relative overflow-hidden rounded-2xl border ${track.borderColor} bg-linear-to-br ${track.color} p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
          >
            <div className="relative flex h-full flex-col gap-4">
              <div
                className={`inline-flex w-fit rounded-full border ${track.badge} px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em]`}
              >
                Track
              </div>

              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {track.title}
              </h3>

              <p className="grow text-sm text-gray-700 leading-relaxed">
                {track.description}
              </p>

       
            </div>
          </article>
        ))}
      </div>
    </div>
        </div>
      </motion.section>
      {/* Visual Break */}
      <motion.section
        {...motionSectionProps}
        className="py-14 px-6 bg-[#FA773A]"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-white">
            "AI generates code.
            <br />
            Engineers <span className="italic">understand</span> code."
          </p>
        </div>
      </motion.section>

      {/* Mentorship */}
      <motion.section
        {...motionSectionProps}
        className="py-20 px-6 bg-linear-to-br from-white via-slate-50 to-[#FA773A]/10"
      >
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#FA773A]/70">
                Mentorship model
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Mentors focus on your results, not just meetings
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                You’ll work like part of a real product team. Mentors help with
                planning, unblock issues quickly, and review your work based on
                real users and business needs — not just code syntax.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {mentorshipSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-gray-100 bg-white p-4"
                >
                  <p className="text-xs text-[#FA773A]/60">{signal.label}</p>
                  <p className="mt-3 text-lg font-semibold text-[#FA773A]">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Mentors behave like product owners: they challenge decisions,
              request instrumentation, and demand clarity on trade-offs.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {mentorshipStack.map(({ icon: Icon, title, copy, meta }) => (
              <article
                key={title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-[#FA773A]/5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-[#FA773A]/10 text-[#FA773A]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-base font-semibold text-black">
                      {title}
                    </h4>
                    <span className="rounded-full border border-gray-100 bg-[#FA773A]/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[#FA773A]/70">
                      {meta}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who's This For */}
      <motion.section
        {...motionSectionProps}
        className="bg-[#FA773A] py-24 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Who's this for?
            </h2>
            <p className="text-base text-gray-200">
              Anyone ready to become a real engineer.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "School & college students",
              "Career switchers",
              "Working engineers",
              "AI tool users",
            ].map((label) => (
              <div key={label} className="rounded-xl bg-gray-100/15 p-7">
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <p className="mt-2 text-gray-200 text-xs sm:text-sm">
                  {label === "School & college students" &&
                    "Build your foundation before placements matter."}
                  {label === "Career switchers" &&
                    "No CS degree? No problem. Just commitment."}
                  {label === "Working engineers" &&
                    "Level up to product, R&D, or architecture roles."}
                  {label === "AI tool users" &&
                    "Go from copy-paste to actually understanding code."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

    

      {/* Final CTA */}
      <motion.section {...motionSectionProps} className="py-28 px-6">
        <div className="mx-auto max-w-4xl flex flex-col gap-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Stop reading.
            <br />
            Start building.
          </h2>
          <div className="flex flex-col items-center gap-5">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FA773A] px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#FA773A]/80"
            >
              Join G-CMP
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-gray-500">
              No Prior Experience. Just bring your curiosity.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


