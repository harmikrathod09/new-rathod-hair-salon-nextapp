"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Camera, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "City Palace, Jafrabad Road, Rajula, Amreli, Gujarat",
    link: "https://maps.google.com/?q=New+Rathod+Hair+Salon+Rajula",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 99243 17220 / 97234 85720",
    link: "tel:+919924317220",
  },
  {
    icon: Camera,
    title: "Follow Us",
    detail: "@newrathodsalon",
    link: "https://instagram.com",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    detail: "Chat with us",
    link: "https://wa.me/919924317220",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent tracking-widest uppercase text-sm font-bold mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            CONTACT & LOCATION
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 glass-morphism rounded-2xl group hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <item.icon className="text-accent group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white/40 text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                  <p className="text-white font-medium group-hover:text-accent transition-colors">{item.detail}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[400px] lg:h-full rounded-3xl overflow-hidden glass-morphism relative"
          >
            {/* Google Maps Embed Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238341.49274152427!2d71.13388749453125!3d21.029251699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be245d20693530f%3A0x1290a3bc94c5c6f3!2sNew%20Rathod%20Hair%20Salon!5e0!3m2!1sen!2sin!4v1777178671330!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
