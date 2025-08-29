import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Calculator, Sparkles, Clock, CheckCircle, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import trackioImage from '@/assets/trackio-project.jpg';
import accountingImage from '@/assets/accounting-assistant-project.jpg';
import animeMatcherImage from '@/assets/anime-matcher-project.jpg';

const Projects = () => {
  const industries = [
    {
      name: 'Financial Services',
      description: 'We revolutionize financial operations through intelligent automation and AI-powered solutions.',
      problemSolving: 'Streamline complex financial workflows, ensure regulatory compliance, and reduce manual errors by up to 95%.',
      icon: Calculator,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      projects: [
        {
          id: 1,
          title: 'Accounting Assistant',
          category: 'FinTech & Automation',
          description: 'An intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets and income statements from Excel transaction data. Uses advanced algorithms to categorize transactions and ensure compliance with accounting standards.',
          image: accountingImage,
          technologies: ['Python', 'Pandas', 'React', 'Machine Learning'],
          highlights: ['Excel integration', 'Auto categorization', 'Compliance ready'],
          results: '95% reduction in manual data entry, 80% faster financial reporting'
        }
      ]
    },
    {
      name: 'Entertainment Technology',
      description: 'We create engaging digital experiences powered by cutting-edge AI and machine learning technologies.',
      problemSolving: 'Transform user engagement through personalized experiences, advanced analytics, and scalable entertainment platforms.',
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      projects: [
        {
          id: 2,
          title: 'Anime Persona Matcher',
          category: 'Big Data & AI/ML',
          description: 'A sophisticated big data application leveraging multiple machine learning models to match users with anime characters based on personality analysis. Features advanced quiz algorithms, character database with 10,000+ entries, and personality profiling using psychometric principles.',
          image: animeMatcherImage,
          technologies: ['Python', 'TensorFlow', 'React', 'MongoDB'],
          highlights: ['ML personality matching', '10K+ character database', 'Advanced analytics'],
          results: '92% user satisfaction, 500K+ personality matches processed'
        }
      ]
    },
    {
      name: 'Productivity & Time Management',
      description: 'We optimize business operations with smart automation tools that enhance productivity and streamline workflows.',
      problemSolving: 'Eliminate time-consuming manual processes, improve resource allocation, and boost productivity by up to 70%.',
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      projects: [
        {
          id: 3,
          title: 'Trackio',
          category: 'SaaS & Productivity',
          description: 'A comprehensive web-based time and expense tracking application designed specifically for freelancers and small businesses. Features automated time tracking, project management, expense categorization, and detailed reporting with seamless invoice generation.',
          image: trackioImage,
          technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
          highlights: ['Real-time tracking', 'Invoice automation', 'Multi-project support'],
          results: '70% time savings in project management, 60% faster invoicing'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-b border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Badge variant="outline" className="text-sm">Our Portfolio</Badge>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transforming Industries
              </span>
              <br />
              <span className="text-foreground">One Solution at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
              Discover how we leverage AI and modern technology to efficiently solve complex business problems 
              across diverse industries, delivering measurable results and sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk mb-4 text-primary">
              How We Efficiently Solve Business Problems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology combines industry expertise with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Problem Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  We identify core inefficiencies and pain points in your existing workflows
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  We develop intelligent automation tools tailored to your specific industry needs
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Measurable Results</h3>
                <p className="text-muted-foreground text-sm">
                  We deliver quantifiable improvements in efficiency, accuracy, and cost reduction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects by Industry */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {industries.map((industry, industryIndex) => {
            const IconComponent = industry.icon;
            
            return (
              <div key={industry.name} className={`mb-20 ${industryIndex !== industries.length - 1 ? 'border-b border-border pb-20' : ''}`}>
                {/* Industry Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${industry.bgColor} mb-6`}>
                    <IconComponent className={`w-6 h-6 ${industry.color}`} />
                    <h2 className={`text-2xl font-bold font-space-grotesk ${industry.color}`}>
                      {industry.name}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
                    {industry.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 max-w-4xl mx-auto">
                    <h3 className="font-semibold text-primary mb-2">How We Solve Problems:</h3>
                    <p className="text-muted-foreground">
                      {industry.problemSolving}
                    </p>
                  </div>
                </div>

                {/* Industry Projects */}
                <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
                  {industry.projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl group">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Project Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Project Content */}
                        <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="mb-6">
                            <Badge variant="outline" className="mb-3 text-primary border-primary/30">
                              {project.category}
                            </Badge>
                            <h3 className="text-3xl font-bold font-space-grotesk text-primary mb-4">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {project.description}
                            </p>
                          </div>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Key Features
                            </h4>
                            <div className="space-y-2">
                              {project.highlights.map((highlight, highlightIndex) => (
                                <div key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Results */}
                          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4">
                            <h4 className="font-semibold text-primary mb-2">Results Achieved</h4>
                            <p className="text-sm text-muted-foreground">
                              {project.results}
                            </p>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-space-grotesk mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can efficiently solve your unique business challenges with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="px-8">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg" className="px-8">
                View More Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;