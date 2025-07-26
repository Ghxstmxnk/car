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
  },
  {
    id: 2,
    name: "Quantum SUV",
    type: "Autonomous Luxury",
    price: "$149,999",
    range: "400 miles",
    acceleration: "0-60 in 3.5s",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Neo Sedan",
    type: "Executive Electric",
    price: "$89,999",
    range: "450 miles",
    acceleration: "0-60 in 4.2s",
    image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=800&h=600&fit=crop",
  },
];

const FeaturedVehicles = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id} 
              className="glass border-border hover-lift group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
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
      </div>
    </section>
  );
};

export default FeaturedVehicles;