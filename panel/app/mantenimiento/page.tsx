import { AdminTokenGate } from '@/components/AdminTokenGate';
import { MaintenanceButtons } from '@/components/ActionButtons';

export default function MantenimientoPage() {
  return (
    <div className="space-y-4">
      <AdminTokenGate />
      <div className="bg-white rounded-md shadow p-4">
        <h2 className="font-medium mb-2">Limpieza segura</h2>
        <p className="text-sm text-gray-600 mb-3">La limpieza de archivos (screenshots) se realiza en la VPS. Este botón limpia registros antiguos en la base de datos.</p>
        <MaintenanceButtons />
        <p className="text-xs text-gray-500 mt-3">Recordatorio: para borrar archivos en la VPS, ejecuta /limpiar_citas en Telegram.</p>
      </div>
    </div>
  );
}

