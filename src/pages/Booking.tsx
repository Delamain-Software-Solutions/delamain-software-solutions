import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Cal, { getCalApi } from "@calcom/embed-react";


const Booking = () => {
  const navigate = useNavigate();

useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",   // or "dark"
        styles: { branding: { brandColor: "#4F46E5" } }, // optional
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background mt-24">
      {/* Navigation Header */}
      <div className="container mx-auto px-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-poppins mb-4">
              Book a Consultation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a call with our team to discuss your project requirements and get a personalized solution.
            </p>
          </div>
          <Cal
            calLink="delamain-software"
            style={{ width: "100%", height: "100%", border: "0" }}
            config={{
              layout: "month_view",
              theme: "light",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;