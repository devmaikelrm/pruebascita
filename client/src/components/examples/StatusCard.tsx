import { StatusCard, StatusGrid } from '../status-card'
import { Users, Calendar, Activity, AlertTriangle } from "lucide-react"

export default function StatusCardExample() {
  return (
    <div className="p-6 space-y-6 bg-background">
      <StatusGrid>
        <StatusCard
          title="Active Clients"
          value={24}
          description="3 new this week"
          status="success"
          trend="up"
          icon={<Users />}
        />
        <StatusCard
          title="Queue Status"
          value={7}
          description="Pending appointments"
          status="info"
          trend="stable"
          icon={<Activity />}
        />
        <StatusCard
          title="This Week"
          value={12}
          description="Appointments booked"
          status="success"
          trend="up"
          icon={<Calendar />}
        />
        <StatusCard
          title="Captcha Alerts"
          value={2}
          description="Require attention"
          status="warning"
          icon={<AlertTriangle />}
        />
      </StatusGrid>
    </div>
  )
}