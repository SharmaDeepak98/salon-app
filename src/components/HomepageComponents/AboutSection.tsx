import { useState } from "react";
import salonInterior2 from "../../assets/images/salonInterior2.jpg";
import { motion } from "framer-motion";
import BookModal from "../BookModal";

const AboutSection = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      <section className="relative min-h-[400px] py-8 sm:py-16 px-4 sm:px-8 bg-gray-50">
        {/* Background container */}
        <motion.div
          className="absolute left-0 top-0 w-full md:w-[50vw] h-full bg-gray-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />
        
        {/* Main content container */}
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:min-h-[70vh]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Text content */}
            <div className="md:col-span-5 text-white flex flex-col justify-center py-8 md:py-0">
              <motion.p className="text-sm mb-4" variants={textVariants}>
                Welcome to
              </motion.p>
              <motion.h2
                className="text-3xl sm:text-4xl font-light italic mb-2"
                variants={textVariants}
              >
                Advanced
              </motion.h2>
              <motion.h2
                className="text-4xl sm:text-5xl font-instrumentSerif font-bold mb-6"
                variants={textVariants}
              >
                Hair Salon
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg leading-relaxed mb-8"
                variants={textVariants}
              >
                At Advanced Hair Salon, we specialize in creating the perfect look for every client. 
                Our team of skilled stylists combines technical expertise with artistic vision to 
                deliver exceptional hair services in our modern, welcoming space. From precision 
                cuts to innovative styling, we're committed to bringing out your hair's natural beauty.
              </motion.p>
              <motion.button
                className="w-full sm:w-auto bg-white text-gray-800 px-6 sm:px-8 py-3 text-sm hover:bg-gray-100 transition-colors"
                variants={textVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookModalOpen(true)}
              >
                Book Now
              </motion.button>
            </div>

            {/* Image container */}
            <motion.div
              className="md:col-span-7 md:col-start-6 flex items-center md:min-h-[60vh]"
              variants={imageVariants}
            >
              <motion.img
                src={salonInterior2}
                alt="Advanced Hair Salon Interior"
                className="w-full h-[300px] md:h-full object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Book Modal */}
      <BookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
};

export default AboutSection;