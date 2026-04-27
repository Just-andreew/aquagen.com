const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative z-30 w-full bg-[#061021] py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">AquaGen</h2>
          <p className="text-base text-gray-500 max-w-md leading-relaxed">
            Deploying resilient, high-yield aquaculture engineering. Bridging the gap between ecological preservation, automated food production, and scalable farming economics in East Africa.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Architecture</h4>
          <ul className="space-y-3 text-base text-gray-500">
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">A-RAS Packages</a></li>
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">IoT Integration</a></li>
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">AquaGen IC SaaS</a></li>
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">BSF Protein Cycle</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-3 text-base text-gray-500">
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">Our Thesis</a></li>
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">Machakos Pilot</a></li>
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">Engineering Team</a></li>
            <li><a href="#" className="hover:text-bioluminescent transition-colors duration-300">Contact Protocol</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5">
        <p className="text-sm text-gray-600 mt-6 md:mt-0">
          © {new Date().getFullYear()} AquaGen Farm Ltd. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-bioluminescent transition-colors duration-300" aria-label="Twitter">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-bioluminescent transition-colors duration-300" aria-label="LinkedIn">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-bioluminescent transition-colors duration-300" aria-label="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}