import React from 'react';
import { CheckCircle, XCircle, Clock, DollarSign, AlertTriangle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Comparison = () => {
  const comparisons = [
    {
      aspect: 'Development Speed',
      traditional: { value: 'Slower Iteration', icon: Clock },
      ai: { value: 'Faster Delivery', icon: Zap }
    },
    {
      aspect: 'Cost Efficiency',
      traditional: { value: 'Higher Costs', icon: DollarSign },
      ai: { value: 'Reduced Costs', icon: CheckCircle }
    },
    {
      aspect: 'Error Rate',
      traditional: { value: 'Moderate Risk', icon: AlertTriangle },
      ai: { value: 'Lower Risk', icon: CheckCircle }
    },
    {
      aspect: 'Scalability',
      traditional: { value: 'Limited Growth', icon: XCircle },
      ai: { value: 'Easier Scaling', icon: CheckCircle }
    }
  ];

  return (
    <section className="py-24 pb-32 bg-slate-900 dark:bg-slate-900 relative overflow-hidden">
      {/* Background AI Developer Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/hero-ai-development.jpg" 
          alt="AI Development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose <span className="text-primary">AI-Accelerated</span>
            </span>
            <br />
            <span className="text-white">Development?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how our AI-powered development approach outperforms traditional methods in every key metric.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-100 rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] relative">
            <Table>
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
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <TableCell className="py-8 px-8">
                      <div className="font-semibold text-lg text-slate-800">
                        {item.aspect}
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl bg-muted`}>
                        <item.traditional.icon className={`h-6 w-6 text-muted-foreground`} />
                        <span className={`font-semibold text-md text-muted-foreground`}>
                          {item.traditional.value}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/10`}>
                        <item.ai.icon className={`h-6 w-6 text-primary`} />
                        <span className={`font-semibold text-md text-primary`}>
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
      </div>
    </section>
  );
};

export default Comparison;