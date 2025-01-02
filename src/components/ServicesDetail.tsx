import { motion } from "framer-motion";
import Button from "./Button";

interface ServicesProps {
  serviceName: string;
  initialContent: {
    basicDescription: string;
    price: string;
  };
  modalContent: {
    detailedInfo: string;
    process: string[];
    aftercare: string[];
    recommendations: string;
  };
  onClick: (service: {
    name: string;
    modalContent: {
      detailedInfo: string;
      process: string[];
      aftercare: string[];
      recommendations: string;
    };
  }) => void;
}

const ServicesDetail = ({
  serviceName,
  initialContent,
  modalContent,
  onClick,
}: ServicesProps) => {
  const handleClick = () => {
    onClick({
      name: serviceName,
      modalContent,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-4"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <motion.h1
          whileHover={{ x: 10 }}
          className="text-xl sm:text-2xl font-bold tracking-wider"
        >
          {serviceName}
        </motion.h1>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button description="Learn More" onClick={handleClick} />
        </motion.div>
      </div>
      <div className="space-y-2 flex flex-col w-full sm:w-3/4">
        <p className="text-base sm:text-lg text-gray-700">
          {initialContent.basicDescription}
        </p>
        <p className="text-base sm:text-lg font-bold">
          ${initialContent.price}
        </p>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "4rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t-2 border-yellow-200"
      />
    </motion.div>
  );
};

export default ServicesDetail;
