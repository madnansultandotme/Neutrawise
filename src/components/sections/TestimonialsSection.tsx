import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sustainability Director",
      company: "EcoTech Solutions",
      content: "Neutrawise transformed how we approach carbon management. The insights are incredibly detailed and the offset projects are truly impactful.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Environmental Consultant",
      company: "Green Future Corp",
      content: "The real-time monitoring and actionable recommendations have helped our clients reduce their carbon footprint by an average of 35%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Chief Operating Officer",
      company: "Sustainable Ventures",
      content: "User-friendly interface with powerful analytics. Neutrawise makes complex environmental data accessible to everyone on our team.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how companies worldwide are achieving their sustainability goals with Neutrawise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-soft hover:shadow-premium transition-all duration-500 group animate-fade-in-up bg-card/60 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-eco-green/30 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-eco-green to-eco-blue rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-eco-green font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;