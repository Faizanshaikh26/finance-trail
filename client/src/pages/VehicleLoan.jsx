import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

import VehicleLoanimg from '../assets/services/Vehicleloan.avif'
import { Footer } from "../components/Footer";
export default function VehicleLoan() {
    const HERO_BG_LEFT = "#0E2A56";
    const HERO_BG_RIGHT = "#F3C64B";
    const CONTENT_BG = "#F2F2F2";

    return (

        <>   
        <Navbar/>
             <main className="min-h-screen w-full bg-gray-300">
            <section className="relative w-full">
                 <div
                                                             className="h-[160px] sm:h-[200px] w-full"
                                                             style={{
                                                                 backgroundImage: `url('${VehicleLoanimg}')`,
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
                                Vehicle Loan
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
                            A vehicle loan, also known as an auto loan or car loan, is a type of financing used to
                            purchase a vehicle, such as a car, truck, SUV, or motorcycle. It allows individuals to
                            borrow money from a lender to cover the cost of the vehicle, which is then repaid over a
                            specified period with interest.
                        </p>
                    </div>

                    <p className="mt-7 ml-7 text-[17px] font-normal text-black">
                        Here&apos;s an overview of vehicle loans:
                    </p>

                    <ol className="mt-4 space-y-4 pl-7 list-decimal text-gray-700 marker:text-gray-800">
                        <li>
                            <p className="text-black font-normal">Types of Vehicle Loans:</p>
                            <ul className="mt-2 list-[circle] pl-6 space-y-1">
                                <li>
                                    <span className="font-normal">New Car Loans:</span> These loans are used to finance the purchase of brand-new vehicles from dealerships.
                                </li>
                                <li>
                                    <span className="font-normal">Used Car Loans:</span> Used car loans are for purchasing pre-owned vehicles, which may be obtained from dealerships or private sellers.
                                </li>
                                <li>
                                    <span className="font-normal">Refinancing:</span> Borrowers may also refinance existing vehicle loans to secure better terms, lower interest rates, or adjust repayment schedules.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p className="text-black font-normal">Loan Amounts:</p>
                            The amount of money that can be borrowed for a vehicle loan depends on factors such as the vehicle&apos;s purchase price, the borrower&apos;s creditworthiness, income, and down payment amount. Lenders typically offer loans ranging from a few thousand to tens of thousands of dollars.
                        </li>

                        <li>
                            <p className="text-black font-normal">Interest Rates:</p>
                            Vehicle loan interest rates can be fixed or variable and depend on factors such as the borrower&apos;s credit score, loan term, and prevailing market conditions. Borrowers with higher credit scores generally qualify for lower interest rates.
                        </li>

                        <li>
                            <p className="text-black font-normal">Loan Term:</p>
                            Vehicle loans have fixed repayment terms, typically ranging from 24 to 84 months (2 to 7 years). Longer loan terms result in lower monthly payments but may result in paying more interest over the life of the loan.
                        </li>

                        <li>
                            <p className="text-black font-normal">Down Payment:</p>
                            Lenders often require borrowers to make a down payment towards the purchase price of the vehicle. The down payment reduces the amount borrowed and may also influence the interest rate and loan terms.
                        </li>

                        <li>
                            <p className="text-black font-normal">Secured Loans:</p>
                            Vehicle loans are typically secured by the vehicle being purchased. If the borrower defaults on the loan, the lender may repossess the vehicle to recover the outstanding debt.
                        </li>

                        <li>
                            <p className="text-black font-normal">Credit Requirements:</p>
                            Lenders assess the creditworthiness of borrowers based on factors such as credit history, credit score, income, employment status, and debt-to-income ratio. Borrowers with higher credit scores are more likely to qualify for lower interest rates and better loan terms.
                        </li>

                        <li>
                            <p className="text-black font-normal">Loan Application Process:</p>
                            To apply for a vehicle loan, borrowers typically submit an application to a lender, which includes personal and financial information. Lenders review the application, perform credit checks, and may require additional documentation before approving the loan.
                        </li>

                        <li>
                            <p className="text-black font-normal">Insurance Requirements:</p>
                            Lenders often require borrowers to obtain comprehensive insurance coverage for the vehicle to protect against damage, theft, or accidents during the loan term.
                        </li>

                        <li>
                            <p className="text-black font-normal">Repayment:</p>
                            Borrowers repay vehicle loans in monthly installments, which include both principal and interest, until the loan is fully paid off. It&apos;s important to make timely payments to avoid default and potential repossession of the vehicle.
                        </li>
                    </ol>
                </div>
            </section>
        </main>

        <Footer/>
        </>

    );
}