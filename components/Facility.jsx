'use client';

import { motion } from 'framer-motion';

export default function Facility() {
  return (
    <section id="machakos" className="relative z-30 w-full py-32 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-[#0a192f] mb-4">The Machakos Facility</h2>
          <p className="text-gray-800 max-w-xl text-lg">
            A physical manifestation of our technological thesis. Scalable, modular, and deeply integrated with our IoT backbone and water recycling units.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 grid-flow-dense"
        >
          {/* Item 1: Wide Feature (Image 1 - Landscape/Exterior) */}
          <div className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10 pointer-events-none"></div>
            <img
              src="/images/farm-1.jpg"
              alt="AquaGen Machakos Exterior"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/20 uppercase tracking-wider">
                01 / Facility Exterior
              </span>
            </div>
          </div>

          {/* Item 2: Tall Vertical Feature (Image 2 - Tanks) */}
          <div className="relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10 pointer-events-none"></div>
            <img
              src="/images/farm-2.jpeg"
              alt="A-RAS Concrete Tanks"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20 pointer-events-none">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/20 uppercase tracking-wider">
                02 / A-RAS Tanks
              </span>
            </div>
          </div>

          {/* Item 3: Info/Text Card */}
          <div className="relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group bg-gradient-to-br from-[#0a6c74] to-[#028090] shadow-2xl flex flex-col justify-center p-6 border border-[#43e8d8]/30 hover:border-[#43e8d8] transition-colors duration-500">
            <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#43e8d8] transition-colors">Our System</h3>
            <p className="text-sm text-white/90 font-medium leading-relaxed">
              High-efficiency water management using gravity-fed bio-filtration and durable local materials.
            </p>
          </div>

          {/* Item 4: Data Callout Card */}
          <div className="relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group bg-gradient-to-br from-[#063b45] to-[#042b33] flex flex-col justify-center items-center p-6 text-center shadow-2xl hover:shadow-3xl border border-[#43e8d8]/20 hover:border-[#43e8d8]/60 transition-all duration-500">
            <h3 className="font-display text-6xl font-bold text-[#43e8d8] mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">10x</h3>
            <p className="text-sm text-white/90 font-medium leading-relaxed px-2">
              Verified capacity increase over traditional earthen ponds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}