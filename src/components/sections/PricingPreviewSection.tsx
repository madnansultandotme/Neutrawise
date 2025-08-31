import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPreviewSection = () => {
  const plans = [
    {
      name: "Personal",
      price: "Free",
      description: "Perfect for individuals starting their sustainability journey",
      features: [
        "Basic carbon footprint tracking",
        "Monthly impact reports",
        "Community access",
        "5 offset transactions/month"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Advanced features for sustainability professionals",
      features: [
        "Advanced analytics & insights",
        "Custom goal setting",
        "Priority support",
        "Unlimited offset transactions",
        "Team collaboration tools",
        "API access"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solutions for large organizations",
      features: [
        "White-label platform",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "Compliance tracking",
        "Training & onboarding"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Choose Your Sustainability Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and scale up as your environmental impact grows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-0 transition-all duration-500 group animate-scale-in ${
                plan.highlighted 
                  ? 'shadow-premium scale-105 bg-gradient-to-b from-eco-green/5 to-eco-blue/5' 
                  : 'shadow-soft hover:shadow-premium hover:scale-105 bg-card/60'
              } backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-eco-green to-eco-blue text-primary-foreground px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pt-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-eco-green">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-eco-green flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green-light hover:to-eco-blue text-primary-foreground shadow-lg'
                      : 'variant-outline border-eco-green/30 text-eco-green hover:bg-eco-green/5'
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/contact">
            <Button variant="ghost" className="text-eco-green hover:text-eco-green-light group">
              Need help choosing? Contact our team
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;