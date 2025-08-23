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
      traditional: { value: 'High Risk', icon: AlertTriangle, color: 'text-muted-foreground', bgColor: 'bg-muted' },
      ai: { value: 'Minimal Risk', icon: CheckCircle, color: 'text-primary dark:text-accent', bgColor: 'bg-primary/5 dark:bg-accent/5' }
    },
    {
      aspect: 'Scalability',
      traditional: { value: 'Limited', icon: XCircle, color: 'text-muted-foreground', bgColor: 'bg-muted' },
      ai: { value: 'Unlimited', icon: CheckCircle, color: 'text-primary dark:text-accent', bgColor: 'bg-primary/5 dark:bg-accent/5' }
    }
  ];

  return (
    <section className="py-24 bg-muted/30 dark:bg-slate-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-foreground">
              Why Choose <span className="text-primary">AI-Assisted</span>
            </span>
            <br />
            <span className="text-foreground">Development?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our AI-powered development approach outperforms traditional methods in every key metric.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 dark:bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-border/50 dark:border-white/10 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border/50 dark:border-white/10">
                  <TableHead className="text-left py-6 px-8 text-lg font-semibold text-foreground">
                    Development Aspect
                  </TableHead>
                  <TableHead className="text-center py-6 px-8 text-lg font-semibold text-muted-foreground">
                    Traditional Development
                  </TableHead>
                  <TableHead className="text-center py-6 px-8 text-lg font-semibold text-primary dark:text-accent">
                    AI-Assisted Development
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow 
                    key={index} 
                    className="border-b border-border/30 dark:border-white/5 hover:bg-muted/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <TableCell className="py-8 px-8">
                      <div className="font-semibold text-lg text-foreground">
                        {item.aspect}
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl ${item.traditional.bgColor}`}>
                        <item.traditional.icon className={`h-6 w-6 ${item.traditional.color}`} />
                        <span className={`font-semibold text-lg ${item.traditional.color}`}>
                          {item.traditional.value}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-8 px-8">
                      <div className={`flex items-center justify-center gap-3 p-4 rounded-xl ${item.ai.bgColor}`}>
                        <item.ai.icon className={`h-6 w-6 ${item.ai.color}`} />
                        <span className={`font-semibold text-lg ${item.ai.color}`}>
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