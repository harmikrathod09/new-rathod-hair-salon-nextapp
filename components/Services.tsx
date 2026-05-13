"use client";

import { motion } from "framer-motion";
import { Scissors, User, Zap, Sparkles, Droplets, Heart } from "lucide-react";

const services = [
  {
    title: "Haircut",
    price: "₹100",
    description: "Contemporary styling tailored to your face shape and personal style",
    icon: Scissors,
    badge: "Popular",
    color: "bg-red-500/10",
    iconColor: "text-red-500"
  },
  {
    title: "Executive Shave",
    price: "₹50",
    description: "Classic hot towel treatment with straight razor for the smoothest shave",
    icon: User,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    title: "Beard Sculpting",
    price: "₹50",
    description: "Expert shaping and conditioning treatment to keep your beard looking its best",
    icon: Zap,
    color: "bg-amber-500/10",
    iconColor: "text-amber-500"
  },
  {
    title: "Hair Color",
    price: "₹150–₹350",
    description: "Professional coloring services using premium hair dyes for vibrant results",
    icon: Sparkles,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    title: "Hair Spa",
    price: "₹500",
    description: "Luxurious treatment to nourish and rejuvenate your hair and scalp",
    icon: Droplets,
    badge: "Premium",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  {
    title: "Face Massage",
    price: "₹350–₹450",
    description: "Gold or Diamond treatment to rejuvenate skin and enhance your appearance",
    icon: Heart,
    badge: "Premium",
    color: "bg-pink-500/10",
    iconColor: "text-pink-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-luxury-texture relative overflow-hidden">
      {/* Subtle Barber Pole Accent */}
      <div className="absolute top-0 right-0 w-32 h-full barber-pole-accent -skew-x-12 translate-x-16" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent tracking-widest uppercase text-sm font-bold mb-2"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            PREMIUM SERVICES
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.2 }
              }}
              className="glass-morphism p-8 rounded-2xl relative overflow-hidden group cursor-default"
            >
              {service.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-bold rounded-full">
                  {service.badge}
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
              <p className="text-white/50 mb-6 line-clamp-2">{service.description}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-accent">{service.price}</span>
                <button className="flex items-center gap-2 text-white/40 group-hover:text-white text-sm font-bold uppercase tracking-wider transition-all">
                  Details
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
