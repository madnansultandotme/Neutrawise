import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Users } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingPreviewSection from "@/components/sections/PricingPreviewSection";

const Home = () => {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main sections */}
      <HeroSection />
      
      <div className="animate-fade-in-up">
        <FeaturesSection />
      </div>
      
      {/* <div className="animate-fade-in-up">
        <TestimonialsSection />
      </div> */}

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
            <h2 className="text-3xl lg:text-4xl font-bold">Our Target Impact</h2>
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

      {/* Our Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Neutrawise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: Leaf,
              title: "Environmental Stewardship",
              description: "We believe in taking responsibility for our planet and empowering others to do the same through accessible sustainability tools."
            }, {
              icon: Heart,
              title: "Transparency",
              description: "We provide clear, honest information about carbon impacts and offset projects, ensuring every action has verifiable results."
            }, {
              icon: Users,
              title: "Collective Action",
              description: "We know that climate change requires collective effort. Our platform connects individuals and businesses in shared sustainability goals."
            }].map((value, index) => (
              <div key={index} className="bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-eco-green to-eco-blue p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-xl font-bold text-foreground mb-3">{value.title}</div>
                <div className="text-muted-foreground leading-relaxed">{value.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate experts working together to create a sustainable future
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Dr. Sarah Chen",
              role: "CEO & Co-Founder",
              bio: "Environmental scientist with 15+ years experience in climate research.",
              avatar: "SC"
            }, {
              name: "Michael Rodriguez",
              role: "CTO & Co-Founder", 
              bio: "Tech lead passionate about using technology for climate action.",
              avatar: "MR"
            }, {
              name: "Emma Thompson",
              role: "Head of Sustainability",
              bio: "Carbon accounting expert with deep offset verification knowledge.",
              avatar: "ET"
            }].map((member, index) => (
              <div key={index} className="bg-background rounded-xl shadow-sm text-center p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-20 h-20 mx-auto rounded-full bg-eco-green flex items-center justify-center text-base text-primary-foreground font-bold">{member.avatar}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-eco-green font-medium text-sm">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="animate-fade-in-up">
        <PricingPreviewSection />
      </div> */}
      
      {/* How It Works with Nature Theme */}
      <section className="py-16 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        {/* Nature-themed background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-eco-green rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-eco-blue rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Simple. Effective. Impactful.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with Neutrawise in three simple steps and begin your journey to carbon neutrality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-eco-green via-eco-blue to-eco-green opacity-30"></div>
            
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
                className="text-center space-y-4 animate-fade-in-up group relative z-10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-eco-green to-eco-blue text-primary-foreground text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-eco-green transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/how-it-works">
              <Button 
                size="lg" 
                variant="outline"
                className="border-eco-green/30 text-eco-green hover:bg-eco-green/5 group"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Nature Theme */}
      <section className="py-16 bg-gradient-to-br from-eco-green/10 via-eco-blue/10 to-eco-green/10 relative overflow-hidden">
        {/* Nature-themed animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-16 h-16 bg-eco-sage/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-eco-green/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Ready to Make a 
                <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent"> Difference?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of users who are already taking action against climate change. 
                Start your sustainability journey today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green-light hover:to-eco-blue text-primary-foreground shadow-lg hover:shadow-xl group px-6 py-3"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-eco-green/30 text-eco-green hover:bg-eco-green/5 px-6 py-3"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground pt-2">
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