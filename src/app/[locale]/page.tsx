import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ScrollToSection from '@/components/ScrollToSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ScrollToSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
