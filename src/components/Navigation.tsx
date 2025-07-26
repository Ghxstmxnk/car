import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold neon-text">
            FUTURE<span className="text-secondary">AUTO</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#vehicles" className="text-foreground hover:text-primary transition-colors">
              Vehicles
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;