import { motion } from "framer-motion";
import coverImage from "../assets/images/services.jpg";
import ServicesDetail from "../components/ServicesDetail";
import share from "../assets/images/hair.jpg";
import Button from "../components/Button";

const Services = () => {
  return (
    <div className="w-full h-full">
      <div>
        <div className="pb-10 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-[40vh]"
          >
            <img
              src={coverImage}
              alt="Cover image of salon"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center px-4 sm:px-0"
          >
            <h1 className="text-3xl sm:text-5xl font-instrumentSerif font-extrabold pt-12 sm:pt-24">
              Services
            </h1>
            <div className="w-auto max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 text-gray-700">
              <p className="text-base sm:text-lg font-robotoCondensed text-center">
                We take great pride in delivering top-notch professional services, 
                and we're confident you'll leave our chair feeling absolutely amazing!
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-black pt-8 sm:pt-10 pb-4">
                Important Booking Information
              </h3>
              <p className="text-base sm:text-lg font-robotoCondensed text-center">
                To view our policies on late arrivals, rescheduling & no shows, please{" "}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="hover:text-black underline underline-offset-4 font-semibold"
                >
                  click here!
                </motion.a>
              </p>
            </div>
            <div className="flex justify-center items-center mt-8 sm:mt-12">
              <motion.hr 
                initial={{ width: 0 }}
                animate={{ width: "13rem" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="border-gray-400 border-t-2"
              />
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10">
          <div className="flex flex-col space-y-8">
            <ServicesDetail
              serviceName="Eyebrow Threading"
              description="This service shapes your brows with precison leaving you with a clean, polished look."
              price="15"
            />
            <ServicesDetail
              serviceName="Eyebrow Tinting"
              description="We provide a high quality tinting service that will give your brows a fuller, more defined look."
              price="30"
            />
            <ServicesDetail
              serviceName="Eyebrow Tinting"
              description="We provide a high quality tinting service that will give your brows a fuller, more defined look."
              price="30"
            />
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 sm:mt-32 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={share} 
              alt="Share your image" 
              className="h-80 w-full md:h-96 md:w-96 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <h1 className="text-center font-extrabold font-instrumentSerif text-3xl sm:text-4xl">
              Share Your Style
            </h1>
            <p className="text-base sm:text-md text-center font-medium my-8 sm:my-12">
              Mention us in your stories <span className="font-semibold">@advanced_hairSalon</span> 
              via TikTok, Instagram, and Facebook, and we will feature your post in our official pages!
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <Button description="Follow Us" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;