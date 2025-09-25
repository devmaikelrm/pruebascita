import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Play, Pause, SkipForward, RotateCcw, User, Clock, AlertTriangle } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface QueueItem {
  id: string
  clientName: string
  serviceType: string
  status: "pending" | "processing" | "failed" | "completed"
  attempts: number
  lastAttempt?: Date
  nextAttempt?: Date
  error?: string
  priority: number
}

export default function QueuePage() {
  // todo: remove mock functionality - replace with real queue data from API
  const mockQueueItems: QueueItem[] = [
    {
      id: '1',
      clientName: 'María García',
      serviceType: 'dni_habana',
      status: 'processing',
      attempts: 1,
      lastAttempt: new Date(),
      priority: 4,
    },
    {
      id: '2',
      clientName: 'Carlos Rodríguez', 
      serviceType: 'dni_habana',
      status: 'pending',
      attempts: 0,
      nextAttempt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
      priority: 3,
    },
    {
      id: '3',
      clientName: 'Ana Martínez',
      serviceType: 'passport_habana',
      status: 'failed',
      attempts: 3,
      lastAttempt: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
      nextAttempt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
      error: 'Captcha verification timeout',
      priority: 5,
    },
    {
      id: '4',
      clientName: 'Luis Fernández',
      serviceType: 'dni_habana',
      status: 'completed',
      attempts: 1,
      lastAttempt: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
      priority: 2,
    },
  ]

  const handleStartQueue = () => {
    console.log('Starting queue processing') // todo: remove mock functionality
  }

  const handlePauseQueue = () => {
    console.log('Pausing queue processing') // todo: remove mock functionality
  }

  const handleRetryItem = (itemId: string) => {
    console.log('Retrying queue item:', itemId) // todo: remove mock functionality
  }

  const handleSkipItem = (itemId: string) => {
    console.log('Skipping queue item:', itemId) // todo: remove mock functionality
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processing':
        return <Badge className="bg-blue-600">Processing</Badge>
      case 'pending':
        return <Badge className="bg-gray-600">Pending</Badge>
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>
      case 'completed':
        return <Badge className="bg-green-600">Completed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPriorityColor = (priority: number) => {
    if (priority >= 4) return "text-red-600 dark:text-red-400"
    if (priority >= 3) return "text-yellow-600 dark:text-yellow-400"
    return "text-green-600 dark:text-green-400"
  }

  const queueStats = {
    total: mockQueueItems.length,
    pending: mockQueueItems.filter(i => i.status === 'pending').length,
    processing: mockQueueItems.filter(i => i.status === 'processing').length,
    failed: mockQueueItems.filter(i => i.status === 'failed').length,
    completed: mockQueueItems.filter(i => i.status === 'completed').length,
  }

  const progressPercentage = Math.round((queueStats.completed / queueStats.total) * 100)

  return (
    <div className="space-y-6" data-testid="page-queue">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Queue Management</h1>
          <p className="text-muted-foreground">
            Monitor and control appointment booking queue
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleStartQueue} data-testid="button-start-queue">
            <Play className="h-4 w-4 mr-2" />
            Start Queue
          </Button>
          <Button variant="outline" onClick={handlePauseQueue} data-testid="button-pause-queue">
            <Pause className="h-4 w-4 mr-2" />
            Pause
          </Button>
        </div>
      </div>

      {/* Queue Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{queueStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{queueStats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{queueStats.processing}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{queueStats.failed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{queueStats.completed}</div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Queue Progress</CardTitle>
          <CardDescription>
            Overall completion progress for current queue batch
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress: {progressPercentage}%</span>
            <span>{queueStats.completed} of {queueStats.total} completed</span>
          </div>
        </CardContent>
      </Card>

      {/* Queue Items Table */}
      <Card>
        <CardHeader>
          <CardTitle>Queue Items</CardTitle>
          <CardDescription>
            Current status and details for each queue item
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attempts</TableHead>
                <TableHead>Timing</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockQueueItems.map((item) => (
                <TableRow key={item.id} data-testid={`row-queue-${item.id}`}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{item.clientName}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {item.serviceType.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                      {item.priority >= 4 && (
                        <AlertTriangle className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(item.status)}
                    {item.error && (
                      <div className="text-xs text-red-600 mt-1">
                        {item.error}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{item.attempts}/3</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      {item.lastAttempt && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Last: {formatDistanceToNow(item.lastAttempt, { addSuffix: true })}
                        </div>
                      )}
                      {item.nextAttempt && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Next: {formatDistanceToNow(item.nextAttempt, { addSuffix: true })}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {(item.status === 'failed' || item.status === 'completed') && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRetryItem(item.id)}
                          data-testid={`button-retry-${item.id}`}
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      )}
                      {item.status === 'pending' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSkipItem(item.id)}
                          data-testid={`button-skip-${item.id}`}
                        >
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}