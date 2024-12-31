import salonInterior2 from "../../assets/images/salonInterior2.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-8 sm:py-16 px-4 sm:px-8 bg-gray-50">
      <motion.div 
        className="absolute left-0 top-0 w-full md:w-[50vw] h-full md:h-[60vh] bg-gray-800"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:col-span-5 text-white">
            <motion.p 
              className="text-sm mb-4"
              variants={textVariants}
            >
              Come to us for
            </motion.p>
            <motion.h2 
              className="text-3xl sm:text-4xl font-light italic mb-2"
              variants={textVariants}
            >
              Custom
            </motion.h2>
            <motion.h2 
              className="text-4xl sm:text-5xl font-instrumentSerif font-bold mb-6"
              variants={textVariants}
            >
              Creative Coloring
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg leading-relaxed mb-8"
              variants={textVariants}
            >
              Here at Honey Hair we intentionally design custom colors for every client who walks through our doors. We believe in beautiful, soft coloring and blending techniques that guarantee our clients easy and seamless grow outs in between appointments.
            </motion.p>
            <motion.button 
              className="w-full sm:w-auto bg-white text-gray-800 px-6 sm:px-8 py-3 text-sm hover:bg-gray-100 transition-colors"
              variants={textVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
            </motion.button>
          </div>

          <motion.div 
            className="md:col-span-7 md:col-start-6 mt-8 md:mt-0"
            variants={imageVariants}
          >
            <motion.img
              src={salonInterior2}
              alt="Salon Interior"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;