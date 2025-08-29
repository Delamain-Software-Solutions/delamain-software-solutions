import React from 'react';
import { CheckCircle, XCircle, Clock, DollarSign, AlertTriangle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ComparisonTable = () => {
  const comparisons = [
    {
      aspect: 'Development Speed',
      traditional: { value: '1-6 months', icon: Clock, color: 'text-muted-foreground', bgColor: 'bg-muted' },
      ai: { value: '2-4 weeks', icon: Zap, color: 'text-primary dark:text-accent', bgColor: 'bg-primary/5 dark:bg-accent/5' }
    },
    {
      aspect: 'Cost Efficiency',
      traditional: { value: '$1k - $50k', icon: DollarSign, color: 'text-muted-foreground', bgColor: 'bg-muted' },
      ai: { value: '$50 - $5k', icon: CheckCircle, color: 'text-primary dark:text-accent', bgColor: 'bg-primary/5 dark:bg-accent/5' }
    },
    {
      aspect: 'Error Rate',
      traditional: { value: 'Medium Risk', icon: AlertTriangle, color: 'text-muted-foreground', bgColor: 'bg-muted' },
      ai: { value: 'Minimal Risk', icon: CheckCircle, color: 'text-primary dark:text-accent', bgColor: 'bg-primary/5 dark:bg-accent/5' }
    },
    {
      aspect: 'Scalability',
      traditional: { value: 'Limited', icon: XCircle, color: 'text-muted-foreground', bgColor: 'bg-muted' },
      ai: { value: 'Unlimited', icon: CheckCircle, color: 'text-primary dark:text-accent', bgColor: 'bg-primary/5 dark:bg-accent/5' }
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
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose <span className="text-primary">AI-Assisted</span>
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
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl ${item.traditional.bgColor}`}>
                        <item.traditional.icon className={`h-6 w-6 ${item.traditional.color}`} />
                        <span className={`font-semibold text-md ${item.traditional.color}`}>
                          {item.traditional.value}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl ${item.ai.bgColor}`}>
                        <item.ai.icon className={`h-6 w-6 ${item.ai.color}`} />
                        <span className={`font-semibold text-md ${item.ai.color}`}>
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

export default ComparisonTable;