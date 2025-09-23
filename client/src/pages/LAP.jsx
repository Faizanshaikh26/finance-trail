import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import lapimg from '../assets/services/Loanaproperty.avif'
import { Footer } from "../components/Footer";

export default function LAP() {
    const HERO_BG_LEFT = "#0E2A56";
    const HERO_BG_RIGHT = "#F3C64B";
    const CONTENT_BG = "#F2F2F2";
    const HEADING_COLOR = "#1F3264"; 

    return (

        <>
        <Navbar/>


                <main className="min-h-screen w-full bg-gray-300">
            <section className="relative w-full">
              <div
                                 className="h-[160px] sm:h-[200px] w-full"
                                 style={{
                                     backgroundImage: `url('${lapimg}')`,
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
                                Loan Against Property (LAP)
                            </h1>
                        </div>
                    </div>

                    <div className="mx-auto w-[94%] h-[3px] bg-white/80" />
                </div>
            </section>

            <section className="w-full" style={{ backgroundColor: CONTENT_BG }}>
                <div className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 sm:pt-28 pb-16">
                    {/* What is Loan Against Property */}
                    <div className="mt-6">
                        <h2 style={{ color: HEADING_COLOR }} className="text-[20px] font-semibold">What is Loan Against Property?</h2>
                        <p className="mt-4 text-[17px] text-gray-700">
                            A Loan Against Property (LAP) allows you to unlock the hidden value of your residential, commercial, or industrial property. Instead of selling your property, you can mortgage it and avail funds for business expansion, personal needs, or debt consolidation at attractive interest rates.
                        </p>
                    </div>

                    {/* Features of LAP at BharathKapital */}
                    <div className="mt-8">
                        <h2 style={{ color: HEADING_COLOR }} className="text-[20px] font-semibold">Features of LAP at BharathKapital</h2>
                        <ul className="mt-4 space-y-4 pl-7 list-decimal text-gray-700">
                            <li><strong>High Loan Amounts:</strong> Get up to 60–70% of your property’s market value.</li>
                            <li><strong>Quick Approvals:</strong> Fast processing with minimal paperwork.</li>
                            <li><strong>Flexible Usage:</strong> Use funds for business, education, wedding, or emergencies.</li>
                            <li><strong>Lower Interest Rates:</strong> More affordable compared to personal loans.</li>
                            <li><strong>Flexible Tenure:</strong> Repayment options ranging from 5 to 15 years.</li>
                            <li><strong>Safe & Secure:</strong> Your property remains in your name; only pledged as security.</li>
                        </ul>
                    </div>

                    {/* Eligibility Criteria */}
                    <div className="mt-8">
                        <h2 style={{ color: HEADING_COLOR }} className="text-[20px] font-semibold">Eligibility Criteria</h2>
                        <ul className="mt-4 space-y-2 pl-7 list-disc text-gray-700">
                            <li>Salaried individuals with a stable income.</li>
                            <li>Self-employed professionals, traders, and entrepreneurs.</li>
                            <li>Property owners with clear ownership documents.</li>
                        </ul>
                    </div>

                    {/* Documents Required */}
                    <div className="mt-8">
                        <h2 style={{ color: HEADING_COLOR }} className="text-[20px] font-semibold">Documents Required</h2>
                        <p className="mt-4 font-semibold text-black">For Individuals:</p>
                        <ul className="mt-4 space-y-2 pl-7 list-disc text-gray-700">
                            <li>Identity Proof (Aadhaar, PAN, Passport, Voter ID)</li>
                            <li>Address Proof (Utility Bill, Aadhaar, Passport)</li>
                            <li>Income Proof (Salary slips, ITR, Bank statements)</li>
                            <li>Property Documents (Title deed, tax receipts, NOC)</li>
                        </ul>

                        <p className="mt-4 font-semibold text-black">For Businesses:</p>
                        <ul className="mt-4 space-y-2 pl-7 list-disc text-gray-700">
                            <li>Business Registration / GST Certificate</li>
                            <li>Audited Financial Statements</li>
                            <li>Bank Statements (last 6–12 months)</li>
                            <li>Property Ownership Papers</li>
                        </ul>
                    </div>

                    {/* How to Apply */}
                    <div className="mt-8">
                        <h2 style={{ color: HEADING_COLOR }} className="text-[20px] font-semibold">How to Apply?</h2>
                        <ol className="mt-4 space-y-4 pl-7 list-decimal text-gray-700 marker:text-gray-800">
                            <li><strong>Submit Application:</strong> Fill our online form or visit our branch.</li>
                            <li><strong>Property Evaluation:</strong> Our experts assess your property value.</li>
                            <li><strong>Document Verification:</strong> Simple and hassle-free paperwork.</li>
                            <li><strong>Approval & Disbursal:</strong> Get funds quickly into your bank account.</li>
                        </ol>
                    </div>

                    {/* Why Choose BharathKapital for LAP? */}
                    <div className="mt-8">
                        <h2 style={{ color: HEADING_COLOR }} className="text-[20px] font-semibold">Why Choose BharathKapital for LAP?</h2>
                        <ul className="mt-4 space-y-2 pl-7 list-disc text-gray-700">
                            <li>Trusted by individuals & businesses across India.</li>
                            <li>Transparent process with no hidden charges.</li>
                            <li>Expert property valuation for maximum loan eligibility.</li>
                            <li>Personalized guidance throughout the loan journey.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
<Footer/>
        </>

    );
}