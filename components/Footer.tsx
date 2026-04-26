import { Scissors, Camera, Globe, Send, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                NEW RATHOD <span className="text-accent italic font-light ml-1">HAIR SALON</span>
              </span>
            </div>
            <p className="text-white/40 leading-relaxed">
              Premium grooming for the modern gentleman. Elevating your style with precision and tradition since 2005.
            </p>
            <div className="flex gap-4">
              {[Camera, Globe, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Pricing", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Working Hours</h4>
            <ul className="space-y-4 text-white/40">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">8:30 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 8:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">8:00 AM - 10:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/40">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>Rajula, Amreli, Gujarat</span>
              </li>
              <li className="flex gap-3 text-white/40">
                <Phone className="text-accent shrink-0" size={20} />
                <span>+91 99243 17220 / 97234 85720</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-sm">
          <p>© {new Date().getFullYear()} New Rathod Hair Salon. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
