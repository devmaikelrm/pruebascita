"use client";
import { useEffect, useState } from 'react';

export function useAdminToken() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const t = localStorage.getItem('admin_token') || '';
    setToken(t || null);
  }, []);
  return { token, setToken: (t: string) => { localStorage.setItem('admin_token', t || ''); }, clear: () => { localStorage.removeItem('admin_token'); } };
}

export function AdminTokenGate() {
  const { token, setToken, clear } = useAdminToken();
  const [value, setValue] = useState<string>("");

  useEffect(() => { if (token) setValue(token); }, [token]);

  return (
    <div className="bg-white rounded-md shadow p-4 flex items-center gap-3">
      <div className="text-sm text-gray-700">ADMIN_TOKEN:</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Pega tu token"
        className="border rounded px-2 py-1 text-sm w-64" />
      <button onClick={() => setToken(value)} className="px-3 py-1 text-sm rounded bg-blue-600 text-white">Guardar</button>
      <button onClick={() => { clear(); setValue(''); }} className="px-3 py-1 text-sm rounded bg-gray-200">Borrar</button>
    </div>
  );
}

