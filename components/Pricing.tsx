"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const categories = [
  {
    title: "Haircut Services",
    items: [
      { name: "Hair Cut", price: "₹100" },
      { name: "Hair Malish", price: "₹150", desc: "Includes oil massage" },
      { name: "Hair Color", price: "₹150 - ₹350" },
    ]
  },
  {
    title: "Beard & Shaving",
    items: [
      { name: "Shaving", price: "₹50" },
      { name: "Beard Trim", price: "₹50" },
      { name: "Beard Color", price: "₹150 - ₹250" },
      { name: "Beard Sculpting", price: "₹50" },
    ]
  },
  {
    title: "Premium Services",
    items: [
      { name: "Hair Spa", price: "₹500", premium: true, desc: "45 min session" },
      { name: "Hair Straight", price: "₹1000 - ₹1100", premium: true },
      { name: "Face Massage (Gold)", price: "₹350" },
      { name: "Face Massage (Diamond)", price: "₹450" },
      { name: "Facial (Diamond)", price: "₹800", premium: true },
      { name: "Facial (Gold)", price: "₹1200", premium: true },
      { name: "Cleanup", price: "₹200", desc: "Deep cleansing" },
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-luxury-texture border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent tracking-widest uppercase text-sm font-bold mb-2"
          >
            Fair Pricing
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            SERVICE MENU
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-8"
            >
              <h4 className="text-xl font-bold text-accent border-b border-white/10 pb-4 mb-6">
                {category.title}
              </h4>

              <ul className="space-y-6">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-end group cursor-default">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <span className={`font-semibold text-lg ${item.premium ? 'text-white' : 'text-white/80'} group-hover:text-accent transition-colors`}>
                            {item.name}
                          </span>
                          {item.desc && (
                            <span className="text-white/30 text-xs italic">{item.desc}</span>
                          )}
                        </div>
                        {item.premium && (
                          <div className="w-1.5 h-1.5 bg-accent rounded-full glow-accent" />
                        )}
                      </div>
                      <div className="h-px border-b border-dashed border-white/10 w-full mb-1.5 group-hover:border-accent/30 transition-colors" />
                    </div>
                    <span className="text-accent font-black text-xl ml-4 whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
