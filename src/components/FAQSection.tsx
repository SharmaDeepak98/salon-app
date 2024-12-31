import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQSection: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="px-4 sm:px-6">
        <div 
          className="hover:cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between items-center gap-4">
            <motion.h1 
              className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl"
              whileHover={{ scale: 1.01 }}
            >
              {question}
            </motion.h1>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </motion.div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 text-gray-700 text-sm sm:text-base"
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <hr className="mt-3 border-t-1 border-gray-300" />
    </motion.div>
  );
};

export default FAQSection;