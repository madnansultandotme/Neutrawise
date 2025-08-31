import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Leaf, 
  Target, 
  Users, 
  Award,
  Heart,
  Globe
} from "lucide-react";
import teamWorkingImage from "@/assets/team-working.jpg";
import businessMeetingImage from "@/assets/business-meeting.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Our Mission for a 
                <span className="text-eco-green"> Sustainable Future</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Neutrawise was founded with a simple belief: every individual and business 
                can make a meaningful impact in the fight against climate change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2023 by a team of environmental scientists and technology experts, 
                    Neutrawise emerged from a shared frustration with the complexity of carbon 
                    footprint tracking and the lack of actionable solutions.
                  </p>
                  <p>
                    We realized that while awareness of climate change was growing, people and 
                    businesses lacked the tools to effectively measure, understand, and reduce 
                    their environmental impact. That's when we decided to create a platform 
                    that would democratize sustainability.
                  </p>
                  <p>
                    Today, Neutrawise serves over 10,000 users across 50 countries, helping 
                    them take meaningful action towards carbon neutrality through our 
                    comprehensive tracking and offset platform.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={teamWorkingImage} 
                  alt="Neutrawise team working on sustainability solutions" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-eco-green to-eco-blue p-6 rounded-xl text-center text-primary-foreground shadow-eco">
                  <Globe className="h-12 w-12 mx-auto mb-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-xl font-bold">50K+</div>
                      <div className="opacity-90">Tons CO2</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">50</div>
                      <div className="opacity-90">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Neutrawise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Environmental Stewardship",
                description: "We believe in taking responsibility for our planet and empowering others to do the same through accessible sustainability tools."
              },
              {
                icon: Heart,
                title: "Transparency",
                description: "We provide clear, honest information about carbon impacts and offset projects, ensuring every action has verifiable results."
              },
              {
                icon: Users,
                title: "Collective Action",
                description: "We know that climate change requires collective effort. Our platform connects individuals and businesses in shared sustainability goals."
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-eco transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="bg-gradient-to-br from-eco-green to-eco-blue p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate experts working together to create a sustainable future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Environmental scientist with 15 years of experience in climate research and sustainability consulting.",
                avatar: "SC"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder", 
                bio: "Former tech lead at major sustainability platforms, passionate about using technology for climate action.",
                avatar: "MR"
              },
              {
                name: "Emma Thompson",
                role: "Head of Sustainability",
                bio: "Carbon accounting expert with deep knowledge of offset verification and environmental impact measurement.",
                avatar: "ET"
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-soft text-center">
                <CardContent className="p-8 space-y-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-lg bg-eco-green text-primary-foreground">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-eco-green font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-eco-green to-eco-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Join Our Mission</h2>
              <p className="text-xl opacity-90">
                Ready to be part of the solution? Whether you're an individual looking to 
                reduce your carbon footprint or a business ready to lead in sustainability, 
                we're here to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-eco-green">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;