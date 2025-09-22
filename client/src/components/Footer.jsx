import { Facebook, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
export function Footer() {

   const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#132337] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">B</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">BHARATH</h3>
                <p className="text-xs -mt-1">KAPITAL</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted partner for comprehensive financial solutions and expert guidance.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
           <div>
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm text-primary-foreground/80 cursor-pointer">
        <li
          onClick={(e) => handleScroll(e, "#home")}
          className="hover:text-primary-foreground transition-colors"
        >
          Home
        </li>
        <li
          onClick={(e) => handleScroll(e, "#about")}
          className="hover:text-primary-foreground transition-colors"
        >
          About Us
        </li>
        <li
          onClick={(e) => handleScroll(e, "#services")}
          className="hover:text-primary-foreground transition-colors"
        >
          Services
        </li>
        <li
          onClick={(e) => handleScroll(e, "#vision")}
          className="hover:text-primary-foreground transition-colors"
        >
          Vision & Mission
        </li>
        <li
          onClick={(e) => handleScroll(e, "#contact")}
          className="hover:text-primary-foreground transition-colors"
        >
          Contact
        </li>
      </ul>
    </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Personal Loans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
      
Industrial Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
           
Private Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
     
Loan Against Property (LAP)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
          
Vehicle Loans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
       Gold Loans
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div>
                <p>4th Floor,</p>
                <p>Elpro City Mall</p>
                <p>Chinchwad - 411033</p>
              </div>
              <div>
                <p>+91 7276317098</p>
          
              </div>
              <div>
                <p>
support@bharathkapital.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2025 by SSI. Powered and secured by SATSON INNOVATION PVT LTD</p>
        </div>
      </div>
    </footer>
  )
}
