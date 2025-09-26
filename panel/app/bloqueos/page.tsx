import { supabase } from '@/lib/supabase';

async function fetchEvents() {
  const { data } = await supabase
    .from('captcha_events')
    .select('created_at, service_type, reason, details, cliente_id, servicio_id')
    .order('created_at', { ascending: false })
    .limit(100);
  return data || [];
}

export default async function BloqueosPage() {
  const rows = await fetchEvents();
  return (
    <div className="bg-white rounded-md shadow p-4 overflow-auto">
      <h2 className="font-medium mb-3">Bloqueos / Captchas</h2>
      <table className="min-w-full text-sm">
        <thead className="text-left text-gray-600 border-b">
          <tr>
            <th className="py-2 pr-4">Fecha</th>
            <th className="py-2 pr-4">Servicio</th>
            <th className="py-2 pr-4">Motivo</th>
            <th className="py-2 pr-4">Detalles</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && <tr><td colSpan={4} className="py-4 text-gray-500">Sin datos</td></tr>}
          {rows.map((r: any, i: number) => (
            <tr key={i} className="border-b last:border-0">
              <td className="py-2 pr-4">{new Date(r.created_at).toLocaleString()}</td>
              <td className="py-2 pr-4">{r.service_type}</td>
              <td className="py-2 pr-4">{r.reason}</td>
              <td className="py-2 pr-4 text-gray-600">{r.details || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

