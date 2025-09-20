import React from "react";
import { ArrowRight, Star, Shield, Handshake, User } from "lucide-react";
import hero from "../assets/hero4.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home"
        className="pt-10 md:pt-12 lg:pt-16 pb-10 flex justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 w-full"
        style={{
          background: "linear-gradient(180deg, #D8F0FF 0%, #FFFFFF 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 w-full">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Trusted Badge */}
           <div className="inline-block mt-4 mb-6 
  bg-white/20 backdrop-blur-md border border-white/30 
  text-[#3C50E9] text-xs sm:text-sm font-medium 
  px-3 sm:px-4 py-1 
  rounded-full shadow-md">
  ⭐ Trusted by 10,000+ Clients
</div>


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
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-[#3C50E9] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-blue-700 transition text-sm sm:text-base">
                Get Started Today <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-3 rounded-full border border-blue-600 text-[#3C50E9] hover:bg-blue-100 transition text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image with Floating Cards */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-fit">
              {/* Main Image */}
              <img
                src={hero}
                alt="Businessman"
                className="max-w-[300px] sm:max-w-xs md:max-w-md lg:max-w-lg w-full h-auto relative z-10"
              />

        
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Clients Section */}
      <section className="py-10 md:py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 w-full">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by 10,000+ Clients
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto md:mx-0">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience with Bharath Kapital.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-10 lg:gap-12 mb-10">
          {/* Rating */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="bg-[#3C50E9] text-white font-bold rounded-full w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] flex items-center justify-center">
              4.9
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#3C50E9] fill-blue-600 mx-0.5"
                  />
                ))}
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-1">
                Client Rating
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              10+
            </p>
            <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
          </div>

          {/* Retention */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              98%
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Client Retention Rate
            </p>
          </div>
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

        {/* Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {/* Card 1 */}
          <div className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#3C50E9] mx-auto mb-4" />
            <h4 className="font-semibold text-lg sm:text-xl text-gray-900">
              Trust & Transparency
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              We believe in complete transparency in all our dealings and
              maintain the highest standards of integrity in every client
              relationship.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition">
            <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#3C50E9] mx-auto mb-4" />
            <h4 className="font-semibold text-lg sm:text-xl text-gray-900">
              Excellence in Service
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              We strive for excellence in every interaction and continuously
              improve our services to exceed client expectations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-[#3C50E9] mx-auto mb-4" />
            <h4 className="font-semibold text-lg sm:text-xl text-gray-900">
              Client-Centric Approach
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Every decision we make is centered around our clients' best
              interests and long-term financial success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
