import React from "react";
import {
  Home,
  Building2,
  User,
  TrendingUp,
  Shield,
  PiggyBank,
  Search,
  Banknote,
  FileText,
  FileCheck,
  CheckCircle,
  Wallet,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  { icon: User, title: "Personal Loans", description: "Instant personal funds with easy paperwork and quick disbursal.", path: "/services/personal-loan" },
  { icon: Building2, title: "Industrial Finance", description: "Financial solutions tailored for industries to scale operations efficiently.", path: "/services/industrial-finance" },
  { icon: Shield, title: "Private Finance", description: "Flexible and reliable private financing options for urgent needs.", path: "/services/private-finance" },
  { icon: Home, title: "Loan Against Property (LAP)", description: "Unlock the value of your property to access larger funds at lower interest rates.", path: "/services/loan-against-property" },
  { icon: Car, title: "Vehicle Loans", description: "Quick and affordable loans for cars, bikes, and commercial vehicles.", path: "/services/vehicle-loan" },
  { icon: PiggyBank, title: "Gold Loans", description: "Get instant funds by leveraging your gold assets with minimal documentation.", path: "/services/gold-loan" },
];


export default function ServicesSection() {
  return (
    <>
      <div className="py-12 md:py-16 px-4 sm:px-32 lg:px-44 w-full" id="services">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-[50px] text-center font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-center text-2xl mx-auto">
            Comprehensive financial solutions designed to meet your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => {
  const Icon = service.icon;
  return (
    <motion.div
      key={index}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow"
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-[35px] h-[37px] text-[#3C50E9]" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-lg mb-4">{service.description}</p>
      <Link
        to={service.path}
        className="px-4 py-2 text-sm font-medium rounded-lg border border-blue-600 text-[#3C50E9] hover:bg-blue-600 hover:text-white transition inline-block"
      >
        Learn More
      </Link>
    </motion.div>
  );
})}

        </motion.div>
      </div>

      <ProcessSection />
    </>
  );
}

// Process Section
const steps = [
  { number: "1", icon: FileText, title: "Submit Application", timeline: "24-48 hrs", subtitle: "Initial Approve" },
  { number: "2", icon: Search, title: "Document Review", timeline: "3-7 days", subtitle: "Documentation" },
  { number: "3", icon: CheckCircle, title: "Approval & verification", timeline: "Processing Timeline", subtitle: "" },
  { number: "4", icon: Banknote, title: "Disbursement", timeline: "7-15 days", subtitle: "Final Disbursement" },
];

const psteps = [
  { time: "24-48 hrs", label: "Initial Approve" },
  { time: "3-7 days", label: "Documentation" },
  { time: "15 to 30 days", label: "Final Disbursement" },
];

export function ProcessSection() {
  return (
    <section className="py-4 md:py-12 bg-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Simple - 4-Step Process</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Getting your financial solution has never been easier. Follow our streamlined process for quick approvals
            and hassle-free experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#3C50E9]/20 hidden lg:block">
            <div className="h-full bg-[#3C50E9] w-3/4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#3C50E9] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-[#3C50E9] hidden lg:block"></div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-6 md:py-10">
          <h2 className="text-center text-lg font-semibold mb-6">Processing Timeline</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {psteps.map((step, index) => (
              <motion.div
                key={index}
                className="w-40 h-24 flex flex-col items-center justify-center bg-white rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="text-[#3C50E9] font-semibold text-lg">{step.time}</p>
                <p className="text-gray-600 text-sm">{step.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
