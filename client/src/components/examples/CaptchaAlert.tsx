import { CaptchaList } from '../captcha-alert'
import { subMinutes, subHours } from 'date-fns'

export default function CaptchaAlertExample() {
  // todo: remove mock functionality - replace with real captcha requests
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
    console.log(`Solving captcha ${requestId} with solution: ${solution}`)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const handleSkip = async (requestId: string) => {
    console.log(`Skipping captcha ${requestId}`)
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  return (
    <div className="p-6 bg-background">
      <CaptchaList 
        requests={mockCaptchaRequests}
        onSolve={handleSolve}
        onSkip={handleSkip}
      />
    </div>
  )
}