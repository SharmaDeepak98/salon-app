import { motion } from "framer-motion";
import coverImage from "../assets/images/coverImage.png";
import ServicesDetail from "../components/ServicesDetail";
import share from "../assets/images/hair.jpg";
import Button from "../components/Button";

const Services = () => {
  return (
    <div className="">
      <div className="h-[50vh] bg-center">
        <img
          src={coverImage}
          alt="Cover image of salon"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-lg px-4 sm:px-6 md:px-12 py-8 sm:py-10 bg-[#e0dfdb] relative -mt-48"
      >
        {/* Title Section */}

        <div className="space-y-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold underline underline-offset-8 font-dancingScript text-gray-900">
              SERVICES
            </h1>
            <p className="text-lg sm:text-xl font-medium font-robotoCondensed text-gray-700 mt-4 sm:mt-6">
              We take great pride in delivering top-notch professional services,
              ensuring you leave our salon feeling absolutely amazing!
            </p>
          </motion.div>
          <div className="mt-6 sm:mt-8">
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="border-gray-400 border-t-2 mx-auto"
            />
          </div>
        </div>
        {/* Services Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }} // Adjusted viewport amount
          transition={{ duration: 1 }}
          className="mt-12 space-y-10"
        >
          <ServicesDetail
            serviceName="Eyebrow Threading"
            description="This service shapes your brows with precision, leaving you with a clean, polished look."
            price="15"
          />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }} // Adjusted viewport amount
            transition={{ duration: 1 }}
            className="mt-12 space-y-10"
          >
            <ServicesDetail
              serviceName="Eyebrow Tinting"
              description="We provide a high-quality tinting service that will give your brows a fuller, more defined look."
              price="30"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1 }}
            className="mt-12 space-y-10"
          >
            <ServicesDetail
              serviceName="Hair Styling"
              description="Enjoy our expert hairstyling services that leave you with a look that complements your style and personality."
              price="50"
            />
          </motion.div>

          {/* Share Your Style Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="mt-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={share}
                  alt="Share your style"
                  className="h-64 w-full md:h-80 md:w-80 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Text and Button */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold font-instrumentSerif text-gray-900">
                  Share Your Style
                </h2>
                <p className="text-lg sm:text-xl font-medium text-gray-700 mt-4 sm:mt-6">
                  Mention us in your stories{" "}
                  <span className="font-semibold">@advanced_hairSalon</span> via
                  TikTok, Instagram, and Facebook, and we'll feature your post
                  on our official pages!
                </p>
                <div className="mt-6 sm:mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <Button description="Follow Us" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
