// import React from "react";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// import { MdAccessTime } from "react-icons/md";
// import { IoPeople } from "react-icons/io5";
// import { LiaCertificateSolid } from "react-icons/lia";
// import { LuHeadset } from "react-icons/lu";
// import { FiTrendingUp } from "react-icons/fi";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div id="about" className="text-gray-800 overflow-hidden">
//       {/* About Section */}
//       <section className="py-12 md:py-16 px-4 sm:px-8 lg:px-16 xl:px-24 w-full grid md:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: false ,amount:"0.3s"}}
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold mb-6 leading-snug">
//             About <span className="text-[#3C50E9]">Bharath Kapital?</span>
//           </h2>
//           <p className="mb-4 text-base sm:text-lg lg:text-xl text-black leading-relaxed">
//             For over a decade, Bharath Kapital has been dedicated to delivering
//             personalized financial solutions that empower individuals and
//             businesses to achieve their dreams with confidence. With ₹2.5Cr+ in
//             assets managed, 10,000+ trusted clients, and a 98% retention rate,
//             our journey reflects the trust, loyalty, and success we’ve built
//             together.
//           </p>
//           <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed">
//             Backed by 10 years of proven expertise, Bharath Kapital continues to
//             stand for transparency, innovation, and client-centricity. As we
//             move forward, our mission remains clear—to guide every client toward
//             financial growth while staying true to our core values of trust and
//             integrity.
//           </p>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           className="flex justify-center"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: false ,amount:"0.3s"}}
//         >
//           <img
//             src="https://contentstatic.timesjobs.com/photo/74902695/slideshows/5-tips-to-prepare-for-group-discussion-rounds.jpg"
//             alt="About Bharath Kapital"
//             className="w-64 sm:w-80 md:w-[400px] lg:w-[450px] h-auto object-cover rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[100px]"
//           />
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <motion.div
//         className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center pb-12 px-4 sm:px-6 lg:px-8"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false ,amount:"0.3s"}}
//         variants={{
//           hidden: {},
//           show: {
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {[
//           { value: "10+", label: "Years Experience" },
//           { value: "₹2.5Cr+", label: "Assets Managed" },
//           { value: "98%", label: "Client Retention Rate" },
//           { value: "10,000+", label: "Clients Satisfied" },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             className="bg-[#EEF4F8] p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//             }}
//           >
//             <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#3C50E9]">
//               {item.value}
//             </h3>
//             <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 mt-2">
//               {item.label}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Why Choose Section */}
//       <section className="py-4 md:py-12 bg-[#f2f2f2]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-center mb-10 leading-snug">
//             Why Choose <span className="text-[#3C50E9]">Bharath Kapital?</span>
//           </h2>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false ,amount:"0.3s"}}
//             variants={{
//               hidden: {},
//               show: {
//                 transition: { staggerChildren: 0.2 },
//               },
//             }}
//           >
//             {[
//               {
//                 img: <VscWorkspaceTrusted />,
//                 title: "Trusted & Secure",
//                 desc: "RBI & SEBI certified with 256-bit SSL to safeguard your data.",
//               },
//               {
//                 img: <MdAccessTime />,
//                 title: "Quick Processing",
//                 desc: "Get approvals within 24–48 hours with minimal paperwork.",
//               },
//               {
//                 img: <IoPeople />,
//                 title: "Expert Advisors",
//                 desc: "Certified planners with 10+ years of experience.",
//               },
//               {
//                 img: <LiaCertificateSolid />,
//                 title: "Best Rates",
//                 desc: "Low interest rates, transparent pricing, no hidden fees.",
//               },
//               {
//                 img: <LuHeadset />,
//                 title: "24/7 Support",
//                 desc: "Always available via phone, email, or chat.",
//               },
//               {
//                 img: <FiTrendingUp />,
//                 title: "Proven Track Record",
//                 desc: "10,000+ clients, ₹2.5Cr+ assets, 98% retention.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center"
//                 variants={{
//                   hidden: { opacity: 0, y: 30 },
//                   show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//                 }}
//               >
//                 <div className="text-[#3C50E9] text-4xl mb-4">{item.img}</div>
//                 <h3 className="font-semibold text-lg sm:text-xl mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        About <span className="text-blue-600">Bharath Kapital?</span>
                    </h2>
                    <p className="mb-4 text-black">
                        For over a decade, Bharath Kapital has been dedicated to delivering
                        personalized financial solutions that empower individuals and
                        businesses to achieve their dreams with confidence. With ₹2.5Cr+ in
                        assets managed, 10,000+ trusted clients, and a 98% retention rate,
                        our journey reflects the trust, loyalty, and success we’ve built
                        together.
                    </p>
                    <p className="text-black">
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
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center pb-12">
                {[
                    { value: "10+", label: "Years Experience" },
                    { value: "₹2.5Cr+", label: "Assets Managed" },
                    { value: "98%", label: "Client Retention Rate" },
                    { value: "10,000+", label: "Clients Satisfied" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-sky-100 p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-bold text-blue-600">{item.value}</h3>
                        <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Why Choose Section */}
            <section className="bg-[#] py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        Why Choose <span className="text-blue-600">Bharath Kapital?</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
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
                                <div className="text-blue-600 text-3xl mb-4 justify-items-center">{item.img}</div>
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;