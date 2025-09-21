import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingDown, 
  TrendingUp,
  TreePine, 
  Zap, 
  Car,
  Home,
  Plane,
  Target,
  Award,
  Calendar,
  Globe,
  MapPin,
  Factory,
  Leaf,
  Users
} from "lucide-react";

const Dashboard = () => {
  // Pakistan specific data
  const pakistanData = {
    totalEmissions: 463.0, // Million tons CO2 (2023)
    populationEmissions: 2.1, // tons CO2 per capita
    renewablePercentage: 4.2, // Percentage of renewable energy
    forestCover: 5.7, // Percentage of land area
    carbonIntensity: 0.52, // kg CO2 per $ GDP
    mainSources: [
      { source: "Energy", percentage: 51.2, icon: Zap, trend: "up" },
      { source: "Agriculture", percentage: 39.6, icon: Leaf, trend: "stable" },
      { source: "Industrial", percentage: 6.8, icon: Factory, trend: "up" },
      { source: "Transport", percentage: 2.4, icon: Car, trend: "down" }
    ]
  };

  // Global insights data
  const globalData = {
    totalEmissions: 37400, // Million tons CO2 (2023)
    temperatureRise: 1.2, // Degrees Celsius since 1880
    renewableGrowth: 9.9, // Percentage growth in renewable capacity
    carbonBudget: 400, // Remaining Gt CO2 for 1.5°C target
    topEmitters: [
      { country: "China", emissions: 11472, percentage: 30.7 },
      { country: "United States", emissions: 5007, percentage: 13.4 },
      { country: "India", emissions: 2654, percentage: 7.1 },
      { country: "Russia", emissions: 1756, percentage: 4.7 },
      { country: "Japan", emissions: 1107, percentage: 3.0 }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-green to-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold font-primary">NW Insights</h1>
              <p className="text-lg opacity-90 mt-2 font-primary">Pakistan & Global Carbon Intelligence Dashboard</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-75 font-primary">Last Updated</p>
              <p className="text-lg font-semibold font-primary">Sept 2025</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-8">
        
        {/* Pakistan Insights Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="h-6 w-6 text-brand-green" />
            <h2 className="text-2xl font-bold text-foreground font-primary">Pakistan Carbon Profile</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-800 font-primary">
              🇵🇰 National Data
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Emissions Card */}
            <Card className="border-l-4 border-l-brand-green">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground font-primary">Total Emissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground font-primary">{pakistanData.totalEmissions}Mt</div>
                <p className="text-xs text-muted-foreground mt-1 font-primary">CO₂ equivalent (2023)</p>
              </CardContent>
            </Card>

            {/* Per Capita Emissions */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground font-primary">Per Capita</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground font-primary">{pakistanData.populationEmissions}t</div>
                <p className="text-xs text-muted-foreground mt-1 font-primary">CO₂ per person/year</p>
              </CardContent>
            </Card>

            {/* Renewable Energy */}
            <Card className="border-l-4 border-l-brand-blue">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground font-primary">Renewable Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground font-primary">{pakistanData.renewablePercentage}%</div>
                <p className="text-xs text-muted-foreground mt-1 font-primary">of total energy mix</p>
              </CardContent>
            </Card>

            {/* Forest Cover */}
            <Card className="border-l-4 border-l-brand-green">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground font-primary">Forest Cover</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground font-primary">{pakistanData.forestCover}%</div>
                <p className="text-xs text-muted-foreground mt-1 font-primary">of land area</p>
              </CardContent>
            </Card>
          </div>

          {/* Pakistan Emission Sources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-brand-green" />
                <span className="font-primary">Pakistan Emission Sources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pakistanData.mainSources.map((source, index) => {
                  const IconComponent = source.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-brand-green" />
                        <span className="font-medium font-primary">{source.source}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="font-semibold font-primary">{source.percentage}%</div>
                        </div>
                        {source.trend === "up" && <TrendingUp className="h-4 w-4 text-red-500" />}
                        {source.trend === "down" && <TrendingDown className="h-4 w-4 text-brand-green" />}
                        {source.trend === "stable" && <div className="h-4 w-4 bg-gray-400 rounded-full"></div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Global Insights Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="h-6 w-6 text-brand-blue" />
            <h2 className="text-2xl font-bold text-foreground font-primary">Global Carbon Insights</h2>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-primary">
              🌍 Worldwide Data
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Global Emissions */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Global Emissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{globalData.totalEmissions.toLocaleString()}Mt</div>
                <p className="text-xs text-muted-foreground mt-1">CO₂ equivalent (2023)</p>
              </CardContent>
            </Card>

            {/* Temperature Rise */}
            <Card className="border-l-4 border-l-red-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Temperature Rise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">+{globalData.temperatureRise}°C</div>
                <p className="text-xs text-muted-foreground mt-1">since pre-industrial</p>
              </CardContent>
            </Card>

            {/* Renewable Growth */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Renewable Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">+{globalData.renewableGrowth}%</div>
                <p className="text-xs text-muted-foreground mt-1">capacity increase (2024)</p>
              </CardContent>
            </Card>

            {/* Carbon Budget */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{globalData.carbonBudget}Gt</div>
                <p className="text-xs text-muted-foreground mt-1">remaining for 1.5°C</p>
              </CardContent>
            </Card>
          </div>

          {/* Top Global Emitters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-eco-blue" />
                <span>Top Global Emitters (2023)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalData.topEmitters.map((country, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div className="flex items-center space-x-3">
                      <div className="bg-eco-blue text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{country.country}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{country.emissions.toLocaleString()} Mt CO₂</div>
                      <div className="text-sm text-muted-foreground">{country.percentage}% of global</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Action Section */}
        <section className="bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-lg p-8 text-center">
          <TreePine className="h-12 w-12 text-brand-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4 font-primary">Take Action for Climate</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-primary">
            Understanding these insights is the first step. Pakistan and the world need urgent action to reduce emissions 
            and transition to sustainable energy systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-brand-green to-brand-blue hover:from-brand-green hover:to-brand-blue text-white font-primary"
              asChild
            >
              <Link to="/calculate-footprint">
                Calculate Your Carbon Footprint
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-brand-black text-brand-black hover:bg-brand-black hover:text-white font-primary"
            >
              Explore Solutions
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Dashboard;