'use client';

import { motion } from 'framer-motion';

const team = [    
    {
        name: "Steve Muya",
        title: "CEO x CFO, CPA Trainee",
        description: "Drives the company's strategic direction and manages financial planning and analysis.",
        image: "/images/steve.jpg",
    },
    {
            name: "Andrew Solitei",
            title: "CTO, Lead Engineer",
            description: "Leads the technical vision and oversees the development of innovative aquaculture solutions.",
            image: "/images/solitei.jpg",
        },

    {
        name: "Shem Mugo",
        title: "CCO, Commercial Strategy",
        description: "Shapes the company's brand narrative and oversees all content creation efforts.",
        image: "/images/shem.jpg",
    },
    {
        name: "Ted Kinuthia",
        title: "COO, Operations",
        description: "Ensures seamless day-to-day operations and optimizes processes for efficiency.",
        image: "/images/ted.jpg",
    },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Team() {
  return (
    <section className="relative z-30 w-full py-32 px-6 bg-[#020c1b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Engineering <span className="text-[#00f2fe]">TEAM</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            The operators, architects, and financial strategists scaling climate-resilient aquaculture across East Africa.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={cardVariants} className="group relative flex flex-col items-center">
              
              {/* Unique Thematic Shape: Water Drop / Asymmetrical */}
              <div className="relative w-56 h-64 mb-8 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl border border-white/10 group-hover:border-[#00f2fe]/60 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,242,254,0.15)]">
                {/* Cyan Overlay on Hover */}
                <div className="absolute inset-0 bg-[#00f2fe]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
                  {member.title}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}