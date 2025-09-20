import React from "react";
import { ArrowRight, Star, Shield, Handshake, User } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../assets/hero4.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-10 md:pt-12 lg:pt-16 pb-10 flex justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 w-full overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #D8F0FF 0%, #FFFFFF 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 w-full">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Trusted Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="inline-block mt-4 mb-6 bg-white/20 backdrop-blur-md border border-white/30 
              text-[#3C50E9] text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 
              rounded-full shadow-md"
            >
              ⭐ Trusted by 10,000+ Clients
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight text-gray-900">
              Your Financial <br />
              <span>Future</span>
              <span className="text-[#3C50E9]"> Starts Here</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
              Empowering your financial journey with innovative solutions,
              expert guidance, and personalized services tailored for your
              success.
            </p>

            {/* Buttons */}
            <motion.div
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="flex items-center justify-center gap-2 bg-[#3C50E9] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-blue-700 transition text-sm sm:text-base">
                Get Started Today <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-3 rounded-full border border-blue-600 text-[#3C50E9] hover:bg-blue-100 transition text-sm sm:text-base">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-fit">
              <img
                src={hero}
                alt="Businessman"
                className="max-w-[300px] sm:max-w-xs md:max-w-md lg:max-w-lg w-full h-auto relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 md:py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 w-full">
        <div className="mb-8 md:mb-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Core Values
          </h3>
          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            These principles guide everything we do and ensure we deliver
            exceptional value to our clients.
          </p>
        </div>

        {/* Values Cards with stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#3C50E9] mx-auto mb-4" />,
              title: "Trust & Transparency",
              text: "We believe in complete transparency in all our dealings and maintain the highest standards of integrity in every client relationship.",
            },
            {
              icon: <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#3C50E9] mx-auto mb-4" />,
              title: "Excellence in Service",
              text: "We strive for excellence in every interaction and continuously improve our services to exceed client expectations.",
            },
            {
              icon: <User className="w-8 h-8 sm:w-10 sm:h-10 text-[#3C50E9] mx-auto mb-4" />,
              title: "Client-Centric Approach",
              text: "Every decision we make is centered around our clients' best interests and long-term financial success.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              {card.icon}
              <h4 className="font-semibold text-lg sm:text-xl text-gray-900">
                {card.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
