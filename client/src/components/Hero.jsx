import React from "react";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Shield, Handshake, User } from "lucide-react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=" md:py-16 flex justify-center px-4 sm:px-32  lg:px-44 w-full  " style={{
        background: "linear-gradient(180deg, #D8F0FF 0%, #FFFFFF 100%)"

    }}>
        <div className="flex flex-col md:flex-row items-start gap-12 w-full ">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Trusted Badge */}
            <div className="inline-block mb-6 bg-white border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1 rounded-full shadow-sm">
              ⭐ Trusted by 10,000+ Clients
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Your Financial <br />
              <span className="text-blue-600">Future Starts Here</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              Empowering your financial journey with innovative solutions, expert
              guidance, and personalized services tailored for your success.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
                Get Started Today <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image with Floating Cards */}
          <div className="flex-1 relative flex justify-center">
            <img
              src={hero}
              alt="Businessman"
              className="max-w-[250px] sm:max-w-sm md:max-w-lg w-full h-auto"
            />

            {/* Floating Card - Balance */}
            <div className="absolute top-6 sm:top-10 left-6 sm:left-[120px] bg-white text-center w-[110px] sm:w-[140px] rounded-xl shadow-md text-xs sm:text-sm py-2">
              <p className="text-gray-600">Your Balance</p>
              <p className="text-green-600 font-semibold">2,50,000</p>
            </div>

            {/* Floating Card - Status */}
            <div className="absolute bottom-6 sm:top-[180px] right-6 sm:right-[90px] bg-white flex flex-col items-center justify-center w-[100px] sm:w-[130px] h-[50px] sm:h-[60px] rounded-full shadow-md text-xs sm:text-sm">
              <p className="text-gray-700 font-medium">Status</p>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Clients Section */}
      <section className="  md:py-16  px-4 sm:px-32  lg:px-44 w-full">
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by 10,000+ Clients
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto md:mx-0">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience with Bharath Kapital.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8 sm:gap-12 mb-12">
          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white font-bold rounded-full w-[48px] h-[48px] flex items-center justify-center">
              4.9
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 fill-blue-600 mx-0.5"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Client Rating
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">10+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>

          {/* Retention */}
          <div className="text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">98%</p>
            <p className="text-sm text-gray-600">Client Retention Rate</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="  md:py-16  px-4 sm:px-32  lg:px-44 w-full">
        <div className="mb-10 sm:mb-12 text-center ">
          <h3 className="text-xl sm:text-2xl md:text-4xl py- font-bold text-gray-900">
            Our Core Values
          </h3>
          <p className="text-gray-600 mt-3 text-base sm:text-xl  md:mx-0">
            These principles guide everything we do and ensure we deliver
            exceptional value to our clients.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {/* Card 1 */}
          <div className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-gray-900">
              Trust & Transparency
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              We believe in complete transparency in all our dealings and
              maintain the highest standards of integrity in every client
              relationship.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition">
            <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-gray-900">
              Excellence in Service
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              We strive for excellence in every interaction and continuously
              improve our services to exceed client expectations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl w-full max-w-sm bg-white border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-gray-900">
              Client-Centric Approach
            </h4>
            <p className="text-sm text-gray-600 mt-2">
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
