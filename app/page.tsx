import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Customers from '@/components/Customers';
import Impact from '@/components/Impact';
import Services from '@/components/Services';
import PricingPlans from '@/components/PricingPlans';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <PricingPlans />
      <Customers />
      <Impact />
      <Mission />
      <Footer />
    </main>
  );
}
