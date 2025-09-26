"use client";
import { useAdminToken } from './AdminTokenGate';
import { useState } from 'react';

export function ForceCheckButton({ clienteId, serviceType }: { clienteId: string, serviceType: string }) {
  const { token } = useAdminToken();
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  async function run() {
    setBusy(true); setOk(null);
    try {
      const res = await fetch('/api/queue/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ cliente_id: clienteId, servicio_type: serviceType })
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Error');
      setOk('En cola');
    } catch (e: any) {
      alert(e.message || 'Error');
    } finally { setBusy(false); }
  }

  return (
    <button onClick={run} disabled={busy} className="px-3 py-1 text-sm rounded bg-emerald-600 text-white disabled:opacity-60">
      {busy ? 'Encolando...' : (ok ? 'En cola' : 'Forzar chequeo')}
    </button>
  );
}

export function MaintenanceButtons() {
  const { token } = useAdminToken();
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function call(preview: boolean) {
    setBusy(true); setResult(null);
    try {
      const res = await fetch('/api/maintenance/clean', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ preview, days: 90 })
      });
      const j = await res.json();
      setResult(j);
    } catch (e: any) {
      alert(e.message || 'Error');
    } finally { setBusy(false); }
  }

  return (
    <div className="space-x-3">
      <button onClick={() => call(true)} disabled={busy} className="px-3 py-1 text-sm rounded bg-blue-600 text-white disabled:opacity-60">Preview</button>
      <button onClick={() => call(false)} disabled={busy} className="px-3 py-1 text-sm rounded bg-red-600 text-white disabled:opacity-60">Confirmar</button>
      {result && (
        <span className="text-sm text-gray-700 ml-2">{result.preview ? `Rows (DB): ${result.db_rows_to_clean}` : `Eliminado (DB): ${result.db_rows_deleted}`} · {result.note}</span>
      )}
    </div>
  );
}

