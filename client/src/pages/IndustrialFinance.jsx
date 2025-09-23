import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

import industryfinanceimg from '../assets/services/Industrialfinance.avif'
import { Footer } from "../components/Footer";

export default function IndustrialFinance() {
    const HERO_BG_LEFT = "#0E2A56";
    const HERO_BG_RIGHT = "#F3C64B";
    const CONTENT_BG = "#F2F2F2";

    return (

        <>   

        <Navbar/>
             <main className="min-h-screen w-full bg-gray-300">
            {/* Hero Section */}
            <section className="relative w-full">
               <div
                                  className="h-[160px] sm:h-[200px] w-full"
                                  style={{
                                      backgroundImage: `url('${industryfinanceimg}')`,
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                  }}
                              />
                <style>{`
          @keyframes revealClip { from { clip-path: inset(0 100% 0 0); opacity: .2; } to { clip-path: inset(0 0 0 0); opacity: 1; } }
        `}</style>
                <div className="absolute left-1/2 -bottom-12 sm:-bottom-14 -translate-x-1/2 w-[92%] sm:w-[820px]">
                    <div className="absolute -right-2 sm:-right-3 -top-2 sm:-top-3 h-full w-full border-2 border-white/70" />
                    <div className="relative overflow-hidden bg-gray-300 border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-6 sm:px-12 py-6 sm:py-9">
                        <div style={{ animation: "revealClip 1600ms ease 150ms both", willChange: "clip-path, opacity" }}>
                            <h1 className="text-[44px] sm:text-[62px] leading-[1.1] font-normal text-black text-left">
                                Industrial Finance
                            </h1>
                        </div>
                    </div>

                    {/* Horizontal bar under hero card */}
                    <div className="mx-auto w-[94%] h-[3px] bg-white/80" />
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full" style={{ backgroundColor: CONTENT_BG }}>
                <div className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 sm:pt-28 pb-16">
                    {/* Top line like in Loan component */}
                    <div className="flex items-start gap-6">
                        <span className="mt-[14px] inline-block h-[3px] w-35 rounded-full bg-[#1F3264]" />
                        <p className="text-[16.5px] leading-8 text-gray-700">
                            Industrial finance refers to the specialized branch of finance that focuses on providing funding and financial services to industrial businesses and projects. It involves assessing the financial needs of industrial enterprises, analyzing their viability, and structuring financing solutions to support their operations, expansions, or strategic initiatives.
                        </p>
                    </div>

                    <p className="mt-7 ml-7 text-[17px] font-normal text-black">
                        Key aspects of industrial finance include:
                    </p>

                    <ol className="mt-4 space-y-4 pl-7 list-decimal text-gray-700 marker:text-gray-800">
                        <li>
                            <span className="font-normal">Capital Investment:</span> Industrial finance involves funding capital-intensive projects such as the construction of manufacturing plants, acquisition of machinery and equipment, and development of infrastructure necessary for industrial operations.
                        </li>
                        <li>
                            <span className="font-normal">Risk Assessment:</span> Industrial finance requires evaluating the financial risks associated with industrial ventures, including market volatility, technological obsolescence, regulatory changes, and operational risks. Mitigating these risks often involves thorough due diligence and the implementation of risk management strategies.
                        </li>
                        <li>
                            <span className="font-normal">Debt and Equity Financing:</span> Industrial finance encompasses various financing options, including debt financing (such as bank loans, bonds, and credit lines) and equity financing (such as venture capital, private equity, and public offerings). The choice between debt and equity financing depends on factors such as the company's capital structure, risk profile, and growth objectives.
                        </li>
                        <li>
                            <span className="font-normal">Project Finance:</span> Industrial finance frequently involves project finance, a structured financing technique used to fund large-scale industrial projects with long gestation periods and significant capital requirements. Project finance typically involves a consortium of lenders and investors who provide funding based on the project's cash flow and assets, rather than the creditworthiness of the sponsoring company.
                        </li>
                        <li>
                            <span className="font-normal">Financial Engineering:</span> Industrial finance often requires financial engineering to design innovative financing structures that meet the specific needs of industrial projects. This may include incorporating financial instruments such as leasing, securitization, derivatives, and off-balance-sheet financing to optimize capital efficiency and risk management.
                        </li>
                        <li>
                            <span className="font-normal">Government Support:</span> Industrial finance may involve leveraging government incentives, subsidies, grants, and loan programs aimed at promoting industrial development, fostering innovation, and enhancing competitiveness in key sectors of the economy.
                        </li>
                        <li>
                            <span className="font-normal">Overall Role:</span> Industrial finance plays a critical role in facilitating investment, innovation, and economic growth within the industrial sector by providing the necessary financial resources and expertise to support industrial enterprises and projects.
                        </li>
                    </ol>
                </div>
            </section>
        </main>

   <Footer/>

        </>

    );
}