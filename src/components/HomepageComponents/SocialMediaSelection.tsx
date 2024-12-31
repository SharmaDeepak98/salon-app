import { motion } from "framer-motion";

const SocialMediaSection: React.FC = () => {
  const socialIcons = [
    { icon: "fab fa-facebook", url: "https://www.facebook.com/" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/" },
    { icon: "fab fa-tiktok", url: "https://www.tiktok.com/" },
  ];

  return (
    <div className="h-[70vh] bg-gray-50 flex justify-center align-middle">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-instrumentSerif pt-10 font-bold"
        >
          Follow Advanced Hair Salon
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center text-3xl pt-4 gap-6"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              custom={index}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4 + index * 0.1 }
              }}
            >
              <i className={social.icon} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaSection;