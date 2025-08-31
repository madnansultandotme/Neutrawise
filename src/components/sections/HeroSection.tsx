import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TreePine } from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const HeroSection = () => {

  return (
    <section className="relative bg-gradient-to-br from-background via-accent/30 to-eco-green/10 py-20 lg:py-32 overflow-hidden">
      {/* Nature-themed floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-eco-green/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eco-blue/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-eco-sage/15 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Nature pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm15 0c0-8.284-6.716-15-15-15s-15 6.716-15 15 6.716 15 15 15 15-6.716 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Track. Reduce. 
                <span className="text-eco-green bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent"> 
                  Offset.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Take control of your carbon footprint with Neutrawise. 
                Monitor your impact, discover reduction strategies, and contribute to a sustainable future through intelligent analytics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green-light hover:to-eco-blue text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-eco-green/30 text-eco-green hover:bg-eco-green/5 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-2 group">
                <Users className="h-5 w-5 text-eco-green group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">10,000+ users</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <TreePine className="h-5 w-5 text-eco-green group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">50,000 tons CO2 offset</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <img 
                src={heroImage} 
                alt="Sustainable Earth with renewable energy" 
                className="w-full h-auto rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-green/10 to-transparent rounded-2xl"></div>
              {/* Nature overlay effects */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-eco-green/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-eco-blue/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;