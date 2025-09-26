import { supabase } from '@/lib/supabase';

async function fetchBookings() {
  const { data } = await supabase
    .from('reservas')
    .select('created_at, reserved_for, service_type, portal_ref, screenshot_path, cliente_id, servicio_id')
    .order('created_at', { ascending: false })
    .limit(100);
  return data || [];
}

export default async function ReservasPage() {
  const rows = await fetchBookings();
  return (
    <div className="bg-white rounded-md shadow p-4 overflow-auto">
      <h2 className="font-medium mb-3">Reservas confirmadas (últimas 100)</h2>
      <table className="min-w-full text-sm">
        <thead className="text-left text-gray-600 border-b">
          <tr>
            <th className="py-2 pr-4">Fecha</th>
            <th className="py-2 pr-4">Reservada para</th>
            <th className="py-2 pr-4">Servicio</th>
            <th className="py-2 pr-4">Portal Ref</th>
            <th className="py-2 pr-4">Captura</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && <tr><td colSpan={5} className="py-4 text-gray-500">Sin datos</td></tr>}
          {rows.map((r: any, i: number) => (
            <tr key={i} className="border-b last:border-0">
              <td className="py-2 pr-4">{new Date(r.created_at).toLocaleString()}</td>
              <td className="py-2 pr-4">{r.reserved_for ? new Date(r.reserved_for).toLocaleString() : '-'}</td>
              <td className="py-2 pr-4">{r.service_type}</td>
              <td className="py-2 pr-4">{r.portal_ref || '-'}</td>
              <td className="py-2 pr-4 text-blue-600">{r.screenshot_path || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2">Nota: las capturas viven en la VPS.</p>
    </div>
  );
}

