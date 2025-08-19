import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40 flex items-center px-6">
            <SidebarTrigger className="mr-4 hover:bg-muted/50 p-2 rounded-lg transition-colors" />
            <div className="flex-1 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="font-semibold text-lg">Dashboard</h2>
                <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>•</span>
                  <span>AI Development Platform</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">All systems operational</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Hero />
            <Services />
            <Comparison />
            <Process />
            <Footer />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
