import coverImage from "../assets/images/coverImage.png";

const Contact = () => {
  return (
    <div className=" bg-white  ">
      <div className=" h-[50vh]  bg-center">
        <img
          src={coverImage}
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto text-lg px-6 md:px-12 py-10  bg-white relative -mt-48">
        <div className="space-y-12">
          <section>
            <h1 className="font-dancingScript font-extrabold text-3xl text-center underline underline-offset-8">
              ADVANCED HAIR SALON
            </h1>
            <p className="text-gray-600 font-robotoCondensed text-center mt-4">
              If you have any questions before booking or inquiries unrelated to
              booking, feel free to send us a text—we'll get back to you as soon
              as we can!
            </p>
          </section>
          <section className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="text-center">
              <strong className=" text-lg ">Phone</strong>
              <p className="text-gray-600 font-robotoCondensed  ">9876543210</p>
            </div>

            <div className="text-center">
              <strong className=" text-lg">Email</strong>
              <p className="text-gray-600 font-robotoCondensed ">
                emailtosomewhere@gmail.com
              </p>
            </div>
          </section>

          <section className="flex justify-center text-center ">
            <div>
              <strong className=" text-lg">Social Media</strong>
              <div className="mt-4 flex space-x-4 text-black text-center">
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
          </section>
          <hr className="border-t border-black my-6 w-full md:w-auto" />
        </div>

        <div className="mt-12">
          <div className="mb-12">
            <h1 className="font-instrumentSerif font-extrabold text-3xl mb-8">
              Visit Us
            </h1>
            <div className="font-robotoCondensed text-md space-y-2 text-gray-600">
              <p>
                We are very delighted to setup our business in this beautiful
                Kathmandu city.
              </p>
              <p>Our team is looking forward to serve you well!!</p>
            </div>
          </div>
          <div className=" mb-12">
            <div className="mt-4 font-robotoCondensed text-md space-y-2">
              <p className="font-bold text-xl">Address</p>
              <div className="space-y-2 text-gray-600 ">
                <p>Pashupati street</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="mt-12  ">
              <p className="font-bold mb-4 text-xl ">Opening Hours</p>
              <div className=" text-gray-600 flex space-x-12">
                <section className="flex flex-col space-y-4 text-gray-800">
                  <span>Sun - Fri</span>
                  <span>Saturday</span>
                </section>
                <section className="flex flex-col space-y-4 ">
                  <span>8am - 5pm</span>
                  <span className="font-bold text-black">CLOSED</span>
                </section>
              </div>
            </div>

            {/* Map */}

            <div className="mt-16 space-y-4">
              <h1 className="font-bold text-xl">Location</h1>
              <div className="w-full h-96 md:h-[450px] p-4 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.027819900312!2d-90.0301532!3d29.892298999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a72587516891%3A0xb2f44aba69783c5b!2sAdvanced%20Salon%20%26%20Spa!5e0!3m2!1sen!2snp!4v1735283564391!5m2!1sen!2snp"
                  className="w-full h-full border-1 border-solid border-gray-700 shadow-md"
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
