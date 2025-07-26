import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "🚗",
    title: "Test Drives",
    description: "Experience the future with our immersive test drive experiences using AR and VR technology."
  },
  {
    icon: "🔋",
    title: "Charging Solutions",
    description: "Complete charging infrastructure installation and maintenance for your electric vehicle."
  },
  {
    icon: "🛠️",
    title: "AI Maintenance",
    description: "Predictive maintenance powered by artificial intelligence to keep your vehicle optimal."
  },
  {
    icon: "📱",
    title: "Smart Integration",
    description: "Seamless integration with your smart home and mobile devices for ultimate convenience."
  },
  {
    icon: "🛡️",
    title: "Warranty Plus",
    description: "Comprehensive coverage including software updates and autonomous driving features."
  },
  {
    icon: "🚀",
    title: "Future Updates",
    description: "Regular over-the-air updates that continuously improve your vehicle's capabilities."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced <span className="text-transparent bg-gradient-primary bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond selling cars, we provide a complete ecosystem of futuristic automotive services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass border-border hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;