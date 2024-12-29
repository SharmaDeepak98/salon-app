import coverImage from "../assets/images/services.jpg";
import ServicesDetail from "../components/ServicesDetail";
import share from "../assets/images/hair.jpg";
import Button from "../components/Button";

const Services = () => {
  return (
    <div className="w-full h-full">
      <div>
        {/* cover image and services */}
        <div className="pb-10 flex flex-col items-center justify-center">
          <div className="w-full h-[40vh]">
            <img
              src={coverImage}
              alt="Cover image of salon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center  ">
            <h1 className="text-5xl font-instrumentSerif font-extrabold pt-24 ">
              Services
            </h1>
            <div className=" w-auto max-w-3xl mx-auto px-6 md:px-12 py-10 text-gray-700">
              <p className="text-lg font-robotoCondensed text-center ">
                We take great pride in delivering top-notch professional
                services, and we're confident you'll leave our chair feeling
                absolutely amazing!
              </p>

              <h3 className="text-2xl font-bold text-black pt-10 pb-4">
                Important Booking Information
              </h3>
              <p className="text-lg font-robotoCondensed text-center ">
                To view our policies on late arrivals, rescheduling & no shows,
                please{" "}
                <a
                  href="#"
                  className="hover:text-black underline underline-offset-4 font-semibold"
                >
                  click here!
                </a>
              </p>
            </div>
            <div className="flex justify-center items-center mt-12">
              <hr className="w-52 border-gray-400 border-t-2" />
            </div>
          </div>
        </div>
        {/* services */}
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12 py-10">
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
      <div className="mt-32 w-full max-w-4xl mx-auto px-6 md:px-12 py-10">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full h-96">
              <img src={share} alt="Share your image" className="h-96 w-96 md:h-96 md:w-96  max-h-96 max-w-full object-contain" />
            </div>
            <div className="flex flex-col ml-0 md:ml-4 md:mt-0 justify-center ">
              <h1 className="text-center font-extrabold font-instrumentSerif text-4xl">Share Your Style</h1>
              <p className="text-md  text-center font-medium my-12">Mention us in your stories @advanced_hairSalon via TikTok, Instagram, and Facebook, and we will feature your post in our official pages!</p>
              <div className="flex justify-center">
                <Button description="Follow Us" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Services;
