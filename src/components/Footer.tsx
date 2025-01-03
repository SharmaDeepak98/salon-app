import { motion } from "framer-motion";
import { navItems } from "../constants";


const Footer = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-900">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.6 }}
        className="py-16 px-8 bg-gray-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUpVariants} className="text-4xl font-bold mb-6">
            Ready to Transform Your Look?
          </motion.h2>
          <motion.p variants={fadeInUpVariants} className="text-xl mb-8">
            Book your appointment today and experience the difference.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </motion.button>
        </div>
      </motion.section>

      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="my-12 h-[1px] border-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400 dark:opacity-40"
      />

      <footer className="bg-gray-900 text-gray-400 py-32">
        <div className="max-w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4 font-instrumentSerif font-extrabold text-white">
              Links
            </h3>
            <ul className="space-y-2">
              {navItems.map(({ label, path }, index) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={path} className="hover:text-gray-200">
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-extrabold mb-4 font-instrumentSerif text-white">
              Visit Us!
            </h3>
            <p>2298 Tecumseh Rd E</p>
            <p>Windsor, ON NW81E7</p>
            <p>Canada</p>
            <p className="mt-4">
              <strong>Mon - Sat:</strong> 8am-5pm <br />
              <strong>Sunday:</strong> CLOSED <br />
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-instrumentSerif text-white">
              Policy <span className="font-dancingScript"> & </span> Legal
            </h3>
            <ul className="space-y-2">
              {["Salon Policies", "Terms and Conditions", "FAQ", "Privacy Policy", "Payment Methods"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href="#" className="hover:text-gray-200">
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-instrumentSerif text-white">
              Contact
            </h3>
            <p className="font-robotoCondensed">
              <strong>Tel: </strong> 613-749-2074 <br />
              <strong>Email: </strong>
              <a href="mailto:emailtosomewhere@gmail.com" className="hover:text-gray-200">
                emailtosomewhere@gmail.com
              </a>
            </p>
            <div className="mt-4 flex space-x-8 text-white">
              {["tiktok", "facebook", "instagram"].map((platform, index) => (
                <motion.a
                  key={platform}
                  href={`http://${platform}.com`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-2xl"
                >
                  <i className={`fab fa-${platform}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
