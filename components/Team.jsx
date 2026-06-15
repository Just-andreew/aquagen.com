'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: "Steve Muya",
    title: "CEO x CFO, CPA Trainee",
    description: "Drives the company's strategic direction and manages financial planning and analysis.",
    image: "/images/steve.jpg",
    linkedin: "https://www.linkedin.com/in/steve-muvui/",
  },
  {
    name: "Andrew Solitei",
    title: "CTO, Lead Engineer",
    description: "Leads the technical vision and oversees the development of innovative aquaculture solutions.",
    image: "/images/solitei.jpg",
    linkedin: "https://www.linkedin.com/in/andrew-solitei/",
  },
  {
    name: "Shem Mugo",
    title: "CCO, Commercial Strategy",
    description: "Shapes the company's brand narrative and oversees all content creation efforts.",
    image: "/images/shem.jpg",
    linkedin: "https://www.linkedin.com/in/shem-mugo/",
  },
  {
    name: "Ted Kinuthia",
    title: "COO, Operations",
    description: "Ensures seamless day-to-day operations and optimizes processes for efficiency.",
    image: "/images/ted.jpg",
    linkedin: "https://www.linkedin.com/in/teddy-kinuthia-6a2160315/",
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
    <section id="team" className="relative z-30 w-full py-32 px-6 bg-gradient-to-b from-[#063b45] to-[#042b33]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Engineering <span className="text-[#43e8d8]">TEAM</span>
          </h2>
          <p className="text-white/95 max-w-2xl mx-auto text-lg font-normal">
            The operators, architects, and financial strategists scaling climate-resilient aquaculture across East Africa.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {team.map((member, index) => (
            <motion.a 
              key={index} 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants} 
              className="group relative flex flex-col items-center cursor-pointer"
            >

              <div className="relative w-56 h-64 mb-8 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl border border-white/20 group-hover:border-[#43e8d8] transition-all duration-500 shadow-xl group-hover:shadow-[0_10px_30px_-10px_rgba(67,232,216,0.5)]">
                {/* Cyan Overlay on Hover */}
                <div className="absolute inset-0 bg-[#43e8d8]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-[#43e8d8] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-[#43e8d8] font-bold uppercase tracking-widest">
                  {member.title}
                </p>
                <p className="text-sm text-white/95 mt-2 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}