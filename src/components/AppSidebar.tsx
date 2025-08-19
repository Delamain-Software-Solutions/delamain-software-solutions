import { useState } from "react";
import { 
  Home, 
  Code, 
  Settings, 
  Users, 
  BarChart3, 
  Briefcase, 
  MessageSquare,
  ChevronRight,
  Zap,
  Database
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Services", url: "#services", icon: Code },
  { title: "Projects", url: "/projects", icon: Briefcase },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

const aiItems = [
  { title: "AI Models", url: "/ai-models", icon: Zap },
  { title: "Data Pipeline", url: "/data", icon: Database },
  { title: "Testing Hub", url: "/testing", icon: Settings },
];

const otherItems = [
  { title: "Team", url: "/team", icon: Users },
  { title: "Contact", url: "/contact", icon: MessageSquare },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path) || (path.startsWith("#") && currentPath === "/");
  };

  const getNavCls = (path: string) =>
    isActive(path) 
      ? "bg-primary/20 text-primary border-r-2 border-primary font-medium shadow-glow" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className={`${!open ? "w-14" : "w-64"} bg-gradient-dark border-r border-border/50 transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="p-4">
        {/* Logo Section */}
        {open && (
          <div className="mb-8 px-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg gradient-primary">DelaMain</span>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={`${!open ? "hidden" : ""} text-xs uppercase tracking-wider text-muted-foreground mb-2`}>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center px-3 py-2 rounded-lg transition-all ${getNavCls(item.url)}`}
                    >
                      <item.icon className={`h-4 w-4 ${!open ? "" : "mr-3"}`} />
                      {open && <span>{item.title}</span>}
                      {open && isActive(item.url) && (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* AI Tools */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`${!open ? "hidden" : ""} text-xs uppercase tracking-wider text-muted-foreground mb-2`}>
            AI Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {aiItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center px-3 py-2 rounded-lg transition-all ${getNavCls(item.url)}`}
                    >
                      <item.icon className={`h-4 w-4 ${!open ? "" : "mr-3"}`} />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Other */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`${!open ? "hidden" : ""} text-xs uppercase tracking-wider text-muted-foreground mb-2`}>
            Other
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {otherItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center px-3 py-2 rounded-lg transition-all ${getNavCls(item.url)}`}
                    >
                      <item.icon className={`h-4 w-4 ${!open ? "" : "mr-3"}`} />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
