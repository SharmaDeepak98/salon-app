import AboutSection from "../components/HomepageComponents/AboutSection";
import Hero from "../components/HomepageComponents/Hero";
import ServiceSection from "../components/HomepageComponents/ServiceSection";
import SocialMediaSection from "../components/HomepageComponents/SocialMediaSelection";
import Testimonials from "../components/HomepageComponents/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero />
      <SocialMediaSection />
      <ServiceSection />
      <AboutSection />
      <Testimonials />
    </div>
  );
};
export default Home;
