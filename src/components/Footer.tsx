const Footer = () => {
  return (
    <div className="bg-gray-900">
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl mb-8">
            Book your appointment today and experience the difference.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </section>
      <hr className="my-12 h-[1px] w-full border-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400 dark:opacity-40" />

      <footer className="bg-gray-900 text-gray-400 py-32 ">
        <div className="max-w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl  mb-4 font-instrumentSerif font-extrabold text-white">
              {" "}
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold mb-4 font-instrumentSerif text-white">
              Visit Us!
            </h3>
            <p>Address</p>
            <p className="mt-4">
              <strong>Saturday:</strong> CLOSED <br />
              <strong>Sunday-Friday:</strong> 8am-5pm <br />
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 font-instrumentSerif text-white">
              Policy <span className="font-dancingScript"> & </span> Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Salon Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 font-instrumentSerif text-white">
              Contact
            </h3>
            <p className="font-robotoCondensed">
              <strong>Tel: </strong> 9876543210 <br />
              <strong>Email: </strong>
              <a
                href="mailto:emailtosomewhere@gmail.com"
                className="hover:text-gray-200"
              >
                emailtosomewhere@gmail.com
              </a>
            </p>
            <div className="mt-4 flex space-x-8 text-white ">
              <a
                href="http://tiktok.com"
                className="hover:text-gray-400 text-2xl"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="http://facebook.com"
                className="hover:text-gray-400 text-2xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="http://instagram.com"
                className="hover:text-gray-400 text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
