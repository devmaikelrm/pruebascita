import { ActivityLog } from '../activity-log'
import { subHours, subMinutes } from 'date-fns'

export default function ActivityLogExample() {
  // todo: remove mock functionality - replace with real activity data
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
    <div className="p-6 bg-background">
      <ActivityLog activities={mockActivities} maxHeight="500px" />
    </div>
  )
}