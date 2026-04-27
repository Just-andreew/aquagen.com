'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Droplets, Database } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Story() {
  return (
    <section className="relative z-30 w-full py-32 px-6 bg-gradient-to-b from-[#020c1b] to-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Narrative Side */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Global Deficit & <br />
              <span className="text-[#00f2fe]">The AquaGen Thesis</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Natural reserves are collapsing. Globally, sustainable fishery stocks have plummeted, and in Kenya alone, we face an annual supply deficit of 300,000 metric tons. The traditional methods of extraction and simple earth ponds can no longer sustain the population.
              </p>
              <p>
                We founded AquaGen to patch that gap.Based off of the Recirculating Aquaculture System (RAS) we use, we are engineering a miniature, highly scalable version that will place commercial-grade technology into the hands of local farmers. 
              </p>
              <p>
                But technology isn't enough. Farmers needed capital. By integrating IoT sensors into every unit, we generate real-time, verifiable production data. We use this telemetry to bypass traditional collateral requirements, by offering a offering a means for alternative financing, allowing financial institutions to confidently issue credit and mobile financing to the agriculture sector based on actual yield potential.
              </p>
            </div>

            {/* Glowing CTA Button */}
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[#00f2fe]/10 text-[#00f2fe] font-medium rounded-full overflow-hidden border border-[#00f2fe]/30 transition-all duration-300 hover:bg-[#00f2fe]/20 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)]"
            >
              Explore A-RAS Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Data/Stats Grid Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00f2fe]/50 transition-colors duration-500">
              <Droplets className="w-8 h-8 text-[#00f2fe] mb-4" />
              <h4 className="text-3xl font-display font-bold text-white mb-2">50k<span className="text-sm text-[#00f2fe] ml-1">MT</span></h4>
              <p className="text-sm text-gray-400">Current annual fish supply deficit in Kenya.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00f2fe]/50 transition-colors duration-500">
              <TrendingUp className="w-8 h-8 text-[#00f2fe] mb-4" />
              <h4 className="text-3xl font-display font-bold text-white mb-2">7.3%<span className="text-sm text-[#00f2fe] ml-1">Avg</span></h4>
              <p className="text-sm text-gray-400">Verified ROI with a payback period of just 1.5 years.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="sm:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-[#00f2fe]/10 to-transparent backdrop-blur-xl border border-[#00f2fe]/30 hover:border-[#00f2fe]/60 transition-colors duration-500">
              <Database className="w-8 h-8 text-[#00f2fe] mb-4" />
              <h4 className="text-2xl font-display font-bold text-white mb-2">Data-Backed Credit</h4>
              <p className="text-sm text-gray-400">IoT telemetry replaces physical collateral, unlocking mobile finance and bank loans for small-scale farmers.</p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}