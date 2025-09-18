import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedRedirect from "@/components/AnimatedRedirect";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingPreviewSection from "@/components/sections/PricingPreviewSection";

const Home = () => {
  const [showAnim, setShowAnim] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAnim(true);
    setTimeout(() => {
      navigate("/signin");
    }, 1200);
  };

  if (showAnim) return <AnimatedRedirect to="/signin" />;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main sections */}
      <HeroSection />
      
      <div className="animate-fade-in-up">
        <FeaturesSection />
      </div>
      
      <div className="animate-fade-in-up">
        <TestimonialsSection />
      </div>

      {/* Impact Stats with Nature Theme */}
      <section className="py-20 bg-gradient-to-r from-eco-green via-eco-blue to-eco-green text-primary-foreground relative overflow-hidden">
        {/* Nature-themed background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          {/* Leaf pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16S-12 11.163-12 20s7.163 16 16 16 16-7.163 16-16z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Collective Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Together, we're making a real difference in the fight against climate change.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Active Users" },
              { number: "50,000", label: "Tons CO2 Offset" },
              { number: "250+", label: "Companies" },
              { number: "95%", label: "User Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="space-y-2 animate-scale-in group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold group-hover:text-yellow-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="animate-fade-in-up">
        <PricingPreviewSection />
      </div>
      
      {/* How It Works with Nature Theme */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        {/* Nature-themed background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-eco-green rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-eco-blue rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-eco-sage rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-16.569-13.431-30-30-30S-20 23.431-20 40s13.431 30 30 30 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Simple. Effective. Impactful.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with Neutrawise in three simple steps and begin your journey to carbon neutrality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-eco-green via-eco-blue to-eco-green opacity-30"></div>
            
            {[
              {
                step: "01",
                title: "Track Your Footprint",
                description: "Connect your accounts and let our AI analyze your carbon footprint across transportation, energy, and consumption."
              },
              {
                step: "02", 
                title: "Get Personalized Plans",
                description: "Receive tailored recommendations and action plans to reduce your environmental impact effectively."
              },
              {
                step: "03",
                title: "Offset & Monitor",
                description: "Offset remaining emissions through verified projects and track your progress towards carbon neutrality."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 animate-fade-in-up group relative z-10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-eco-green to-eco-blue text-primary-foreground text-2xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-eco-green transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/how-it-works">
              <Button 
                size="lg" 
                variant="outline"
                className="border-eco-green/30 text-eco-green hover:bg-eco-green/5 group"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Nature Theme */}
      <section className="py-20 bg-gradient-to-br from-eco-green/10 via-eco-blue/10 to-eco-green/10 relative overflow-hidden">
        {/* Nature-themed animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-eco-green/20 to-eco-blue/20 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-eco-sage/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-eco-green/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Subtle nature pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-20.71-16.79-37.5-37.5-37.5S-25 29.29-25 50s16.79 37.5 37.5 37.5S50 70.71 50 50z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Ready to Make a 
                <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent"> Difference?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users who are already taking action against climate change. 
                Start your sustainability journey today and be part of the solution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green-light hover:to-eco-blue text-primary-foreground shadow-lg hover:shadow-xl group px-8 py-6 text-lg"
                onClick={handleGetStarted}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-eco-green/30 text-eco-green hover:bg-eco-green/5 px-8 py-6 text-lg"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground pt-4">
              <span>✓ No credit card required</span>
              <span>✓ 30-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;