import React from "react";
import Navbar from "../components/Navbar";
import goldloanimg from '../assets/services/Goldloan.avif'
import { Footer } from "../components/Footer";

export default function GoldLoan() {
    //const HERO_BG_LEFT = "#0E2A56"; 
    //const HERO_BG_RIGHT = "#F3C64B"; 
    const CONTENT_BG = "#F2F2F2";

    return (

        <>        <Navbar/>
        <main className="min-h-screen w-full bg-gray-300">
            <section className="relative w-full">
                <div
                    className="h-[160px] sm:h-[200px] w-full"
                    style={{
                        backgroundImage: `url('${goldloanimg}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <style>{`
          @keyframes revealClip { from { clip-path: inset(0 100% 0 0); opacity: .25; } to { clip-path: inset(0 0 0 0); opacity: 1; } }
        `}</style>
                <div className="absolute left-1/2 -bottom-12 sm:-bottom-14 -translate-x-1/2 w-[92%] sm:w-[820px]">
                    <div className="absolute -right-2 sm:-right-3 -top-2 sm:-top-3 h-full w-full border-2 border-white/70" />
                    <div className="relative overflow-hidden bg-gray-300 border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-6 sm:px-12 py-6 sm:py-9">
                        <div style={{ animation: "revealClip 1400ms ease 120ms both", willChange: "clip-path, opacity" }}>
                            <h1 className="text-[44px] sm:text-[62px] leading-[1.1] font-normal text-black text-left">Gold Loan</h1>
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
                            A gold loan lets you borrow by pledging gold jewellery/ornaments with the lender. Because the
                            loan is backed by your gold, approval is usually quick and paperwork is minimal compared to
                            unsecured credit.
                        </p>
                    </div>

                    <p className="mt-7 ml-7 text-[17px] font-normal text-black">Here’s an overview of how gold loans typically work:</p>

                    <ol className="mt-4 space-y-4 pl-7 list-decimal text-gray-700 marker:text-gray-800">
                        <li>
                            <p className="text-black font-normal">Secured against gold:</p>
                            The pledged jewellery is valued for purity and weight, and that assessed value determines how much you can borrow.
                        </li>

                        <li>
                            <p className="text-black font-normal">Loan amount:</p>
                            Lenders usually sanction a percentage of the assessed value. Depending on your gold, the amount can range from a few thousand rupees to larger sums.
                        </li>

                        <li>
                            <p className="text-black font-normal">Interest rates:</p>
                            Rates are generally lower than many unsecured loans because collateral is provided. The exact rate can vary by lender, scheme, loan size and market conditions.
                        </li>

                        <li>
                            <p className="text-black font-normal">Loan‑to‑Value (LTV):</p>
                            The LTV indicates what portion of the gold’s market value can be financed (often within regulator/lender caps). A higher LTV means a larger loan for the same gold.
                        </li>

                        <li>
                            <p className="text-black font-normal">Tenure & repayment:</p>
                            Repayment windows are usually short to medium term. Many lenders offer flexible options such as monthly/quarterly EMIs or bullet repayment at the end of tenure.
                        </li>

                        <li>
                            <p className="text-black font-normal">Application & disbursal:</p>
                            Bring your gold for on‑the‑spot evaluation along with basic KYC. After valuation and documentation, the loan is approved and disbursed quickly to your account.
                        </li>

                        <li>
                            <p className="text-black font-normal">Risk of default:</p>
                            If dues aren’t repaid on time, the lender may auction the pledged gold to recover outstanding amounts.
                        </li>

                        <li>
                            <p className="text-black font-normal">Credit checks:</p>
                            Many gold‑loan products have minimal credit‑history requirements since the loan is fully secured by the pledged gold.
                        </li>
                    </ol>
                </div>
            </section>
        </main>
        <Footer/>
        </>

    );
}