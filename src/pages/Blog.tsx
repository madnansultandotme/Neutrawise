import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Leaf,
  TreePine,
  Lightbulb,
  Users,
  BarChart3
} from "lucide-react";
import teamWorkingImage from "@/assets/team-working.jpg";
import businessMeetingImage from "@/assets/business-meeting.jpg";
import dashboardPreviewImage from "@/assets/dashboard-preview.jpg";
import reportCoverImage from "@/assets/report-cover.jpg";
import renewableEnergyImage from "@/assets/renewable-energy.jpg";
import greenOfficeImage from "@/assets/green-office.jpg";

const Blog = () => {
  const featuredPost = {
    title: "The Ultimate Guide to Carbon Footprint Reduction in 2024",
    excerpt: "Discover the most effective strategies to reduce your carbon footprint this year, from simple lifestyle changes to major impact decisions.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Sustainability Guide",
    image: teamWorkingImage
  };

  const posts = [
    {
      title: "Understanding Carbon Offsets: A Complete Guide",
      excerpt: "Learn how carbon offsets work, what makes them effective, and how to choose the right projects for your needs.",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Education",
      icon: TreePine,
      image: renewableEnergyImage
    },
    {
      title: "10 Simple Changes That Make a Big Difference",
      excerpt: "Small lifestyle adjustments that can significantly reduce your environmental impact without major sacrifice.",
      author: "Emma Thompson",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Tips & Tricks",
      icon: Lightbulb,
      image: greenOfficeImage
    },
    {
      title: "Corporate Sustainability: Leading by Example",
      excerpt: "How businesses are using Neutrawise to achieve their sustainability goals and inspire their teams.",
      author: "Alex Kumar",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Business",
      icon: Users,
      image: businessMeetingImage
    },
    {
      title: "The Science Behind Carbon Tracking",
      excerpt: "Dive deep into how we calculate carbon footprints and ensure accuracy in our measurements.",
      author: "Dr. Lisa Park",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Technology",
      icon: BarChart3,
      image: dashboardPreviewImage
    },
    {
      title: "Renewable Energy: Making the Switch",
      excerpt: "A practical guide to transitioning to renewable energy sources for your home or business.",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Energy",
      icon: Leaf,
      image: renewableEnergyImage
    },
    {
      title: "Community Impact: Stories from Our Users",
      excerpt: "Inspiring stories from Neutrawise users who are making a real difference in their communities.",
      author: "Maria Garcia",
      date: "March 1, 2024",
      readTime: "4 min read",
      category: "Community",
      icon: Users,
      image: reportCoverImage
    }
  ];

  const categories = [
    "All Posts", "Sustainability Guide", "Education", "Tips & Tricks", 
    "Business", "Technology", "Energy", "Community"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                The 
                <span className="text-eco-green"> Sustainability </span>
                Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights, tips, and stories to help you on your journey to carbon neutrality
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                index === 0 ? "bg-eco-green text-primary-foreground" : "hover:bg-eco-green/10"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="overflow-hidden border-0 shadow-eco">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={featuredPost.image} 
                alt="Featured blog post"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <Badge className="absolute top-4 left-4 bg-eco-green text-primary-foreground">
                Featured Post
              </Badge>
            </div>
            <CardContent className="p-8 lg:p-12 space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-eco-green border-eco-green">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{featuredPost.author}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <Button className="bg-eco-green hover:bg-eco-green-light text-primary-foreground">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-eco transition-all duration-300 group cursor-pointer">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <Badge variant="outline" className="absolute top-4 left-4 bg-white/90 text-eco-green border-eco-green">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-eco-green transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">{post.author}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-eco-green/10 group-hover:text-eco-green transition-colors">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-eco-green to-eco-blue text-primary-foreground border-0">
          <CardContent className="p-12 text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Get the latest sustainability insights, tips, and stories delivered directly to your inbox. 
                Join our community of eco-conscious individuals making a difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;