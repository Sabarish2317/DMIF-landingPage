'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const dotPattern = {
  backgroundImage:
    'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
  backgroundSize: '10px 10px',
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const tracks = [
  {
    number: '01',
    title: 'Inventor Foundation Track',
    tagline: 'Cognitive Excellence',
    description:
      'Build powerful cognitive skills that boost creativity, memory, focus, and academic performance—laying the perfect foundation for innovation-driven careers.',
    features: [
      {
        title: 'Whole-Brain Activation',
        description:
          'Improve focus, memory, and learning through scientifically backed activation techniques.',
      },
      {
        title: 'Creative & Critical Thinking',
        description:
          'Develop structured reasoning, idea generation, and problem-solving capabilities.',
      },
      {
        title: 'Mindfulness & Memory Boost',
        description:
          'Strengthen retention, recall, and mental clarity with guided practices.',
      },
      {
        title: 'Strong Cognitive Base',
        description:
          'Build essential cognitive skills to support academic excellence and lifelong learning.',
      },
    ],
    faq: [
      {
        q: 'Who is this for?',
        a: 'Students aiming to strengthen cognitive abilities, improve learning efficiency, and build foundational thinking skills required for higher academic and career success.',
      },
      {
        q: 'What will I learn?',
        a: 'Enhanced memory, focus, critical thinking, and whole-brain activation techniques to excel in academics and problem-solving.',
      },
      {
        q: 'Core focus areas',
        a: 'Cognitive learning methods, creativity enhancement, mindfulness, and structured thinking for long-term academic growth.',
      },
      {
        q: 'Expected outcomes',
        a: 'Stronger cognitive abilities, improved concentration, enhanced creativity, and a solid learning foundation for innovation-driven careers.',
      },
    ],
    dark: false,
  },
  {
    number: '02',
    title: 'Patents Track',
    tagline: 'Innovation & IP',
    description:
      'Learn how to transform your ideas into patents, fueling innovation and academic and professional success.',
    features: [
      {
        title: 'Idea to Patent Journey',
        description:
          'Learn how to transform raw ideas into patentable innovations.',
      },
      {
        title: 'Global Exposure',
        description:
          'File patents with real-world commercial value, boosting international profile.',
      },
      {
        title: 'Career Edge',
        description:
          'Strengthens Ivy/PhD admissions, job prospects, and entrepreneurship.',
      },
      {
        title: 'Hands-on Mentorship',
        description:
          'Work with inventors and experts who have filed 100+ global patents.',
      },
    ],
    faq: [
      {
        q: 'Who is this for?',
        a: 'Students aiming for Ivy League admissions, aspiring researchers and inventors eager to explore innovation, entrepreneurs and innovators seeking IP protection.',
      },
      {
        q: 'What will I learn?',
        a: 'Practical knowledge in innovation strategy, patent filing, and research methodologies that enhance academic and career opportunities.',
      },
      {
        q: 'Core focus areas',
        a: 'Intellectual property law, product innovation, technology research, and global academic preparation.',
      },
      {
        q: 'Sample outcomes',
        a: 'Research papers demonstrating innovation, entrepreneurship, and intellectual property strategies for real-world applications.',
      },
    ],
    dark: true,
  },
  {
    number: '03',
    title: 'Research Papers Track',
    tagline: 'Academic Publishing',
    description:
      'Master the art of academic writing and publishing, opening doors to Ivy League admissions, global conferences, and career-defining recognition.',
    features: [
      {
        title: 'Research to Publication',
        description:
          'Learn how to design, write, and publish high-quality academic papers.',
      },
      {
        title: 'Global Recognition',
        description:
          'Publish in top international journals: IEEE, ACM, Springer, Elsevier.',
      },
      {
        title: 'Academic Edge',
        description:
          'Strengthen Ivy/PhD admissions with research credentials and citations.',
      },
      {
        title: 'Expert Mentorship',
        description:
          'Guided by professors and innovators with 50+ publications.',
      },
    ],
    faq: [
      {
        q: 'Who is this for?',
        a: 'Students aiming for Ivy League admissions, aspiring researchers seeking to publish in top journals, and innovators building strong academic credentials.',
      },
      {
        q: 'What will I learn?',
        a: 'Expertise in academic research, scientific writing, and publishing high-quality papers in international journals and conferences.',
      },
      {
        q: 'Core focus areas',
        a: 'Research methodology, academic writing, peer-reviewed publishing, and building international recognition.',
      },
      {
        q: 'Sample outcomes',
        a: 'Academic papers suitable for top-tier journals and global conferences, strengthening profiles for Ivy/PhD admissions.',
      },
    ],
    dark: false,
  },
  {
    number: '04',
    title: 'Entrepreneurship Track',
    tagline: 'Ventures & Growth',
    description:
      'Learn how to turn patents and research into startups, master pitching, and gain the entrepreneurial edge to launch and scale ventures.',
    features: [
      {
        title: 'Idea to Venture',
        description:
          'Convert your patents and research into real-world startups.',
      },
      {
        title: 'Investor Readiness',
        description:
          'Build professional pitch decks, financial models, and gain exposure to accelerators and VCs.',
      },
      {
        title: 'Go-to-Market Strategy',
        description:
          'Learn how to identify customer segments, position products, and scale globally.',
      },
      {
        title: 'Entrepreneurial Identity',
        description:
          'Transform into a future leader with the mindset to inspire teams and attract co-founders.',
      },
    ],
    faq: [
      {
        q: 'Who is this for?',
        a: 'Aspiring entrepreneurs, innovators, and researchers who want to transform their patents and research into viable startups, gain investor exposure, and build scalable ventures.',
      },
      {
        q: 'What will I learn?',
        a: 'Startup fundamentals, lean business models, IP commercialization strategies, fundraising tactics, and go-to-market approaches for scaling ideas globally.',
      },
      {
        q: 'Core focus areas',
        a: 'Business model design, investor readiness, leadership, team building, and IP-driven entrepreneurship.',
      },
      {
        q: 'Sample outcomes',
        a: 'Investor-ready pitch decks, validated business models, exposure to incubators/VCs, and portfolios ready for global opportunities.',
      },
    ],
    dark: true,
  },
]

function FaqAccordion({
  items,
  dark,
}: {
  items: { q: string; a: string }[]
  dark: boolean
}) {
  const [open, setOpen] = useState(0)
  return (
    <div
      className={`rounded-2xl border ${dark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'} overflow-hidden`}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={`border-b last:border-none ${dark ? 'border-white/10' : 'border-gray-200'}`}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className={`flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}
          >
            {item.q}
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''} ${dark ? 'text-white/60' : 'text-[#FD4F0C]'}`}
            />
          </button>
          {open === i && (
            <p
              className={`px-5 pb-4 text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-gray-600'}`}
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function TrackSection({
  track,
  flip,
}: {
  track: (typeof tracks)[0]
  flip: boolean
}) {
  const { dark } = track
  return (
    <section
      className={`px-6 py-20 md:px-16 ${dark ? 'bg-[#0E0A18]' : 'bg-white'}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fade}
        className={`mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 ${flip ? 'lg:[direction:rtl]' : ''}`}
      >
        {/* Features side */}
        <div className={flip ? '[direction:ltr]' : ''}>
          <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
            Track {track.number}
          </span>
          <h2
            className={`mt-3 text-2xl font-bold sm:text-3xl ${dark ? 'text-white' : 'text-black'}`}
          >
            {track.title}
          </h2>
          <p
            className={`mt-3 text-sm leading-relaxed sm:text-base ${dark ? 'text-white/70' : 'text-gray-600'}`}
          >
            {track.description}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {track.features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FD4F0C]">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}
                  >
                    {f.title}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${dark ? 'text-white/60' : 'text-gray-500'}`}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ side */}
        <div className={flip ? '[direction:ltr]' : ''}>
          <FaqAccordion items={track.faq} dark={dark} />
        </div>
      </motion.div>
    </section>
  )
}

const Programs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0E0A18] px-6 py-24 md:px-16" style={dotPattern}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.35em] text-[#FD4F0C] uppercase">
            DMIF G-GMP
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            Global Guided Mentorship Program
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Structured mentorship aligned with real-world outcomes — from
            patents and research papers to startups and cognitive excellence.
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
            { stat: '4', label: 'Specialized Tracks' },
            { stat: '100+', label: 'Patents Filed by Alumni' },
            { stat: 'IEEE / ACM', label: 'Publication Outcomes' },
            { stat: 'Global', label: 'Reach & Recognition' },
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

      {/* Tracks */}
      {tracks.map((track, i) => (
        <TrackSection key={track.number} track={track} flip={i % 2 !== 0} />
      ))}

      {/* Final CTA */}
      <section
        className="bg-[#FD4F0C] px-6 py-20 text-center md:px-16"
        style={dotPattern}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Ready to start your G-GMP journey?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
            Join a program that turns curiosity into credentials — patents,
            publications, and ventures.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-semibold text-[#FD4F0C] transition hover:bg-white/90"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Programs
