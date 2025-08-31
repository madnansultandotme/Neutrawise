import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  MessageCircle,
  Users,
  Briefcase,
  HelpCircle
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Get in 
                <span className="text-eco-green"> Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions about Neutrawise? We're here to help you on your sustainability journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-eco">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-eco-green" />
                  <span>Send us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                  />
                </div>
                
                <Button size="lg" className="w-full bg-eco-green hover:bg-eco-green-light text-primary-foreground">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@neutrawise.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123 Green Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-eco-green/10 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: "General Inquiries",
                    description: "Questions about our platform",
                    link: "hello@neutrawise.com"
                  },
                  {
                    icon: Briefcase,
                    title: "Business Solutions",
                    description: "Enterprise and partnership",
                    link: "business@neutrawise.com"
                  },
                  {
                    icon: HelpCircle,
                    title: "Technical Support",
                    description: "Account and platform issues",
                    link: "support@neutrawise.com"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="bg-eco-green/10 p-2 rounded">
                      <item.icon className="h-4 w-4 text-eco-green" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-xs">{item.description}</p>
                      <p className="text-eco-green text-xs font-medium">{item.link}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-muted-foreground">
                Quick answers to common questions about Neutrawise
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How accurate is your carbon footprint tracking?",
                    answer: "Our tracking uses industry-standard methodologies and is verified by third-party auditors to ensure 95%+ accuracy."
                  },
                  {
                    question: "What types of offset projects do you support?",
                    answer: "We exclusively support Gold Standard and Verra-certified projects including reforestation, renewable energy, and methane capture."
                  },
                  {
                    question: "Can I use Neutrawise for my business?",
                    answer: "Yes! We offer enterprise solutions for businesses of all sizes with advanced analytics and team management features."
                  },
                  {
                    question: "How often is my data updated?",
                    answer: "Your carbon footprint data is updated in real-time as you connect accounts and input activities through our platform."
                  }
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">
                  View All FAQs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;