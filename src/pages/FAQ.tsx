import FAQSection from "../components/FAQSection";
import Button from "../components/Button";

const FAQ = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto text-lg px-4 sm:px-6 md:px-12 py-6 sm:py-10">
        <h1 className="mt-12 sm:mt-24 text-center font-bold text-2xl sm:text-4xl tracking-widest">
          FAQs
        </h1>
        <p className="text-base sm:text-lg font-semibold underline underline-offset-2 mt-16 sm:mt-28 mb-6 sm:mb-8">
          General
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <FAQSection
            question="Do I need to book an appointment, or do you accept walk-ins?"
            answer="While we welcome walk-ins, we recommend booking an appointment to ensure availability, especially during busy hours."
          />
          <FAQSection
            question="What forms of payment do you accept?"
            answer="We accept cash, credit/debit cards, and digital payment options like Apple Pay and Google Pay."
          />
          <FAQSection
            question="Can you accommodate sensitive skin or allergies?"
            answer="Of course! Please inform us of any sensitivities or allergies, and we will tailor our services and products to meet your needs."
          />
          <FAQSection
            question="What brands of products do you use?"
            answer="We use high-quality, salon-grade products from top brands like Olaplex, Redken, L'Oréal Professional, and more."
          />
        </div>
        <div className="mt-16 sm:mt-24 text-center">
          <p className="text-lg sm:text-xl font-bold mb-4">Have any further queries?</p>
          <a href="#"><Button description="CONTACT US" /></a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;