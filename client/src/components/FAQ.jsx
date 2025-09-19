
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    "What documents do I need for a home loan application?",
    "How long does the loan approval process take?",
    "How is my personal and financial information protected?",
    "What is the minimum credit score required for loans?",
    "Do you charge any processing fees?",
    "Can I prepay my loan without penalties?",
    "What investment options do you recommend for beginners?",
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <h2 className="text-6xl font-semibold text-gray-900 mb-10">
                Frequently Asked Questions
            </h2>
            <p className="text-3xl font-semibold text-gray-600 mb-12">
                Get answers to common questions about our financial services, <br />loan
                processes, and investment solutions.
            </p>

            <div className="space-y-4 text-left">
                {faqs.map((q, i) => (
                    <div
                        key={i}
                        className="bg-gray-100 rounded-2xl px-6 py-6 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition"
                        onClick={() => toggleFAQ(i)}
                    >
                        <span className="text-2xl text-gray-600 font-medium ">{q}</span>
                        <ChevronDown
                            className={`w-5 h-5 text-gray-600 transform transition-transform ${openIndex === i ? "rotate-180" : ""
                                }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;