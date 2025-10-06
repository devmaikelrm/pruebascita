/**
 * Script de prueba para el HybridWatcher.
 * Uso: pnpm tsx run-hybrid.ts
 */
import { HybridWatcher } from './hybridWatcher';

console.log('🚀 Iniciando script de prueba para HybridWatcher...');

const watcher = new HybridWatcher({
  serviceId: 'bkt873048',
  publicKey: '28db94e270580be60f6e00285a7d8141f',
  serviceName: 'Turismo/Schengen',
  country: 'Cuba',
  category: 'Visados',
  delegation: '166',
  checkIntervalMs: 60_000,
  onSlotsFound: async (info) => {
    console.log('🎉 ¡CITAS DETECTADAS!', JSON.stringify(info, null, 2));
  },
});

watcher.start();