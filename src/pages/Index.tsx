import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PerformanceChart from '@/components/PerformanceChart';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PerformanceChart />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <TeamSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
