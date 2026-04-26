"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Award, label: "Expert Stylists", desc: "Master barbers with years of experience." },
  { icon: ShieldCheck, label: "Premium Products", desc: "We use only the finest grooming essentials." },
  { icon: Zap, label: "Satisfaction Guaranteed", desc: "Your style, our commitment to excellence." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent tracking-widest uppercase text-sm font-bold mb-4">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              A TRADITION OF <br />
              <span className="text-gradient-gold">EXCELLENCE SINCE 2005</span>
            </h3>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Since 2005, New Rathod Hair Salon has been the destination for men who appreciate precision grooming and classic barbering traditions. Our skilled barbers deliver contemporary styles while honoring time-tested techniques that have defined gentlemen's grooming for generations. Excellence in every cut, style, and shave.
            </p>

            <div className="space-y-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <stat.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{stat.label}</h4>
                    <p className="text-white/40 text-sm">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group">
              {/* This is a placeholder for the user's image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <p className="text-white/20 italic">Place your luxury barber image here</p>
              </div>
              {/* Example of how the Image would look */}
              <Image
                src="/Salon.jpg"
                alt="Luxury Barber"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
