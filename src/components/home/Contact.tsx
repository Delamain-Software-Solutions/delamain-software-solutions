import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ArrowUpRight, Mail, Phone, MapPin, Send, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  description: z.string().min(10, { message: "Please provide more detail about your work." }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t-4 border-[#6366F1]">
      <div className="container mx-auto px-6">

        {/* Top Section: Centered Headings */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#3B82F6] rounded-full flex items-center justify-center mb-4 sm:mb-8">
            <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold font-poppins mb-4 sm:mb-6 text-foreground">
            Tell Us About Your Next Creative Project
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Let's create something amazing together! 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Contact Info & CTA */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                  <a href="mailto:contact@delamainsoftware.com" className="text-lg font-semibold text-foreground hover:text-[#3B82F6] transition-colors">
                    contact@delamainsoftware.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Call Us</p>
                  <a href="tel:+92 302 4072240" className="text-lg font-semibold text-foreground hover:text-[#3B82F6] transition-colors">
                    +92 302 4072240
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Visit Us</p>
                  <p className="text-lg font-semibold text-foreground">
                    Block B, Milaad Street, Faisal Town, Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/booking">
                <Button
                  className="group flex items-center gap-2 pl-6 pr-2 py-6 bg-white border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  <span className="font-semibold text-lg">Book a Call</span>
                  <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold font-poppins mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" type="tel" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description for work</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little about your project..."
                          className="min-h-[120px] bg-white resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full py-6 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] hover:opacity-90 transition-opacity rounded-xl text-lg font-semibold"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;