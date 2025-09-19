import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdAccessTime } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuHeadset } from "react-icons/lu";
import { FiTrendingUp } from "react-icons/fi";

const About = () => {
    return (
        <div className=" text-gray-800">
            {/* About Section */}
            <section className=" py-12 md:py-16  px-4 sm:px-32  lg:px-44 w-full grid md:grid-cols-2 gap-6
       items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-2xl md:text-[50px] font-bold mb-4">
                        About <span className="text-[#3C50E9]">Bharath Kapital?</span>
                    </h2>
                    <p className="mb-4 text-black  text-xl ">
                        For over a decade, Bharath Kapital has been dedicated to delivering
                        personalized financial solutions that empower individuals and
                        businesses to achieve their dreams with confidence. With ₹2.5Cr+ in
                        assets managed, 10,000+ trusted clients, and a 98% retention rate,
                        our journey reflects the trust, loyalty, and success we’ve built
                        together.
                    </p>
                    <p className="text-black md:text-xl">
                        Backed by 10 years of proven expertise, Bharath Kapital continues to
                        stand for transparency, innovation, and client-centricity. As we move
                        forward, our mission remains clear—to guide every client toward
                        financial growth while staying true to our core values of trust and
                        integrity.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="https://contentstatic.timesjobs.com/photo/74902695/slideshows/5-tips-to-prepare-for-group-discussion-rounds.jpg"
                        alt="About Bharath Kapital"
                        className="w-80 h-100 object-cover rounded-bl-[100px]"
                    />
                </div>
            </section>

            {/* Stats */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-[64px] text-center pb-12">
                {[
                    { value: "10+", label: "Years Experience" },
                    { value: "₹2.5Cr+", label: "Assets Managed" },
                    { value: "98%", label: "Client Retention Rate" },
                    { value: "10,000+", label: "Clients Satisfied" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#EEF4F8] p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-[40px] font-bold text-[#3C50E9]">{item.value}</h3>
                        <p className="text-[18px] font-semibold text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Why Choose Section */}
            <section className=" py-4 md:py-10 bg-[#f2f2f2]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-[50px] font-bold text-center mb-10">
                        Why Choose <span className="text-[#3C50E9]">Bharath Kapital?</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[60px] text-center">
                        {[
                            {
                                img: <VscWorkspaceTrusted />,
                                title: "Trusted & Secure",
                                desc: "RBI & SEBI certified with 256-bit SSL to safeguard your data.",
                            },
                            {
                                img: <MdAccessTime />,
                                title: "Quick Processing",
                                desc: "Get approvals within 24–48 hours with minimal paperwork.",
                            },
                            {
                                img: <IoPeople />,
                                title: "Expert Advisors",
                                desc: "Certified planners with 10+ years of experience.",
                            },
                            {
                                img: <LiaCertificateSolid />,
                                title: "Best Rates",
                                desc: "Low interest rates, transparent pricing, no hidden fees.",
                            },
                            {
                                img: <LuHeadset />,
                                title: "24/7 Support",
                                desc: "Always available via phone, email, or chat.",
                            },
                            {
                                img: <FiTrendingUp />,
                                title: "Proven Track Record",
                                desc: "10,000+ clients, ₹2.5Cr+ assets, 98% retention.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center"
                            >
                                <div className="text-[#3C50E9] text-4xl mb-4 justify-items-center">{item.img}</div>
                                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;