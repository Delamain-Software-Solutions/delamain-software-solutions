import { CheckCircle, Clock, AlertTriangle, Zap, Users, BrainCircuit, Weight, ChartColumnIncreasing, ArrowUpRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '../ui/button';

const Comparison = () => {
  const comparisons = [
    {
      aspect: 'Development Speed',
      traditional: { value: 'Manual, slow cycles', icon: Clock },
      ai: { value: 'Accelerated automated workflows', icon: Zap }
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

  return (
    <section className="pt-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins mb-6">
            <span className="block text-4xl lg:text-5xl text-secondary-foreground font-medium mb-4">
              WHY DELAMAIN
            </span>
            <span className="text-primary text-5xl lg:text-6xl font-semibold">Why Choose AI-Accelerated <br /> Development?</span>
          </h2>
          <p className="text-2xl max-w-5xl mx-auto text-muted-foreground">
            See how our AI-powered development process delivers faster, smarter, and more scalable results compared to traditional methods.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="comparison-table">
            <div className="neumo-inner"></div>
            <Table className="hover:[&_tr:hover]:bg-transparent">
              <TableHeader>
                <TableRow className="border-b border-slate-200">
                  <TableHead className="text-left py-6 px-8 text-lg font-semibold text-slate-800">
                    Development Aspect
                  </TableHead>
                  <TableHead className="text-center py-6 px-8 text-lg font-semibold text-slate-600">
                    Traditional Development
                  </TableHead>
                  <TableHead className="text-center py-6 px-8 text-lg font-semibold text-primary">
                    AI-Assisted Development
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="border-b border-slate-100"
                  >
                    <TableCell className="py-8 px-8">
                      <div className="font-semibold text-lg text-slate-800">
                        {item.aspect}
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl bg-[#e9eaef]`}>
                        <item.traditional.icon className={`h-6 w-6 text-muted-foreground`} />
                        <span className={`font-semibold text-md text-muted-foreground`}>
                          {item.traditional.value}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl bg-[#EDF4FF]`}>
                        <item.ai.icon className={`h-6 w-6 text-[#3B82F6]`} />
                        <span className={`font-semibold text-md text-[#3B82F6]`}>
                          {item.ai.value}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
        <div className='flex items-center justify-center gap-6 my-10'>
          <Zap className="h-6 w-6 fill-[#3B82F6] text-[#3B82F6]" />
          <p className='font-bold text-3xl'>AI doesn't replace expertise — it amplifies it.</p>
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-10 pl-3 pr-0.5 py-5 border border-[#3B82F6] bg-transparent text-[#3B82F6] rounded-full transition-colors"
          >
            <span className="font-open font-semibold text-base leading-tight">
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