import { ClientForm } from '../client-form'

export default function ClientFormExample() {
  const handleSubmit = async (data: any) => {
    console.log('Form submitted:', data)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const handleCancel = () => {
    console.log('Form cancelled')
  }

  return (
    <div className="p-6 bg-background">
      <ClientForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        initialData={{
          name: "María García",
          email: "maria@example.com",
          urgency: 4
        }}
        isEdit={true}
      />
    </div>
  )
}