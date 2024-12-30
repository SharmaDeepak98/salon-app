import { motion } from "framer-motion";
import salonInterior from "../../assets/images/salonInterior.jpg";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${salonInterior})`,
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-black" 
        />
      </motion.div>
      <div className="relative h-full grid grid-cols-2">
        <div className="flex flex-col justify-center pl-8 md:pl-16 lg:pl-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-dancingScript text-white mb-6 max-w-2xl"
          >
            Hey Beautiful !
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-5xl font-bold text-white mb-6 max-w-xl"
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 max-w-xl mb-8"
          >
            Step into a world where beauty meets confidence. Our team of
            experienced stylists is here to provide you with personalized care,
            premium products, and innovative techniques that leave you feeling
            radiant inside and out. Whether you're craving a bold new style, a
            subtle refresh, or a soothing treatment, we're dedicated to making
            every visit a luxurious experience that inspires your best self. 
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors w-fit"
          >
            Book Appointment
          </motion.button>
        </div>
        {/* Right Side - Intentionally Empty */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;