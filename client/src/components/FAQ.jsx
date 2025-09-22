import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need for a home loan application?",
    answer: (
      <>
        Applying for a home loan requires a set of documents to verify your
        identity, income, and the property details. While the exact list can
        vary, you should generally prepare the following:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Identity & Address Proof:</strong> PAN Card, Aadhaar Card,
            Passport, or Voter ID.
          </li>
          <li>
            <strong>Income Proof:</strong> For salaried individuals, this
            includes the last 3-6 months of salary slips and Form 16. For
            self-employed, it includes ITR filings for the last 2-3 years and
            business financials.
          </li>
          <li>
            <strong>Property Documents:</strong> A copy of the sale agreement,
            title deed, and an approved plan of the property.
          </li>
          <li>
            <strong>Bank Statements:</strong> Your last 6 months of bank account
            statements.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How long does the loan approval process take?",
    answer:
      "The entire loan approval timeline can range from 1 to 3 weeks. It's a multi-step process that includes: application submission, document verification, credit appraisal by the lender, legal and technical verification of the property, and finally, the loan sanction. The speed largely depends on how quickly you provide all the necessary documents and the lender's internal processing efficiency.",
  },
  {
    question: "How is my personal and financial information protected?",
    answer:
      "We take data security very seriously. Your personal and financial information is protected using multiple layers of security. We use 256-bit SSL encryption for all data transmission, and your information is stored on secure, access-controlled servers. We comply with all relevant data protection regulations to ensure your information is never shared without your consent.",
  },
  {
    question: "What is the minimum credit score required for loans?",
    answer:
      "While there isn't a strict universal minimum, a credit score of 750 or higher is highly recommended to secure a loan with favorable terms and a competitive interest rate. Applicants with lower scores may still be approved, but often at a higher interest rate or with a requirement for a larger down payment. Maintaining a good credit history is key to improving your financial options.",
  },
  {
    question: "Do you charge any processing fees?",
    answer:
      "Yes, a one-time processing fee is standard for most loans. This fee typically ranges from 0.5% to 2% of the total loan amount and covers the administrative expenses involved in processing your application, such as document verification and credit checks. This fee is non-refundable and will be explicitly mentioned in your loan agreement.",
  },
  {
    question: "Can I prepay my loan without penalties?",
    answer:
      "As per RBI guidelines, there are no prepayment penalties on floating-rate home loans. This allows you to pay off your loan early without any extra charges. However, for fixed-rate loans or other types of loans (like personal or car loans), prepayment policies can vary. It's always best to carefully read the terms and conditions in your loan document.",
  },
  {
    question: "What investment options do you recommend for beginners?",
    answer: (
      <>
        For beginners, it's wise to start with investments that are relatively
        low-risk and easy to understand. We recommend a balanced approach:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Systematic Investment Plans (SIPs) in Mutual Funds:</strong>{" "}
            This allows you to invest a fixed amount regularly in a diversified
            portfolio, reducing risk and benefiting from compounding.
          </li>
          <li>
            <strong>Public Provident Fund (PPF):</strong> A government-backed,
            long-term savings scheme that offers tax benefits and a guaranteed
            rate of return.
          </li>
          <li>
            <strong>Index Funds:</strong> These are low-cost funds that track a
            market index like the NIFTY 50, providing broad market exposure.
          </li>
        </ul>
        Start small, stay consistent, and gradually increase your investment
        amount as your understanding grows.
      </>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6  text-center">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-10">
        Frequently Asked Questions
      </h2>
      <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-600 mb-8 sm:mb-12">
        Get answers to common questions about our financial services, <br className="hidden sm:block" />
        loan processes, and investment solutions.
      </p>

      <div className="space-y-4 text-left">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl">
            <div
              className="px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition rounded-2xl"
              onClick={() => toggleFAQ(i)}
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 font-medium">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-screen" : "max-h-0"
              }`}
            >
              <hr className="border-gray-300 mx-4 sm:mx-6" />
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
                <div className="text-sm sm:text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
