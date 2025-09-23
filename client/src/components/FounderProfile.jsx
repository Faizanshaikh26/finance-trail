import { Award, Mail, Linkedin, Twitter, Github } from "lucide-react"; 
import ceo from '../assets/team/ceo.jpg';

const ACCENT = "#3C50E9";

export function ProfileSection() {
  return (
    <div className="">
      <div className="container mx-auto px-6">
        {/* Hero Profile Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            
            {/* Accent Background */}
            <div
              className="absolute inset-0 rounded-3xl transform transition-transform duration-500"
              style={{ background: `linear-gradient(to bottom right, ${ACCENT}1A, ${ACCENT}1A)` }}
            ></div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center px-8 py-16 lg:px-16">
                {/* Left Side - Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* CEO Image Container */}
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                      <img
                        src={ceo}
                        alt="Mr. Ajay Gokhale - Founder & CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-3 shadow-xl">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#3B82F6]" />
                        <span className="font-bold text-black text-sm">FOUNDER & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-black">Mr. Ajay Gokhale</h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                      Visionary leader driving innovation in technology and business transformation. Building the
                      future through strategic leadership and cutting-edge solutions.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 py-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">15+</div>
                      <div className="text-gray-500 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">200+</div>
                      <div className="text-gray-500 text-sm">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black">50+</div>
                      <div className="text-gray-500 text-sm">Projects Led</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#3B82F6]/20 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-[#3B82F6]" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#3B82F6]/20 transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-6 h-6 text-[#3B82F6]" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#3B82F6]/20 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-6 h-6 text-[#3B82F6]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
