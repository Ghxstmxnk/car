import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-gray-400">Excellence?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with our automotive specialists and discover your perfect vehicle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-gray-900/50 border-gray-800 animate-slide-in backdrop-blur-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Showroom</h4>
                    <p className="text-gray-400">123 Luxury Avenue, Premium District, PD 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">+1 (555) PREMIUM-1</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">info@premiumcars.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-white">Schedule a Visit</h3>
              <p className="text-gray-400 mb-6">
                Experience our premium showroom and get up close with the world's finest automobiles.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </Button>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-white">Private Consultation</h3>
              <p className="text-gray-400 mb-6">
                Connect with our specialists for personalized vehicle recommendations.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              >
                Start Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;