import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-space-grotesk mb-4">
              Book a Consultation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a call with our team to discuss your project requirements and get a personalized solution.
            </p>
          </div>

          {/* Meeting Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" 
                  onClick={() => {
                    const cal15 = document.querySelector('[data-cal-namespace="15min"]') as any;
                    if (cal15?.Cal) cal15.Cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
                  }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Quick Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">15 Minutes</p>
                <p className="text-muted-foreground">
                  Perfect for quick questions, project scope discussion, or initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    const cal30 = document.querySelector('[data-cal-namespace="30min"]') as any;
                    if (cal30?.Cal) cal30.Cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
                  }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Detailed Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">30 Minutes</p>
                <p className="text-muted-foreground">
                  In-depth discussion about your project, technical requirements, and timeline planning.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Embedded Cal.com Widgets */}
          <div className="space-y-8">
            {/* 15-minute booking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Book 15-Minute Quick Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  data-cal-namespace="15min"
                  data-cal-link="afnan-riaz/15min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                  style={{ width: '100%', height: '600px', overflow: 'scroll' }}
                ></div>
              </CardContent>
            </Card>

            {/* 30-minute booking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Book 30-Minute Detailed Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  data-cal-namespace="30min"
                  data-cal-link="afnan-riaz/30min"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                  style={{ width: '100%', height: '600px', overflow: 'scroll' }}
                ></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;