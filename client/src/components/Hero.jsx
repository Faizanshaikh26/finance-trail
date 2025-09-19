import React from "react";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Shield, Handshake, User } from "lucide-react";
import hero from "../assets/hero2.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=" md:pt-40 pb-10 flex justify-center px-4 sm:px-32  lg:px-44 w-full  " style={{
        background: "linear-gradient(180deg, #D8F0FF 0%, #FFFFFF 100%)"

    }}>
        <div className="flex flex-col md:flex-row items-start gap-12 w-full ">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Trusted Badge */}
            <div className="inline-block mt-4 md:mt-0 :mb-6 bg-white border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1 rounded-full shadow-sm">
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
<div className="flex-1 flex justify-center items-center">
  <div className="relative w-fit">
    {/* Main Image */}
    <img
      src={hero}
      alt="Businessman"
      className="max-w-[250px] sm:max-w-sm md:max-w-lg w-full h-auto relative z-10"
    />


<div className="hidden md:block">
<div className="absolute top-[30%] z-20 left-2 sm:left-12 bg-white rounded-xl shadow-md px-3 sm:px-4 py-2 sm:py-3 min-w-[140px]">
      <p className="text-green-600 font-semibold text-sm sm:text-base">
        + ₹15,000
      </p>
      <p className="text-gray-600 text-xs sm:text-sm">Received from Rajesh</p>
    </div>

    {/* Card 2 - Balance */}
    <div className="absolute top-[50%] z-20  sm:left-24 bg-white rounded-xl shadow-md px-3 sm:px-  min-w-[120px]">
      <p className="text-gray-600 text-xs sm:text-sm">Your Balance</p>
      <p className="text-green-600 font-semibold text-sm sm:text-base">
        ₹ 2,50,000
      </p>
    </div>

    {/* Card 3 - Status with Chart */}
    <div className="absolute top-[120px] z-30 right-2 sm:right-[-40px] bg-white rounded-xl shadow-md px-3 sm:px-4 py-2 sm:py-3 min-w-[150px]">
      <p className="text-gray-600 text-xs sm:text-sm mb-1">Status</p>
      <img
        src="https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5],datasets:[{data:[10,20,15,25,30],borderColor:'red',fill:false}]}}"
        alt="status chart"
        className="w-full h-12 sm:h-14 object-cover"
      />
    </div>

    {/* Card 4 - Balance with Bar Chart */}
    <div className="absolute -bottom-[1px] right-0 z-20 sm:right-[30px] bg-white rounded-xl shadow-md px-3 sm:px-4 py-2 sm:py-3 min-w-[180px]">
      <p className="text-gray-600 text-xs sm:text-sm">Your Balance</p>
      <p className="text-green-600 font-semibold text-sm sm:text-base">
        ₹ 2,50,000 + 15%
      </p>
      <img
        src="https://quickchart.io/chart?c={type:'bar',data:{labels:['S','M','T','W','T','F','S'],datasets:[{data:[50,100,80,200,150,90,120],backgroundColor:'blue'}]}}"
        alt="bar chart"
        className="w-full h-16 sm:h-14 object-cover mt-2"
      />
    </div>
</div>
    {/* Card 1 - Transaction */}
    
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
      <section className="  px-4 sm:px-32  lg:px-44 w-full">
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
