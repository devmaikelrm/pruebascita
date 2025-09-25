import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  title: string
  value: string | number
  description?: string
  trend?: "up" | "down" | "stable"
  status?: "success" | "warning" | "error" | "info"
  icon?: React.ReactNode
  className?: string
}

export function StatusCard({
  title,
  value,
  description,
  trend,
  status = "info",
  icon,
  className
}: StatusCardProps) {
  const statusColors = {
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400", 
    error: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400"
  }

  const trendIcons = {
    up: "↗",
    down: "↘", 
    stable: "→"
  }

  return (
    <Card className={cn("hover-elevate", className)} data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className={cn("h-4 w-4", statusColors[status])}>{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid={`value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        {(description || trend) && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            {trend && (
              <Badge variant="outline" className="h-5 px-1">
                {trendIcons[trend]}
              </Badge>
            )}
            {description && <span>{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface StatusGridProps {
  children: React.ReactNode
  className?: string
}

export function StatusGrid({ children, className }: StatusGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {children}
    </div>
  )
}