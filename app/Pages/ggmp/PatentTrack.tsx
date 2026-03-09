"use client";

import Accordion from "./AccordionProps";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const ProgramInfo = () => {
  const accordionData = [
    {
      title: "Who is this for?",
      content:
        "This program is designed for students aiming for Ivy League and other global admissions, aspiring researchers and inventors eager to explore innovation, entrepreneurs and innovators seeking IP protection.",
    },
    {
      title: "What students will learn",
      content:
        "Students will gain practical knowledge in innovation strategy, patent filing, and research methodologies that enhance academic and career opportunities.",
    },
    {
      title: "Core focus areas",
      content:
        "Key areas include intellectual property law, product innovation, technology research, and global academic preparation.",
    },
    {
      title: "Sample research paper outcomes",
      content:
        "Students will produce research papers demonstrating innovation, entrepreneurship, and intellectual property strategies for real-world applications.",
    },
  ];

  const features = [
    {
      title: "Idea to Patent Journey",
      description: "Learn how to transform raw ideas into patentable innovations.",
    },
    {
      title: "Global Exposure",
      description:
        "File patents with real-world commercial value, boosting international profile.",
    },
    {
      title: "Career Edge",
      description:
        "Strengthens Ivy/PhD admissions, job prospects, and entrepreneurship.",
    },
    {
      title: "Hands-on Mentorship",
      description:
        "Work with inventors & experts who’ve filed 100+ global patents.",
    },
  ];

  return (
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#FA773A] items-center px-5 py-5 md:px-20 md:py-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.2 }}
>
  {/* Left Section - Accordion */}
  <motion.div
    className="rounded-xl hidden md:flex p-4 "
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <Accordion items={accordionData} />
  </motion.div>

  {/* Right Section - Features */}
  <motion.div
    className="flex flex-col gap-3 text-white "
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
       2: Patents Track
    </h2>
    <p className="text-white mb-6">
      Learn how to transform your ideas into patents, fueling innovation and
      academic/professional success.
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
          {/* White Circle Icon */}
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center mt-1">
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
    className="rounded-xl md:hidden p-4  "
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

export default ProgramInfo;
