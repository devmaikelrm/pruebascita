import { StatusCard, StatusGrid } from "@/components/status-card"
import { ActivityLog } from "@/components/activity-log"
import { Users, Calendar, Activity, AlertTriangle, Bot, Clock } from "lucide-react"
import { subMinutes, subHours } from "date-fns"

export default function Dashboard() {
  // todo: remove mock functionality - replace with real data from API
  const mockStats = {
    activeClients: 24,
    queuePending: 7,
    appointmentsThisWeek: 12,
    captchaAlerts: 2,
    systemStatus: "active"
  }

  const mockActivities = [
    {
      id: '1',
      type: 'appointment' as const,
      title: 'Appointment Booked Successfully',
      description: 'DNI appointment secured for March 15, 2024 at 10:30 AM',
      timestamp: subMinutes(new Date(), 5),
      status: 'success' as const,
      clientName: 'María García',
      metadata: { slot: '10:30', date: '2024-03-15' }
    },
    {
      id: '2',
      type: 'captcha' as const,
      title: 'Captcha Verification Required',
      description: 'Human verification needed for client appointment booking',
      timestamp: subMinutes(new Date(), 15),
      status: 'warning' as const,
      clientName: 'Carlos Rodríguez',
    },
    {
      id: '3',
      type: 'client' as const,
      title: 'New Client Added',
      description: 'Ana Martínez added to automation queue with priority 4',
      timestamp: subMinutes(new Date(), 32),
      status: 'info' as const,
      clientName: 'Ana Martínez',
    },
    {
      id: '4',
      type: 'error' as const,
      title: 'Booking Failed - Account Cooldown',
      description: 'Client account temporarily blocked due to error-cita.aspx',
      timestamp: subHours(new Date(), 1),
      status: 'error' as const,
      clientName: 'Luis Fernández',
    },
    {
      id: '5',
      type: 'system' as const,
      title: 'Worker Process Started',
      description: 'Appointment automation worker initialized successfully',
      timestamp: subHours(new Date(), 2),
      status: 'success' as const,
    },
  ]

  return (
    <div className="space-y-6" data-testid="page-dashboard">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor Spanish consular appointment automation system
        </p>
      </div>

      {/* Status Overview */}
      <StatusGrid>
        <StatusCard
          title="Active Clients"
          value={mockStats.activeClients}
          description="3 new this week"
          status="success"
          trend="up"
          icon={<Users />}
        />
        <StatusCard
          title="Queue Status"
          value={mockStats.queuePending}
          description="Pending appointments"
          status="info"
          trend="stable"
          icon={<Activity />}
        />
        <StatusCard
          title="This Week"
          value={mockStats.appointmentsThisWeek}
          description="Appointments booked"
          status="success"
          trend="up"
          icon={<Calendar />}
        />
        <StatusCard
          title="Captcha Alerts"
          value={mockStats.captchaAlerts}
          description="Require attention"
          status="warning"
          icon={<AlertTriangle />}
        />
      </StatusGrid>

      {/* System Status & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityLog activities={mockActivities} maxHeight="500px" />
        </div>
        
        <div className="space-y-4">
          <StatusCard
            title="System Status"
            value="Online"
            description="Worker processes active"
            status="success"
            icon={<Bot />}
            className="h-fit"
          />
          <StatusCard
            title="Next Check"
            value="2 min"
            description="Automated scan cycle"
            status="info"
            icon={<Clock />}
            className="h-fit"
          />
        </div>
      </div>
    </div>
  )
}