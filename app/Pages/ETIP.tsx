'use client'

import { motion, type Transition } from 'framer-motion'
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
} from 'lucide-react'
import Link from 'next/link'
import Footer from '@/app/components/Layout/Footer'

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
    <main className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0E0A18] px-6 py-24 md:px-16" style={dotPattern}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.35em] text-[#FA773A] uppercase">
            DMIF E-TIP
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            Reclaim Your Technical Leadership
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Master AI-driven products, cloud systems, and agentic technology
            with mentor-led immersion designed for busy executives.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FD4F0C] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Apply for E-TIP <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Key Stats */}
      <section className="bg-[#FD4F0C] px-6 py-10 md:px-16" style={dotPattern}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { stat: '1:1', label: 'Mentorship' },
            { stat: '1 hr', label: 'Weekly Sessions' },
            { stat: '5', label: 'Track Options' },
            { stat: '∞', label: 'Support Access' },
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

      {/* The Problem */}
      <section className="bg-gray-50 px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            The Leadership Challenge
          </h2>
          <p className="mb-12 max-w-2xl text-lg text-gray-600">
            Modern leaders face a critical gap: they are accountable for
            AI-driven products, cloud systems, and agentic technology - but many
            are years removed from hands-on development.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-8">
              <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-gray-900">
                <Target className="text-[#FA773A]" size={24} />
                What Leaders Own
              </h3>
              <ul className="space-y-4">
                {[
                  'AI-driven product decisions',
                  'Cloud architecture choices',
                  'Agentic system governance',
                  'Technical team leadership',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 shrink-0 text-[#FA773A]"
                      size={20}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-8">
              <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-gray-900">
                <Zap className="text-gray-400" size={24} />
                The Reality
              </h3>
              <ul className="space-y-4">
                {[
                  'Away from hands-on coding for years',
                  'Hesitant to challenge engineering decisions',
                  'Struggle to evaluate technical tradeoffs',
                  'Rely on second-hand interpretations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-sm font-bold text-gray-400">
                      ✕
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-4xl">
            E-TIP Philosophy
          </h2>
          <p className="mb-6 text-2xl font-semibold text-gray-900">
            Executives don&apos;t need to{' '}
            <span className="text-gray-400 line-through">code daily</span>
          </p>
          <p className="text-2xl font-semibold text-[#FA773A]">
            They need to understand deeply and lead intelligently
          </p>
        </div>
      </section>

      {/* What Makes E-TIP Different */}
      <section className="bg-gray-50 px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            What Makes E-TIP Different
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Not training. Not certification. A mentor-led technical immersion.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-8">
              <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Traditional Approach ❌
              </h3>
              <ul className="space-y-3">
                {[
                  'Slide-heavy classroom teaching',
                  'Generic tool exposure',
                  'One-size-fits-all bootcamp',
                  'Limited real-world context',
                ].map((item, i) => (
                  <li key={i} className="text-gray-600 line-through">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-[#FA773A] bg-white p-8">
              <h3 className="mb-6 text-lg font-semibold text-[#FA773A]">
                E-TIP Approach ✓
              </h3>
              <ul className="space-y-3">
                {[
                  'Learn through real product contexts',
                  'Rebuild technical intuition',
                  'Understand modern system design',
                  'Ask the right technical questions',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 shrink-0 text-[#FA773A]"
                      size={20}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Model */}
      <section className="px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 lg:text-4xl">
            Your Mentorship Model
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900">
                <Clock className="text-[#FA773A]" size={24} />
                Weekly Sessions
              </h3>
              <p className="text-gray-600">
                1-hour structured interaction with a hands-on mentor who has
                deep product experience
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900">
                <MessageSquare className="text-[#FA773A]" size={24} />
                Continuous Support
              </h3>
              <p className="text-gray-600">
                Dedicated channel for ongoing interaction, questions, and
                clarification between sessions
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900">
                <Users className="text-[#FA773A]" size={24} />
                Industry Experience
              </h3>
              <p className="text-gray-600">
                Mentors with deep hands-on product development experience in
                modern tech
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Commitment */}
      <section className="bg-gray-50 px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Time Commitment
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Designed for busy executive schedules
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-[#FA773A] bg-white p-8 text-center">
              <div className="mb-2 text-4xl font-bold text-[#FA773A]">
                1 hour
              </div>
              <div className="mb-4 text-gray-600">per week</div>
              <p className="text-gray-700">
                Live structured session with mentor
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-300 bg-white p-8 text-center">
              <div className="mb-2 text-4xl font-bold text-gray-900">
                3-4 hours
              </div>
              <div className="mb-4 text-gray-600">per week</div>
              <p className="text-gray-700">
                Self-paced exploration and learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Tracks */}
      <section className="px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Executive Track Options
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Choose a track tailored to your leadership priorities and technical
            interests
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Sparkles,
                title: 'AI Product Strategy',
                description:
                  'Master AI-driven product design and architecture through hands-on mentor-led development',
              },
              {
                icon: Code,
                title: 'Full Stack Strategy',
                description:
                  'Understand end-to-end application development from frontend to infrastructure',
              },
              {
                icon: Cloud,
                title: 'Cloud Strategy',
                description:
                  'Learn cloud deployment, scaling, cost optimization, and operational excellence',
              },
              {
                icon: Brain,
                title: 'Agentic AI Strategy',
                description:
                  'Explore autonomous systems and agentic workflows in modern applications',
              },
            ].map((track, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-[#FA773A]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <track.icon className="text-[#FA773A]" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {track.title}
                  </h3>
                </div>
                <p className="text-gray-600">{track.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-[#FA773A] bg-[#FD4F0C]/5 p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Custom Track
            </h3>
            <p className="text-gray-600">
              A personalized track tailored to your specific role, experience,
              and strategic technology goals
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="bg-gray-50 px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 lg:text-4xl">
            Who Should Join E-TIP
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Engineering Managers & Directors', icon: Users },
              { title: 'VP Engineering & CTO Aspirants', icon: TrendingUp },
              { title: 'Delivery & Program Leaders', icon: Target },
              { title: 'Senior Architects', icon: Code },
              { title: 'AI/Cloud/Platform Team Leads', icon: Cloud },
              { title: 'Technical Product Leaders', icon: Sparkles },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-[#FA773A]"
              >
                <item.icon className="mt-1 shrink-0 text-[#FA773A]" size={24} />
                <span className="font-medium text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            E-TIP Outcomes
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Transform your technical leadership and regain authority
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Regain technical confidence and clarity',
                icon: CheckCircle,
              },
              {
                title: 'Understand modern AI-driven systems deeply',
                icon: Brain,
              },
              { title: 'Lead engineering teams with authority', icon: Users },
              { title: 'Make informed architectural decisions', icon: Target },
              {
                title: 'Engage confidently at leadership levels',
                icon: TrendingUp,
              },
              { title: 'Bridge strategy and execution', icon: Zap },
            ].map((outcome, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6"
              >
                <outcome.icon
                  className="mt-1 shrink-0 text-[#FA773A]"
                  size={24}
                />
                <p className="font-medium text-gray-900">{outcome.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={dotPattern} className="bg-[#FD4F0C] px-6 py-20 sm:px-8 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
            Ready to Reclaim Your Technical Leadership?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
            Join E-TIP and regain technical confidence in the age of AI
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-[#FA773A] transition-colors hover:bg-gray-100"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
