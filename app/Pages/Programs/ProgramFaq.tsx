"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react"; // using lucide-react icons

interface AccordionItemProps {
  title: string;
  content: string;
  initiallyOpen?: boolean; // ✅ new optional prop
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  initiallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen); // ✅ use prop for initial state

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left text-base font-bold text-[#FA773A]"
      >
        {title}
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-[#FA773A]" />
        ) : (
          <ChevronRight className="w-5 h-5 text-[#FA773A]" />
        )}
      </button>

      {isOpen && (
        <p className="pb-4 text-regular text-gray-700 leading-relaxed">{content}</p>
      )}
    </div>
  );
};

export default AccordionItem;
