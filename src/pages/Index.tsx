import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Portfolio from "@/components/Portfolio";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PreLoader from "@/components/PreLoader";

const Index = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);

  const handlePreLoaderComplete = () => {
    setShowPreLoader(false);
  };

  if (showPreLoader) {
    return <PreLoader onComplete={handlePreLoaderComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedVehicles />
      <Portfolio />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
