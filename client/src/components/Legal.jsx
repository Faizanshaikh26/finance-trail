import React from "react";
import legal1 from "../assets/legal1.jpg";
import legal2 from "../assets/legal2.jpg";
import certificate from "../assets/IEC Certificate (2).jpg";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const LegalAndCertificatePage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 md:px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800">
          Legal Documents & Certificate
        </h1>

        {/* Legal Documents side by side */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-lg font-medium mb-2 text-gray-700">Legal Document 1</h2>
            <img
              src={legal1}
              alt="Legal Document 1"
              className="w-full rounded-md shadow-md object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-lg font-medium mb-2 text-gray-700">Legal Document 2</h2>
            <img
              src={legal2}
              alt="Legal Document 2"
              className="w-full rounded-md shadow-md object-contain"
            />
          </div>
        </div>

        {/* Certificate Document */}
        <div className="w-full max-w-3xl flex flex-col items-center">
          <h2 className="text-lg font-medium mb-4 text-gray-700">IEC Certificate</h2>
          <img
            src={certificate}
            alt="IEC Certificate"
            className="w-full rounded-md shadow-md object-contain"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LegalAndCertificatePage;
