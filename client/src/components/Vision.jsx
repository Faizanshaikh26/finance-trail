import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa6";

const Vision = () => {
  const certifications = [
    { title: "RBI Registered", desc: "Licensed Financial", descs: "Services Provider" },
    { title: "SEBI Certified", desc: "Licensed Financial", descs: "Services Provider" },
    { title: "IRDA Approved", desc: "Licensed Financial", descs: "Services Provider" },
    { title: "ISO 27001", desc: "Licensed Financial", descs: "Services Provider" },
  ];

  return (
    <div className="text-gray-800 px-4 sm:px-6 md:px-10 lg:px-20 py-10 w-full">
      {/* Vision & Mission */}
      <section className="mb-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Guided by our core values and commitment to excellence in financial services.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg"
              alt="Our Vision"
              className="w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-[50px] md:rounded-t-[100px]"
            />
          </div>
          <div>
            <h3 className="mb-4 text-xl sm:text-2xl font-bold text-blue-600 text-center md:text-left">
              Our Vision
            </h3>
            <p className="text-gray-800 text-base sm:text-lg md:text-lg leading-relaxed text-center md:text-left">
              To be the most trusted financial partner, empowering individuals and businesses
              to achieve their financial aspirations through innovative, personalized solutions
              and unwavering commitment to their success.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="mb-4 text-xl sm:text-2xl font-bold text-blue-600 text-center md:text-left">
              Our Mission
            </h3>
            <p className="text-gray-800 text-base sm:text-lg md:text-lg leading-relaxed text-center md:text-left">
              To deliver exceptional financial services with integrity, transparency, and
              expertise, building lasting relationships while helping our clients navigate
              their financial journey with confidence and peace of mind.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.aZ1L5nsDnvBAFC0k2JZ4igHaF0?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Our Mission"
              className="w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-t-[50px] md:rounded-t-[100px]"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F9F9F9] py-12 sm:py-16 rounded-2xl">
        <div className="text-center mb-10 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Certifications and Compliance
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Our certifications ensure that we meet the highest standards of financial
            service delivery and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-2 sm:px-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center hover:shadow-md transition"
            >
              <IoMdCheckmarkCircleOutline className="text-blue-600 w-10 h-10 mb-2 sm:mb-4" />
              <h4 className="font-semibold text-gray-800 text-lg">{cert.title}</h4>
              <p className="text-sm text-gray-600">{cert.desc}</p>
              <p className="text-sm text-gray-600">{cert.descs}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-12 bg-white shadow-sm rounded-xl max-w-3xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-blue-600 font-bold text-xl sm:text-2xl">100%</p>
            <p className="text-sm sm:text-base text-gray-600">Regulatory Compliant</p>
          </div>
          <div className="hidden sm:block h-10 border-l border-gray-300"></div>
          <div className="flex flex-col items-center text-center">
            <p className="text-blue-600 font-bold text-xl sm:text-2xl">24/7</p>
            <p className="text-sm sm:text-base text-gray-600">Customer Support</p>
          </div>
          <div className="hidden sm:block h-10 border-l border-gray-300"></div>
          <div className="flex flex-col items-center text-center">
            <p className="text-blue-600 font-bold text-xl sm:text-2xl">256-bit</p>
            <p className="text-sm sm:text-base text-gray-600">SSL Encryption</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
          {/* Testimonial 1 */}
          <div className="bg-[#F9F9F9] rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <FaQuoteLeft className="text-blue-600 text-xl sm:text-2xl" />
            <p className="text-gray-700 text-sm sm:text-base">
              "Bharath Kapital helped me secure a business loan that transformed my company.
              Their professional guidance and quick approval process made all the difference."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Rajesh Kumar</p>
              <p className="text-gray-500 text-xs sm:text-sm">Business Owner</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#F9F9F9] rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <FaQuoteLeft className="text-blue-600 text-xl sm:text-2xl" />
            <p className="text-gray-700 text-sm sm:text-base">
              "Getting our home loan was seamless with their team. They explained everything
              clearly and found us the best rates. Highly recommend their services."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Priya Sharma</p>
              <p className="text-gray-500 text-xs sm:text-sm">Homeowner</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#F9F9F9] rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <FaQuoteLeft className="text-blue-600 text-xl sm:text-2xl" />
            <p className="text-gray-700 text-sm sm:text-base">
              "Bharath Kapital’s expertise gave me the confidence to invest wisely.
              Their team is knowledgeable and approachable."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Amit Patel</p>
              <p className="text-gray-500 text-xs sm:text-sm">Investment Client</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
