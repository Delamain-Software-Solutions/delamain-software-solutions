import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, AlertTriangle, Zap, Users, BrainCircuit, Weight, ChartColumnIncreasing, ArrowUpRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '../ui/button';

const Comparison = () => {
  const comparisons = [
    {
      aspect: 'Development Speed',
      traditional: { value: 'Manual, slow cycles', icon: Clock },
      ai: { value: 'Fast automated workflows', icon: Zap }
    },
    {
      aspect: 'Cost Efficiency',
      traditional: { value: 'High labor dependency', icon: Users },
      ai: { value: 'Reduced human effort', icon: BrainCircuit }
    },
    {
      aspect: 'Error Rate',
      traditional: { value: 'Human-prone errors', icon: AlertTriangle },
      ai: { value: 'AI-driven accuracy', icon: CheckCircle }
    },
    {
      aspect: 'Scalability',
      traditional: { value: 'Resource-intensive scaling', icon: Weight },
      ai: { value: 'Intelligent scalable systems', icon: ChartColumnIncreasing }
    }
  ];

  const [view, setView] = useState<'traditional' | 'ai'>('ai');

  // Animation variants
  const aiAnim = {
    initial: { opacity: 0, scale: 0.8, x: 20, filter: 'blur(10px)' },
    animate: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 15,
        mass: 1
      } as const
    },
    exit: { opacity: 0, scale: 1.1, filter: 'blur(5px)' }
  };

  const traditionalAnim = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "linear" 
      } as const
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <section className="pt-10 sm:pt-16 md:pt-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-poppins mb-6">
            <span className="block text-xl sm:text-3xl lg:text-5xl text-secondary-foreground font-medium mb-4">
              WHY DELAMAIN
            </span>
            <span className="text-primary text-2xl sm:text-4xl lg:text-6xl font-semibold">Why Choose <span className="text-[#3B82F6] truncate">AI-Accelerated</span> <br /> Development?</span>
          </h2>
          <p className="text-lg lg:text-2xl max-w-5xl mx-auto text-muted-foreground">
            See how our AI-powered development process delivers faster, smarter, and more scalable results compared to traditional methods.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile Toggle */}
          <div className="flex md:hidden justify-center mb-8 p-1.5 bg-[#F1F3F5] rounded-full max-w-[320px] mx-auto border border-[#DEE2E6] relative overflow-hidden">
            <button 
              onClick={() => setView('traditional')}
              className={`relative z-10 flex-1 py-2 px-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                view === 'traditional' ? 'text-[#6C757D]' : 'text-[#ADB5BD]'
              }`}
            >
              Traditional
              {view === 'traditional' && (
                <motion.div 
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-white shadow-md rounded-full -z-10"
                />
              )}
            </button>
            <button 
              onClick={() => setView('ai')}
              className={`relative z-10 flex-1 py-2 px-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                view === 'ai' ? 'text-[#3B82F6]' : 'text-[#ADB5BD]'
              }`}
            >
              AI Accelerated
              {view === 'ai' && (
                <motion.div 
                  layoutId="toggle-bg"
                  className="absolute inset-0 bg-white shadow-md rounded-full -z-10 border border-[#3B82F6]/10"
                />
              )}
              {view === 'ai' && (
                <motion.div 
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#3B82F6]/5 rounded-full -z-20 blur-sm"
                />
              )}
            </button>
          </div>

          <div className="comparison-table">
            <div className="neumo-inner"></div>
            <Table className="hover:[&_tr:hover]:bg-transparent">
              <TableHeader>
                <TableRow className="border-b border-slate-200">
                  <TableHead className="text-left py-6 px-4 md:px-8 text-sm md:text-base lg:text-lg font-bold text-slate-800">
                    Aspect
                  </TableHead>
                  <TableHead className={`text-center py-6 px-4 md:px-8 text-sm md:text-base lg:text-lg font-bold text-slate-600 transition-all duration-300 ${
                    view === 'traditional' ? 'table-cell' : 'hidden md:table-cell'
                  }`}>
                    Traditional
                  </TableHead>
                  <TableHead className={`text-center py-6 px-4 md:px-8 text-sm md:text-base lg:text-lg font-bold text-[#3B82F6] transition-all duration-300 ${
                    view === 'ai' ? 'table-cell' : 'hidden md:table-cell'
                  }`}>
                    AI Accelerated
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="border-b border-slate-100"
                  >
                    <TableCell className="py-4 md:py-8 px-4 md:px-8">
                      <div className="font-bold text-sm md:text-base lg:text-lg text-slate-800">
                        {item.aspect}
                      </div>
                    </TableCell>
                    <TableCell className={`py-4 md:py-8 px-2 md:px-8 overflow-hidden transition-all duration-300 ${
                      view === 'traditional' ? 'table-cell' : 'hidden md:table-cell'
                    }`}>
                      <AnimatePresence mode="wait">
                        {(view === 'traditional' || window.innerWidth >= 768) && (
                          <motion.div
                            key={`traditional-${index}`}
                            variants={traditionalAnim}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`flex items-center justify-start gap-2 md:gap-3 p-2 md:p-4 rounded-xl bg-[#e9eaef] border border-transparent`}
                          >
                            <item.traditional.icon className={`shrink-0 h-4 w-4 md:h-6 md:w-6 text-[#6C757D]`} />
                            <span className={`font-bold text-[10px] sm:text-xs md:text-sm lg:text-base text-[#6C757D]`}>
                              {item.traditional.value}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </TableCell>
                    <TableCell className={`py-4 md:py-8 px-2 md:px-8 overflow-hidden transition-all duration-300 ${
                      view === 'ai' ? 'table-cell' : 'hidden md:table-cell'
                    }`}>
                      <AnimatePresence mode="wait">
                        {(view === 'ai' || window.innerWidth >= 768) && (
                          <motion.div
                            key={`ai-${index}`}
                            variants={aiAnim}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`flex items-center justify-start gap-2 md:gap-3 p-2 md:p-4 rounded-xl bg-gradient-to-br from-[#EDF4FF] up to-[#FFFFFF] border border-[#3B82F6]/20 shadow-sm`}
                          >
                            <item.ai.icon className={`shrink-0 h-4 w-4 md:h-6 md:w-6 text-[#3B82F6]`} />
                            <span className={`font-bold text-[10px] sm:text-xs md:text-sm lg:text-base text-[#3B82F6]`}>
                              {item.ai.value}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4 my-10'>
          <Zap className="shrink-0 h-6 w-6 fill-[#3B82F6] text-[#3B82F6]" />
          <p className='font-bold text-lg sm:text-xl lg:text-3xl text-center'>AI doesn't replace expertise — <span className="text-[#3B82F6] truncate">it amplifies it.</span></p>
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-4 lg:gap-10 pl-3 pr-0.5 py-5 border border-[#3B82F6] bg-transparent text-[#3B82F6] rounded-full transition-colors"
          >
            <span className="font-open font-semibold text-sm lg:text-base leading-tight">
              See how we build
            </span>
            <div className="flex items-center justify-center m-1.5 mr-0.5 w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#4C4FF0] rounded-full">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </Button>

        </div>
        <div className="w-full mx-auto bg-muted-foreground/20 rounded-2xl h-0.5"></div>
      </div>
    </section>
  );
};

export default Comparison;