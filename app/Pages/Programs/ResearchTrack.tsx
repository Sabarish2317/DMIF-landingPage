"use client";

import Accordion from "./AccordionProps";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const ResearchInfo = () => {
  const accordionData = [
    {
      title: "Who is this for?",
      content:
        "This program is designed for students aiming for Ivy League and other global admissions, aspiring researchers seeking to publish in top journals, and innovators looking to build strong academic credentials.",
    },
    {
      title: "What students will learn",
      content:
        "Students will gain expertise in academic research, scientific writing, and publishing high-quality papers in international journals and conferences.",
    },
    {
      title: "Core focus areas",
      content:
        "Key areas include research methodology, academic writing, peer-reviewed publishing, and building international recognition.",
    },
    {
      title: "Sample research paper outcomes",
      content:
        "Students will produce academic papers suitable for submission to top-tier journals and global conferences, strengthening their profiles for Ivy/PhD admissions.",
    },
  ];

  const features = [
    {
      title: "Research to Publication",
      description:
        "Learn how to design, write, and publish high-quality academic papers.",
    },
    {
      title: "Global Recognition",
      description:
        "Publish in top international journals and conferences (IEEE, ACM, Springer, Elsevier).",
    },
    {
      title: "Academic Edge",
      description:
        "Strengthen Ivy/PhD admissions with research credentials and citations.",
    },
    {
      title: "Expert Mentorship",
      description:
        "Guided by professors, researchers, and industry innovators with 50+ publications.",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 items-center px-5 py-5 md:px-20 md:py-20"
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
           3: Research Papers Track
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Master the art of academic writing and publishing, opening doors to Ivy
          League admissions, global conferences, and career-defining recognition.
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
              <div className="shrink-0 w-7 h-7 rounded-full bg-[#FA773A] flex items-center justify-center mt-1">
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
  );
};

export default ResearchInfo;
