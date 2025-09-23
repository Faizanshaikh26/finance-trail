import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PersonalLoan() {
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
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661763036649-2c4c70e8a97b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D')",
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
                                    Personal Loan
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
                                From investments to loans, we bring every financial service under one roof — simple, transparent, and reliable.
                            </p>
                        </div>

                        <p className="mt-7 ml-7 text-[17px] font-normal text-black">
                            A personal loan is a type of loan that individuals can borrow from a bank, credit union, or online lender to meet various personal financial needs. Unlike loans for specific purposes such as auto loans or mortgages, personal loans are typically unsecured, meaning they do not require collateral like a car or home to secure the loan.
                        </p>

                        <p className="mt-7 ml-7 text-[17px] font-normal text-black">
                            Here are some key features and details about personal loans:
                        </p>

                        <ol className="mt-4 space-y-4 pl-7 list-decimal text-gray-700 marker:text-gray-800">
                            <li>
                                <p className="text-black font-normal">Purpose:</p>
                                Personal loans can be used for a variety of purposes, including consolidating debt, covering unexpected expenses, financing home improvements, funding vacations, or paying for medical bills.
                            </li>

                            <li>
                                <p className="text-black font-normal">Loan Amounts:</p>
                                Personal loan amounts can vary widely depending on the lender and the borrower's creditworthiness. Typically, lenders offer personal loans ranging from a few hundred to several thousand dollars.
                            </li>

                            <li>
                                <p className="text-black font-normal">Interest Rates:</p>
                                Personal loan interest rates can be fixed or variable and depend on factors such as the borrower's credit score, income, loan amount, and repayment term. Generally, borrowers with higher credit scores qualify for lower interest rates.
                            </li>

                            <li>
                                <p className="text-black font-normal">Repayment Terms:</p>
                                Personal loans have fixed repayment terms, usually ranging from one to seven years. Borrowers repay the loan in monthly installments, which include both principal and interest, until the loan is fully paid off.
                            </li>

                            <li>
                                <p className="text-black font-normal">Credit Requirements:</p>
                                Lenders assess the creditworthiness of borrowers based on their credit history, credit score, income, employment status, and debt-to-income ratio. Borrowers with higher credit scores and stable income are more likely to qualify for lower interest rates and larger loan amounts.
                            </li>

                            <li>
                                <p className="text-black font-normal">Origination Fees:</p>
                                Some lenders may charge origination fees when issuing personal loans. These fees are typically a percentage of the loan amount and are deducted from the loan proceeds. Borrowers should consider origination fees when comparing loan offers from different lenders.
                            </li>

                            <li>
                                <p className="text-black font-normal">Impact on Credit Score:</p>
                                Taking out a personal loan can affect a borrower's credit score. Timely repayment of the loan can positively impact the credit score, while late payments or default can have a negative effect.
                            </li>

                            <li>
                                <p className="text-black font-normal">Prepayment Penalties:</p>
                                Some lenders may charge prepayment penalties if borrowers pay off their personal loans before the end of the loan term. Borrowers should review the loan terms carefully to understand if prepayment penalties apply.
                            </li>
                        </ol>
                    </div>
                </section>
            </main>

            <Footer/>

    
        </>
    );
}