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
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const navigate = useNavigate();


  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-background to-[#e3e4f9] flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="container mx-auto px-6 py-40 relative z-10">
        {/* Main Hero Content */}
        <div className="mx-auto py-8 text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-semibold font-poppins leading-tight text-primary">
            <div className="min-h-[1.2em]">
              <span className="text-[#3B82F6]">AI Accelerated, </span>{" "}
              <span>Expertly Perfected!</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl mt-4 text-muted-foreground font-quicksand max-w-5xl mx-auto leading-relaxed">
            We build and provide AI, Data, and Cloud engineering solutions that
            automate processes, improve decision-making, and help enterprises
            scale while empowering startups to grow.
          </p>
          <Button
            onClick={() => navigate("/booking")}
            className="flex items-center mx-auto mt-12 gap-10 pl-3 pr-0.5 py-0.5 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full transition-colors"
          >
            <span className="font-open font-medium text-base text-white leading-tight">
              Let's Talk
            </span>
            <div className="flex items-center justify-center m-1.5 w-8 h-8 bg-white rounded-full">
              <ArrowUpRight className="w-5 h-5 text-[#0F172A]" />
            </div>
          </Button>
        </div>
        {/* Feature divs */}
        <section className="w-full max-w-7xl mx-auto px-4 font-open">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-end gap-6">
              <div className="flex justify-around items-center text-center bg-white rounded-xl shadow-md border border-gray-100 px-5 py-3">
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

              <div className="flex items-center justify-between gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-3">
                  <img src="/upwork.svg" alt="Upwork" width={32} />
                  <div>
                    <p className="font-semibold text-lg">Delamain Software</p>
                    <p className="text-xs text-gray-500 underline">
                      See Full Profile
                    </p>
                  </div>
                </div>
                <ArrowUpRightFromCircle className="w-6 h-6 text-gray-400" />
              </div>
            </div>

            {/* CENTER COLUMN */}
            <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
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
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-3 pr-12 w-fit">
                <div>
                  <p className="font-semibold text-lg underline decoration-dotted underline-offset-2 mb-4">Overall Reviews <ArrowUpRightFromCircle className="w-5 h-5 inline ml-2"/> </p>
                  <img src="/stars.svg" width={100} alt="Star Rating" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3">
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
