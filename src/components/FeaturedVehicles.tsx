import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    id: 1,
    name: "Aurora X1",
    type: "Electric Supercar",
    price: "$299,999",
    range: "500 miles",
    acceleration: "0-60 in 2.1s",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&h=1080&fit=crop",
    color: "#00D4FF",
  },
  {
    id: 2,
    name: "Quantum SUV",
    type: "Autonomous Luxury", 
    price: "$149,999",
    range: "400 miles",
    acceleration: "0-60 in 3.5s",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&h=1080&fit=crop",
    color: "#A855F7",
  },
  {
    id: 3,
    name: "Neo Sedan",
    type: "Executive Electric",
    price: "$89,999",
    range: "450 miles",
    acceleration: "0-60 in 4.2s",
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=800&h=600&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=1920&h=1080&fit=crop",
    color: "#06FFA5",
  },
];

interface MousePosition {
  x: number;
  y: number;
}

const FeaturedVehicles = () => {
  const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isFullScreenVisible, setIsFullScreenVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    if (hoveredVehicle !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      setIsFullScreenVisible(true);
    } else {
      setIsFullScreenVisible(false);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredVehicle]);

  const hoveredVehicleData = vehicles.find(vehicle => vehicle.id === hoveredVehicle);
  return (
    <section id="vehicles" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-transparent bg-gradient-primary bg-clip-text">Vehicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of revolutionary vehicles that redefine transportation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id} 
              className="glass border-border hover-lift group overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredVehicle(vehicle.id)}
              onMouseLeave={() => setHoveredVehicle(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${vehicle.color}40, transparent)`,
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium text-black transition-all duration-300"
                    style={{ backgroundColor: vehicle.color }}
                  >
                    {vehicle.type}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-3xl font-bold text-primary mb-4">{vehicle.price}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Range:</span>
                    <span className="font-medium">{vehicle.range}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Acceleration:</span>
                    <span className="font-medium">{vehicle.acceleration}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-primary hover:scale-105 transition-all duration-300">
                    Learn More
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Test Drive
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full-screen dynamic vehicle display */}
        {hoveredVehicleData && isFullScreenVisible && (
          <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Animated background layers */}
            <div 
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${hoveredVehicleData.color}20, transparent 50%)`,
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
              }}
            />

            {/* Multiple morphing layers */}
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                background: `
                  radial-gradient(circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 1.2}px, ${hoveredVehicleData.color}30, transparent 40%),
                  radial-gradient(circle at ${mousePosition.x * 1.3}px ${mousePosition.y * 0.7}px, ${hoveredVehicleData.color}20, transparent 60%)
                `,
                filter: 'blur(40px)',
                transform: `rotate(${mousePosition.x * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.002) * 0.1})`,
              }}
            />

            {/* Main full-screen image with dynamic effects */}
            <div 
              className="absolute inset-0 flex items-center justify-center animate-scale-in"
              style={{
                transform: `
                  translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)
                  scale(${0.9 + (mousePosition.x / window.innerWidth) * 0.2})
                `,
              }}
            >
              <div 
                className="relative w-[80vw] h-[80vh] rounded-3xl overflow-hidden"
                style={{
                  clipPath: `polygon(
                    ${Math.max(5, (mousePosition.x / window.innerWidth) * 15)}% ${Math.max(5, (mousePosition.y / window.innerHeight) * 15)}%,
                    ${Math.min(95, 100 - ((window.innerWidth - mousePosition.x) / window.innerWidth) * 15)}% ${Math.max(5, (mousePosition.y / window.innerHeight) * 15)}%,
                    ${Math.min(95, 100 - ((window.innerWidth - mousePosition.x) / window.innerWidth) * 15)}% ${Math.min(95, 100 - ((window.innerHeight - mousePosition.y) / window.innerHeight) * 15)}%,
                    ${Math.max(5, (mousePosition.x / window.innerWidth) * 15)}% ${Math.min(95, 100 - ((window.innerHeight - mousePosition.y) / window.innerHeight) * 15)}%
                  )`,
                }}
              >
                <img
                  src={hoveredVehicleData.fullImage}
                  alt={hoveredVehicleData.name}
                  className="w-full h-full object-cover"
                  style={{
                    filter: `
                      hue-rotate(${(mousePosition.x / window.innerWidth) * 360}deg) 
                      saturate(${1.2 + (mousePosition.y / window.innerHeight) * 0.5}) 
                      contrast(${1.1 + (mousePosition.x / window.innerWidth) * 0.3})
                      brightness(${0.9 + (mousePosition.y / window.innerHeight) * 0.4})
                    `,
                    transform: `scale(${1.05 + Math.sin(Date.now() * 0.003) * 0.05}) rotate(${Math.sin(Date.now() * 0.001) * 2}deg)`,
                  }}
                />
                
                {/* Dynamic color overlays */}
                <div 
                  className="absolute inset-0 mix-blend-overlay opacity-40"
                  style={{
                    background: `
                      linear-gradient(${mousePosition.x * 0.5}deg, ${hoveredVehicleData.color}60, transparent 70%),
                      radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${hoveredVehicleData.color}30, transparent 50%)
                    `,
                  }}
                />

                {/* Animated particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-float"
                      style={{
                        width: `${4 + (i % 3) * 2}px`,
                        height: `${4 + (i % 3) * 2}px`,
                        left: `${(mousePosition.x / window.innerWidth * 80) + (i * 10) % 90}%`,
                        top: `${(mousePosition.y / window.innerHeight * 80) + (i * 15) % 90}%`,
                        backgroundColor: hoveredVehicleData.color,
                        animationDelay: `${i * 0.3}s`,
                        opacity: 0.7,
                        transform: `translate(${Math.sin(Date.now() * 0.001 + i) * 20}px, ${Math.cos(Date.now() * 0.001 + i) * 20}px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle details overlay */}
            <div 
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-4xl font-bold text-foreground mb-2">{hoveredVehicleData.name}</h3>
              <p 
                className="text-lg font-medium mb-2"
                style={{ color: hoveredVehicleData.color }}
              >
                {hoveredVehicleData.type}
              </p>
              <p className="text-2xl font-bold text-primary">{hoveredVehicleData.price}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedVehicles;