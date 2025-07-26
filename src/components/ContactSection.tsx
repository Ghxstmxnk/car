import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Drive the <span className="text-transparent bg-gradient-primary bg-clip-text">Future?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our future mobility experts and take the first step into tomorrow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="glass border-border animate-slide-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="text-muted-foreground">123 Future Drive, Tech City, TC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) FUTURE-1</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@futureauto.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <div className="glass p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Schedule a Visit</h3>
              <p className="text-muted-foreground mb-6">
                Experience our showroom with holographic displays and virtual reality test drives.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 neon-glow"
              >
                Book Appointment
              </Button>
            </div>

            <div className="glass p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Virtual Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Connect with our experts remotely through AR-powered consultations.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                Start Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;