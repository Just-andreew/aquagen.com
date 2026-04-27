import Hero from '@/components/Hero';
import TheDive from '@/components/TheDive';
import Story from '@/components/Story';
import Services from '@/components/Services';
import Facility from '@/components/Facility';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-ocean-surface">
      <Hero />
      <TheDive />
      <Story />
      <Services />
      <Facility />
      <Team />
      <Footer />
    </main>
  );
}