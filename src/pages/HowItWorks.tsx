import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  BarChart3, 
  Target, 
  TreePine,
  ArrowRight,
  CheckCircle,
  Users,
  Zap
} from "lucide-react";
import dashboardPreviewImage from "@/assets/dashboard-preview.jpg";
import businessMeetingImage from "@/assets/business-meeting.jpg";
import renewableEnergyImage from "@/assets/renewable-energy.jpg";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                How 
                <span className="text-eco-green"> Neutrawise </span>
                Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Our comprehensive platform makes carbon footprint management simple, 
                transparent, and impactful. Here's how we help you achieve carbon neutrality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {[
              {
                step: "01",
                title: "Connect & Track",
                subtitle: "Comprehensive Footprint Analysis",
                description: "Connect your accounts and let our AI-powered system analyze your carbon footprint across all major categories.",
                icon: Smartphone,
                features: [
                  "Bank account integration for spending analysis",
                  "Travel and transportation tracking",
                  "Energy consumption monitoring",
                  "Real-time data synchronization"
                ],
                highlight: "Automated tracking saves 10+ hours per month"
              },
              {
                step: "02", 
                title: "Analyze & Understand",
                subtitle: "Personalized Insights Dashboard",
                description: "Get detailed insights into your carbon footprint with our advanced analytics and benchmarking tools.",
                icon: BarChart3,
                features: [
                  "Category breakdown and trends",
                  "Peer and industry benchmarking",
                  "Hotspot identification",
                  "Predictive impact modeling"
                ],
                highlight: "See exactly where your emissions come from"
              },
              {
                step: "03",
                title: "Plan & Reduce",
                subtitle: "Custom Action Plans",
                description: "Receive personalized recommendations and action plans tailored to your lifestyle and goals.",
                icon: Target,
                features: [
                  "AI-generated reduction strategies",
                  "Goal setting and tracking",
                  "Progress monitoring",
                  "Habit formation support"
                ],
                highlight: "Users reduce emissions by 30% on average"
              },
              {
                step: "04",
                title: "Offset & Impact",
                subtitle: "Verified Carbon Offsetting",
                description: "Offset remaining emissions through verified projects and see your real-world impact.",
                icon: TreePine,
                features: [
                  "Gold Standard certified projects",
                  "Real-time impact tracking",
                  "Project transparency reports",
                  "Community impact sharing"
                ],
                highlight: "100% verified and transparent offsetting"
              }
            ].map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-eco-green text-primary-foreground text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                    <Badge variant="secondary" className="bg-eco-green/10 text-eco-green">
                      {step.subtitle}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{step.title}</h2>
                    <p className="text-xl text-muted-foreground">{step.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 p-4 rounded-lg border border-eco-green/20">
                    <p className="text-eco-green font-medium flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      {step.highlight}
                    </p>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={index === 0 ? dashboardPreviewImage : index === 1 ? businessMeetingImage : renewableEnergyImage} 
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-eco"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-gradient-to-br from-eco-green to-eco-blue p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/90 text-sm">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform uses cutting-edge technology to ensure accurate tracking, 
              reliable analytics, and verified impact measurement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Analytics",
                description: "Machine learning algorithms analyze spending patterns and consumption data to provide accurate carbon footprint calculations.",
                icon: BarChart3
              },
              {
                title: "Real-Time Tracking",
                description: "Live data synchronization ensures your footprint calculations are always up-to-date and reflect your current lifestyle.",
                icon: Zap
              },
              {
                title: "Verified Offsets",
                description: "All offset projects are verified by international standards including Gold Standard and Verra to ensure real impact.",
                icon: CheckCircle
              }
            ].map((tech, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-eco transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gradient-to-br from-eco-green to-eco-blue p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <tech.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Real Results from Real Users
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Neutrawise users are making a measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "30%", label: "Average Emission Reduction", icon: Target },
              { metric: "50K+", label: "Tons CO2 Offset", icon: TreePine },
              { metric: "10K+", label: "Active Users", icon: Users },
              { metric: "95%", label: "User Satisfaction", icon: CheckCircle }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-gradient-to-br from-eco-green to-eco-blue p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <stat.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-eco-green">{stat.metric}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-eco-green to-eco-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of users who are already making a difference. 
                Get started with Neutrawise today and take control of your carbon footprint.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-eco-green">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;