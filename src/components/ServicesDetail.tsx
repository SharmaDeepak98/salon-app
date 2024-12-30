import { motion } from "framer-motion";
import Button from "./Button";

interface ServicesProps {
  serviceName: string;
  description: string;
  price: string;
  type?: string;
}

const ServicesDetail = ({ serviceName, description, price }: ServicesProps) => {
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
          <Button description="Book Now!!" />
        </motion.div>
      </div>
      <div className="space-y-2 flex flex-col w-full sm:w-3/4">
        <p className="text-base sm:text-lg text-gray-700">{description}</p>
        <p className="text-base sm:text-lg font-bold">${price}</p>
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