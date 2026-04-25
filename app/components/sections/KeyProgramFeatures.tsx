'use client'

import { Header } from '../ui/Header'
import Image from 'next/image'

interface FeatureItemProps {
  title: string
  description: string
  color: string
  textColor: string
  descColor: string
  ImagePath: string
}

const leftFeatures: FeatureItemProps[] = [
  {
    title: 'Patents',
    description:
      'Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas.',
    color: 'bg-[#C59AFF]',
    textColor: 'text-[#23034E]',
    descColor: 'text-[#453061]',
    ImagePath: '/icons/feature-icon-1.svg',
  },
  {
    title: 'Global Exposure',
    description:
      'Build a strong global network by engaging with peers, mentors, and experts across different regions.',
    color: 'bg-[#A3D6F1]',
    textColor: 'text-[#00273B]',
    descColor: 'text-[#1C4358]',
    ImagePath: '/icons/feature-icon-2.svg',
  },
  {
    title: 'Ivy League Readiness',
    description:
      'Develop the academic rigor, leadership mindset, and personal discipline required to compete for admission to Ivy & Top Universities.',
    color: 'bg-[#D8F1DC]',
    textColor: 'text-[#00470B]',
    descColor: 'text-[#154F1F]',
    ImagePath: '/icons/feature-icon-3.svg',
  },
  {
    title: 'Innovative Thinking',
    description:
      'Develop the academic rigor, leadership mindset, and personal discipline required to compete for admission to Ivy & Top Universities.',
    color: 'bg-[#FF7039]',
    textColor: 'text-[#4B1500]',
    descColor: 'text-[#502514]',
    ImagePath: '/icons/feature-icon-4.svg',
  },
  {
    title: 'Research Skills',
    description:
      'Work directly on academic and industry-level research projects, developing critical thinking and analytical skills through practical experience.',
    color: 'bg-[#FFC061]',
    textColor: 'text-[#553300]',
    descColor: 'text-[#523914]',
    ImagePath: '/icons/feature-icon-5.svg',
  },
  {
    title: 'Brain Science',
    description:
      'Unlock the mysteries of the human brain and its role in innovation to enhance your academic, research, and entrepreneurial journey.',
    color: 'bg-[#8F92FF]',
    textColor: 'text-[#02054D]',
    descColor: 'text-[#1B1D58]',
    ImagePath: '/icons/feature-icon-6.svg',
  },
]

function FeatureItem({
  title,
  description,
  color,
  textColor,
  descColor,
  ImagePath,
}: FeatureItemProps) {
  return (
    <div
      key={title}
      className={`relative flex aspect-square flex-col gap-2 rounded-xl px-4 pt-4 ${color}`}
    >
      <h3
        className={`z-12 w-full text-center text-lg font-semibold ${textColor}`}
      >
        {title}
      </h3>
      <p className={`z-12 w-full text-center text-sm font-medium ${descColor}`}>
        {description}
      </p>
      <Image
        width={256}
        height={256}
        src={ImagePath}
        alt={title}
        className="z-12 mt-auto w-full!"
      />
      <Image
        width={256}
        height={256}
        src="/images/card-overlay.png"
        alt={title}
        className="pointer-events-none absolute top-0 left-0 z-5 h-full w-full rounded-xl object-cover opacity-20 bg-blend-color-burn"
      />
    </div>
  )
}

export default function KeyProgramFeatures() {
  return (
    <section className="flex h-max w-full flex-col items-center gap-8 overflow-hidden bg-white py-12 pb-16 md:pb-12">
      {/* Header */}
      <div className="flex w-max flex-col items-center justify-center gap-3 self-center-safe text-center">
        <Header text="Our Unique Edge" />
        <h2 className="font-inter text-2xl font-semibold tracking-tight text-[#1e1e1e]">
          Key Program Features
        </h2>
        <p className="text-sm font-medium text-[#1e1e1e]/80">
          Founded by an IIM Calcutta Alumnus and a globally <br /> recognized
          inventor and technologist. goals.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-3">
        {leftFeatures.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            color={feature.color}
            textColor={feature.textColor}
            descColor={feature.descColor}
            ImagePath={feature.ImagePath}
          />
        ))}
      </div>
    </section>
  )
}
