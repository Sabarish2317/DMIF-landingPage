'use client'

import { motion, type Transition } from 'framer-motion'
import { Users, Target, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const dotPattern = {
  backgroundImage:
    'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
  backgroundSize: '10px 10px',
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function CodingProgram() {
  const shiftBlocks = [
    {
      label: 'Old way',
      title: 'Tutorial treadmill',
      description:
        'Collect courses, rewatch the same videos, and hope confidence appears someday.',
      items: [
        'Memorize syntax before touching anything real',
        'Paste AI snippets without understanding trade-offs',
        'Ship nothing because nobody reviews your code',
      ],
      footer: 'Result: you know buzzwords, not decisions.',
      highlight: false,
    },
    {
      label: 'G-CMP way',
      title: 'Product apprenticeship',
      description:
        'Own a production-grade roadmap with a mentor who behaves like your product owner.',
      items: [
        'Start with a real brief and measurable outcomes',
        'Pair with mentors who explain the why behind every change',
        'Ship, review, refactor, and document like a real team',
      ],
      footer: 'Result: your portfolio reads like release notes, not tutorials.',
      highlight: true,
    },
  ]

  const mentorshipSignals = [
    { label: 'Mentor Response', value: 'Fast reply' },
    { label: 'Learning Style', value: 'Build real projects' },
    { label: 'Focus Area', value: 'Code & Product' },
  ]

  const mentorshipStack = [
    {
      icon: Users,
      title: 'Weekly planning & guidance',
      meta: 'Mandatory sessions',
      copy: 'You will start with an individual project guided by your mentor. Later, you’ll move into a group product where group of developers work together to build a complete real-world application.',
    },
    {
      icon: Zap,
      title: 'Quick help when you’re stuck',
      meta: 'Fast reply',
      copy: 'If you’re blocked, you can reach out anytime. Share your doubts, code, or designs and get clear, direct guidance without waiting for the next session.',
    },
    {
      icon: Target,
      title: 'Real product reviews',
      meta: 'Code + UX',
      copy: 'Mentors review your work like real product owners. They look at code quality, user experience, and decisions behind the implementation—not just whether it works.',
    },
  ]

  const buildPhases = [
    {
      step: '1',
      title: 'Pick a project',
      copy: 'Your mentor assigns a scoped, real brief instead of a tutorial so you always know the user, the constraints, and what success looks like.',
      outcome: 'Shared definition of done with clear acceptance tests.',
    },
    {
      step: '2',
      title: 'Build & struggle',
      copy: 'You write production-grade code, break things, and get targeted guidance only when you need it. Every blocker turns into a design conversation.',
      outcome: 'Working feature slices that ship every sprint.',
    },
    {
      step: '3',
      title: 'Ship & iterate',
      copy: 'Deploy, demo, gather feedback, and refactor. Mentors review like product owners so you internalize trade-offs, not just fixes.',
      outcome: 'A release note-worthy project with measurable impact.',
    },
  ]

  const tracks = [
    {
      title: 'AI Product Development',
      description:
        'Learn how to build AI-powered products using real-world use cases.',
    },
    {
      title: 'Full Stack Development',
      description:
        'Understand end-to-end application development from frontend to backend.',
    },
    {
      title: 'Cloud-Native Development',
      description:
        'Learn how to develop, deploy, scale, and manage applications on the Cloud.',
    },
    {
      title: 'Agentic AI Development',
      description:
        'Explore how intelligent agents work and how to build autonomous AI systems.',
    },
    {
      title: 'DMIF Custom Coding Track',
      description:
        'A customized, project-first coding track aligned to all types of industry needs.',
    },
  ]

  const viewportConfig = { once: true, amount: 0.3 }
  const sectionVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  }
  const sectionTransition: Transition = {
    duration: 0.7,
    ease: [0.22, 0.55, 0.25, 0.95] as const,
  }
  const motionSectionProps = {
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: viewportConfig,
    variants: sectionVariants,
    transition: sectionTransition,
  }

  return (
    <div className="min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-[#0E0A18] px-6 py-24 md:px-16" style={dotPattern}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
            DMIF G-CMP
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            Build first. Learn next. Master forever.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Real mentorship for real engineers. No lectures. Just projects.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FD4F0C] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start Building <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#FD4F0C] px-6 py-10 md:px-16" style={dotPattern}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-3">
          {[
            { stat: '100%', label: 'Project-based Learning' },
            { stat: '1-on-1', label: 'Dedicated Mentorship' },
            { stat: 'Real', label: 'Production-grade Code' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {item.stat}
              </p>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Shift */}
      <motion.section {...motionSectionProps} className="bg-white px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#FA773A] uppercase">
              The shift
            </p>
            <h2 className="text-2xl font-bold text-black sm:text-3xl">
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
                className={`relative overflow-hidden rounded-4xl border p-8 transition-all duration-300 ${
                  block.highlight
                    ? 'border-transparent bg-[#FD4F0C] text-white'
                    : 'border-gray-200 bg-white text-gray-900'
                }`}
              >
                <div className="relative flex flex-col gap-5">
                  <span
                    className={`inline-flex text-[0.65rem] font-semibold tracking-[0.4em] uppercase ${
                      block.highlight ? 'text-white/70' : 'text-gray-400'
                    }`}
                  >
                    {block.label}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`text-xl font-semibold ${
                        block.highlight ? 'text-white' : 'text-black'
                      }`}
                    >
                      {block.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        block.highlight ? 'text-white/80' : 'text-gray-600'
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
                              ? 'bg-white/25 text-white'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {block.highlight ? '✓' : '—'}
                        </span>
                        <p
                          className={`text-sm leading-relaxed ${
                            block.highlight ? 'text-white' : 'text-gray-600'
                          }`}
                        >
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`text-xs ${
                      block.highlight ? 'text-white/70' : 'text-gray-400'
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

      <motion.section
        {...motionSectionProps}
        className="bg-[#0E0A18] px-6 py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Before G-CMP',
              copy: 'Endless tutorials, zero clarity. The code editor feels like a wall, not a playground.',
            },
            {
              title: 'After G-CMP',
              copy: 'Guided sprints, real mentorship, and your own shipped products that prove your skills.',
            },
          ].map(({ title, copy }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{copy}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section {...motionSectionProps} className="bg-white px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
              Process
            </span>
            <h2 className="text-2xl font-bold text-black sm:text-3xl">
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
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                  <span className="text-[0.65rem] font-semibold tracking-[0.35em] text-[#FA773A]/50 uppercase">
                    Step {index + 1}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {card.copy}
                </p>
                <div className="h-px bg-linear-to-r from-transparent via-[#FA773A]/20 to-transparent" />
                <div className="flex flex-col gap-1">
                  <p className="text-[0.65rem] tracking-[0.3em] text-gray-400 uppercase">
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
      <motion.section
        {...motionSectionProps}
        className="bg-[#0E0A18] px-6 py-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#FA773A] uppercase">
              Learning Paths
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Choose Your Track
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              Specialized learning paths designed to take you from beginner to
              industry-ready across different areas of modern development.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tracks.slice(0, 3).map((track) => (
              <article
                key={track.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FD4F0C]/40"
              >
                <div className="flex h-full flex-col gap-4">
                  <span className="inline-flex w-fit rounded-full border border-[#FD4F0C]/30 bg-[#FD4F0C]/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
                    Track
                  </span>
                  <h3 className="text-base leading-tight font-semibold text-white">
                    {track.title}
                  </h3>
                  <p className="grow text-sm leading-relaxed text-white/60">
                    {track.description}
                  </p>
                </div>
              </article>
            ))}
            <div className="grid gap-6 md:grid-cols-2 lg:col-span-3">
              {tracks.slice(3).map((track) => (
                <article
                  key={track.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FD4F0C]/40"
                >
                  <div className="flex h-full flex-col gap-4">
                    <span className="inline-flex w-fit rounded-full border border-[#FD4F0C]/30 bg-[#FD4F0C]/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
                      Track
                    </span>
                    <h3 className="text-base leading-tight font-semibold text-white">
                      {track.title}
                    </h3>
                    <p className="grow text-sm leading-relaxed text-white/60">
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
        className="bg-[#FD4F0C] px-6 py-14"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed font-medium text-white sm:text-xl">
            "AI generates code.
            <br />
            Engineers <span className="italic">understand</span> code."
          </p>
        </div>
      </motion.section>

      {/* Mentorship */}
      <motion.section {...motionSectionProps} className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.4em] text-[#FA773A]/70 uppercase">
                Mentorship model
              </span>
              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Mentors focus on your results, not just meetings
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
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
                    <span className="rounded-full border border-gray-100 bg-[#FA773A]/10 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.35em] text-[#FA773A]/70 uppercase">
                      {meta}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
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
        className="bg-[#0E0A18] px-6 py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Who's this for?
            </h2>
            <p className="text-base text-gray-200">
              Anyone ready to become a real engineer.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              'School & college students',
              'Career switchers',
              'Working engineers',
              'AI tool users',
            ].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <p className="mt-2 text-xs text-gray-200 sm:text-sm">
                  {label === 'School & college students' &&
                    'Build your foundation before placements matter.'}
                  {label === 'Career switchers' &&
                    'No CS degree? No problem. Just commitment.'}
                  {label === 'Working engineers' &&
                    'Level up to product, R&D, or architecture roles.'}
                  {label === 'AI tool users' &&
                    'Go from copy-paste to actually understanding code.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        {...motionSectionProps}
        className="bg-[#FD4F0C] px-6 py-28"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-8 text-center">
          <h2 className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl">
            Stop reading.
            <br />
            Start building.
          </h2>
          <div className="flex flex-col items-center gap-5">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#FD4F0C] transition-all duration-300 hover:bg-white/90"
            >
              Join G-CMP
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-white/80">
              No Prior Experience. Just bring your curiosity.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
