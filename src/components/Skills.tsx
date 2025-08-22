import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap, 
  Brain,
  Cpu,
  Globe,
  Layers,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Angular"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Ionic"],
      color: "bg-secondary/40 text-foreground border-secondary"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["OpenAI GPT", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "LangChain"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Azure"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Design & UX",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "User Research", "Brand Design"],
      color: "bg-secondary/40 text-foreground border-secondary"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Our Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From traditional web development to cutting-edge AI integration, our team masters 
            the full spectrum of modern technologies to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border group hover:shadow-lg transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${category.color}`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold font-space-grotesk mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Focus Call-out */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <Cpu className="h-6 w-6 text-accent" />
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Leading the AI Revolution
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We specialize in integrating AI technologies into every aspect of development, 
              from intelligent automation to predictive analytics, ensuring your business stays 
              ahead of the technological curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;