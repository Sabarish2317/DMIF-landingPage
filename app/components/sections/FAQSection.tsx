'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Header } from '../ui/Header'

const faqs = [
  {
    question: 'What is the DMIF Guided Mentorship Program?',
    answer:
      'This is a mentorship-driven program, not a traditional course. It is a structured, hands-on mentorship program designed to guide learners toward high-value outcomes such as patents, research papers, coding, product innovation, and entrepreneurship. Instead of passively attending lectures, learners actively work on real problems, research ideas, and innovation projects under the guidance of experienced mentors.',
  },
  {
    question: 'How is it different from regular courses?',
    answer:
      'The focus is on building thinkers and creators, not just learners. Unlike conventional courses that rely on slides and theory, this program focuses on outcome-driven learning. You do not just learn concepts; you build something tangible, such as a patent draft, research paper, or working product, with continuous mentor guidance at every stage.',
  },
  {
    question: 'How are sessions delivered?',
    answer:
      'Sessions are conducted weekly in a live online format, typically lasting 45-60 minutes. In addition to live sessions, learners receive continuous mentor feedback, asynchronous support through online channels, and reading material with guided exercises. This ensures consistent progress beyond the weekly sessions.',
  },
  {
    question: 'What is Active Learning Methodology™?',
    answer:
      'Active Learning Methodology™ is DMIF\'s proprietary, neuroscience-inspired framework that focuses on learning through doing. Instead of passive listening, learners actively apply concepts through structured tasks, problem-solving, and real-world projects that progressively lead to outcomes such as patents, research papers, or industry-ready solutions.',
  },
  {
    question: 'How do I apply?',
    answer:
      'You can apply by filling out the application form on our website or by sending an email to info@drmadhan.org. Once submitted, our team will review your application and guide you through the next steps.',
  },
  {
    question: 'Who is eligible to apply?',
    answer:
      'The program is open to learners across a wide age range, from school students (Grade 6 / age 12 onwards) to working professionals, researchers, entrepreneurs, and CXOs. Participants include school and college students, master\'s and PhD learners, scientists, and senior professionals. Many experienced professionals also join specifically for brain-based training and cognitive development. No prior experience in patents or research is required; what matters most is curiosity, commitment, and consistency.',
  },
  {
    question: 'What outcomes can I expect?',
    answer:
      'Depending on your chosen track and level of commitment, you can build tangible outcomes such as patent ideas and draft submissions, research papers for conference or journal submission, working product prototypes or AI-based solutions, stronger problem-solving and innovation skills, and a portfolio that supports higher education and career opportunities. For many learners, this also translates into patent filings, research publications, and better academic or career direction.',
  },
  {
    question: 'How much time do I need to commit?',
    answer:
      'Learners typically spend around 1 hour per week in live sessions and 4-5 hours on assignments and project work. Consistency matters more than the number of hours.',
  },
  {
    question: 'Will I definitely get a patent or research paper?',
    answer:
      'The program provides structured mentorship and guidance toward patents or research publications. Final outcomes depend on the learner\'s effort, consistency, and execution quality.',
  },
  {
    question: 'Is this a coding program or a research program?',
    answer:
      'It is a mentorship program, not limited to one area. Depending on your track, you may work on research, patents, coding, or product development, and in many cases combine multiple areas.',
  },
  {
    question: 'Who are the mentors?',
    answer:
      'Mentors are industry practitioners, product engineers, and research professionals who guide learners through real-world problem-solving and project execution.',
  },
  {
    question: 'Is this program suitable for beginners?',
    answer:
      'Yes. No prior experience is required. Learners are guided step by step based on their current level.',
  },
  {
    question: 'What makes DMIF different?',
    answer:
      'DMIF is a mentor-driven, outcome-focused program where learners work on real-world problems and build tangible outputs like patents, research papers, or products, rather than only learning concepts.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative w-full overflow-hidden">
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-12 px-4 py-20 sm:px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="flex w-max flex-col items-center justify-center gap-3 self-center-safe text-center">
          <Header text="Questions" />
          <h2 className="font-inter text-2xl font-semibold tracking-tight text-[#1e1e1e]">
            FAQs
          </h2>
          <p className="text-sm font-medium text-[#1e1e1e]/80">
            Have any questions? We&apos;ve got you covered.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-md border border-[#565452]/20 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-800 md:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
