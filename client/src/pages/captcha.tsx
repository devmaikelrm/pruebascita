import { CaptchaList } from "@/components/captcha-alert"
import { subMinutes, subHours } from "date-fns"

export default function CaptchaPage() {
  // todo: remove mock functionality - replace with real captcha requests from API
  const mockCaptchaRequests = [
    {
      id: '1',
      clientName: 'María García',
      screenshotPath: '/screenshots/captcha_1.png',
      status: 'pending' as const,
      createdAt: subMinutes(new Date(), 5),
    },
    {
      id: '2', 
      clientName: 'Carlos Rodríguez',
      screenshotPath: '/screenshots/captcha_2.png',
      status: 'pending' as const,
      createdAt: subMinutes(new Date(), 12),
    },
    {
      id: '3',
      clientName: 'Ana Martínez',
      screenshotPath: '/screenshots/captcha_3.png', 
      status: 'solved' as const,
      createdAt: subHours(new Date(), 1),
      solution: 'AB7K9',
    },
    {
      id: '4',
      clientName: 'Luis Fernández',
      screenshotPath: '/screenshots/captcha_4.png',
      status: 'failed' as const,
      createdAt: subHours(new Date(), 2),
    },
  ]

  const handleSolve = async (requestId: string, solution: string) => {
    console.log(`Solving captcha ${requestId} with solution: ${solution}`) // todo: remove mock functionality
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const handleSkip = async (requestId: string) => {
    console.log(`Skipping captcha ${requestId}`) // todo: remove mock functionality
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  const pendingCount = mockCaptchaRequests.filter(r => r.status === 'pending').length

  return (
    <div className="space-y-6" data-testid="page-captcha">
      <div>
        <h1 className="text-2xl font-bold">Captcha Verification</h1>
        <p className="text-muted-foreground">
          Resolve captcha challenges to continue appointment automation
          {pendingCount > 0 && (
            <span className="ml-2 text-yellow-600 font-medium">
              ({pendingCount} pending)
            </span>
          )}
        </p>
      </div>

      <CaptchaList 
        requests={mockCaptchaRequests}
        onSolve={handleSolve}
        onSkip={handleSkip}
      />
    </div>
  )
}