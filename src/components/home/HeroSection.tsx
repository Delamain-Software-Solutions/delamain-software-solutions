import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Brain,
  Zap,
  TrendingUp,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  CircleArrowOutUpRight,
} from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();


  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-background to-[#e3e4f9] flex items-center justify-center relative overflow-hidden"
    >

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
      </div>

      {/* AI Glow elements (refined and subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-indigo-100/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="container mx-auto sm:px-6 py-10 sm:py-20 md:py-40 relative z-10">
        {/* Main Hero Content */}
        <div className="mx-auto pt-20 sm:py-8 text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-poppins leading-tight text-primary">
            <div className="min-h-[1.2em]">
              <span className="text-[#3B82F6]">AI Accelerated, </span>{" "}
              <span>Expertly Perfected!</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="sm:text-xl mt-4 text-muted-foreground font-quicksand max-w-5xl mx-auto leading-relaxed">
            We build and provide AI, Data, and Cloud engineering solutions that
            automate processes, improve decision-making, and help enterprises
            scale while empowering startups to grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-12">
            <Button
              onClick={() => navigate("/booking")}
              className="flex items-center gap-10 pl-3 pr-0.5 py-0.5 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="font-open font-medium text-base text-white leading-tight">
                Let's Talk
              </span>
              <div className="flex items-center justify-center m-1.5 w-8 h-8 bg-white rounded-full">
                <ArrowUpRight className="w-5 h-5 text-[#0F172A]" />
              </div>
            </Button>

            <Button
              onClick={() => window.open("https://calendly.com/", "_blank")}
              variant="outline"
              className="flex items-center gap-3 px-6 h-[42px] border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/5 hover:text-[#3B82F6] rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              <Zap className="w-5 h-5" />
              Schedule Call
            </Button>
          </div>
        </div>
        {/* Feature divs */}
        <section className="w-full max-w-7xl mx-auto sm:px-4 font-open mt-6 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-md:max-w-sm gap-6">
            {/* LEFT COLUMN */}
            <div className="order-2 md:order-2 md:col-span-2 lg:order-1 lg:col-span-1 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col lg:justify-end gap-6">
              <div className="flex justify-around items-center text-center bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 px-5 py-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9EFFE] p-3 rounded-full">
                    <img
                      src="/ai-ml.svg"
                      width={18}
                      height={18}
                      alt="AI / ML Solutions"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-700 text-center">
                    AI / ML <br /> Solutions
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9EFFE] p-3 rounded-full">
                    <img
                      src="/full-stack.svg"
                      width={18}
                      height={18}
                      alt="Full-Stack Engineering"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-700 text-center">
                    Full-Stack <br /> Engineering
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E9EFFE] p-3 rounded-full">
                    <img
                      src="/cloud.svg"
                      width={18}
                      height={18}
                      alt="Cloud & DevOps"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-700 text-center">
                    Cloud & <br /> DevOps
                  </p>
                </div>
              </div>

              <a
                href="https://www.upwork.com/agencies/1959629402932155222/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 group"
              >
                <div className="flex items-center gap-3">
                  <img src="/upwork.svg" alt="Upwork" width={32} />
                  <div>
                    <p className="font-semibold text-lg">Delamain Software</p>
                    <p className="text-xs text-gray-500 underline group-hover:text-blue-500 transition-colors">
                      See Full Profile
                    </p>
                  </div>
                </div>
                <ArrowUpRightFromCircle className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>

            {/* CENTER COLUMN */}
            <div className="order-1 md:order-1 md:w-fit mx-auto md:col-span-2 lg:order-2 lg:col-span-1 flex flex-col gap-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100">
              <div>
                <h3 className="text-lg font-semibold">Services</h3>
                <p className="text-sm text-gray-500">
                  Empowering your business with modern, scalable solutions.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="bg-[#E9EFFE] p-3 rounded-full">
                  <img src="/website.svg" width={20} alt="Website" />
                </div>
                <span className="font-semibold">
                  Web Design & Development
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="bg-[#E9EFFE] p-3 rounded-full">
                    <img src="/desktop.svg" width={20} alt="Desktop Applications" />
                  </div>
                  <p className="font-semibold">Desktop <br /> Applications</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="bg-[#E9EFFE] p-3 rounded-full">
                    <img src="/mobile.svg" width={20} alt="Mobile Applications" />
                  </div>
                  <p className="font-semibold">Mobile <br /> Applications</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="order-3 md:order-3 md:col-span-2 lg:order-3 lg:col-span-1 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-6">
              <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-3 pr-12 w-full lg:w-fit transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100">
                <div>
                  <p className="font-semibold text-lg underline decoration-dotted underline-offset-2 mb-4">Overall Reviews <ArrowUpRightFromCircle className="w-5 h-5 inline ml-2" /> </p>
                  <img src="/stars.svg" width={100} alt="Star Rating" />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100">
                <p className="font-semibold text-lg mb-1">Industries Served</p>
                <p className="text-xs text-gray-700">
                  FinTech • SaaS • Healthcare • Gaming • Enterprise • EdTech
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
      </div>
    </section>
  );
};

export default HeroSection;
