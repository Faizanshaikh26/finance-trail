import React from "react";
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Quote,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// ✅ Pure React Button
const Button = ({ children, className = "", variant = "solid", size = "md", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-300";
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  };
  const variants = {
    solid: "bg-[#3C50E9] text-white hover:shadow-lg hover:scale-105",
    outline:
      "border-2 border-[#3C50E9] text-black hover:bg-[#3C50E9]/10 hover:scale-105 bg-transparent",
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// ✅ Pure React Card
const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-2xl bg-white/10 backdrop-blur-md shadow-sm ${className}`}>
      {children}
    </div>
  );
};

// ✅ Main Page
export default function CEODeskPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden" id="ceodesk">
      {/* Hero Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#3C50E9]/20 px-4 py-2 text-sm font-medium border border-[#3C50E9]/30">
                <Quote className="h-4 w-4 text-[#3C50E9]" />
                Leadership Message
                <div className="flex gap-1">
                  <Star className="h-3 w-3 text-[#3C50E9]" />
                  <Star className="h-3 w-3 text-[#3C50E9]" />
                  <Star className="h-3 w-3 text-[#3C50E9]" />
                </div>
              </div>

              <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
                CEO <span className="block text-[#3C50E9]">Desk</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6">
                Discover the vision, values, and unwavering commitment that drives our mission to transform financial services.
              </p>

              <Button size="lg" className="rounded-full px-6 py-4 text-lg">
                Read Message <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative animate-slide-in-right mt-10 lg:mt-0">
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#3C50E9] via-[#3C50E9]/80 to-[#3C50E9] flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
                    AG
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Ajay Gokhale</h3>
                    <p className="text-[#3C50E9] font-semibold">Founder & CEO</p>
                  </div>
                </div>
                <blockquote className="text-sm sm:text-base italic text-gray-500 leading-relaxed">
                  "Financial services are not just about numbers, but about trust, transparency, and long-term relationships."
                </blockquote>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#3C50E9]/20 to-[#3C50E9]/20 rounded-3xl blur-xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-4 md:py-10 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Message */}
              <div className="lg:col-span-2">
                <Card className="p-10 lg:p-12 border-0 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3C50E9]/20 to-[#3C50E9]/20 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="mb-8 flex items-start gap-6">
                      <div className="h-12 w-12 md:h-16 md:w-16 rounded-full md:rounded-2xl bg-gradient-to-br from-[#3C50E9] to-[#3C50E9]/80 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                        AG
                      </div>

                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                          Message from Leadership
                        </h2>
                        <p className="text-[#3C50E9] font-semibold">Ajay Gokhale • Founder and CEO</p>
                      </div>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed">
                      <p className="text-black">
                        At <span className="font-bold text-[#3C50E9]">Bharat Kapital</span>, we believe that financial
                        services are not just about numbers, but about trust, transparency, and long-term relationships.
                      </p>

                      <p className="text-black">
                        In today's fast-changing economic environment, people need more than just products — they need
                        guidance, stability, and a partner they can count on. With strong ethical values, robust systems,
                        and a client-first approach, we are committed to sustainable financial growth.
                      </p>

                      <p className="text-black font-semibold">
                        We thank you for placing your trust in us and assure you that our commitment to your financial
                        well-being will always remain our highest priority.
                      </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-300/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#3C50E9] to-[#3C50E9]/80 flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-black">Ajay Gokhale</p>
                            <p className="text-sm text-gray-500">Founder and CEO</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Published</p>
                          <p className="font-semibold text-[#3C50E9]">September 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar Values */}
              <div className="space-y-6">
                <Card className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3C50E9] to-[#3C50E9]/80 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Trust & Transparency</h3>
                  <p className="text-sm text-gray-500">
                    Building lasting relationships through honest practices
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3C50E9] to-[#3C50E9]/80 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Client-First</h3>
                  <p className="text-sm text-gray-500">Your financial well-being is our priority</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3C50E9] to-[#3C50E9]/80 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Sustainable Growth</h3>
                  <p className="text-sm text-gray-500">Long-term value for clients and society</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-4 md:py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3C50E9]/5 via-[#3C50E9]/5 to-[#3C50E9]/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#3C50E9]/20 px-6 py-3 text-sm font-medium border border-[#3C50E9]/30">
              <Sparkles className="h-4 w-4 text-[#3C50E9]" />
              Ready to Begin Your Journey?
            </div>
            <h2 className="mb-6 text-2xl lg:text-5xl font-bold text-black">
              Experience the <span className="text-[#3C50E9]">Bharat Kapital</span> Difference
            </h2>
            <p className="mb-10 text-xl text-gray-500 leading-relaxed">
              Let us help you achieve your financial goals with our trusted expertise and personalized service.
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="md" className="px-6 py-3 text-base rounded-full">
    Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
  <Button variant="outline" size="md" className="px-6 py-3 text-base rounded-full">
    Learn More
  </Button>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
