'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the DMIF Guided Mentorship Program?',
    answer:
      'It is a structured, hands-on mentorship program where learners are guided to work on high-value outcomes like patents or research papers. Instead of passively attending lectures, you will actively engage in research, innovation, and problem-solving under the guidance of experts.',
  },
  {
    question: 'How is it different from regular courses?',
    answer:
      'Unlike conventional courses that rely on slides and theory, this program emphasizes outcome-based learning. You won’t just learn concepts—you will create something tangible, whether it’s a patent draft or a publishable research paper, with constant mentorship at every step.',
  },
  {
    question: 'How are sessions delivered?',
    answer:
      'Sessions are conducted weekly in a live online format, usually lasting 40–60 minutes. In addition to these interactive sessions, you’ll also receive asynchronous reviews, reading materials, and exercises to ensure steady progress throughout the mentorship.',
  },
  {
    question: 'What is Active Learning™?',
    answer:
      'Active Learning™ is our proprietary framework that ensures you don’t just absorb information but apply it in real time. Instead of passive listening, you’ll work on practical exercises and projects that gradually build towards your final patent or paper.',
  },
  {
    question: 'How do I apply?',
    answer:
      'You can apply by filling out the application form on our website. Once submitted, our team will review your application and confirm your seat along with further onboarding instructions.',
  },
  {
    question: 'Who is eligible to apply?',
    answer:
      'This program is open to school and college students, early professionals, and entrepreneurs who are curious, motivated, and ready to invest effort in innovation or research. No prior research or patent experience is required.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-[#0E0A18]"></div>

        {/* Orange with Dot Pattern */}
        <div
          className="h-1/2 bg-[#FD4F0C]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
            backgroundSize: '10px 10px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative px-4 py-20">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Question and Answers
          </h2>
        </div>

        {/* FAQ Card */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl">
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
