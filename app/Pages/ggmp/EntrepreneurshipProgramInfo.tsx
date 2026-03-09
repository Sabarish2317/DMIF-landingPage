"use client";

import Accordion from "./AccordionProps";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const EntrepreneurshipProgramInfo = () => {
  const accordionData = [
    {
      title: "Who is this for?",
      content:
        "This track is for aspiring entrepreneurs, innovators, and researchers who want to transform their patents and research into viable startups, gain investor exposure, and build scalable ventures.",
    },
    {
      title: "What students will learn",
      content:
        "Students will learn startup fundamentals, lean business models, IP commercialization strategies, fundraising tactics, and go-to-market approaches for scaling their ideas globally.",
    },
    {
      title: "Core focus areas",
      content:
        "Key areas include business model design, investor readiness, leadership, team building, and IP-driven entrepreneurship.",
    },
    {
      title: "Sample outcomes",
      content:
        "Students will develop investor-ready pitch decks, validated business models, exposure to incubators/VCs, and entrepreneurial portfolios ready for global opportunities.",
    },
  ];

  const features = [
    {
      title: "Idea to Venture",
      description: "Convert your patents and research into real-world startups.",
    },
    {
      title: "Investor Readiness",
      description:
        "Build professional pitch decks, financial models, and gain exposure to accelerators and VCs.",
    },
    {
      title: "Go-to-Market Strategy",
      description:
        "Learn how to identify customer segments, position products, and scale globally.",
    },
    {
      title: "Entrepreneurial Identity",
      description:
        "Transform into a future leader with the mindset to inspire teams and attract co-founders.",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#FA773A] items-center px-5 py-5 md:px-20 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Section - Accordion */}
      <motion.div
        className="rounded-xl md:flex hidden p-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Accordion items={accordionData} />
      </motion.div>

      {/* Right Section - Features */}
      <motion.div
        className="flex flex-col gap-3 text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
           4: Entrepreneurship Track
        </h2>

        <p className="text-white mb-6">
          Learn how to turn patents and research into startups, master pitching,
          and gain the entrepreneurial edge to launch and scale ventures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              viewport={{ once: true }}
            >
              {/* White Circle Icon with Orange Check */}
              <div className="shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-[#FA773A]" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold">{feature.title}</p>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
           <motion.div
        className="rounded-xl md:hidden p-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Accordion items={accordionData} />
      </motion.div>
    </motion.div>
  );
};

export default EntrepreneurshipProgramInfo;
