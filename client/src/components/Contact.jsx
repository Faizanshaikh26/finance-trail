import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6">
      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] leading-tight tracking-tight">
          Get In Touch
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl font-medium text-gray-600 leading-relaxed px-2 sm:px-0">
          Take control of your financial future.
          <br className="hidden sm:block" />
          Contact our experts today for a personalized plan to achieve your goals.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="lg:col-span-2 bg-[#F0F6FF] rounded-2xl p-6 sm:p-8 space-y-8 sm:space-y-10">
            {/* Phone */}
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Phone size={20} className="text-[#3B82F6]" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Phone</h3>
              </div>
              <p className="text-gray-600 mt-2 sm:mt-3 ml-7 sm:ml-9 text-sm">
                Call us during business hours
              </p>
              <p className="text-gray-800 mt-1 sm:mt-2 ml-7 sm:ml-9 font-medium">
                ‪+91 9898 911230‬
              </p>
              <p className="text-gray-800 ml-7 sm:ml-9 font-medium">‪+91 81234 98765‬</p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail size={20} className="text-[#3B82F6]" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Email</h3>
              </div>
              <p className="text-gray-600 mt-2 sm:mt-3 ml-7 sm:ml-9 text-sm">
                Send us a message anytime
              </p>
              <p className="text-gray-800 mt-1 sm:mt-2 ml-7 sm:ml-9 font-medium">
                info@bharathkapital12.com
              </p>
              <p className="text-gray-800 ml-7 sm:ml-9 font-medium">
                support@bharathkapital12.com
              </p>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <MapPin size={20} className="text-[#3B82F6]" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Address</h3>
              </div>
              <p className="text-gray-600 mt-2 sm:mt-3 ml-7 sm:ml-9 text-sm">Visit our office</p>
              <p className="text-gray-800 mt-1 sm:mt-2 ml-7 sm:ml-9 font-medium">
                131, Mayur Colony, Kothrud,
                <br /> Pune, Maharashtra 411038
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Clock size={20} className="text-[#3B82F6]" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  Business Hours
                </h3>
              </div>
              <p className="text-gray-800 mt-2 sm:mt-3 ml-7 sm:ml-9 font-medium text-sm sm:text-base">
                <span className="text-gray-600">Monday - Friday :</span> 9.00 AM - 6.00 PM
              </p>
              <p className="text-gray-800 ml-7 sm:ml-9 font-medium text-sm sm:text-base">
                <span className="text-gray-600">Saturday :</span> 9.00 AM - 6.00 PM
              </p>
              <p className="text-gray-600 ml-7 sm:ml-9 font-medium text-sm sm:text-base">
                <span className="text-gray-600">Sunday : <span className="text-black">Closed</span></span>
              </p>
            </div>
          </div>





          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl sm:text-2xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mt-4 sm:mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-500">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form action="#" method="POST" className="mt-6 sm:mt-10 px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900"
                  >
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Enter your full name"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 sm:py-3 px-3 sm:px-4"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900"
                  >
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 sm:py-3 px-3 sm:px-4"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900"
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 sm:py-3 px-3 sm:px-4"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900"
                  >
                    Select a service<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50  text-gray-600 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 sm:py-3 px-3 sm:px-4"
                  >
                    <option className="">Select a service</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Tell us about your financial goals or questions..."
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base py-2.5 sm:py-3 px-3 sm:px-4"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 sm:mt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-lg border border-transparent bg-[#4338CA] 
                  py-2.5 sm:py-3 px-8 sm:px-12 text-sm sm:text-base font-medium text-white shadow-md 
                  hover:bg-[#3730A3] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
