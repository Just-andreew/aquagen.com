'use client';

import { motion } from 'framer-motion';

export default function TheDive() {
  return (
    <section className="relative z-30 w-full min-h-[70vh] bg-[#020c1b] flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl md:text-6xl font-bold leading-tight text-white tracking-tight"
        >
          Water scarcity threatens <br className="hidden md:block" />
          <span className="text-gray-400">traditional agriculture.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-2xl md:text-4xl text-[#00f2fe] font-medium"
        >
          We are building the adaptation.
        </motion.p>
      </div>
    </section>
  );
}