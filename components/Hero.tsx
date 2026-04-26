"use client";

import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Antigravity Background */}
      <HeroScene />

      {/* Atmospheric Fog Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-black" />
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.1)_0%,transparent_70%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">
            Premium Grooming For Men
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            NEW RATHOD <br />
            <span className="text-gradient-gold">HAIR SALON</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light italic">
            "Where Gentlemen Get Distinguished Style"
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-white font-bold rounded-full text-lg glow-primary hover:bg-primary/90 transition-all duration-300"
          >
            BOOK APPOINTMENT
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Particles (Simulated with div) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random()
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
