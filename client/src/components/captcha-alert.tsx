import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Clock, CheckCircle, X, Send } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface CaptchaRequest {
  id: string
  clientName: string
  screenshotPath: string
  status: "pending" | "solved" | "failed"
  createdAt: Date
  operatorId?: string
  solution?: string
}

interface CaptchaAlertProps {
  request: CaptchaRequest
  onSolve: (requestId: string, solution: string) => Promise<void>
  onSkip: (requestId: string) => Promise<void>
  className?: string
}

export function CaptchaAlert({ request, onSolve, onSkip, className }: CaptchaAlertProps) {
  const [solution, setSolution] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSolve = async () => {
    if (!solution.trim()) return
    
    setIsSubmitting(true)
    try {
      await onSolve(request.id, solution)
      setSolution("")
      console.log(`Captcha solved for request ${request.id}:`, solution) // todo: remove mock functionality
    } catch (error) {
      console.error("Error solving captcha:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSkip = async () => {
    setIsSubmitting(true)
    try {
      await onSkip(request.id)
      console.log(`Captcha skipped for request ${request.id}`) // todo: remove mock functionality
    } catch (error) {
      console.error("Error skipping captcha:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusIcon = () => {
    switch (request.status) {
      case "solved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "failed":
        return <X className="h-4 w-4 text-red-600" />
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
    }
  }

  const getStatusColor = () => {
    switch (request.status) {
      case "solved":
        return "text-green-600 dark:text-green-400"
      case "failed":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-yellow-600 dark:text-yellow-400"
    }
  }

  return (
    <Card className={className} data-testid={`card-captcha-${request.id}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <CardTitle className="text-base">Captcha Verification Required</CardTitle>
          </div>
          <Badge variant="outline" className={getStatusColor()}>
            {request.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-2 text-sm">
          <span>Client: <strong>{request.clientName}</strong></span>
          <Separator orientation="vertical" className="h-4" />
          <Clock className="h-3 w-3" />
          <span>{formatDistanceToNow(request.createdAt, { addSuffix: true })}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Screenshot Display */}
        <div className="border rounded-lg p-4 bg-muted/30">
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            {/* todo: remove mock functionality - replace with actual screenshot display */}
            <div className="text-center">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Captcha Screenshot</p>
              <p className="text-xs">{request.screenshotPath}</p>
            </div>
          </div>
        </div>

        {request.status === "pending" && (
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="Enter captcha solution..."
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSolve()}
                data-testid={`input-captcha-solution-${request.id}`}
                disabled={isSubmitting}
              />
              <Button 
                onClick={handleSolve}
                disabled={!solution.trim() || isSubmitting}
                data-testid={`button-solve-captcha-${request.id}`}
              >
                <Send className="h-4 w-4 mr-2" />
                Solve
              </Button>
            </div>
            <div className="flex justify-end">
              <Button 
                variant="outline"
                onClick={handleSkip}
                disabled={isSubmitting}
                data-testid={`button-skip-captcha-${request.id}`}
              >
                <X className="h-4 w-4 mr-2" />
                Skip Client
              </Button>
            </div>
          </div>
        )}

        {request.status === "solved" && request.solution && (
          <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Solved:</strong> {request.solution}
            </p>
          </div>
        )}

        {request.status === "failed" && (
          <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">
              Captcha verification failed - client skipped
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface CaptchaListProps {
  requests: CaptchaRequest[]
  onSolve: (requestId: string, solution: string) => Promise<void>
  onSkip: (requestId: string) => Promise<void>
  className?: string
}

export function CaptchaList({ requests, onSolve, onSkip, className }: CaptchaListProps) {
  const pendingRequests = requests.filter(r => r.status === "pending")
  const completedRequests = requests.filter(r => r.status !== "pending")

  return (
    <div className={`space-y-4 ${className || ""}`} data-testid="captcha-list">
      {pendingRequests.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-600">Pending ({pendingRequests.length})</h3>
          {pendingRequests.map(request => (
            <CaptchaAlert
              key={request.id}
              request={request}
              onSolve={onSolve}
              onSkip={onSkip}
            />
          ))}
        </div>
      )}

      {completedRequests.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Recent ({completedRequests.length})</h3>
          {completedRequests.slice(0, 3).map(request => (
            <CaptchaAlert
              key={request.id}
              request={request}
              onSolve={onSolve}
              onSkip={onSkip}
            />
          ))}
        </div>
      )}

      {requests.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Captchas Pending</h3>
            <p className="text-muted-foreground text-center">
              All captcha verifications have been resolved
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}