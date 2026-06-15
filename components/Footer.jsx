import { MapPin, Phone, Mail, Clock } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="relative z-30 w-full bg-[#011418] pt-20 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col">
          <h2 className="font-display text-2xl font-bold text-white mb-6 tracking-tight">AquaGen</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 pr-4">
            Your end-to-end aquaculture engineering partner. Bridging the gap between ecological preservation, automated food production, and scalable farming economics in East Africa.
          </p>

        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-base">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="/packages" className="hover:text-[#00f2fe] transition-colors duration-300">Packages</a></li>
            <li><a href="/#machakos" className="hover:text-[#00f2fe] transition-colors duration-300">Machakos Pilot Facility</a></li>
            <li><a href="/#team" className="hover:text-[#00f2fe] transition-colors duration-300">Engineering Team</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-base">Contact</h4>
          <ul className="space-y-5 text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
              <span>Machakos RAS Facility,<br />Machakos, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#00f2fe] shrink-0" />
              <span>+254 701 313 885</span> {/* Update with your actual number */}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#00f2fe] shrink-0" />
              <a href="mailto:info@aquagen.co.ke" className="hover:text-[#00f2fe] transition-colors duration-300">info@aquagen.co.ke</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Operating Hours & Callout */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-base">Operating Hours</h4>
          <div className="flex items-start gap-3 text-sm text-gray-500 mb-6">
            <Clock className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
            <span>Mon - Sat: 8:00 AM - 5:00 PM<br />Sun: Closed</span>
          </div>

          {/* Highlight Callout Box (Styled like the green Soko Mtaani box but deep ocean/cyan themed) */}
          <div className="p-4 mt-4 bg-[#00f2fe]/10 border border-[#00f2fe]/20 rounded-xl">
            <p className="text-sm text-[#00f2fe] font-medium leading-relaxed">
              We are working to deliver and deploy our miniature RAS solution across all of Kenya as fast as possible.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Terms */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
        <p className="text-sm text-gray-600 mb-4 md:mb-0">
          © {new Date().getFullYear()} AquaGen Farm Ltd. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-[#00f2fe] transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-[#00f2fe] transition-colors duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}