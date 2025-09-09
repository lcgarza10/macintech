import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ApplicationsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}