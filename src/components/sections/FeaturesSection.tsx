import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Target, Lightbulb, Shield, Zap, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Get detailed insights into your carbon footprint with our advanced tracking algorithms and personalized recommendations.",
      gradient: "from-eco-green to-eco-blue"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set realistic reduction targets and track your progress with our intuitive goal management system.",
      gradient: "from-eco-blue to-eco-green"
    },
    {
      icon: Lightbulb,
      title: "Action Plans",
      description: "Receive customized action plans based on your lifestyle and business operations to maximize impact.",
      gradient: "from-eco-green to-eco-sage"
    },
    {
      icon: Shield,
      title: "Verified Offsets",
      description: "Support certified carbon offset projects with complete transparency and verified impact tracking.",
      gradient: "from-eco-blue to-eco-earth"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Track your environmental impact in real-time with automated data collection and instant insights.",
      gradient: "from-eco-sage to-eco-green"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Join a worldwide community working together to create measurable environmental change.",
      gradient: "from-eco-earth to-eco-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-eco-green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-eco-blue rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Choose Neutrawise?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform makes carbon footprint management simple, 
            actionable, and impactful for individuals and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-premium transition-all duration-500 group animate-scale-in bg-card/50 backdrop-blur-sm hover:bg-card/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-eco-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;