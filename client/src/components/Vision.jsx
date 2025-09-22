import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const Vision = () => {
  const certifications = [
    { title: "RBI Registered", desc: "Licensed Financial", descs: "Services Provider" },
    { title: "SEBI Certified", desc: "Licensed Financial", descs: "Services Provider" },
    { title: "IRDA Approved", desc: "Licensed Financial", descs: "Services Provider" },
    { title: "ISO 27001", desc: "Licensed Financial", descs: "Services Provider" },
  ];

  return (
    <div className="text-gray-800 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 py-10 w-full" id="vision">
      {/* Vision & Mission */}
      <section className="mb-20">
        <div className="mb-10 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-snug"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our Vision & Mission
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg xl:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Guided by our core values and commitment to excellence in financial services.
          </motion.p>
        </div>

        {/* Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg"
              alt="Our Vision"
              className="w-full max-w-[500px] h-auto object-cover rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="mb-4  text-lg sm:text-xl md:text-2xl font-bold  text-center md:text-left">
              Our Vision
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg xl:text-lg leading-relaxed text-center md:text-left">
              To be the most trusted financial partner, empowering individuals and businesses
              to achieve their financial aspirations through innovative, personalized solutions
              and unwavering commitment to their success.
            </p>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="mb-4 text-lg sm:text-xl md:text-2xl font-bold  text-center md:text-left">
              Our Mission
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg xl:text-lg leading-relaxed text-center md:text-left">
              To deliver exceptional financial services with integrity, transparency, and
              expertise, building lasting relationships while helping our clients navigate
              their financial journey with confidence and peace of mind.
            </p>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.aZ1L5nsDnvBAFC0k2JZ4igHaF0?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Our Mission"
              className="w-full max-w-[500px] h-auto object-cover rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F9F9F9] sm:py-10 rounded-2xl">
        <div className="text-center mb-10 px-4 sm:px-6">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Certifications and Compliance
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our certifications ensure that we meet the highest standards of financial
            service delivery and regulatory compliance.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-2 sm:px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col items-center hover:shadow-md transition"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 1 } },
              }}
            >
              <IoMdCheckmarkCircleOutline className="text-[#3C50E9] w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4" />
              <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{cert.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600">{cert.desc}</p>
              <p className="text-xs sm:text-sm text-gray-600">{cert.descs}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12">
          What Our Clients Say
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
        >
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="bg-[#F9F9F9] rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col gap-3 sm:gap-4"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1 } } }}
            >
              <FaQuoteLeft className="text-[#3C50E9] text-2xl sm:text-4xl md:text-5xl" />
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                {
                  [
                    "Bharath Kapital helped me secure a business loan that transformed my company. Their professional guidance and quick approval process made all the difference.",
                    "Getting our home loan was seamless with their team. They explained everything clearly and found us the best rates. Highly recommend their services.",
                    "Bharath Kapital’s expertise gave me the confidence to invest wisely. Their team is knowledgeable and approachable.",
                  ][i]
                }
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {["Rajesh Kumar", "Priya Sharma", "Amit Patel"][i]}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {["Business Owner", "Homeowner", "Investment Client"][i]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Vision;
