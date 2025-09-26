import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'CitaConsulares Panel',
  description: 'Panel de monitorización y administración',
  robots: { index: false }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen">
          <header className="border-b bg-white">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <h1 className="font-semibold">CitaConsulares · Panel</h1>
              <nav className="text-sm space-x-4">
                <a href="/overview" className="hover:underline">Overview</a>
                <a href="/clientes" className="hover:underline">Clientes</a>
                <a href="/reservas" className="hover:underline">Reservas</a>
                <a href="/logs" className="hover:underline">Logs</a>
                <a href="/bloqueos" className="hover:underline">Bloqueos</a>
                <a href="/mantenimiento" className="hover:underline">Mantenimiento</a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

