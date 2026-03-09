
import ProgramCard from "./ProgramCard";
import { motion } from "framer-motion";

const ProgramCards = () => {

const cards = [
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Patent – The Innovation Engine",
    description:
      "Learn how to turn ideas into patents using real-world methods. Get hands-on with drafting Invention Disclosure Forms (IDF) and Technical Invention Documents (TID), while building a strong profile in innovation.",
    discountPrice: 899,
    oldPrice: 1200,
  },
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Research Paper – The Explorer",
    description:
      "Master the art of academic research and publishing. From structuring manuscripts to submitting at global conferences, you will create a publication-ready paper that strengthens your academic and career profile.",
    discountPrice: 599,
    oldPrice: 900,
  },
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Entrepreneurship – From Ideas to Ventures",
    description:
      "Transform your patents and research into scalable startups. Learn business model design, pitching, and fundraising strategies, while connecting with incubators and accelerators to launch market-ready ventures.",
    discountPrice: 599,
    oldPrice: 900,
  },
];


  return (
    <div className="relative w-full py-10">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <motion.h2
          className="text-center heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Programs
        </motion.h2>
        <motion.p
          className="text-center text-gray-500 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Onlearning brings you specialized tracks designed to boost your
          academic and professional journey.
        </motion.p>
      </div>

      {/* Static Grid Layout */}
      <div className="container mx-auto px-6 md:px-20 mt-8">
        {/* Top Row - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {cards.slice(0, 2).map((card, i) => (
            <motion.div
              key={i}
              className="w-full  mx-auto"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProgramCard
                logo={card.logo}
                company={card.company}
                title={card.title}
                description={card.description}
                discountPrice={card.discountPrice}
                oldPrice={card.oldPrice}
                buttonText="Apply Now"
           
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - One Centered Card */}
        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-2xl "
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProgramCard
              logo={cards[2].logo}
              company={cards[2].company}
              title={cards[2].title}
              description={cards[2].description}
              discountPrice={cards[2].discountPrice}
              oldPrice={cards[2].oldPrice}
              buttonText="Apply Now"
              
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCards;