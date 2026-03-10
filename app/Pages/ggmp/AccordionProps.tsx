import React from "react";
import AccordionItem from "./ProgramFaq";

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-lg mx-auto">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          initiallyOpen={i === 0}  // ✅ open only first item
        />
      ))}
    </div>
  );
};

export default Accordion;
