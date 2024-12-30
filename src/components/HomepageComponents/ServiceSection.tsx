import { services } from "../../constants";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Service {
  icon: string;
  name: string;
}

interface ServiceIconProps extends Service {
  index: number;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, name, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50% 0px -50% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="flex flex-col items-center"
    >
      <div className="mb-4 text-6xl text-gray-700">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    </motion.div>
  );
};

const ServiceSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-50% 0px -50% 0px" });

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl mb-12 font-instrumentSerif font-bold text-center"
        >
          Our Services
        </motion.h2>
        
        {/* Service Icons and Subtitles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 py-16 text-center">
          {services.map((service: Service, index: number) => (
            <ServiceIcon 
              key={index}
              icon={service.icon}
              name={service.name}
              index={index}
            />
          ))}
        </div>

        {/* View Prices Button */}
        <div className="mt-16 text-center">
          <Button description="View Prices" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
