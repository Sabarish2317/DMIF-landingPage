'use client'

import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  Trophy,
  Shield,
  LineChart,
  ChevronRight,
  Code,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.05,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const CertificationsPage = () => {


  const certificationPaths = [
    {
      id: "product",
      name: "AI Product Development",
      icon: Code,
      color: "#FA773A",
      tagline: "Build Production-Ready AI Products",
      description:
        "Master the complete lifecycle of AI product development from ideation to deployment",
      levels: [
        {
          level: "Associate",
          duration: "6 weeks",
          projects: 2,
          skills: [
            "AI Product Strategy",
            "User Research",
            "Prompt Engineering Basics",
            "Feasibility Analysis",
          ],
          outcomes: [
            "Design AI-powered features",
            "Conduct AI user research",
            "Build prototypes",
          ],
        },
        {
          level: "Specialist",
          duration: "6 weeks",
          projects: 4,
          skills: [
            "Advanced Prompting",
            "API Integration",
            "UI/UX for AI",
            "Performance Optimization",
          ],
          outcomes: [
            "Engineer production features",
            "Integrate AI APIs",
            "Build scalable interfaces",
          ],
        },
        {
          level: "Professional",
          duration: "4 weeks",
          projects: 1,
          skills: [
            "Full-Stack Architecture",
            "Deployment Strategy",
            "Safety Systems",
            "Enterprise Workflows",
          ],
          outcomes: [
            "Architect AI systems",
            "Deploy at scale",
            "Launch products",
          ],
        },
      ],
    },
    {
      id: "agentic",
      name: "Agentic AI Systems",
      icon: Brain,
      color: "indigo",
      tagline: "Create Autonomous AI Agents",
      description:
        "Build intelligent agents that reason, use tools, and operate autonomously",
      levels: [
        {
          level: "Associate",
          duration: "6 weeks",
          projects: 3,
          skills: [
            "Agentic Workflows",
            "Tool Calling",
            "RAG Systems",
            "Safety & Monitoring",
          ],
          outcomes: [
            "Build simple agents",
            "Integrate external tools",
            "Implement guardrails",
          ],
        },
        {
          level: "Specialist",
          duration: "6 weeks",
          projects: 5,
          skills: [
            "Multi-Agent Systems",
            "Orchestration",
            "Custom Tools",
            "Error Recovery",
          ],
          outcomes: [
            "Design agent pipelines",
            "Build complex workflows",
            "Optimize performance",
          ],
        },
        {
          level: "Professional",
          duration: "4 weeks",
          projects: 1,
          skills: [
            "Enterprise Infrastructure",
            "Governance",
            "Large-Scale Orchestration",
            "Security",
          ],
          outcomes: [
            "Deploy enterprise agents",
            "Implement compliance",
            "Scale systems",
          ],
        },
      ],
    },
  ];

  const specializations = [
    {
      title: "AI for Finance",
      icon: LineChart,
      status: "Coming Soon",
      highlights: [
        "Risk Modeling",
        "Fraud Detection",
        "Algorithmic Trading",
        "Credit Scoring",
      ],
    },
    {
      title: "AI  Security",
      icon: Shield,
      status: "Coming Soon",
      highlights: [
        "Threat Detection",
        "Anomaly Analysis",
        "Security Automation",
        "Incident Response",
      ],
    },
  ];



  return (
    <div className="min-h-screen flex flex-col gap-10  bg-linear-to-br from-gray-50 to-white">
      <div className="relative bg-[#FA773A] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#FA773A]/20"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Industry-Recognized Certifications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl text-white mb-8 max-w-2xl mx-auto"
          >
            Accelerate Your AI Career
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-lg text-white mb-10 max-w-3xl mx-auto"
          >
            Transform into an AI professional through progressive, hands-on
            certification programs designed for real-world impact.
          </motion.p>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h1440V0s-187.5 48-720 48S0 0 0 0v48z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </div>

      {/* Certification Paths */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two comprehensive certification tracks designed to build mastery
              progressively
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certificationPaths.map((path, index) => (
              <motion.div
                key={path.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <PathCard path={path} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Details */}
      <section className="px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl flex flex-col gap-5 mx-auto">
          <div className="text-center ">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Progressive Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each certification has three progressive levels with increasing
              complexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Associate", "Specialist", "Professional"].map((level, idx) => (
              <motion.div
                key={level}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <LevelCard level={level} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#FA773A] to-[#FA773A]/80 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Coming Soon
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Industry Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Domain-specific certifications launching in 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {specializations.map((spec, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpecializationCard spec={spec} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#FA773A] via-[#FA773A]/90 to-[#FA773A]/80">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Certified?
          </h2>

          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            Join a global community of AI professionals and transform your
            career with industry-recognized credentials
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.open("https://certifications.drmadhan.org/", "_blank")} className="bg-white cursor-pointer text-[#FA773A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Path Card Component
const PathCard = ({ path }: any) => {
  const Icon = path.icon;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 transition-colors hover:border-[#FA773A]/60">
      <div className="flex flex-wrap items-start gap-4">
        <div className="w-14 h-14 rounded-2xl border border-[#FA773A]/20 text-[#FA773A] flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-55">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Certification Path
            </span>
            <span className="rounded-full bg-[#FA773A]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#FA773A]">
              {path.levels.length} Levels
            </span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{path.name}</h3>
          <p className="text-sm font-medium text-[#FA773A] mt-0.5">
            {path.tagline}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-600 leading-relaxed border-l border-[#FA773A]/30 pl-4">
        {path.description}
      </p>

      <div className="mt-6 space-y-5">
        {path.levels.map((level: any, idx: number) => (
          <div key={idx} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#FA773A]/30 bg-white text-sm font-semibold text-[#FA773A]">
                {idx + 1}
              </span>
              {idx !== path.levels.length - 1 && (
                <span className="mt-2 h-full w-px bg-[#FA773A]/30"></span>
              )}
            </div>
            <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                    {level.level}
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    {level.duration} • 
                   (Hands on exercises + Final capstone)
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-0.5 text-xs font-medium text-slate-600">
                  Key Skills
                </span>
              </div>

              
              <div className="mt-3 flex flex-wrap gap-2">
                {level.skills
                  .slice(0, 3)
                  .map((skill: string, skillIdx: number) => (
                    <span
                      key={skillIdx}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Level Card Component
const LevelCard = ({ level, index }: any) => {
  const badges = ["Beginner", "Intermediate", "Advanced"];
  const icons = [BookOpen, Target, Trophy];
  const Icon = icons[index];
  const durations = ["6 weeks", "6 weeks", "4 weeks"];
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#FA773A] transition-all hover:shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 bg-[#FA773A] rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className="px-4 py-1 bg-[#FA773A]/10 text-[#FA773A] rounded-full text-sm font-semibold">
          {badges[index]}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{level}</h3>
      <p className="text-gray-600 mb-6">
        {index === 0 &&
          "Build foundational knowledge and create your first AI projects"}
        {index === 1 &&
          "Develop advanced skills and engineer production-ready solutions"}
        {index === 2 &&
          "Master architecture, deployment, and enterprise-scale systems"}
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="w-4 h-4 text-[#FA773A]" />
          <span className="text-sm">{durations[index]} duration</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="w-4 h-4 text-[#FA773A]" />
          <span className="text-sm">Live mentorship included</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Award className="w-4 h-4 text-[#FA773A]" />
          <span className="text-sm">Industry certification</span>
        </div>
      </div>
    </div>
  );
};

// Specialization Card Component
const SpecializationCard = ({ spec }: any) => {
  const Icon = spec.icon;

  return (
    <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-8 hover:border-[#FA773A] transition-all hover:shadow-xl">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-[#FA773A] rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {spec.title}
          </h3>
          <span className="inline-block px-3 py-1 bg-[#FA773A]/10 text-[#FA773A] rounded-full text-sm font-medium">
            {spec.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {spec.highlights.map((highlight: any, idx: number) => (
          <div key={idx} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#FA773A] shrink-0" />
            <span className="text-sm text-gray-700">{highlight}</span>
          </div>
        ))}
      </div>

      <button onClick={() => window.open("https://certifications.drmadhan.org/", "_blank")}

className="mt-6 w-full bg-[#FA773A] text-white py-3 cursor-pointer rounded-xl font-semibold hover:bg-[#FA773A]/80 transition-all flex items-center justify-center gap-2">
        Join Waitlist
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CertificationsPage;

