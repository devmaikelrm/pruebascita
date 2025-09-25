import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClientForm } from "@/components/client-form"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Plus, Edit, Trash2, User, AlertTriangle } from "lucide-react"

interface Client {
  id: string
  name: string
  email?: string
  serviceType: string
  urgency: number
  isActive: boolean
  status: "idle" | "queued" | "processing" | "cooldown"
  lastAppointment?: Date
}

export default function ClientsPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)

  // todo: remove mock functionality - replace with real client data from API
  const mockClients: Client[] = [
    {
      id: '1',
      name: 'María García',
      email: 'maria@example.com',
      serviceType: 'dni_habana',
      urgency: 4,
      isActive: true,
      status: 'processing',
    },
    {
      id: '2', 
      name: 'Carlos Rodríguez',
      email: 'carlos@example.com',
      serviceType: 'dni_habana',
      urgency: 3,
      isActive: true,
      status: 'queued',
    },
    {
      id: '3',
      name: 'Ana Martínez',
      serviceType: 'passport_habana',
      urgency: 5,
      isActive: true,
      status: 'idle',
      lastAppointment: new Date('2024-02-15'),
    },
    {
      id: '4',
      name: 'Luis Fernández',
      email: 'luis@example.com',
      serviceType: 'dni_habana',
      urgency: 2,
      isActive: false,
      status: 'cooldown',
    },
  ]

  const handleAddClient = async (data: any) => {
    console.log('Adding client:', data) // todo: remove mock functionality
    await new Promise(resolve => setTimeout(resolve, 1000))
    setShowAddForm(false)
  }

  const handleEditClient = async (data: any) => {
    console.log('Editing client:', editingClient?.id, data) // todo: remove mock functionality
    await new Promise(resolve => setTimeout(resolve, 1000))
    setEditingClient(null)
  }

  const handleDeleteClient = (clientId: string) => {
    console.log('Deleting client:', clientId) // todo: remove mock functionality
  }

  const getStatusBadge = (status: string, isActive: boolean) => {
    if (!isActive) {
      return <Badge variant="secondary">Inactive</Badge>
    }

    switch (status) {
      case 'processing':
        return <Badge className="bg-blue-600">Processing</Badge>
      case 'queued':
        return <Badge className="bg-yellow-600">Queued</Badge>
      case 'cooldown':
        return <Badge variant="destructive">Cooldown</Badge>
      default:
        return <Badge variant="outline">Idle</Badge>
    }
  }

  const getUrgencyColor = (urgency: number) => {
    if (urgency >= 4) return "text-red-600 dark:text-red-400"
    if (urgency >= 3) return "text-yellow-600 dark:text-yellow-400"
    return "text-green-600 dark:text-green-400"
  }

  if (showAddForm) {
    return (
      <div className="space-y-6" data-testid="page-clients-add">
        <div>
          <h1 className="text-2xl font-bold">Add New Client</h1>
          <p className="text-muted-foreground">
            Create a new client for appointment automation
          </p>
        </div>
        <ClientForm
          onSubmit={handleAddClient}
          onCancel={() => setShowAddForm(false)}
        />
      </div>
    )
  }

  if (editingClient) {
    return (
      <div className="space-y-6" data-testid="page-clients-edit">
        <div>
          <h1 className="text-2xl font-bold">Edit Client</h1>
          <p className="text-muted-foreground">
            Update client information and preferences
          </p>
        </div>
        <ClientForm
          onSubmit={handleEditClient}
          onCancel={() => setEditingClient(null)}
          initialData={editingClient}
          isEdit={true}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6" data-testid="page-clients">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Clients</h1>
          <p className="text-muted-foreground">
            Manage clients and their appointment automation settings
          </p>
        </div>
        <Button 
          onClick={() => setShowAddForm(true)}
          data-testid="button-add-client"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockClients.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockClients.filter(c => c.isActive).length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">In Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {mockClients.filter(c => c.status === 'queued' || c.status === 'processing').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {mockClients.filter(c => c.urgency >= 4).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
          <CardDescription>
            Overview of all clients and their current status
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
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockClients.map((client) => (
                <TableRow key={client.id} data-testid={`row-client-${client.id}`}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{client.name}</div>
                        {client.email && (
                          <div className="text-sm text-muted-foreground">
                            {client.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {client.serviceType.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${getUrgencyColor(client.urgency)}`}>
                        {client.urgency}
                      </span>
                      {client.urgency >= 4 && (
                        <AlertTriangle className="h-3 w-3 text-red-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(client.status, client.isActive)}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingClient(client)}
                        data-testid={`button-edit-client-${client.id}`}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClient(client.id)}
                        data-testid={`button-delete-client-${client.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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