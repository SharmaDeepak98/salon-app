import { motion } from "framer-motion";
import coverImage from "../assets/images/coverImage.png";

const Contact = () => {
  return (
    <div className="bg-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[50vh] bg-center"
      >
        <img
          src={coverImage}
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10 bg-white relative -mt-48"
      >
        <div className="space-y-8 sm:space-y-12">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-dancingScript font-extrabold text-2xl sm:text-3xl text-center underline underline-offset-8">
              ADVANCED HAIR SALON
            </h1>
            <p className="text-gray-600 font-robotoCondensed text-center mt-4 text-sm sm:text-base">
              If you have any questions before booking or inquiries unrelated to booking, 
              feel free to send us a text—we'll get back to you as soon as we can!
            </p>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <strong className="text-base sm:text-lg">Phone</strong>
              <p className="text-gray-600 font-robotoCondensed">9876543210</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <strong className="text-base sm:text-lg">Email</strong>
              <p className="text-gray-600 font-robotoCondensed">emailtosomewhere@gmail.com</p>
            </motion.div>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center text-center"
          >
            <div>
              <strong className="text-base sm:text-lg">Social Media</strong>
              <div className="mt-4 flex space-x-4 text-black text-center">
                {['tiktok', 'facebook', 'instagram'].map((platform) => (
                  <motion.a
                    key={platform}
                    href={`http://${platform}.com`}
                    whileHover={{ scale: 1.2, color: '#666' }}
                    className="text-xl sm:text-2xl"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          <hr className="border-t border-black my-6 w-full" />
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12"
        >
          <div className="mb-8 sm:mb-12">
            <h1 className="font-instrumentSerif font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-8">
              Visit Us
            </h1>
            <div className="font-robotoCondensed text-sm sm:text-base space-y-2 text-gray-600">
              <p>We are very delighted to setup our business in this beautiful Kathmandu city.</p>
              <p>Our team is looking forward to serve you well!!</p>
            </div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8 sm:mb-12"
          >
            <div className="mt-4 text-sm sm:text-base space-y-2">
              <p className="font-bold text-lg sm:text-xl">Address</p>
              <div className="space-y-2 text-gray-600">
                <p>Pashupati street</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <p className="font-bold mb-4 text-lg sm:text-xl">Opening Hours</p>
              <div className="text-gray-600 flex space-x-8 sm:space-x-12">
                <section className="flex flex-col space-y-4 text-gray-800">
                  <span>Sun - Fri</span>
                  <span>Saturday</span>
                </section>
                <section className="flex flex-col space-y-4">
                  <span>8am - 5pm</span>
                  <span className="font-bold text-black">CLOSED</span>
                </section>
              </div>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 sm:mt-16 space-y-4"
            >
              <h1 className="font-bold text-lg sm:text-xl">Location</h1>
              <div className="w-full h-72 sm:h-96 md:h-[450px] p-2 sm:p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.027819900312!2d-90.0301532!3d29.892298999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a72587516891%3A0xb2f44aba69783c5b!2sAdvanced%20Salon%20%26%20Spa!5e0!3m2!1sen!2snp!4v1735283564391!5m2!1sen!2snp"
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