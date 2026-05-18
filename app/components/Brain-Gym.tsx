import { useEffect, useRef } from 'react'
import CalEmbed from '@/app/components/common/CalEmbed'
import {
  BrainCircuit,
  BookOpen,
  Eye,
  Globe2,
  Lightbulb,
  Link2,
  ShieldCheck,
  Sigma,
  SunMedium,
  Target,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

interface Feature {
  num: string
  title: string
  desc: string
}

interface Step {
  num: string
  title: string
  body: string
}

interface PersonCard {
  who: string
  whoColor: string
  title: string
  items: string[]
}

interface Area {
  icon: React.ReactNode
  name: string
}

interface Problem {
  num: string
  title: string
  desc: string
}

interface WhoCard {
  tag: string
  title: string
  body: string
}

interface EcoCard {
  icon: string
  title: string
  body: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: '20–30', unit: ' min', label: 'Structured daily practice window' },
  { value: 'Age 12', unit: ' → CXO', label: 'All learners, all backgrounds' },
  {
    value: '8+',
    unit: '',
    label: 'Cognitive dimensions strengthened together',
  },
  { value: '1', unit: '', label: 'Consistent daily session is all it takes' },
]

const TICKER_ITEMS = [
  'Focus',
  'Memory & Recall',
  'Mental Clarity',
  'Creative Thinking',
  'Cognitive Discipline',
  'Working Memory',
  'Whole-Brain Activation',
  'Learning Efficiency',
  'Analytical Thinking',
]

const FEATURES: Feature[] = [
  {
    num: '01',
    title: 'Focus & Concentration',
    desc: 'Sustained deep attention and resistance to distraction in high-pressure environments.',
  },
  {
    num: '02',
    title: 'Memory & Recall',
    desc: 'Expanded working memory and faster information retrieval under real-world conditions.',
  },
  {
    num: '03',
    title: 'Mental Clarity & Awareness',
    desc: 'Elimination of brain fog and sharper situational awareness throughout the day.',
  },
  {
    num: '04',
    title: 'Learning Efficiency',
    desc: 'Absorb, process, and retain complex information faster — in any domain.',
  },
  {
    num: '05',
    title: 'Creative & Analytical Thinking',
    desc: 'Activate whole-brain function — balancing pattern recognition with original ideation.',
  },
  {
    num: '06',
    title: 'Cognitive Discipline',
    desc: 'The mental control that transforms inconsistent performance into reliable output.',
  },
]

const STEPS: Step[] = [
  {
    num: 'Step 01',
    title: 'Morning Activation',
    body: "Practice immediately after waking — when the brain is in its most naturally receptive state before the day's conditioning sets in.",
  },
  {
    num: 'Step 02',
    title: 'Structured Progression',
    body: 'Begin with ~20 minutes and build toward a full 30-minute routine as cognitive familiarity and control develop naturally.',
  },
  {
    num: 'Step 03',
    title: 'Active Engagement',
    body: 'The brain stays actively engaged throughout — even during stillness, focus, and awareness-based exercises. Nothing is passive.',
  },
  {
    num: 'Step 04',
    title: 'Mastery & Evolution',
    body: 'As mastery deepens, techniques evolve and challenge expanding cognitive capacity at each new stage of the program.',
  },
]

const PERSON_CARDS: PersonCard[] = [
  {
    who: 'Students · Grade 6 onwards',
    whoColor: 'text-[#fd4f0c]',
    title: 'Academic Performance & Concentration',
    items: [
      'Deep concentration for studying',
      'Memory and recall for exams',
      'Faster academic learning efficiency',
      'Structured thinking for writing',
    ],
  },
  {
    who: 'Working Professionals',
    whoColor: 'text-[#2a2623]',
    title: 'Clarity, Speed & Structured Thinking',
    items: [
      'Mental clarity and sustained focus',
      'Faster cognitive processing',
      'Structured thinking and communication',
      'Performance under real pressure',
    ],
  },
  {
    who: 'Executives & CXOs',
    whoColor: 'text-[#fd4f0c]',
    title: 'Leadership Cognition & Sharpness',
    items: [
      'Overcoming persistent brain fog',
      'Sharper decision-making awareness',
      'Confidence while communicating',
      'Sustained mental sharpness',
    ],
  },
]

const AREAS: Area[] = [
  {
    icon: <Target className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Attention & Concentration',
  },
  {
    icon: <BrainCircuit className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Working Memory',
  },
  {
    icon: <Eye className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Cognitive Awareness',
  },
  {
    icon: <Link2 className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Structured Thinking',
  },
  {
    icon: <SunMedium className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Mental Clarity',
  },
  {
    icon: <BookOpen className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Learning Readiness',
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Creative Thinking',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Emotional & Mental Discipline',
  },
  {
    icon: <Sigma className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Analytical Thinking',
  },
  {
    icon: <Globe2 className="h-5 w-5 text-[#fd4f0c]" />,
    name: 'Whole-Brain Activation',
  },
]

const PROBLEMS: Problem[] = [
  {
    num: '01',
    title: 'Brain Fog',
    desc: 'Persistent mental cloudiness that dulls decision-making and reduces daily clarity.',
  },
  {
    num: '02',
    title: 'Reduced Concentration',
    desc: 'Difficulty sustaining focus on complex tasks for any meaningful period of time.',
  },
  {
    num: '03',
    title: 'Mental Fatigue',
    desc: 'Cognitive exhaustion from information overload that accumulates daily.',
  },
  {
    num: '04',
    title: 'Slower Thinking Under Pressure',
    desc: 'Reduced speed and quality of thought when performance matters most.',
  },
  {
    num: '05',
    title: 'Difficulty Retaining Information',
    desc: 'Learning today and losing it tomorrow — a cycle that compounds over time.',
  },
]

const WHO_CARDS: WhoCard[] = [
  {
    tag: 'School Students · Grade 6+',
    title: 'Build the Foundation',
    body: 'Establish strong cognitive habits early — concentration, memory, and learning efficiency that compound through years of education.',
  },
  {
    tag: 'College & University',
    title: 'Excel Academically',
    body: 'Improve study efficiency, concentration, and recall for demanding curricula, competitive exams, and high-stakes presentations.',
  },
  {
    tag: 'Researchers & PhD Scholars',
    title: 'Sustain Deep Work',
    body: 'Strengthen focused cognition and structured thinking for sustained original research and long-form academic writing.',
  },
  {
    tag: 'Working Professionals',
    title: 'Perform at a Higher Level',
    body: 'Overcome mental fatigue, sharpen clarity, and operate at your cognitive best inside demanding professional environments.',
  },
  {
    tag: 'Entrepreneurs & Innovators',
    title: 'Think Faster & Clearer',
    body: 'Activate creative and analytical cognition to make better decisions faster and navigate the complexity of building something new.',
  },
  {
    tag: 'CXOs & Senior Executives',
    title: 'Lead With Sharpness',
    body: 'Restore the mental sharpness, awareness, and presence that leadership demands — and address the cognitive slowdown that comes with it.',
  },
]

const OUTCOMES = [
  'Sharper focus and sustained concentration',
  'Faster thinking and response formulation',
  'Better memory and recall under pressure',
  'Improved academic or professional performance',
  'Greater mental clarity and confidence',
  'Better processing of complex information',
  'Improved structured thinking and communication',
  'Greater awareness in meetings and presentations',
]

const ECO_CARDS: EcoCard[] = [
  {
    icon: '💡',
    title: 'Patents & Innovation',
    body: 'Sharper creative cognition generates better ideas and stronger patent-worthy inventions in any domain.',
  },
  {
    icon: '📝',
    title: 'Research Papers',
    body: 'Cognitive clarity and structured thinking directly improve the quality and originality of academic research.',
  },
  {
    icon: '💻',
    title: 'Coding & Product Dev',
    body: 'Focused analytical thinking accelerates problem-solving and improves technical decision-making.',
  },
  {
    icon: '🚀',
    title: 'Entrepreneurship',
    body: 'Entrepreneurs with stronger cognition make better decisions and navigate complexity more confidently.',
  },
  {
    icon: '🎓',
    title: 'Academic Growth',
    body: 'Students who train consistently see measurable improvements in learning efficiency and exam performance.',
  },
  {
    icon: '🏢',
    title: 'Professional Growth',
    body: 'Professionals who sharpen cognition communicate clearly, lead effectively, and advance faster.',
  },
]

const handleOpenBooking = () => {
  document.getElementById('cal-booking')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

// ─── Shared sub-components ───────────────────────────────────────────────────

interface SectionTagProps {
  label: string
  dark?: boolean
}

const SectionTag = ({ label, dark = false }: SectionTagProps) => (
  <div>
    <div
      className={`mb-4 h-0.5 w-9 ${dark ? 'bg-[#fd4f0c]' : 'bg-[#fd4f0c]'}`}
    />
    <span
      className={`mb-[14px] block font-mono text-[0.66rem] tracking-[0.12em] uppercase ${dark ? 'text-white/35' : 'text-[rgba(26,24,20,0.58)]'}`}
    >
      {label}
    </span>
  </div>
)

interface SectionHeadingProps {
  children: React.ReactNode
  dark?: boolean
  className?: string
}

const SectionHeading = ({
  children,
  dark = false,
  className = '',
}: SectionHeadingProps) => (
  <h2
    className={`font-playfair leading-[1.1] font-bold tracking-[-0.02em] ${dark ? 'text-white' : 'text-[#fd4f0c]'} ${className}`}
    style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)' }}
  >
    {children}
  </h2>
)

// ─── Section components ──────────────────────────────────────────────────────

const Hero = () => (
  <section
    id="bg-hero"
    className="relative mt-[128px] grid grid-cols-1 overflow-hidden border-b border-[rgba(26,24,20,0.1)] px-8 pb-[72px] lg:grid-cols-2 lg:px-[72px]"
    style={{ alignItems: 'end' }}
  >
    <div className="z-10 flex flex-col gap-6 pb-5">
      <div className="sr flex items-center gap-[10px]">
        <span className="h-px w-7 bg-[#fd4f0c]" />
        <span className="font-mono text-[0.68rem] tracking-[0.1em] text-[#fd4f0c] uppercase">
          Neuroscience-Inspired Cognitive Training
        </span>
      </div>

      <h1
        className="sr d1 font-playfair leading-[1.03] font-semibold tracking-[-0.025em] text-[#2a2623]"
        style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
      >
        Build a<br />
        <em className="text-[#fd4f0c] italic">Stronger Brain.</em>
        <br />
        Think Better.
      </h1>

      <p className="sr d2 max-w-[46ch] text-[0.9375rem] leading-[1.78] font-light text-[rgba(26,24,20,0.58)]">
        A proprietary brain activation system built through years of
        neuroscience-inspired research and hands-on mentorship. Not a
        supplement. Not passive relaxation. Structured daily practice that
        changes how you focus, learn, and perform.
      </p>

      <div className="sr d3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleOpenBooking}
          className="group inline-flex items-center gap-[7px] rounded-[4px] bg-[#1e1e1e] px-[26px] py-[13px] text-[0.84rem] font-medium text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fd4f0c]"
        >
          Apply Now
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>

    <div className="sr d2 flex flex-col border-t border-[rgba(26,24,20,0.1)] pt-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-[52px]">
      {HERO_STATS.map(({ value, unit, label }, i) => (
        <div
          key={i}
          className="flex flex-col gap-1 border-b border-[rgba(26,24,20,0.1)] py-[26px] first:pt-0 last:border-b-0 last:pb-0"
        >
          <div
            className="font-playfair leading-none font-bold tracking-[-0.02em] text-[#2a2623]"
            style={{ fontSize: 'clamp(2.2rem,3.5vw,3.2rem)' }}
          >
            {value}
            {unit && <span className="text-[1.3rem] font-light">{unit}</span>}
          </div>
          <div className="text-[0.78rem] font-light tracking-[0.01em] text-[rgba(42,38,35,0.58)]">
            {label}
          </div>
        </div>
      ))}
    </div>
  </section>
)

const Ticker = () => (
  <div aria-hidden="true" className="overflow-hidden bg-[#1e1e1e] py-[13px]">
    <div
      className="flex w-max whitespace-nowrap"
      style={{ animation: 'dmif-tick 30s linear infinite' }}
    >
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-[10px] px-[26px] text-[0.7rem] font-medium tracking-[0.08em] text-white/45 uppercase"
        >
          {item} <span className="text-[#fd4f0c]">◆</span>
        </span>
      ))}
    </div>
  </div>
)

const About = () => (
  <section className="px-8 py-[88px] lg:px-[72px] lg:py-[104px]" id="about">
    <div className="sr">
      <SectionTag label="What is DMIF Brain Gym™" />
    </div>
    <SectionHeading className="sr d1">
      Unlike any brain training
      <br />
      you&apos;ve tried<em className="italic">.</em>
    </SectionHeading>

    <div className="mt-11 grid grid-cols-1 gap-[72px] border-t border-[rgba(26,24,20,0.1)] pt-14 lg:grid-cols-[5fr_7fr]">
      <div className="sr-l flex flex-col gap-[18px]">
        {[
          'DMIF Brain Gym™ is a proprietary cognitive activation system built through years of neuroscience-inspired exploration, cognitive science research, and direct mentorship experience working with learners, professionals, and executives across all age groups.',
          'The techniques are intentionally structured to keep the brain actively engaged — even during stillness, awareness, and controlled focus exercises. This is not passive training.',
          'Delivered through a progressive, mentorship-driven model where techniques evolve as mastery develops, with each stage challenging and expanding existing cognitive capacity.',
          'Practices combine modern cognitive science with structured approaches rooted in ancient Indian knowledge systems.',
        ].map((p, i) => (
          <p
            key={i}
            className="text-[0.9rem] leading-[1.82] font-light text-[rgba(26,24,20,0.58)]"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="sr-r flex flex-col">
        {FEATURES.map(({ num, title, desc }, i) => (
          <div
            key={num}
            className={`grid items-start border-b border-[rgba(26,24,20,0.1)] py-5 first:border-t d${i + 1}`}
            style={{ gridTemplateColumns: '44px 1fr', columnGap: '16px' }}
          >
            <span className="pt-[2px] font-mono text-[0.65rem] font-medium tracking-[0.06em] text-[#fd4f0c]">
              {num}
            </span>
            <div>
              <div className="mb-1 text-[0.88rem] font-medium text-[#2a2623]">
                {title}
              </div>
              <div className="text-[0.8rem] leading-[1.65] font-light text-[rgba(26,24,20,0.58)]">
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const How = () => (
  <section
    className="bg-[#1e1e1e] px-8 py-[88px] lg:px-[72px] lg:py-[104px]"
    id="how"
  >
    <div className="sr">
      <SectionTag label="The Process" dark />
    </div>
    <SectionHeading dark className="sr d1">
      Built for long-term
      <br />
      <em className="italic">transformation</em>
    </SectionHeading>
    <p className="sr d2 mt-0 max-w-[50ch] text-[0.9rem] leading-[1.8] font-light text-white/45">
      Not temporary stimulation. Deep, stable cognitive strengthening through
      consistent, progressive daily practice.
    </p>

    <div className="mt-[52px] grid grid-cols-1 border-t border-white/[0.08] lg:grid-cols-4">
      {STEPS.map(({ num, title, body }, i) => (
        <div
          key={num}
          className={`sr d${i + 1} flex flex-col gap-[14px] border-b border-white/[0.08] py-8 pr-6 last:border-r-0 lg:border-r lg:border-b-0 lg:border-white/[0.08] lg:px-8 lg:py-9`}
        >
          <div className="font-mono text-[0.65rem] tracking-[0.1em] text-[#fd4f0c]">
            {num}
          </div>
          <div className="text-[0.95rem] leading-[1.3] font-medium text-white">
            {title}
          </div>
          <div className="text-[0.8rem] leading-[1.75] font-light text-white/45">
            {body}
          </div>
        </div>
      ))}
    </div>

    <div className="sr relative mt-11 flex flex-col gap-[10px] overflow-hidden rounded-[3px] border border-white/10 px-8 py-9 md:flex-row md:items-center md:gap-12">
      <span
        aria-hidden="true"
        className="font-playfair pointer-events-none absolute top-[-24px] right-[-16px] leading-none font-black select-none"
        style={{
          fontSize: '160px',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)',
        }}
      >
        30
      </span>
      <div
        className="font-playfair relative flex-shrink-0 leading-none font-black tracking-[-0.03em] text-[#fd4f0c]"
        style={{ fontSize: '4.5rem' }}
      >
        30<span className="text-[1.4rem] font-normal">min</span>
      </div>
      <div className="relative z-10">
        <div className="mb-[6px] text-[0.95rem] font-medium text-white">
          A Daily Commitment That Compounds
        </div>
        <div className="max-w-[520px] text-[0.8rem] leading-[1.78] font-light text-white/45">
          Starting at 20 minutes and building to a full 30-minute session, DMIF
          Brain Gym™ is designed for high-intensity cognitive engagement in a
          compact window. Consistent daily practice is the single most important
          factor driving long-term transformation.
        </div>
      </div>
    </div>
  </section>
)

const Personalized = () => (
  <section className="px-8 py-[88px] lg:px-[72px] lg:py-[104px]">
    <div className="sr">
      <SectionTag label="Personalized Program" />
    </div>
    <SectionHeading className="sr d1">
      Tailored to your age,
      <br />
      background <em className="italic">&amp; goals</em>
    </SectionHeading>
    <p className="sr d2 max-w-[50ch] text-[0.9rem] leading-[1.8] font-light text-[rgba(26,24,20,0.58)]">
      The techniques and progression model adapt to you — not the other way
      around.
    </p>

    <div className="mt-[52px] grid grid-cols-1 gap-px border border-[rgba(26,24,20,0.1)] bg-[rgba(26,24,20,0.1)] md:grid-cols-3">
      {PERSON_CARDS.map(({ who, whoColor, title, items }, i) => (
        <div
          key={i}
          className={`sr d${i + 1} flex flex-col gap-[14px] bg-[#faf8f4] p-7 transition-colors duration-200 hover:bg-white`}
        >
          <div
            className={`font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase ${whoColor}`}
          >
            {who}
          </div>
          <div className="text-[0.95rem] leading-[1.35] font-medium text-[#2a2623]">
            {title}
          </div>
          <div className="flex flex-col gap-[7px]">
            {items.map((item, j) => (
              <div
                key={j}
                className="flex items-start gap-[10px] text-[0.8rem] leading-[1.5] font-light text-[rgba(26,24,20,0.58)]"
              >
                <span className="mt-[9px] h-px w-[14px] flex-shrink-0 bg-[rgba(26,24,20,0.1)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

const CoreAreas = () => (
  <section className="px-8 pb-[88px] lg:px-[72px] lg:pb-[104px]">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="sr">
        <SectionTag label="Core Development Areas" />
        <SectionHeading>
          Cognitive
          <br />
          <em className="italic">Dimensions</em>
        </SectionHeading>
      </div>
      <p className="sr d2 max-w-[36ch] text-[0.9rem] leading-[1.8] font-light text-[rgba(26,24,20,0.58)]">
        Strengthening multiple cognitive dimensions simultaneously — not one
        isolated skill.
      </p>
    </div>

    <div className="mt-11 grid grid-cols-2 gap-px border border-[rgba(26,24,20,0.1)] bg-[rgba(26,24,20,0.1)] md:grid-cols-3 lg:grid-cols-5">
      {AREAS.map(({ icon, name }, i) => (
        <div
          key={i}
          className={`sr d${(i % 5) + 1} flex flex-col gap-[9px] bg-[#faf8f4] p-[26px_22px] transition-colors duration-200 hover:bg-white`}
        >
          <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
          <div className="text-[0.8rem] leading-[1.35] font-medium text-[#2a2623]">
            {name}
          </div>
          <div className="mt-1 h-0.5 w-[18px] bg-[#fd4f0c]" />
        </div>
      ))}
    </div>
  </section>
)

const WhyToday = () => (
  <section className="bg-white px-8 py-[88px] lg:px-[72px] lg:py-[104px]">
    <div className="sr">
      <SectionTag label="The Problem" />
    </div>
    <SectionHeading className="sr d1">
      Modern life is quietly
      <br />
      <em className="italic">degrading your cognition</em>
    </SectionHeading>

    <div className="mt-[52px] grid grid-cols-1 gap-14 border-t border-[rgba(26,24,20,0.1)] pt-[52px] lg:grid-cols-2">
      <div className="flex flex-col">
        {PROBLEMS.map(({ num, title, desc }, i) => (
          <div
            key={num}
            className={`sr d${i + 1} flex items-start gap-[18px] border-b border-[rgba(26,24,20,0.1)] py-[18px] first:pt-0`}
          >
            <span className="flex-shrink-0 pt-[2px] font-mono text-[0.62rem] tracking-[0.08em] text-[rgba(26,24,20,0.58)]">
              {num}
            </span>
            <div>
              <div className="mb-[3px] text-[0.84rem] font-medium text-[#2a2623]">
                {title}
              </div>
              <div className="text-[0.78rem] leading-[1.6] font-light text-[rgba(26,24,20,0.58)]">
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sr d2 relative flex flex-col gap-[18px] overflow-hidden rounded-[2px] bg-[#1e1e1e] p-10">
        <span
          aria-hidden="true"
          className="font-playfair pointer-events-none absolute right-[-8px] bottom-[-16px] leading-none font-black"
          style={{
            fontSize: '190px',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
          }}
        >
          B
        </span>
        <div className="font-mono text-[0.62rem] tracking-[0.1em] text-[#fd4f0c] uppercase">
          The Answer
        </div>
        <div className="font-playfair relative z-10 text-[1.6rem] leading-[1.2] font-bold text-white">
          Structured brain activation — daily, progressive, compounding.
        </div>
        <div className="relative z-10 text-[0.84rem] leading-[1.82] font-light text-white/50">
          DMIF Brain Gym™ doesn&apos;t treat symptoms. It systematically
          rebuilds the underlying cognitive capacity that modern lifestyles
          erode — through a personalized, progressive program that participants
          carry with them for life.
        </div>
        <button
          type="button"
          onClick={handleOpenBooking}
          className="relative z-10 inline-flex w-fit items-center gap-[7px] rounded-[3px] bg-[#fd4f0c] px-[22px] py-[11px] text-[0.78rem] font-semibold text-white no-underline transition-opacity duration-200 hover:opacity-80"
        >
          Apply Now →
        </button>
      </div>
    </div>
  </section>
)

const Who = () => (
  <section
    className="bg-[#faf8f4] px-8 py-[88px] lg:px-[72px] lg:py-[104px]"
    id="who"
  >
    <div className="sr">
      <SectionTag label="Who This Is For" />
    </div>
    <SectionHeading className="sr d1">
      Every learner.
      <br />
      Every <em className="italic">leader.</em>
    </SectionHeading>
    <p className="sr d2 max-w-[50ch] text-[0.9rem] leading-[1.8] font-light text-[rgba(26,24,20,0.58)]">
      From Grade 6 students to CXO executives — the program adapts to where you
      are and where you need to go.
    </p>
    <div className="mt-[52px] grid grid-cols-1 gap-px border border-[rgba(26,24,20,0.1)] bg-[rgba(26,24,20,0.1)] md:grid-cols-2 lg:grid-cols-3">
      {WHO_CARDS.map(({ tag, title, body }, i) => (
        <div
          key={i}
          className={`sr d${i + 1} flex flex-col gap-[11px] bg-[#faf8f4] p-8 transition-colors duration-200 hover:bg-white`}
        >
          <div className="font-mono text-[0.6rem] tracking-[0.1em] text-[rgba(26,24,20,0.58)] uppercase">
            {tag}
          </div>
          <div className="text-[0.95rem] font-medium text-[#2a2623]">
            {title}
          </div>
          <div className="text-[0.8rem] leading-[1.72] font-light text-[rgba(26,24,20,0.58)]">
            {body}
          </div>
          <div className="mt-[6px] h-0.5 w-[22px] bg-[#fd4f0c]" />
        </div>
      ))}
    </div>
  </section>
)

const Outcomes = () => (
  <section
    className="bg-white px-8 py-[88px] lg:px-[72px] lg:py-[104px]"
    id="outcomes"
  >
    <div className="sr">
      <SectionTag label="Expected Outcomes" />
    </div>
    <SectionHeading className="sr d1">
      What participants
      <br />
      <em className="italic">commonly report</em>
    </SectionHeading>

    <div className="mt-[52px] grid grid-cols-1 gap-14 border-t border-[rgba(26,24,20,0.1)] pt-[52px] lg:grid-cols-2">
      <div className="flex flex-col">
        {OUTCOMES.map((item, i) => (
          <div
            key={i}
            className={`sr d${Math.min(i + 1, 6)} flex items-start gap-[13px] border-b border-[rgba(26,24,20,0.1)] py-[14px] text-[0.875rem] text-[#2a2623] first:pt-0`}
          >
            <span className="mt-[1px] flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center rounded-full bg-[#1e1e1e] text-[0.55rem] font-bold text-white">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      <div className="sr d3 flex flex-col gap-5">
        <div className="font-playfair text-[4.5rem] leading-[0.75] text-[#fd4f0c]">
          &quot;
        </div>
        <div className="font-playfair text-[1.3rem] leading-[1.55] font-normal text-[#2a2623] italic">
          Professionals and executives frequently report better clarity in
          meetings, improved awareness, stronger decision-making, and greater
          confidence while communicating and presenting.
        </div>
        <div className="font-mono text-[0.62rem] tracking-[0.1em] text-[rgba(26,24,20,0.58)] uppercase">
          DMIF Brain Gym™ · Program Outcomes
        </div>
        <div className="border-l-[3px] border-[#fd4f0c] bg-[#faf8f4] px-6 py-[22px]">
          <div className="mb-2 font-mono text-[0.62rem] tracking-[0.1em] text-[#2a2623] uppercase">
            How Long to See Results?
          </div>
          <div className="text-[0.8rem] leading-[1.78] font-light text-[rgba(26,24,20,0.58)]">
            Younger participants adapt faster due to greater neural flexibility.
            Senior professionals may need more time as cognitive conditioning is
            more established. With consistency, improvements appear within
            months. Deeper, stable transformation follows sustained long-term
            practice.
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Principles = () => (
  <section className="bg-[#faf8f4] px-8 py-[88px] lg:px-[72px] lg:py-[104px]">
    <div className="sr">
      <SectionTag label="The Foundation" />
    </div>
    <SectionHeading className="sr d1">
      Two principles that
      <br />
      <em className="italic">drive everything</em>
    </SectionHeading>

    <div className="mt-11 grid grid-cols-1 gap-px border border-[rgba(26,24,20,0.1)] bg-[rgba(26,24,20,0.1)] md:grid-cols-2">
      {[
        {
          num: '01',
          title: 'Trust the Process',
          body: 'Participants are encouraged to approach the system with openness, consistency, and willingness to practice. The techniques are designed to work — but they require trust in the progressive structure and a commitment to showing up before results become visible.',
        },
        {
          num: '02',
          title: 'Daily Consistency',
          body: 'Long-term cognitive strengthening requires regular, disciplined practice. While occasional interruptions are natural, consistent daily engagement is the single most important factor driving cognitive progress. Consistency compounds. Inconsistency stalls.',
        },
      ].map(({ num, title, body }, i) => (
        <div
          key={num}
          className={`sr d${i + 1} flex flex-col gap-[14px] bg-[#faf8f4] p-12 transition-colors duration-200 hover:bg-white`}
        >
          <div
            className="font-playfair leading-none font-black tracking-[-0.03em] text-[rgba(42,38,35,0.1)]"
            style={{ fontSize: '4.5rem' }}
          >
            {num}
          </div>
          <div className="text-[1.15rem] font-medium text-[#2a2623]">
            {title}
          </div>
          <div className="text-[0.84rem] leading-[1.82] font-light text-[rgba(26,24,20,0.58)]">
            {body}
          </div>
        </div>
      ))}
    </div>
  </section>
)

const Ecosystem = () => (
  <section className="bg-[#1e1e1e] px-8 py-[88px] lg:px-[72px] lg:py-[104px]">
    <div className="sr">
      <SectionTag label="The DMIF Ecosystem" dark />
    </div>
    <SectionHeading dark className="sr d1">
      Brain Gym™ powers
      <br />
      the entire <em className="italic">journey</em>
    </SectionHeading>
    <p className="sr d2 max-w-[50ch] text-[0.9rem] leading-[1.8] font-light text-white/42">
      A stronger brain enhances every advanced learning and innovation pathway
      in the DMIF ecosystem.
    </p>

    <div className="mt-[52px] grid grid-cols-1 gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
      {ECO_CARDS.map(({ icon, title, body }, i) => (
        <div
          key={i}
          className={`sr d${i + 1} flex flex-col gap-[11px] bg-[#1e1e1e] p-8 transition-colors duration-200 hover:bg-[#2a2a2a]`}
        >
          <div className="text-[1.3rem]">{icon}</div>
          <div className="text-[0.9rem] font-medium text-white">{title}</div>
          <div className="text-[0.78rem] leading-[1.75] font-light text-white/42">
            {body}
          </div>
          <div className="mt-1 h-px w-[18px] bg-[#fd4f0c]" />
        </div>
      ))}
    </div>
  </section>
)

const Note = () => (
  <div className="px-8 py-9 lg:px-[72px]">
    <div className="sr flex max-w-[720px] items-start gap-[14px] border-t border-[rgba(26,24,20,0.1)] pt-7">
      <div className="flex-shrink-0 pt-[1px] font-mono text-[0.6rem] tracking-[0.1em] text-[#fd4f0c] uppercase">
        Note
      </div>
      <div className="text-[0.78rem] leading-[1.78] font-light text-[rgba(26,24,20,0.58)]">
        DMIF Brain Gym™ is not positioned as a medical treatment, therapy, or
        clinical intervention. It is a structured cognitive performance and
        brain activation system focused on improving learning readiness, mental
        clarity, and cognitive efficiency through guided daily practice.
      </div>
    </div>
  </div>
)

const CTA = () => (
  <section
    id="cta"
    className="relative overflow-hidden bg-[#fd4f0c] px-8 py-24 text-center lg:px-[72px] lg:py-28"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    />
    <span
      aria-hidden="true"
      className="font-playfair pointer-events-none absolute top-[-24px] right-[-16px] leading-none font-black select-none"
      style={{
        fontSize: '190px',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.04)',
      }}
    >
      B
    </span>
    <h2
      className="sr d1 font-playfair relative mx-auto mb-[18px] max-w-[660px] leading-[1.08] font-black tracking-[-0.025em] text-white"
      style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)' }}
    >
      Build a stronger brain.
      <br />
      <em className="italic">Starting tomorrow morning.</em>
    </h2>
    <p className="sr d2 relative mx-auto mb-9 max-w-[44ch] text-[0.9375rem] leading-[1.72] font-light text-white/65">
      20 minutes. Every morning. A commitment that compounds into the clearest,
      sharpest version of your mind.
    </p>
    <div className="sr d3 relative flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={handleOpenBooking}
        className="inline-flex items-center gap-2 rounded-[4px] bg-white px-8 py-[14px] text-[0.84rem] font-semibold text-[#fd4f0c] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]"
      >
        Apply Now →
      </button>
      <a
        href="#about"
        className="rounded-[4px] border border-white/38 bg-transparent px-8 py-[14px] text-[0.84rem] font-medium text-white no-underline transition-all duration-200 hover:border-white hover:bg-white/[0.08]"
      >
        Learn More
      </a>
    </div>
  </section>
)

const Booking = () => (
  <section
    id="cal-booking"
    className="bg-white px-8 py-[88px] lg:px-[72px] lg:py-[104px]"
  >
    <div className="sr">
      <SectionTag label="Book a Call" />
    </div>
    <SectionHeading className="sr d1">
      Schedule your
      <br />
      <em className="italic">DMIF Brain Gym call</em>
    </SectionHeading>
    <p className="sr d2 mt-4 max-w-[50ch] text-[0.9rem] leading-[1.8] font-light text-[rgba(26,24,20,0.58)]">
      Use the calendar below to book a call and take the next step with DMIF
      Brain Gym™.
    </p>
    <div className="sr d3 mt-12">
      <CalEmbed />
    </div>
  </section>
)

// ─── Styles ───────────────────────────────────────────────────────────────────

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

  .font-playfair { font-family: 'Playfair Display', serif; }
  .font-mono     { font-family: 'DM Mono', monospace; }

  .sr    { opacity: 0; transform: translateY(24px); transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1); }
  .sr-l  { opacity: 0; transform: translateX(-24px); transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1); }
  .sr-r  { opacity: 0; transform: translateX(24px);  transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1); }
  .sr.in, .sr-l.in, .sr-r.in { opacity: 1; transform: none; }

  .d1 { transition-delay: .06s; }
  .d2 { transition-delay: .12s; }
  .d3 { transition-delay: .18s; }
  .d4 { transition-delay: .24s; }
  .d5 { transition-delay: .30s; }
  .d6 { transition-delay: .36s; }

  @keyframes dmif-tick { to { transform: translateX(-50%); } }
`

// ─── Page ─────────────────────────────────────────────────────────────────────

export const BrainGymPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observerRef.current?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -28px 0px' }
    )

    document
      .querySelectorAll('.sr,.sr-l,.sr-r')
      .forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <style>{STYLES}</style>
      <div className="overflow-x-hidden bg-[#faf8f4] font-['DM_Sans',sans-serif] text-[#2a2623]">
        <Hero />
        <Ticker />
        <About />
        <How />
        <Personalized />
        <CoreAreas />
        <WhyToday />
        <Who />
        <Outcomes />
        <Principles />
        <Ecosystem />
        <Note />
        <Booking />
        <CTA />
      </div>
    </>
  )
}
