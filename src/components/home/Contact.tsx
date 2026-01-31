import { Button } from '@/components/ui/button';
import { ArrowUpRight, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="py-10 sm:py-16 md:py-24 bg-white border-t-4 border-[#6366F1]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#3B82F6] rounded-full flex items-center justify-center mb-4 sm:mb-8">
            <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold font-poppins mb-4 sm:mb-6 text-foreground">
            Tell Us About Your Next Creative Project
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10">
            Let's create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/booking">
              <Button
                className="flex items-center gap-10 pl-3 pr-0.5 py-0.5 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full transition-colors"
              >
                <span className="font-open font-medium text-base text-white leading-tight">
                  Send a Message
                </span>
                <div className="flex items-center justify-center m-1.5 mr-0.5 w-8 h-8 bg-white rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-[#0F172A]" />
                </div>
              </Button>
            </Link>
            <Link to="/work">
              <Button
                className="flex items-center gap-10 pl-3 pr-0.5 py-0.5 border border-[#3B82F6] bg-transparent text-[#3B82F6] rounded-full transition-colors"
              >
                <span className="font-open font-medium text-base leading-tight">
                  Book a Call
                </span>
                <div className="flex items-center justify-center m-1.5 mr-0.5 w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;