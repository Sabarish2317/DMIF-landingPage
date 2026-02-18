"use client";

import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Facebook,
} from "lucide-react";

export default function FounderSection() {
  return (
    <section className="w-full px-4 md:px-12 py-12">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-500">Meet the</p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Founder
        </h2>
      </div>

      {/* Main Card */}
      <div className="bg-[#FD4F0C] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 text-white">

        {/* === LEFT IMAGE === */}
        <div className="md:col-span-3 p-6 flex justify-center items-center">
          <div className="bg-white rounded-lg p-2 w-fit">
            <Image
              src="/img/drmadhan.png"
              alt="Dr. Madhan Kumar Srinivasan"
              width={280}
              height={320}
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* === CENTER DETAILS === */}
        <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/30">

          <p className="text-base md:text-2xl leading-relaxed">
            Inventor of <strong>121 Patents</strong> | TEDx Speaker |
            Accenture Prolific Inventor & Infosys Cloud Tech Guru awardee |
            Cloud AI & Futuristic Tech Expert | Serial Entrepreneur with{" "}
            <strong>20+ years</strong> of experience &{" "}
            <strong>30+ research publications</strong>
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">
              Dr. Madhan Kumar Srinivasan
            </h3>
            <p className="text-sm opacity-90">CEO</p>
          </div>
        </div>

        {/* === RIGHT SOCIAL + COUNT === */}
        <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/30">

          {/* Social Icons */}
          <div className="flex md:justify-end gap-3">
            <a href="https://linkedin.com" target="_blank">
              <div className="bg-white text-[#FD4F0C] p-2 rounded-md hover:scale-110 transition">
                <Linkedin size={18} />
              </div>
            </a>

            <a href="mailto:example@gmail.com">
              <div className="bg-white text-[#FD4F0C] p-2 rounded-md hover:scale-110 transition">
                <Mail size={18} />
              </div>
            </a>

            <a href="https://instagram.com" target="_blank">
              <div className="bg-white text-[#FD4F0C] p-2 rounded-md hover:scale-110 transition">
                <Instagram size={18} />
              </div>
            </a>

            <a href="https://youtube.com" target="_blank">
              <div className="bg-white text-[#FD4F0C] p-2 rounded-md hover:scale-110 transition">
                <Youtube size={18} />
              </div>
            </a>

            <a href="https://facebook.com" target="_blank">
              <div className="bg-white text-[#FD4F0C] p-2 rounded-md hover:scale-110 transition">
                <Facebook size={18} />
              </div>
            </a>
          </div>

    <div className=" hidden md:block">
               <Image
              src="/img/socials.svg"
              alt="Social Icons"
              width={180}
              height={40}
            />
          </div>
          {/* Patent Count */}
          <div className="mt-10 md:mt-0">
            <h2 className="text-5xl md:text-6xl font-bold font-[var(--font-dm-mono)] leading-none">
              120+
            </h2>
            <p className="mt-2 text-sm">Patent inventor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
