import { Bot, Users, Calendar, Settings, Activity, AlertTriangle, BarChart3 } from "lucide-react"
import { Link, useLocation } from "wouter"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

// Menu items for navigation
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
  },
  {
    title: "Queue Status", 
    url: "/queue",
    icon: Activity,
    badge: 3, // todo: remove mock functionality - replace with real queue count
  },
  {
    title: "Operators",
    url: "/operators", 
    icon: Users,
  },
  {
    title: "Clients",
    url: "/clients",
    icon: Users,
  },
  {
    title: "Appointments",
    url: "/appointments",
    icon: Calendar,
  },
  {
    title: "Captcha Alerts",
    url: "/captcha",
    icon: AlertTriangle,
    badge: 2, // todo: remove mock functionality - replace with real captcha count
  },
  {
    title: "Bot Config",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const [location] = useLocation()

  return (
    <Sidebar data-testid="sidebar-main">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">SpanishConsular Bot</span>
            <span className="text-xs text-muted-foreground">Management Console</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.url}
                    data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto h-5">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          System Status: 
          <Badge variant="outline" className="ml-1 text-xs">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            Active
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}