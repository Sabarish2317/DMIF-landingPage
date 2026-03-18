'use client'

import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Brain,
  Target,
  Trophy,
  Shield,
  LineChart,
  ChevronRight,
  Code,
  Briefcase
} from 'lucide-react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.05, duration: 0.55, ease: 'easeOut' },
  }),
}

const CertificationsPage = () => {
  const certificationPaths = [
    {
      id: 'product',
      name: 'AI Product Development',
      icon: Code,
      tagline: 'Build Production-Ready AI Products',
      description:
        'Master the complete lifecycle of AI product development from ideation to deployment.',
      levels: [
        {
          level: 'Associate',
          duration: '6 weeks',
          skills: [
            'AI Product Strategy',
            'User Research',
            'Prompt Engineering Basics',
            'Feasibility Analysis',
          ],
        },
        {
          level: 'Specialist',
          duration: '6 weeks',
          skills: [
            'Advanced Prompting',
            'API Integration',
            'UI/UX for AI',
            'Performance Optimization',
          ],
        },
        {
          level: 'Professional',
          duration: '4 weeks',
          skills: [
            'Full-Stack Architecture',
            'Deployment Strategy',
            'Safety Systems',
            'Enterprise Workflows',
          ],
        },
      ],
    },
    {
      id: 'agentic',
      name: 'Agentic AI Systems',
      icon: Brain,
      tagline: 'Create Autonomous AI Agents',
      description:
        'Build intelligent agents that reason, use tools, and operate autonomously.',
      levels: [
        {
          level: 'Associate',
          duration: '6 weeks',
          skills: [
            'Agentic Workflows',
            'Tool Calling',
            'RAG Systems',
            'Safety & Monitoring',
          ],
        },
        {
          level: 'Specialist',
          duration: '6 weeks',
          skills: [
            'Multi-Agent Systems',
            'Orchestration',
            'Custom Tools',
            'Error Recovery',
          ],
        },
        {
          level: 'Professional',
          duration: '4 weeks',
          skills: [
            'Enterprise Infrastructure',
            'Governance',
            'Large-Scale Orchestration',
            'Security',
          ],
        },
      ],
    },
  ]

  const specializations = [
    {
      title: 'AI for Finance',
      icon: LineChart,
      status: 'Coming Soon',
      highlights: [
        'Risk Modeling',
        'Fraud Detection',
        'Algorithmic Trading',
        'Credit Scoring',
      ],
    },
    {
      title: 'AI Security',
      icon: Shield,
      status: 'Coming Soon',
      highlights: [
        'Threat Detection',
        'Anomaly Analysis',
        'Security Automation',
        'Incident Response',
      ],
    },
{
  title: 'AI for CXOs',
  icon: Briefcase,
  status: 'Coming Soon',
  highlights: [
    'AI-Driven Decision Making',
    'Business Forecasting',
    'Operational Efficiency',
    'Strategic Automation',
  ],
}
  ]

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
            DMIF PCP &nbsp;·&nbsp; Professional Certification Program
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            Industry-Recognized Certifications
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Accelerate your AI career through progressive, hands-on
            certification programs designed for real-world impact.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FD4F0C] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#FD4F0C] px-6 py-10 md:px-16" style={dotPattern}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { stat: '2', label: 'Certification Paths' },
            { stat: '3', label: 'Progressive Levels' },
            { stat: '16+', label: 'Weeks of Learning' },
            { stat: 'AI', label: 'Industry-Ready Skills' },
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

      {/* Certification Paths */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
              Paths
            </span>
            <h2 className="text-2xl font-bold text-black md:text-4xl">
              Choose Your Path
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
              Two comprehensive certification tracks designed to build mastery
              progressively.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {certificationPaths.map((path, index) => {
              const Icon = path.icon
              return (
                <motion.div
                  key={path.id}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-2xl border border-gray-200 bg-white p-7 transition-colors hover:border-[#FD4F0C]/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#FD4F0C]/20 bg-[#FD4F0C]/5">
                      <Icon className="h-5 w-5 text-[#FD4F0C]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase">
                        Certification Path
                      </span>
                      <h3 className="mt-0.5 text-lg font-semibold text-black">
                        {path.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[#FD4F0C]">
                        {path.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 border-l-2 border-[#FD4F0C]/30 pl-4 text-sm leading-relaxed text-gray-600">
                    {path.description}
                  </p>
                  <div className="mt-6 space-y-4">
                    {path.levels.map((level, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#FD4F0C]/30 text-sm font-semibold text-[#FD4F0C]">
                            {idx + 1}
                          </span>
                          {idx !== path.levels.length - 1 && (
                            <span className="mt-2 h-full w-px bg-[#FD4F0C]/20" />
                          )}
                        </div>
                        <div className="mb-4 flex-1 rounded-xl border border-gray-100 bg-gray-50 p-4">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <p className="text-[11px] tracking-wide text-gray-500 uppercase">
                                {level.level}
                              </p>
                              <p className="text-sm font-semibold text-black">
                                {level.duration} · Hands-on + Capstone
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {level.skills.slice(0, 3).map((skill, si) => (
                              <span
                                key={si}
                                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Progressive Levels */}
      <section className="bg-[#0E0A18] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
              Journey
            </span>
            <h2 className="text-2xl font-bold text-white md:text-4xl">
              Progressive Learning Journey
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/60 md:text-base">
              Each certification has three progressive levels with increasing
              complexity.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                level: 'Associate',
                badge: 'Beginner',
                icon: BookOpen,
                duration: '6 weeks',
                desc: 'Build foundational knowledge and create your first AI projects.',
              },
              {
                level: 'Specialist',
                badge: 'Intermediate',
                icon: Target,
                duration: '6 weeks',
                desc: 'Develop advanced skills and engineer production-ready solutions.',
              },
              {
                level: 'Professional',
                badge: 'Advanced',
                icon: Trophy,
                duration: '4 weeks',
                desc: 'Master architecture, deployment, and enterprise-scale systems.',
              },
            ].map(({ level, badge, icon: Icon, duration, desc }, idx) => (
              <motion.div
                key={level}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-[#FD4F0C]/40"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FD4F0C]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full border border-[#FD4F0C]/20 bg-[#FD4F0C]/10 px-3 py-1 text-xs font-semibold text-[#FD4F0C]">
                    {badge}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{level}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/60">
                  {desc}
                </p>
                <div className="space-y-2">
                  {[
                    { icon: Clock, label: `${duration} duration` },
                    { icon: Users, label: 'Live mentorship included' },
                    { icon: Award, label: 'Industry certification' },
                  ].map(({ icon: I, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-white/60"
                    >
                      <I className="h-4 w-4 text-[#FD4F0C]" />
                      <span className="text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-12">
          <div className="flex flex-col gap-3 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#FD4F0C]/20 bg-[#FD4F0C]/10 px-4 py-1.5 text-xs font-semibold text-[#FD4F0C]">
              Coming Soon
            </span>
            <h2 className="text-2xl font-bold text-black md:text-4xl">
              Industry Specializations
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
              Domain-specific certifications launching in 2025.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {specializations.map((spec, idx) => {
              const Icon = spec.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-[#FD4F0C] hover:shadow-md"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FD4F0C]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">
                        {spec.title}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-[#FD4F0C]/10 px-3 py-0.5 text-xs font-semibold text-[#FD4F0C]">
                        {spec.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {spec.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-[#FD4F0C]" />
                        <span className="text-sm text-gray-700">{h}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        'https://certifications.drmadhan.org/',
                        '_blank'
                      )
                    }
                    className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FD4F0C] py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                  >
                    Join Waitlist <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-[#FD4F0C] px-4 py-20 sm:px-6 lg:px-8"
        style={dotPattern}
      >
        <motion.div
          className="mx-auto flex max-w-3xl flex-col gap-6 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            Ready to Get Certified?
          </h2>
          <p className="mx-auto max-w-xl text-sm text-white/80 md:text-base">
            Join a global community of AI professionals and transform your
            career with industry-recognized credentials.
          </p>
          <div className="mt-2 flex justify-center">
            <button
              onClick={() =>
                window.open('https://certifications.drmadhan.org/', '_blank')
              }
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-semibold text-[#FD4F0C] transition-all hover:bg-white/90"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default CertificationsPage
