import { motion } from "framer-motion";
import coverImage from "../assets/images/coverImage.png";

const Contact = () => {
  return (
    <div className="">
      <div className="h-[50vh] bg-center">
        <img
          src={coverImage}
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10 bg-[#e0dfdb]  relative -mt-48"
      >
        <div className="space-y-12">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-instrumentSerif font-extrabold text-4xl sm:text-5xl text-center ">
              ADVANCED HAIR SALON
            </h1>
            <p className="text-gray-600 font-robotoCondensed text-center mt-4 text-lg sm:text-xl">
              If you have any questions before booking or inquiries unrelated to
              booking, feel free to send us a text—we'll get back to you as soon
              as we can!
            </p>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <strong className="text-lg sm:text-xl">Phone</strong>
              <p className="text-gray-600 font-robotoCondensed text-lg sm:text-xl">
                613-749-2074
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <strong className="text-lg sm:text-xl">Email</strong>
              <p className="text-gray-600 font-robotoCondensed text-lg sm:text-xl">

              </p>
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="flex justify-center text-center"
          >
            <div>
              <strong className="text-lg sm:text-xl">Social Media</strong>
              <div className="mt-4 flex space-x-4 text-black text-center">
                {["tiktok", "facebook", "instagram"].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href={`http://${platform}.com`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    custom={index}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4 + index * 0.1 },
                    }}
                    className="text-2xl sm:text-3xl"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          <div className="mt-6 sm:mt-8">
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="border-gray-400 border-t-2 mx-auto"
            />
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="mt-8 sm:mt-12"
        >
          <div className="mb-8 sm:mb-12">
            <h1 className="font-instrumentSerif font-extrabold text-4xl sm:text-5xl mb-6 sm:mb-8">
              Visit Us
            </h1>
            <div className="font-robotoCondensed text-lg sm:text-xl space-y-4 text-gray-600">
              <p>
                We are very delighted to setup our business in this beautiful
                Windsor city.
              </p>
              <p>Our team is looking forward to serve you well!!</p>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="mb-8 sm:mb-12"
          >
            <div className="text-lg sm:text-xl space-y-4">
              <p className="font-bold">Address</p>
              <div className="space-y-2 text-gray-600">
                <p>2298 Tecumseh Rd E</p>
                <p>Windsor, ON NW81E7</p>
                <p>Canada</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <p className="font-bold mb-4 text-lg sm:text-xl">Opening Hours</p>
              <div className="text-gray-600 flex space-x-8 sm:space-x-12">
                <section className="flex flex-col space-y-4 text-gray-800">
                  <span>Mon - Fri</span>
                  <span>Sunday</span>
                </section>
                <section className="flex flex-col space-y-4">
                  <span>8am - 5pm</span>
                  <span className="font-bold text-black">CLOSED</span>
                </section>
              </div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              className="mt-12 sm:mt-16 space-y-4"
            >
              <h1 className="font-bold text-lg sm:text-xl">Location</h1>
              <div className="w-full h-72 sm:h-96 md:h-[450px] p-2 sm:p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.8440636134755!2d-82.9493637!3d42.3172872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d1f3d6844d5%3A0x91d5f89f42911f56!2s2298%20Tecumseh%20Rd%20E%2C%20Windsor%2C%20ON%20N8W%201E7%2C%20Canada!5e0!3m2!1sen!2sus!4v1735283564391!5m2!1sen!2sus"
                  className="w-full h-full border-1 border-solid border-gray-700 shadow-md"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
