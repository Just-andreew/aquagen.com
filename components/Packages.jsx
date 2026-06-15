export default function Packages() {
  return (
    <div className="flex-grow max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Section 1: Aquagen Outgrower Investment Packages */}
      <section>
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0b2545] tracking-tight">
            Outgrower Investment Packages
          </h2>
          <h3 className="text-xl md:text-2xl text-[#028090] font-semibold mb-4">
            You provide the land and water. We deploy the infrastructure.
          </h3>
          <p className="text-[#4a6b7c] text-lg">
            Risk-free, passive, climate-proof yields backed by real-time IoT data and guaranteed B2B off-take contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-white border border-[#e0ecec] rounded-2xl p-8 hover:border-[#43e8d8] transition-all duration-300 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(67,232,216,0.3)] hover:-translate-y-1">
            <h4 className="text-2xl font-bold text-[#0b2545] mb-2">Tier 1: The Smart Starter</h4>
            <p className="text-[#028090] text-2xl font-bold mb-6">KES 200,000</p>
            <ul className="space-y-4 text-[#4a6b7c]">
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">Infrastructure:</strong> 1 Earthen Pond (50m³), Custom Polyhouse, Off-grid DC Aerator Kit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">The Yield:</strong> ~400 kg per 6-month cycle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">ⓘ</span>
                <span><strong className="text-[#0b2545]">Note:</strong> Includes 1,000 fingerlings and 6 months of feed. Requires manual feeding via Aquagen Lite app guidance. Does not include guaranteed buyback.</span>
              </li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="bg-white border-2 border-[#43e8d8] rounded-2xl p-8 relative shadow-[0_10px_30px_-10px_rgba(67,232,216,0.25)] hover:shadow-[0_20px_40px_-15px_rgba(67,232,216,0.4)] transition-all duration-300 hover:-translate-y-1 lg:-mt-4 lg:mb-4">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#43e8d8] to-[#028090] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-xl tracking-wider uppercase shadow-sm">Flagship</div>
            <h4 className="text-2xl font-bold text-[#0b2545] mb-2">Tier 2: The Phone Farmer</h4>
            <p className="text-[#028090] text-2xl font-bold mb-6">KES 450,000</p>
            <ul className="space-y-4 text-[#4a6b7c]">
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">Infrastructure:</strong> 2 Earthen Ponds (50m³ each), Full Polyhouse, Aquagen RAS Box (600W solar, automated load-cell feeders, telemetry).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">The Yield & Payout:</strong> ~800 kg per cycle, yielding a KES 280,000 payout directly to M-Pesa.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">★</span>
                <span><strong className="text-[#0b2545]">The Guarantee:</strong> Aquagen buys back 100% of the harvest at KES 350/kg.</span>
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="bg-white border border-[#e0ecec] rounded-2xl p-8 hover:border-[#43e8d8] transition-all duration-300 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(67,232,216,0.3)] hover:-translate-y-1">
            <h4 className="text-2xl font-bold text-[#0b2545] mb-2">Tier 3: The Estate Array</h4>
            <p className="text-[#028090] text-2xl font-bold mb-6">KES 950,000</p>
            <ul className="space-y-4 text-[#4a6b7c]">
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">Infrastructure:</strong> 4 Earthen Ponds, fully enclosed, powered by a scaled off-grid solar array and a centralized Aquagen RAS Box.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">The Yield & Payout:</strong> ~1.6 tonnes per cycle, yielding a KES 560,000 payout every six months.</span>
              </li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div className="bg-white border border-[#e0ecec] rounded-2xl p-8 hover:border-[#43e8d8] transition-all duration-300 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(67,232,216,0.3)] hover:-translate-y-1 lg:col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold text-[#0b2545] mb-2">Tier 4: The Factory Outgrower</h4>
            <p className="text-[#028090] text-2xl font-bold mb-6">KES 1,750,000</p>
            <ul className="space-y-4 text-[#4a6b7c]">
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">Infrastructure:</strong> Permanent infrastructure featuring four 25m³ above-ground galvanized steel tanks, commercial aeration, 10kWh Lithium Solar Array, and master ESP32 Command Center.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">✓</span>
                <span><strong className="text-[#0b2545]">The Yield & Payout:</strong> ~1.6 tonnes to start (KES 560,000 payout), scaling to nearly 4 tonnes per cycle via bio-filtration.</span>
              </li>
            </ul>
          </div>

          {/* Tier 5 */}
          <div className="bg-gradient-to-br from-[#0b2545] to-[#028090] border-none rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(2,128,144,0.5)] hover:-translate-y-1 lg:col-span-2 md:col-span-2">
            <h4 className="text-2xl font-bold text-white mb-2">Tier 5: The Pension Array</h4>
            <p className="text-[#43e8d8] text-2xl font-bold mb-6">KES 2,500,000</p>
            <ul className="space-y-4 text-[#e0ecec]">
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">❖</span>
                <span><strong className="text-white">The Model:</strong> Staggered stocking and harvesting for perpetual monthly cash flow.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#43e8d8] font-bold mt-1">❖</span>
                <span><strong className="text-white">The Yield & Payout:</strong> 400kg harvested every 30 days. Guaranteed KES 140,000 monthly payout.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Engineering & Consulting Services */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#e0ecec]">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0b2545]">
            Engineering & Consulting Services
          </h2>
          <h3 className="text-lg md:text-xl text-[#028090] font-medium">
            Stop guessing. Start measuring. We engineer profitable biological infrastructure.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group border-b border-[#e0ecec] pb-6 hover:bg-[#f8fbfb] p-4 rounded-xl transition-colors">
            <h4 className="text-xl font-bold text-[#0b2545] mb-1 group-hover:text-[#028090] transition-colors">The Efficiency Audit</h4>
            <p className="text-[#028090] font-semibold mb-3">KES 15,000 to 25,000 <span className="text-sm font-normal text-[#4a6b7c]">(plus transport)</span></p>
            <p className="text-[#4a6b7c]"><strong className="text-[#0b2545]">Details:</strong> On-site diagnostic mapping Dissolved Oxygen (DO), water flow, and electrical efficiency to fix your Feed Conversion Ratios (FCR).</p>
          </div>

          <div className="group border-b border-[#e0ecec] pb-6 hover:bg-[#f8fbfb] p-4 rounded-xl transition-colors">
            <h4 className="text-xl font-bold text-[#0b2545] mb-1 group-hover:text-[#028090] transition-colors">Design & Engineering Blueprint</h4>
            <p className="text-[#028090] font-semibold mb-3">5% to 10% of estimated CapEx</p>
            <p className="text-[#4a6b7c]"><strong className="text-[#0b2545]">Details:</strong> Professional civil and mechanical schematics, including gravity-fed drainage, off-grid solar, and a comprehensive Bill of Quantities (BoQ).</p>
          </div>

          <div className="group border-b border-[#e0ecec] pb-6 hover:bg-[#f8fbfb] p-4 rounded-xl transition-colors">
            <h4 className="text-xl font-bold text-[#0b2545] mb-1 group-hover:text-[#028090] transition-colors">Regulatory Compliance & Licensing</h4>
            <p className="text-[#028090] font-semibold mb-3">Custom quoted</p>
            <p className="text-[#4a6b7c]"><strong className="text-[#0b2545]">Details:</strong> We facilitate NEMA EIAs, WRA permits, and commercial aquaculture licenses.</p>
          </div>

          <div className="group border-b border-[#e0ecec] pb-6 hover:bg-[#f8fbfb] p-4 rounded-xl transition-colors">
            <h4 className="text-xl font-bold text-[#0b2545] mb-1 group-hover:text-[#028090] transition-colors">Digital Readiness Upgrade</h4>
            <p className="text-[#028090] font-semibold mb-3">Custom quoted</p>
            <p className="text-[#4a6b7c]"><strong className="text-[#0b2545]">Details:</strong> We install secure sensor mounts, underground wiring conduits, and local power points to make your farm strictly Plug-and-Play ready for the Aquagen RAS Box.</p>
          </div>

          <div className="group md:border-b-0 border-[#e0ecec] hover:bg-[#f8fbfb] p-4 rounded-xl transition-colors">
            <h4 className="text-xl font-bold text-[#0b2545] mb-1 group-hover:text-[#028090] transition-colors">Operations Advisory</h4>
            <p className="text-[#028090] font-semibold mb-3">KES 40,000 - 80,000</p>
            <p className="text-[#4a6b7c]"><strong className="text-[#0b2545]">Details:</strong> Practical, numbers-driven biological training for ground staff, resulting in a customized SOP manual and performance ledger.</p>
          </div>

          <div className="group hover:bg-[#f8fbfb] p-4 rounded-xl transition-colors">
            <h4 className="text-xl font-bold text-[#0b2545] mb-1 group-hover:text-[#028090] transition-colors">The SLA Maintenance Contract</h4>
            <p className="text-[#028090] font-semibold mb-3">KES 15,000 / month <span className="text-sm font-normal text-[#4a6b7c]">(retainer)</span></p>
            <p className="text-[#4a6b7c]"><strong className="text-[#0b2545]">Details:</strong> Preventative maintenance on aerators, solar arrays, and priority emergency repairs to guarantee zero downtime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
