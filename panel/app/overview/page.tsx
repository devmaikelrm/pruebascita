import { getHeartbeats, getStats, getRecentEvents } from '@/lib/sql';

function OnlineBadge({ online, lastSeen }: { online: boolean, lastSeen: Date | null }) {
  const minutes = lastSeen ? Math.floor((Date.now() - new Date(lastSeen).getTime()) / 60000) : null;
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={online ? 'text-green-600' : 'text-red-600'}>{online ? '🟢 ONLINE' : '🔴 OFFLINE'}</span>
      <span className="text-gray-500">{lastSeen ? `visto hace ${minutes} min` : 'sin latidos'}</span>
    </div>
  );
}

export default async function OverviewPage() {
  const [hb, stats, events] = await Promise.all([
    getHeartbeats(),
    getStats(24),
    getRecentEvents(50)
  ]);
  const botOnline = hb.bot ? (Date.now() - new Date(hb.bot).getTime()) / 1000 < 120 : false;
  const workerOnline = hb.worker ? (Date.now() - new Date(hb.worker).getTime()) / 1000 < 120 : false;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-md shadow p-4">
          <h2 className="font-medium mb-2">Bot</h2>
          <OnlineBadge online={botOnline} lastSeen={hb.bot ? new Date(hb.bot) : null} />
        </div>
        <div className="bg-white rounded-md shadow p-4">
          <h2 className="font-medium mb-2">Worker</h2>
          <OnlineBadge online={workerOnline} lastSeen={hb.worker ? new Date(hb.worker) : null} />
        </div>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {[
          { label: 'Intentos', value: stats.attempts },
          { label: 'BOOKED', value: stats.booked },
          { label: 'NO_SLOTS', value: stats.no_slots },
          { label: 'ERROR', value: stats.errors },
          { label: 'Captchas', value: stats.captchas },
          { label: 'Éxito %', value: stats.success_rate }
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-md shadow p-4">
            <div className="text-xs uppercase text-gray-500">{k.label}</div>
            <div className="text-2xl font-semibold">{k.value}</div>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-md shadow p-4">
        <h3 className="font-medium mb-3">Actividad reciente</h3>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-600 border-b">
              <tr>
                <th className="py-2 pr-4">Fecha</th>
                <th className="py-2 pr-4">Servicio</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 && (
                <tr><td colSpan={4} className="py-4 text-gray-500">Sin datos</td></tr>
              )}
              {events.map((e, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 pr-4">{new Date(e.created_at).toLocaleString()}</td>
                  <td className="py-2 pr-4">{e.service_type}</td>
                  <td className="py-2 pr-4">{e.status}</td>
                  <td className="py-2 pr-4 text-gray-600">{e.message || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

