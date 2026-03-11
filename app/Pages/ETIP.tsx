'use client'

import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Brain,
  Code,
  Cloud,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Clock,
  MessageSquare,
  ArrowDown,
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

export default function ETIPLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0E0A18] px-6 py-24 md:px-16" style={dotPattern}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
            DMIF E-TIP &nbsp;·&nbsp; Executive Technology Immersion Program
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            Re-Engineering Technical Leadership in the Age of AI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            A personalized, mentor-led technical re-immersion program for senior
            executives and engineering leaders.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FD4F0C] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#FD4F0C] px-6 py-10 md:px-16" style={dotPattern}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { stat: '1:1', label: 'Dedicated Mentorship' },
            { stat: '1 hr', label: 'Per Week Live Session' },
            { stat: '5', label: 'Executive Tracks' },
            { stat: 'Senior', label: 'Leader Focused' },
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

      {/* The Problem Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                The Problem E-TIP Solves
              </h2>
              <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
                Organizations face a growing challenge in technical leadership
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Left - Accountability */}
              <div className="flex flex-col gap-6 rounded-2xl border border-green-900/10 bg-linear-to-br from-green-50 to-emerald-50 p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-900 p-3">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Leaders Are Accountable For
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    'AI-driven products',
                    'Cloud-native platforms',
                    'Agentic systems',
                    'Rapidly evolving tech stacks',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-900 flex items-center gap-3 rounded-lg bg-white/60 p-3"
                    >
                      <CheckCircle
                        className="shrink-0 text-green-900"
                        size={20}
                      />
                      <span className="text-base font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Reality */}
              <div className="flex flex-col gap-6 rounded-2xl border border-red-900/10 bg-linear-to-br from-red-50 to-orange-50 p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-red-900 p-3">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    But Many Leaders
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    'Away from hands-on coding for years',
                    'Struggle to evaluate technical decisions',
                    'Difficult to challenge engineering teams',
                    'Rely on second-hand interpretations',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-900 flex items-center gap-3 rounded-lg bg-white/60 p-3"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-900">
                        <span className="text-xs font-bold text-white">!</span>
                      </div>
                      <span className="text-base font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-linear-to-br from-[#FA773A]/10 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 py-20">
            <div className="flex flex-col gap-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                E-TIP Philosophy
              </h2>

              <div className="mx-auto flex max-w-4xl flex-col gap-6">
                <div className="backdrop-blur-900 rounded-2xl border border-[#FA773A]/10 bg-white/60 p-6">
                  <p className="text-xl leading-relaxed font-semibold text-gray-900 md:text-2xl">
                    Executives don&apos;t need to{' '}
                    <span className="text-red-600 line-through">
                      code daily
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FA773A]">
                    <ArrowDown className="text-white" size={24} />
                  </div>
                </div>

                <div className="rounded-2xl bg-linear-to-r from-[#FA773A] to-[#FA773A]/80 p-6">
                  <p className="text-xl leading-relaxed font-semibold text-white md:text-2xl">
                    They need to{' '}
                    <span className="text-yellow-400">understand deeply</span>{' '}
                    and{' '}
                    <span className="text-green-400">lead intelligently</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes E-TIP Different */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                What Makes E-TIP Different
              </h2>
              <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
                Not a training program. Not a certification course. A mentored
                technical immersion.
              </p>
            </div>

            {/* Not This, But This */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6 rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
                <h3 className="text-center text-2xl font-bold text-gray-400">
                  ❌ Traditional Approach
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    'Slide-heavy classroom teaching',
                    'Tool-only exposure',
                    'Generic bootcamp-style learning',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-gray-200 bg-white p-4 opacity-60"
                    >
                      <span className="text-gray-500 line-through">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 rounded-2xl border-2 border-[#FA773A] bg-linear-to-br from-[#FA773A]/10 to-[#FA773A]/5 p-8">
                <h3 className="text-center text-2xl font-bold text-[#FA773A]">
                  ✓ E-TIP Approach
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    'Learn through real product contexts',
                    'Rebuild technical intuition',
                    'Understand modern system design',
                    'Ask the right technical questions',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-900 flex items-center gap-3 rounded-lg border border-[#FA773A]/20 bg-white/80 p-4"
                    >
                      <CheckCircle
                        className="shrink-0 text-[#FA773A]"
                        size={24}
                      />
                      <span className="font-medium text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Model */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Mentorship Model
              </h2>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col gap-4 rounded-2xl border border-[#FA773A]/20 bg-linear-to-br from-[#FA773A]/10 to-[#FA773A]/5 p-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-[#FA773A]" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">
                    Weekly Interaction
                  </h3>
                </div>
                <p className="text-base text-gray-700">
                  1-hour structured session with hands-on product/technology
                  mentor
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-purple-900/10 bg-linear-to-br from-purple-50 to-pink-50 p-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-purple-900" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">
                    Continuous Support
                  </h3>
                </div>
                <p className="text-base text-gray-700">
                  Dedicated online channel for ongoing interaction and
                  clarification
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-green-900/10 bg-linear-to-br from-green-50 to-emerald-50 p-6">
                <div className="flex items-center gap-3">
                  <Users className="text-green-900" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">
                    Industry Experience
                  </h3>
                </div>
                <p className="text-base text-gray-700">
                  Mentors with deep hands-on product development experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Commitment */}
      <section className="bg-linear-to-br from-amber-50 via-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Time Commitment
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Designed for busy senior leaders
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-orange-900 bg-white p-6 text-center">
                <div className="rounded-full bg-orange-900 p-3">
                  <Clock className="text-white" size={40} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold text-orange-900">
                    1 hour
                  </span>
                  <span className="text-base text-gray-600">per week</span>
                </div>
                <p className="text-base text-gray-700">
                  Live mentor interaction
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-amber-900 bg-white p-6 text-center">
                <div className="rounded-full bg-amber-900 p-3">
                  <Brain className="text-white" size={40} />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold text-amber-900">
                    3-4 hours
                  </span>
                  <span className="text-base text-gray-600">per week</span>
                </div>
                <p className="text-base text-gray-700">
                  Guided exploration & hands-on thinking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Tracks */}
      <section className="bg-linear-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Executive Track Options
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
              Choose a specialized track tailored to your leadership role and
              strategic priorities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Sparkles,
                title: 'AI Product Strategy & Architecture',
                description:
                  'Hands-on exposure to AI product design and architecture through live builds and mentor-led execution',
                color: 'from-[#FA773A]/10 to-[#FA773A]/5',
                borderColor: 'border-[#FA773A]/30',
                badge: 'border-[#FA773A]/30 bg-[#FA773A]/10 text-[#FA773A]',
                accentColor: 'text-[#FA773A]',
              },
              {
                icon: Code,
                title: 'Full Stack Strategy & Architecture',
                description:
                  'Practical walkthrough of end-to-end application development via guided coding and live system demonstrations.',
                color: 'from-purple-50 to-purple-100/50',
                borderColor: 'border-purple-200',
                badge: 'border-purple-300 bg-purple-50 text-purple-700',
                accentColor: 'text-purple-900',
              },
              {
                icon: Cloud,
                title: 'Enterprise Cloud Strategy & Economics',
                description:
                  'Hands-on cloud deployment and scaling with real-time demonstrations covering cost, performance, and operations',
                color: 'from-cyan-50 to-cyan-100/50',
                borderColor: 'border-cyan-200',
                badge: 'border-cyan-300 bg-cyan-50 text-cyan-700',
                accentColor: 'text-cyan-900',
              },
              {
                icon: Brain,
                title: 'Agentic AI Strategy',
                description:
                  'Direct interaction with agentic AI systems through guided builds and live autonomous workflow execution',
                color: 'from-amber-50 to-amber-100/50',
                borderColor: 'border-amber-200',
                badge: 'border-amber-300 bg-amber-50 text-amber-700',
                accentColor: 'text-amber-900',
              },
              {
                icon: Sparkles,
                title: 'DMIF Custom Executive Track',
                description:
                  'A personalized executive track tailored torole, experience, and strategic technology goals.',
                color: 'from-indigo-50 to-indigo-100/50',
                borderColor: 'border-indigo-200',
                badge: 'border-indigo-300 bg-indigo-50 text-indigo-700',
                accentColor: 'text-indigo-900',
              },
            ].map((track, i) => (
              <article
                key={i}
                className={`group relative overflow-hidden rounded-2xl border ${track.borderColor} bg-linear-to-br ${track.color} flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div
                  className={`inline-flex w-fit rounded-full border ${track.badge} px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] uppercase`}
                >
                  Track
                </div>
                <div className="flex grow flex-col gap-3">
                  <div className={`w-fit rounded-lg bg-white/40 p-2`}>
                    <track.icon className={`${track.accentColor} h-6 w-6`} />
                  </div>
                  <h3 className="text-base leading-snug font-semibold text-gray-900">
                    {track.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {track.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="bg-linear-to-br from-slate-50 via-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Who Should Join E-TIP
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Engineering Managers, Directors, VPs', icon: Users },
                { title: 'Delivery Heads & Program Leaders', icon: Target },
                { title: 'CTO Aspirants', icon: TrendingUp },
                { title: 'Senior Architects in Management', icon: Code },
                { title: 'AI/Cloud/Platform Team Leaders', icon: Cloud },
                { title: 'Technical Product Leaders', icon: Sparkles },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 text-center transition-all hover:border-[#FA773A] hover:shadow-lg"
                >
                  <div className="rounded-lg bg-[#FA773A]/10 p-3 transition-all group-hover:bg-[#FA773A]">
                    <item.icon
                      className="text-[#FA773A] transition-all group-hover:text-white"
                      size={28}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Outcomes of E-TIP
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Transform your technical leadership
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Regain technical confidence and clarity',
                  icon: CheckCircle,
                  color: 'purple',
                },
                {
                  title: 'Understand modern AI-driven systems deeply',
                  icon: Brain,
                  color: 'purple',
                },
                {
                  title: 'Lead engineering teams with authority',
                  icon: Users,
                  color: 'pink',
                },
                {
                  title: 'Make informed architectural decisions',
                  icon: Target,
                  color: 'green',
                },
                {
                  title: 'Engage confidently at leadership levels',
                  icon: TrendingUp,
                  color: 'amber',
                },
                {
                  title: 'Bridge strategy and execution',
                  icon: Zap,
                  color: 'cyan',
                },
              ].map((outcome, i) => (
                <div
                  key={i}
                  className={`p-5 bg-${outcome.color}-50 flex flex-col gap-3 rounded-xl border border-gray-200`}
                >
                  <outcome.icon
                    className={`text-${outcome.color}-900`}
                    size={28}
                  />
                  <p className="text-base font-semibold text-gray-900">
                    {outcome.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-[#FA773A] via-[#FA773A]/90 to-[#FA773A]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 py-20 text-center">
            <div className="flex max-w-4xl flex-col gap-3">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Ready to Re-Engineer Your Technical Leadership?
              </h2>
              <p className="text-lg text-white md:text-xl">
                Join E-TIP and regain your technical edge in the age of AI
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              <Link
                href="/#contact"
                className="backdrop-blur-900 flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#FA773A] shadow-2xl transition-all hover:bg-gray-100"
              >
                Enroll in E-TIP <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
