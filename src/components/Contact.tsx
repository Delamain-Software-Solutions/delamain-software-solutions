import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-muted from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-sm mb-4">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6">
            Ready to Start Your <span className="text-primary">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Let's discuss how AI-powered development can transform your business. Get in touch today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-primary">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      123 Tech Street, Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Address</h4>
                    <p className="text-muted-foreground">contact@delamainsoftware.com</p>
                    {/* <p className="text-muted-foreground">info@delamain.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">+92 314 7360027</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Consultation Call
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-5 w-5" />
                Send us an Email
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-space-grotesk text-primary">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    required 
                    className="w-full"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number (optional)
                  </label>
                  <Input 
                    type="tel" 
                    className="w-full"
                    placeholder="Include country code"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    required 
                    rows={4}
                    className="w-full resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;