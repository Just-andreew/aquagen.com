import Footer from '@/components/Footer';
import Packages from '@/components/Packages';

export const metadata = {
  title: 'Packages - Aquagen',
  description: 'Aquagen Outgrower Investment Packages and Engineering & Consulting Services.',
};

export default function PackagesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8fbfb] text-[#0b2545]">
      {/* Header spacing / Top Nav simulation */}
      <div className="w-full pt-16 pb-12 px-6 flex justify-center border-b border-[#e0ecec] bg-white">
        <h1 className="text-[#028090] text-5xl md:text-7xl font-bold font-display tracking-tight">Aquagen</h1>
      </div>

      <Packages />

      <Footer />
    </main >
  );
}
