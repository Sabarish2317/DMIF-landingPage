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
} from "lucide-react";
import Link from "next/link";

export default function ETIPLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#FA773A]/10 via-white to-[#FA773A]/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            {/* Hero Content */}
            <div className="flex flex-col gap-8 text-center items-center">
              <div className="inline-block px-6 py-2 bg-[#FA773A]/10 backdrop-blur-900 rounded-full border border-[#FA773A]/20">
            <span className="text-[#FA773A] uppercase font-semibold text-sm">
  DMIF E-TIP
  <br />
  Executive Technology Immersion Program
</span>

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-5xl">
                Re-Engineering Technical Leadership in the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FA773A] to-[#FA773A]/80">
                  Age of AI
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
                A personalized, mentor-led technical re-immersion program for
                senior executives and engineering leaders
              </p>

              <div className="flex flex-col cursor-pointer  sm:flex-row gap-4 mt-8">
                <Link href="/#contact" className="px-8 cursor-pointer py-4 bg-[#FA773A] hover:bg-[#FA773A]/80 text-white rounded-lg font-semibold text-lg backdrop-blur-900 transition-all flex items-center justify-center gap-2">
                  Start Your Journey <ArrowRight size={20} />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Problem E-TIP Solves
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Organizations face a growing challenge in technical leadership
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left - Accountability */}
              <div className="flex flex-col gap-6 p-8 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-900/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Leaders Are Accountable For
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    "AI-driven products",
                    "Cloud-native platforms",
                    "Agentic systems",
                    "Rapidly evolving tech stacks",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-900 rounded-lg"
                    >
                      <CheckCircle
                        className="text-green-900 shrink-0"
                        size={20}
                      />
                      <span className="text-base text-gray-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Reality */}
              <div className="flex flex-col gap-6 p-8 bg-linear-to-br from-red-50 to-orange-50 rounded-2xl border border-red-900/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    But Many Leaders
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    "Away from hands-on coding for years",
                    "Struggle to evaluate technical decisions",
                    "Difficult to challenge engineering teams",
                    "Rely on second-hand interpretations",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-900 rounded-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-900 flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <span className="text-base text-gray-700 font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 py-20">
            <div className="text-center flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                E-TIP Philosophy
              </h2>

              <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-white/60 backdrop-blur-900 rounded-2xl border border-[#FA773A]/10">
                  <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
                    Executives don't need to{" "}
                    <span className="text-red-600 line-through">
                      code daily
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#FA773A] flex items-center justify-center">
                    <ArrowDown className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-6 bg-linear-to-r from-[#FA773A] to-[#FA773A]/80 rounded-2xl">
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                    They need to{" "}
                    <span className="text-yellow-400">understand deeply</span>{" "}
                    and{" "}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Makes E-TIP Different
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Not a training program. Not a certification course. A mentored
                technical immersion.
              </p>
            </div>

            {/* Not This, But This */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-400 text-center">
                  ❌ Traditional Approach
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    "Slide-heavy classroom teaching",
                    "Tool-only exposure",
                    "Generic bootcamp-style learning",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-lg border border-gray-200 opacity-60"
                    >
                      <span className="text-gray-500 line-through">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 p-8 bg-linear-to-br from-[#FA773A]/10 to-[#FA773A]/5 rounded-2xl border-2 border-[#FA773A]">
                <h3 className="text-2xl font-bold text-[#FA773A] text-center">
                  ✓ E-TIP Approach
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    "Learn through real product contexts",
                    "Rebuild technical intuition",
                    "Understand modern system design",
                    "Ask the right technical questions",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-900 rounded-lg border border-[#FA773A]/20">
                    
                      <CheckCircle
                        className="text-[#FA773A] shrink-0"
                        size={24}
                      />
                      <span className="text-gray-900 font-medium">{item}</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Mentorship Model
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="p-6 bg-linear-to-br from-[#FA773A]/10 to-[#FA773A]/5 rounded-2xl border border-[#FA773A]/20 flex flex-col gap-4">
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

              <div className="p-6 bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-900/10 flex flex-col gap-4">
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

              <div className="p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-900/10 flex flex-col gap-4">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 py-20">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Time Commitment
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Designed for busy senior leaders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-2xl border-2 border-orange-900 flex flex-col gap-6 items-center text-center">
                <div className="p-3 bg-orange-900 rounded-full">
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

              <div className="p-6 bg-white rounded-2xl border-2 border-amber-900 flex flex-col gap-6 items-center text-center">
                <div className="p-3 bg-amber-900 rounded-full">
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
      <section className="bg-linear-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4">
         
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Executive Track Options
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a specialized track tailored to your leadership role and strategic priorities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Sparkles,
                title: "AI Product Strategy & Architecture",
                description: "Hands-on exposure to AI product design and architecture through live builds and mentor-led execution",
                color: "from-[#FA773A]/10 to-[#FA773A]/5",
                borderColor: "border-[#FA773A]/30",
                badge: "border-[#FA773A]/30 bg-[#FA773A]/10 text-[#FA773A]",
                accentColor: "text-[#FA773A]",
              },
              {
                icon: Code,
                title: "Full Stack Strategy & Architecture",
                description: "Practical walkthrough of end-to-end application development via guided coding and live system demonstrations.",
                color: "from-purple-50 to-purple-100/50",
                borderColor: "border-purple-200",
                badge: "border-purple-300 bg-purple-50 text-purple-700",
                accentColor: "text-purple-900",
              },
              {
                icon: Cloud,
                title: "Enterprise Cloud Strategy & Economics",
                description: "Hands-on cloud deployment and scaling with real-time demonstrations covering cost, performance, and operations",
                color: "from-cyan-50 to-cyan-100/50",
                borderColor: "border-cyan-200",
                badge: "border-cyan-300 bg-cyan-50 text-cyan-700",
                accentColor: "text-cyan-900",
              },
              {
                icon: Brain,
                title: "Agentic AI Strategy",
                description: "Direct interaction with agentic AI systems through guided builds and live autonomous workflow execution",
                color: "from-amber-50 to-amber-100/50",
                borderColor: "border-amber-200",
                badge: "border-amber-300 bg-amber-50 text-amber-700",
                accentColor: "text-amber-900",
              },
              {
                icon: Sparkles,
                title: "DMIF Custom Executive Track",
                description: "A personalized executive track tailored torole, experience, and strategic technology goals.",
                color: "from-indigo-50 to-indigo-100/50",
                borderColor: "border-indigo-200",
                badge: "border-indigo-300 bg-indigo-50 text-indigo-700",
                accentColor: "text-indigo-900",
              },
            ].map((track, i) => (
              <article
                key={i}
                className={`group relative overflow-hidden rounded-2xl border ${track.borderColor} bg-linear-to-br ${track.color} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col gap-4`}
              >
                <div className={`inline-flex w-fit rounded-full border ${track.badge} px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em]`}>
                  Track
                </div>
                <div className="flex flex-col gap-3 grow">
                  <div className={`p-2 bg-white/40 rounded-lg w-fit`}>
                    <track.icon className={`${track.accentColor} h-6 w-6`} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    {track.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who Should Join E-TIP
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Engineering Managers, Directors, VPs", icon: Users },
                { title: "Delivery Heads & Program Leaders", icon: Target },
                { title: "CTO Aspirants", icon: TrendingUp },
                { title: "Senior Architects in Management", icon: Code },
                { title: "AI/Cloud/Platform Team Leaders", icon: Cloud },
                { title: "Technical Product Leaders", icon: Sparkles },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#FA773A] hover:shadow-lg transition-all flex flex-col gap-3 items-center text-center group"
                >
                  <div className="p-3 bg-[#FA773A]/10 group-hover:bg-[#FA773A] rounded-lg transition-all">
                    <item.icon
                      className="text-[#FA773A] group-hover:text-white transition-all"
                      size={28}
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 py-20">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Outcomes of E-TIP
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Transform your technical leadership
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Regain technical confidence and clarity",
                  icon: CheckCircle,
                  color: "purple",
                },
                {
                  title: "Understand modern AI-driven systems deeply",
                  icon: Brain,
                  color: "purple",
                },
                {
                  title: "Lead engineering teams with authority",
                  icon: Users,
                  color: "pink",
                },
                {
                  title: "Make informed architectural decisions",
                  icon: Target,
                  color: "green",
                },
                {
                  title: "Engage confidently at leadership levels",
                  icon: TrendingUp,
                  color: "amber",
                },
                {
                  title: "Bridge strategy and execution",
                  icon: Zap,
                  color: "cyan",
                },
              ].map((outcome, i) => (
                <div
                  key={i}
                  className={`p-5 bg-${outcome.color}-50 rounded-xl border border-gray-200 flex flex-col gap-3`}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 py-20 items-center text-center">
            <div className="flex flex-col gap-3 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to Re-Engineer Your Technical Leadership?
              </h2>
              <p className="text-lg md:text-xl text-white">
                Join E-TIP and regain your technical edge in the age of AI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link href="/#contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-[#FA773A] rounded-lg font-bold text-lg backdrop-blur-900 transition-all flex items-center justify-center gap-2 shadow-2xl">
                Enroll in E-TIP <ArrowRight size={20} />
              </Link>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


