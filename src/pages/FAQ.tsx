import FAQSection from "../components/FAQSection";
import Button from "../components/Button";
import { FAQItems } from "../constants/index";

const FAQ = () => {
  return (
    <div className="bg-[#e0dfdb]">
      <div className="max-w-5xl mx-auto text-lg px-4 sm:px-6 md:px-12 py-6 sm:py-10">
        <h1 className="mt-12 sm:mt-24 text-center font-bold text-2xl sm:text-4xl tracking-widest">
          FAQs
        </h1>
        <p className="text-base sm:text-lg font-semibold underline underline-offset-2 mt-16 sm:mt-28 mb-6 sm:mb-8">
          General
        </p>
        {FAQItems.map((item)=>(
            <FAQSection
              question={item.question}
              answer={item.answer}
            />
          ))}
        <div className="mt-16 sm:mt-24 text-center">
          <p className="text-lg sm:text-xl font-bold mb-4">Have any further queries?</p>
          <a href="#"><Button description="CONTACT US" to="/contact" /></a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;