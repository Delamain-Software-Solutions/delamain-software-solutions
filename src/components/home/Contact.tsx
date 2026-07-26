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
import { ArrowUpRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';
import RevealOnScroll from '../shared/RevealOnScroll';
import SectionBadge from '../shared/SectionBadge';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  description: z.string().min(10, { message: "Please provide more detail about your work." }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b63690ae-b1c2-43d5-9715-7730fd8c2170",
          ...values,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-[clamp(80px,10vw,140px)] px-5 sm:px-8">
      <div
        className="max-w-[1000px] mx-auto grid gap-[clamp(32px,5vw,64px)] items-start"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        <RevealOnScroll>
          <SectionBadge className="block mb-[22px]">Say hello</SectionBadge>
          <h2 className="font-hanken font-bold text-[clamp(34px,4.6vw,56px)] leading-[1.05] tracking-[-.03em] text-foreground">
            Tell us what you're building.
          </h2>
          <p className="mt-5 text-lg leading-[1.5] text-muted-foreground">
            We reply to everything, usually within a day. No forms-into-the-void here.
          </p>
          <div className="mt-9 flex flex-col gap-[22px]">
            <div>
              <div className="text-[13px] font-semibold text-muted-foreground">Email us</div>
              <a href="mailto:contact@delamainsoftware.com" className="text-[17px] font-semibold text-foreground hover:text-accent transition-colors">
                contact@delamainsoftware.com
              </a>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-muted-foreground">WhatsApp</div>
              <div className="text-[17px] font-semibold text-foreground">+92 302 4072240</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-muted-foreground">Visit</div>
              <div className="text-[17px] font-semibold text-foreground">
                Block B, Milaad Street, Faisal Town, Lahore, Pakistan
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="bg-white rounded-[26px] p-[clamp(26px,3vw,40px)] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)]">
          <h3 className="text-2xl font-hanken font-bold">Send us a message</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[18px] mt-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ada Lovelace" {...field} className="bg-[#fbfbfd]" />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ada@example.com" type="email" {...field} className="bg-[#fbfbfd]" />
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
                    <FormLabel>What are you building?</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Tell us a little about your project…"
                        className="bg-[#fbfbfd] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="flex items-center justify-center gap-2.5 py-6 bg-foreground hover:bg-foreground/90 transition-colors rounded-pill text-base font-semibold text-white"
              >
                Send message
                <span className="flex items-center justify-center w-[26px] h-[26px] bg-white rounded-full text-foreground">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </Form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
