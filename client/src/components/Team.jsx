import React from "react"; 
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
  Award,
  Target,
  Handshake,
  Briefcase,
  UserCheck,
  Zap,
  Mail,
  Linkedin,
} from "lucide-react";


import ceo from '../../public/team/ceo.jpg'
import victor from '../../public/team/victor.jpg'


const ACCENT = "#3C50E9";

export function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-gray-100 overflow-hidden">

      

      
     

      {/* Hero Section */}
      <section className="py-20 relative text-center" id="team">
        <div className="max-w-5xl mx-auto animate-slide-in-up">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[rgba(60,80,233,0.2)] to-[rgba(60,80,233,0.2)] px-8 py-4 text-sm font-medium border border-[rgba(60,80,233,0.3)]">
            <Users className="h-5 w-5" style={{color: ACCENT}} />
            Meet Our Visionary Leaders
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }}></div>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "0.5s" }}></div>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT, animationDelay: "1s" }}></div>
            </div>
          </div>
          <h1 className="mb-8 text-2xl md:text-3xl lg:text-6xl font-black tracking-tight text-black">
            Our
            <span className="block relative">
              Dream Team
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full" style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT})` }}></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed">
            Exceptional leaders driving innovation and excellence in financial services
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* CEO */}
        <div className="mb-32 flex justify-center relative">
    <div
      className="w-80 h-80 rounded-2xl overflow-hidden relative group shadow-xl transform hover:scale-105 transition-all duration-700"
      style={{
        backgroundImage: `url(${ceo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Glass Overlay */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl"></div> */}

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center">
        <div className="mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#3C50E9] to-[#00CFFF] text-white font-semibold text-xs shadow-md">
          <Award className="inline-block h-3 w-3 mr-1" />
          FOUNDER & CEO
        </div>
        <h3 className="text-2xl font-extrabold text-white drop-shadow-lg mb-8">
          Mr. Ajay Gokhale
        </h3>
       
      </div>

      {/* Hover Accent Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r from-[#3C50E9] to-[#00CFFF] transition-all duration-700"></div>
    </div>
  </div>

          {/* Team Members Grid */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Left Member */}
            <TeamMember 
              initials="VJ" 
              name="Vikrant Joshi" 
              role="Business Development and Recovery Manager"
              position="Business Development"
              description="Brings strong expertise in business growth and recovery management with a keen understanding of financial services and client needs."
              skills={["Growth Strategy", "Recovery", "Partnerships"]}
         
          
            />

            {/* Right Member */}
            <TeamMember 
              initials="VS" 
              name="Victor Shikera" 
              role="Business Development Manager"
              position="Business Development"
              description="Brings a dynamic approach to building lasting client relationships and driving organizational growth with a keen eye for emerging opportunities."
              skills={["Client Relations", "Innovation", "Leadership"]}
       
                  bgImage={victor}
              reverse
            />

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(60,80,233,0.05)] via-[rgba(60,80,233,0.05)] to-[rgba(60,80,233,0.05)]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium border" style={{ borderColor: `${ACCENT}4D`, backgroundColor: `${ACCENT}1A` }}>
                <Zap className="h-4 w-4" style={{ color: ACCENT }} />
                Team Excellence
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Why Our <span style={{ color: ACCENT }}>Team</span> Stands Out
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, value: "15+", title: "Years Experience", desc: "Combined expertise in financial services" },
                { icon: Users, value: "50+", title: "Team Members", desc: "Diverse and highly skilled professionals" },
                { icon: TrendingUp, value: "100+", title: "Projects Delivered", desc: "Successful track record of excellence" },
                { icon: Award, value: "10+", title: "Awards Won", desc: "Recognized for leadership and performance" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                  <stat.icon className="h-8 w-8 mb-4" style={{ color: ACCENT }} />
                  <h3 className="text-3xl font-bold text-black mb-2">{stat.value}</h3>
                  <p className="font-semibold mb-2" style={{ color: ACCENT }}>{stat.title}</p>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-4 md:py-14 relative text-center">
        <div className="max-w-5xl mx-auto px-6 animate-slide-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Join Our <span style={{ color: ACCENT }}>Journey</span>
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Become part of a visionary team driving excellence and innovation in the financial sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full text-white flex items-center justify-center gap-2" style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT})` }}>
              Get Started Today <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full border" style={{ borderColor: ACCENT, color: 'black' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// Team Member Component
function TeamMember({  name, role, position, description, skills, reverse ,bgImage}) {
  return (
    <div className={`relative group ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="absolute inset-0 rounded-3xl transform transition-transform duration-500" style={{ background: `linear-gradient(to bottom right, ${ACCENT}1A, ${ACCENT}1A)` }}></div>
      <div className={`relative border-0 rounded-3xl overflow-hidden group-hover:scale-105 transition-all duration-500 flex flex-col md:${reverse ? 'flex-row-reverse' : 'flex-row'} bg-white/10`}>
        <div className="md:w-1/3 relative" >
          <div className="aspect-square relative flex items-center justify-center"  style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          
           
          </div>
        </div>
        <div className="md:w-2/3 p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium border" style={{ borderColor: `${ACCENT}4D`, backgroundColor: `${ACCENT}1A` }}>
            <Target className="h-3 w-3" style={{ color: ACCENT }} />
            {position}
          </div>
          <h3 className="text-3xl font-bold text-black mb-2">{name}</h3>
          <p className="text-[${ACCENT}] font-semibold mb-6">{role}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full " style={{ backgroundColor: `${ACCENT}1A` }}>{skill}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-white" style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT})` }}>
              <Mail className="h-3 w-3" /> Connect
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border te border-gray-300">
              <Linkedin className="h-3 w-3 " /> Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
