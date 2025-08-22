import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Cog,
  TestTube,
  Rocket,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We discuss your requirements and vision to understand your project goals.",
    step: "01",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our AI analyzes the requirements and generates optimal architecture solutions.",
    step: "02",
  },
  {
    icon: Cog,
    title: "Development",
    description:
      "AI-powered development creates efficient, scalable code at unprecedented speed.",
    step: "03",
  },
  {
    icon: TestTube,
    title: "Professional Testing",
    description:
      "Expert engineers rigorously test every component to ensure quality and reliability.",
    step: "04",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Comprehensive review process ensures the solution meets all requirements.",
    step: "05",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Seamless deployment and ongoing support to keep your solution running smoothly.",
    step: "06",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-foreground">Development</span>{" "}
            Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that combines AI efficiency with human
            expertise for exceptional results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="relative shadow-soft hover:shadow-professional transition-all duration-300 border-border/50 group"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-professional">
                    {step.step}
                  </div>

                  <CardHeader className="pt-8">
                    <div className="mb-4 p-3 bg-muted rounded-lg w-fit mx-auto group-hover:bg-primary transition-all duration-300">
                      <Icon className="h-8 w-8 text-foreground group-hover:text-white transition-all duration-300" />
                    </div>
                    <CardTitle className="text-xl text-center">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16 p-8 bg-card rounded-lg shadow-soft border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your{" "}
              <span className="text-foreground">
                development experience
              </span>
              ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the future of software development where AI and human
              expertise create solutions that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-professional hover:shadow-lg transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
