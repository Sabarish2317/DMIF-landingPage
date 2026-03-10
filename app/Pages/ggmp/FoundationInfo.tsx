"use client"
import Accordion from "./AccordionProps";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const FoundationInfo = () => {
  const accordionData = [
    {
      title: "Who is this for?",
      content:
        "This track is ideal for students aiming to strengthen cognitive abilities, improve learning efficiency, and build foundational thinking skills required for higher academic and career success.",
    },
    {
      title: "What students will learn",
      content:
        "Students will develop enhanced memory, focus, critical thinking, and whole-brain activation techniques to excel in academics and problem-solving.",
    },
    {
      title: "Core focus areas",
      content:
        "Key areas include cognitive learning methods, creativity enhancement, mindfulness, and structured thinking for long-term academic growth.",
    },
    {
      title: "Expected outcomes",
      content:
        "Students will gain stronger cognitive abilities, improved concentration, enhanced creativity, and a solid learning foundation suitable for innovation-driven careers.",
    },
  ];

  const features = [
    {
      title: "Whole-Brain Activation",
      description:
        "Improve focus, memory, and learning through scientifically backed activation techniques.",
    },
    {
      title: "Creative & Critical Thinking",
      description:
        "Develop structured reasoning, idea generation, and problem-solving capabilities.",
    },
    {
      title: "Mindfulness & Memory Boost",
      description:
        "Strengthen retention, recall, and mental clarity with guided practices.",
    },
    {
      title: "Strong Cognitive Base",
      description:
        "Build essential cognitive skills to support academic excellence and lifelong learning.",
    },
  ];

  return (
<div className="flex flex-col bg-gray-100 items-center px-5 py-5 md:px-20 md:pb-20 gap-10 ">
<div className="text-center max-w-5xl mx-auto ">
  <h1
    className="
      text-[28px] sm:text-[34px] text-[#FA773A] md:text-[40px] 
      font-bold tracking-tight 
    "
  >
    Global Guided Mentorship Program (G-GMP)
  </h1>

  <p
    className="
      mt-4 text-[14px] sm:text-[15px] md:text-[16px]
      text-[#475569]
    "
  >
    Structured mentorship aligned with real-world engineering roles
  </p>
</div>


      <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-3">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#FA773A] mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
           1: Inventor Foundation Track
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Build powerful cognitive skills that boost creativity, memory, focus,
          and academic performance—laying the perfect foundation for innovation-driven careers.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Orange Circle Icon */}
              <div className="w-7 h-7 rounded-full bg-[#FA773A] flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-gray-800">{feature.title}</p>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section - Accordion */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Accordion items={accordionData} />
      </motion.div>
    </motion.div>
</div>
  );
};

export default FoundationInfo;
