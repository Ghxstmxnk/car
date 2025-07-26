import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Drive the
            <span className="block text-transparent bg-gradient-primary bg-clip-text neon-text">
              Future Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Experience tomorrow's automotive technology with our collection of 
            cutting-edge electric and autonomous vehicles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 neon-glow"
            >
              Explore Vehicles
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              Book Test Drive
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;