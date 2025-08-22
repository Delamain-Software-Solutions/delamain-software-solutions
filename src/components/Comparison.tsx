import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock, Users, Code, Zap } from "lucide-react";

const comparisonData = [
  {
    feature: "Development Speed",
    traditional: {
      icon: Clock,
      text: "Weeks to months",
      status: "slow",
    },
    aiPowered: {
      icon: Zap,
      text: "Days to weeks",
      status: "fast",
    },
  },
  {
    feature: "Code Quality",
    traditional: {
      icon: Users,
      text: "Varies by developer skill",
      status: "variable",
    },
    aiPowered: {
      icon: Check,
      text: "Consistent, optimized patterns",
      status: "excellent",
    },
  },
  {
    feature: "Error Reduction",
    traditional: {
      icon: X,
      text: "Human error prone",
      status: "poor",
    },
    aiPowered: {
      icon: Check,
      text: "AI-assisted error prevention",
      status: "excellent",
    },
  },
  {
    feature: "Scalability",
    traditional: {
      icon: Users,
      text: "Limited by team size",
      status: "limited",
    },
    aiPowered: {
      icon: Code,
      text: "AI scales infinitely",
      status: "unlimited",
    },
  },
  {
    feature: "Cost Efficiency",
    traditional: {
      icon: X,
      text: "High labor costs",
      status: "expensive",
    },
    aiPowered: {
      icon: Check,
      text: "Optimized resource usage",
      status: "efficient",
    },
  },
  {
    feature: "Innovation",
    traditional: {
      icon: Clock,
      text: "Gradual improvements",
      status: "slow",
    },
    aiPowered: {
      icon: Zap,
      text: "Rapid experimentation",
      status: "fast",
    },
  },
];

const Comparison = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-foreground">AI-Powered</span>{" "}
            Development?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our innovative approach compares to traditional development
            methods
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div></div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate mb-2">
                Traditional Development
              </h3>
              <p className="text-slate">The old way</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-foreground">
                  AI-Powered Development
                </span>
              </h3>
              <p className="text-muted-foreground">The future is here</p>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <Card key={index} className="shadow-soft border-border/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-8 items-center">
                    {/* Feature Name */}
                    <div>
                      <h4 className="font-semibold text-lg">{item.feature}</h4>
                    </div>

                    {/* Traditional */}
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          item.traditional.status === "poor"
                            ? "bg-destructive/10"
                            : item.traditional.status === "slow"
                            ? "bg-muted"
                            : item.traditional.status === "expensive"
                            ? "bg-destructive/10"
                            : item.traditional.status === "limited"
                            ? "bg-muted"
                            : "bg-muted"
                        }`}
                      >
                        <item.traditional.icon
                          className={`h-5 w-5 ${
                            item.traditional.status === "poor"
                              ? "text-destructive"
                              : item.traditional.status === "expensive"
                              ? "text-destructive"
                              : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <span className="text-muted-foreground">
                        {item.traditional.text}
                      </span>
                    </div>

                    {/* AI-Powered */}
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          item.aiPowered.status === "excellent"
                            ? "bg-primary"
                            : item.aiPowered.status === "fast"
                            ? "bg-primary"
                            : item.aiPowered.status === "unlimited"
                            ? "bg-primary"
                            : item.aiPowered.status === "efficient"
                            ? "bg-primary"
                            : "bg-primary/10"
                        }`}
                      >
                        <item.aiPowered.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium">{item.aiPowered.text}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to experience the difference?
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-professional hover:shadow-lg transition-all duration-300">
              Start Your AI-Powered Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
