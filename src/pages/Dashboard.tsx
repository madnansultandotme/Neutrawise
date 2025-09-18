import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingDown, 
  TreePine, 
  Zap, 
  Car,
  Home,
  Plane,
  Target,
  Award,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const currentMonthEmissions = 2.4; // tons CO2
  const previousMonthEmissions = 3.1; // tons CO2
  const yearlyGoal = 20; // tons CO2
  const yearToDateEmissions = 18.2; // tons CO2
  const offsetCredits = 5.5; // tons CO2

  const emissionsByCategory = [
    { category: "Transportation", amount: 1.2, icon: Car, color: "bg-red-500" },
    { category: "Energy", amount: 0.8, icon: Home, color: "bg-orange-500" },
    { category: "Travel", amount: 0.3, icon: Plane, color: "bg-blue-500" },
    { category: "Other", amount: 0.1, icon: Zap, color: "bg-purple-500" }
  ];

  const reductionTips = [
    "Switch to renewable energy provider",
    "Use public transport 2x per week",
    "Reduce meat consumption",
    "Work from home when possible"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-eco-green to-eco-blue text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Your Carbon Dashboard</h1>
              <p className="text-lg opacity-90 mt-2">Track, reduce, and offset your environmental impact</p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Current Month</div>
              <div className="text-2xl font-bold">{currentMonthEmissions} tons CO2</div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <TrendingDown className="h-4 w-4 mr-1" />
                23% reduction
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">{currentMonthEmissions}</p>
                  <p className="text-xs text-muted-foreground">tons CO2</p>
                </div>
                <div className="bg-eco-green/10 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-eco-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Year to Date</p>
                  <p className="text-2xl font-bold text-foreground">{yearToDateEmissions}</p>
                  <p className="text-xs text-muted-foreground">tons CO2</p>
                </div>
                <div className="bg-eco-blue/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-eco-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credits Earned</p>
                  <p className="text-2xl font-bold text-foreground">{offsetCredits}</p>
                  <p className="text-xs text-muted-foreground">tons CO2 offset</p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-full">
                  <TreePine className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Goal Progress</p>
                  <p className="text-2xl font-bold text-foreground">{Math.round((1 - yearToDateEmissions/yearlyGoal) * 100)}%</p>
                  <p className="text-xs text-muted-foreground">on track</p>
                </div>
                <div className="bg-eco-earth/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-eco-earth" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emissions Breakdown */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-eco-green" />
                  <span>Emissions by Category</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {emissionsByCategory.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${item.color}/10`}>
                          <item.icon className={`h-4 w-4 ${item.color.replace('bg-', 'text-')}`} />
                        </div>
                        <span className="font-medium">{item.category}</span>
                      </div>
                      <span className="text-muted-foreground">{item.amount} tons</span>
                    </div>
                    <Progress 
                      value={(item.amount / currentMonthEmissions) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-eco-green" />
                  <span>Annual Goal Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Current: {yearToDateEmissions} tons CO2</span>
                    <span>Goal: {yearlyGoal} tons CO2</span>
                  </div>
                  <Progress value={(yearToDateEmissions / yearlyGoal) * 100} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    You're {yearToDateEmissions < yearlyGoal ? 'on track' : 'above target'} for your annual goal. 
                    {yearlyGoal - yearToDateEmissions > 0 ? ` ${(yearlyGoal - yearToDateEmissions).toFixed(1)} tons CO2 remaining.` : ' Consider adjusting your target.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-eco-green hover:bg-eco-green-light text-primary-foreground">
                  <TreePine className="h-4 w-4 mr-2" />
                  Offset This Month
                </Button>
                <Button variant="outline" className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Update Goals
                </Button>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* Reduction Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-eco-green" />
                  <span>Reduction Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {reductionTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="bg-eco-green w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Achievement Badge */}
            <Card className="bg-gradient-to-br from-eco-green/10 to-eco-blue/10 border-eco-green/20">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-eco-green to-eco-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Eco Warrior</h3>
                <p className="text-sm text-muted-foreground">
                  You've reduced your emissions by 20% this quarter!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;