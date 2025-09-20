import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col items-center py-10 sm:py-16 px-4 sm:px-6" id="contact">

      {/* HEADER */}
      <motion.div
        className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] leading-snug sm:leading-tight">
          Get In Touch
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Take control of your financial future.
          <br className="hidden sm:block" />
          Contact our experts today for a personalized plan to achieve your goals.
        </p>
      </motion.div>

      {/* GRID LAYOUT */}
      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">

          {/* LEFT SIDE: CONTACT INFO */}
          <motion.div
            className="lg:col-span-2 bg-[#F0F6FF] rounded-2xl p-6 sm:p-8 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Phone */}
            <motion.div
              className="hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#3B82F6]" />
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              </div>
              <p className="text-gray-600 mt-2 ml-7 text-sm sm:text-base">Call us during business hours</p>
              <p className="text-gray-800 mt-1 ml-7 font-medium">+91 9898 911230‬</p>
              <p className="text-gray-800 ml-7 font-medium">+91 81234 98765‬</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#3B82F6]" />
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              </div>
              <p className="text-gray-600 mt-2 ml-7 text-sm sm:text-base">Send us a message anytime</p>
              <p className="text-gray-800 mt-1 ml-7 font-medium">info@bharathkapital12.com</p>
              <p className="text-gray-800 ml-7 font-medium">support@bharathkapital12.com</p>
            </motion.div>

            {/* Address */}
            <motion.div
              className="hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-[#3B82F6]" />
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              </div>
              <p className="text-gray-600 mt-2 ml-7 text-sm sm:text-base">Visit our office</p>
              <p className="text-gray-800 mt-1 ml-7 font-medium">
                131, Mayur Colony, Kothrud,
                <br /> Pune, Maharashtra 411038
              </p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-[#3B82F6]" />
                <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
              </div>
              <p className="text-gray-800 mt-2 ml-7 font-medium text-sm sm:text-base">
                <span className="text-gray-600">Mon - Fri :</span> 9.00 AM - 6.00 PM
              </p>
              <p className="text-gray-800 ml-7 font-medium text-sm sm:text-base">
                <span className="text-gray-600">Saturday :</span> 9.00 AM - 6.00 PM
              </p>
              <p className="text-gray-600 ml-7 font-medium text-sm sm:text-base">
                <span className="text-gray-600">Sunday : <span className="text-black">Closed</span></span>
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form action="#" method="POST" className="mt-6 sm:mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm sm:text-base font-semibold text-gray-900">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Enter your full name"
                    className="mt-2 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 px-3"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-900">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-2 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 px-3"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-900">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-2 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 px-3"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm sm:text-base font-semibold text-gray-900">
                    Select a Service<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    className="mt-2 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-600 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 px-3"
                  >
                    <option>Select a service</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-gray-900">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us about your financial goals..."
                    className="mt-2 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 px-3"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <motion.button
                  type="submit"
                  className="inline-flex justify-center rounded-lg bg-[#4338CA] py-2.5 sm:py-3 px-8 sm:px-12 
                  text-sm sm:text-base font-medium text-white shadow-md hover:bg-[#3730A3] 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
