import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import privateFinance from '../assets/services/Privatefinance.avif'
import { Footer } from "../components/Footer";

export default function PrivateFinance() {
    const HERO_BG_LEFT = "#0E2A56";
    const HERO_BG_RIGHT = "#F3C64B";
    const CONTENT_BG = "#F2F2F2";

    return (

        <>        <Navbar/>
        <main className="min-h-screen w-full bg-gray-300">
            <section className="relative w-full">
             <div
                                              className="h-[160px] sm:h-[200px] w-full"
                                              style={{
                                                  backgroundImage: `url('${privateFinance}')`,
                                                  backgroundSize: "cover",
                                                  backgroundPosition: "center",
                                              }}
                                          />
                <style>{`
          /* Card stays fixed. Its CONTENT reveals via clip-path so motion never leaks outside */
          @keyframes revealClip { from { clip-path: inset(0 100% 0 0); opacity: .2; } to { clip-path: inset(0 0 0 0); opacity: 1; } }
        `}</style>
                <div className="absolute left-1/2 -bottom-12 sm:-bottom-14 -translate-x-1/2 w-[92%] sm:w-[820px]">
                    <div className="absolute -right-2 sm:-right-3 -top-2 sm:-top-3 h-full w-full border-2 border-white/70" />
                    <div className="relative overflow-hidden bg-gray-300 border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-6 sm:px-12 py-6 sm:py-9">
                        <div style={{ animation: "revealClip 1600ms ease 150ms both", willChange: "clip-path, opacity" }}>
                            <h1 className="text-[44px] sm:text-[62px] leading-[1.1] font-normal text-black text-left">
                                Private Finance
                            </h1>
                        </div>
                    </div>

                    <div className="mx-auto w-[94%] h-[3px] bg-white/80" />
                </div>
            </section>

            <section className="w-full" style={{ backgroundColor: CONTENT_BG }}>
                <div className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 sm:pt-28 pb-16">
                    <div className="flex items-start gap-6">
                        <span className="mt-[14px] inline-block h-[3px] w-35 rounded-full bg-[#1F3264]" />
                        <p className="text-[16.5px] leading-8 text-gray-700">
                            Private finance refers to the management of personal or household
                            finances by individuals or families. It involves planning,
                            budgeting, saving, investing, borrowing, and managing financial
                            resources to achieve specific financial goals and objectives.
                        </p>
                    </div>

                    <p className="mt-7 ml-7 text-[17px] font-normal text-black">
                        Key aspects of private finance include:
                    </p>

                    <ol className="mt-4 space-y-4 pl-7 list-decimal text-gray-700 marker:text-gray-800">
                        <li>
                            <p className="text-black font-normal">Budgeting:</p>
                            Creating a budget involves estimating income and expenses to allocate resources effectively. Budgeting helps individuals track spending, prioritize expenses, and ensure financial discipline.
                        </li>

                        <li>
                            <p className="text-black font-normal">Saving:</p>
                            Saving involves setting aside a portion of income for future needs or emergencies. Saving habits contribute to financial security and provide a cushion for unexpected expenses or life events.
                        </li>

                        <li>
                            <p className="text-black font-normal">Investing:</p>
                            Investing involves allocating savings into various financial assets such as stocks, bonds, mutual funds, real estate, or retirement accounts. Investing aims to generate returns over time and build wealth for long-term financial goals such as retirement, education, or homeownership.
                        </li>

                        <li>
                            <p className="text-black font-normal">Debt Management:</p>
                            Managing debt involves responsibly borrowing money and repaying debts in a timely manner. It’s essential to understand interest rates, repayment terms, and the impact of debt on overall financial health.
                        </li>

                        <li>
                            <p className="text-black font-normal">Risk Management:</p>
                            Risk management involves assessing and mitigating potential financial risks such as job loss, illness, or market fluctuations. Strategies may include maintaining insurance coverage, building emergency funds, and diversifying investments.
                        </li>

                        <li>
                            <p className="text-black font-normal">Financial Planning:</p>
                            Financial planning involves setting short-term and long-term financial goals, identifying strategies to achieve them, and monitoring progress over time. Financial planning considers factors such as income, expenses, assets, liabilities, and risk tolerance.
                        </li>

                        <li>
                            <p className="text-black font-normal">Tax Planning:</p>
                            Tax planning involves optimizing tax efficiency by taking advantage of deductions, credits, and tax-advantaged investment accounts. Understanding tax laws and implementing tax-efficient strategies can help minimize tax liabilities and maximize after-tax income.
                        </li>

                        <li>
                            <p className="text-black font-normal">Estate Planning:</p>
                            Estate planning involves arranging the transfer of assets and wealth to heirs or beneficiaries in a tax-efficient and orderly manner. Estate planning may include creating wills, trusts, and powers of attorney to ensure the fulfillment of one’s wishes and protect family financial interests.
                        </li>
                    </ol>
                </div>
            </section>
        </main>
   <Footer/>

        </>
    );
}