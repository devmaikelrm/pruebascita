import { supabase } from '@/lib/supabase';
import { AdminTokenGate } from '@/components/AdminTokenGate';
import { ForceCheckButton } from '@/components/ActionButtons';

async function fetchData() {
  // Clientes con servicios activos y últimas métricas básicas
  const { data: clients } = await supabase.from('clientes').select('id,name,site_url,created_at').order('created_at', { ascending: false }).limit(100);
  const { data: services } = await supabase.from('servicios').select('cliente_id,type,enabled');
  return { clients: clients || [], services: services || [] };
}

export default async function ClientesPage() {
  const { clients, services } = await fetchData();
  const serviceMap = new Map<string, { type: string, enabled: boolean }[]>();
  for (const s of services) {
    const arr = serviceMap.get(s.cliente_id) || [];
    arr.push({ type: s.type, enabled: s.enabled });
    serviceMap.set(s.cliente_id, arr);
  }
  return (
    <div className="space-y-4">
      <AdminTokenGate />
      <div className="bg-white rounded-md shadow p-4 overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-600 border-b">
            <tr>
              <th className="py-2 pr-4">Cliente</th>
              <th className="py-2 pr-4">Servicios</th>
              <th className="py-2 pr-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 && <tr><td colSpan={3} className="py-4 text-gray-500">Sin clientes</td></tr>}
            {clients.map((c: any) => {
              const svcs = serviceMap.get(c.id) || [];
              return (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="py-2 pr-4">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.site_url}</div>
                  </td>
                  <td className="py-2 pr-4">
                    <div className="flex gap-2 flex-wrap">
                      {svcs.length === 0 && <span className="text-xs text-gray-500">—</span>}
                      {svcs.map((s, i) => (
                        <span key={i} className={`text-xs px-2 py-0.5 rounded border ${s.enabled ? 'bg-green-50 border-green-200' : 'bg-gray-100 border-gray-200'}`}>{s.type}{!s.enabled ? ' (off)' : ''}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-2 pr-4">
                    <div className="flex gap-2">
                      {svcs.map((s, i) => (
                        <ForceCheckButton key={i} clienteId={c.id} serviceType={s.type} />
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

