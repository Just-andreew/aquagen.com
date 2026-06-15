'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Delay the parallax calculations: Wait until 50% scrolled before moving and fading
  const yText = useTransform(scrollYProgress, [0.4, 1], [0, -200]);
  const opacityText = useTransform(scrollYProgress, [0.4, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#020c1b]"
    >
      {/* Sticky wrapper keeps the video and text pinned for 1 full scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Absolute Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="/images/fish 2.jpg"
            alt="AquaGen High-Def Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Parallax Content */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="relative z-20 text-center flex flex-col items-center px-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 
            className="font-display font-black text-7xl md:text-9xl tracking-tighter text-white"
            style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
          >
            Aquagen
          </h1>
          <p 
            className="mt-6 text-xl md:text-3xl text-white font-medium max-w-2xl text-center"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.6)' }}
          >
            Engineering Climate-Resilient <br className="hidden md:block" />
            <span className="text-[#43e8d8] font-bold" style={{ textShadow: '0 0 15px rgba(67,232,216,0.4)' }}>Food Systems.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}