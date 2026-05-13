'use client';

import { motion } from 'framer-motion';
import { Droplets, Cpu, Cloud } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const servicesData = [
{
  title: 'Smart Water Systems',
  description: 'AI-powered monitoring and optimization for real-time water quality analysis and automated management.',
  Icon: Droplets,
  },
  {
  title: 'Intelligent Processing',
  description: 'Advanced computational solutions for data analysis, predictive modeling, and system optimization.',
  Icon: Cpu,
  },
  {
  title: 'Cloud Integration',
  description: 'Scalable cloud infrastructure for seamless data synchronization and remote system management.',
  Icon: Cloud,
  }

];

export default function Services() {
  return (
    <section className="relative z-30 w-full py-32 px-6 bg-gradient-to-b from-ocean-surface to-ocean-deep">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="relative group rounded-3xl overflow-hidden p-8 bg-glass-gradient backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-bioluminescent/50 transition-colors duration-500"
            >
              {/* Internal Hover Glow Overlay */}
              <div className="absolute inset-0 bg-bioluminescent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Icon Container with Bioluminescent Pulse */}
              <div className="w-14 h-14 rounded-full bg-ocean-surface border border-[#00f2fe] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,242,254,0.15)] group-hover:animate-glow-pulse transition-all duration-500">
                <service.Icon className="w-6 h-6 text-bioluminescent" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}