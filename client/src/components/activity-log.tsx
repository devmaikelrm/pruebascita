import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { formatDistanceToNow } from "date-fns"
import { CheckCircle, AlertCircle, Clock, XCircle, User, Calendar, Bot } from "lucide-react"

interface ActivityItem {
  id: string
  type: "appointment" | "error" | "captcha" | "client" | "system"
  title: string
  description: string
  timestamp: Date
  status: "success" | "error" | "warning" | "info"
  clientName?: string
  metadata?: Record<string, any>
}

interface ActivityLogProps {
  activities: ActivityItem[]
  className?: string
  maxHeight?: string
}

export function ActivityLog({ activities, className, maxHeight = "400px" }: ActivityLogProps) {
  const getStatusIcon = (status: string, type: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      default:
        return type === "captcha" ? <Bot className="h-4 w-4 text-blue-600" /> : <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return <Calendar className="h-3 w-3" />
      case "client": 
        return <User className="h-3 w-3" />
      case "captcha":
        return <Bot className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "success":
        return "default" as const
      case "error":
        return "destructive" as const
      case "warning":
        return "secondary" as const
      default:
        return "outline" as const
    }
  }

  return (
    <Card className={className} data-testid="card-activity-log">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="px-6 pb-6" style={{ height: maxHeight }}>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={activity.id} className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(activity.status, activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium truncate">
                        {activity.title}
                      </p>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Badge 
                          variant={getStatusBadgeVariant(activity.status)} 
                          className="h-5 px-1 text-xs"
                        >
                          {getTypeIcon(activity.type)}
                          <span className="ml-1">{activity.type}</span>
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      {activity.clientName && (
                        <Badge variant="outline" className="h-5 text-xs">
                          <User className="w-3 h-3 mr-1" />
                          {activity.clientName}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                      </span>
                    </div>
                  </div>
                </div>
                {index < activities.length - 1 && <Separator className="ml-7" />}
              </div>
            ))}
            {activities.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No recent activity</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}