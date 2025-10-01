#!/usr/bin/env bash
set -euo pipefail

echo "╔════════════════════════════════════════════════════════════╗"
echo "║          Limpieza de Disco - CitaConsulares               ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Espacio en disco ANTES de limpiar:"
df -h /
echo ""

echo "▶ Limpiando caché de apt..."
apt-get clean
apt-get autoclean
apt-get autoremove -y
echo "  ✓ Caché de apt limpiado"

echo "▶ Limpiando logs antiguos..."
journalctl --vacuum-time=1d
find /var/log -type f -name "*.log" -mtime +7 -delete 2>/dev/null || true
find /var/log -type f -name "*.gz" -delete 2>/dev/null || true
echo "  ✓ Logs limpiados"

echo "▶ Limpiando caché de npm/pnpm..."
npm cache clean --force 2>/dev/null || true
pnpm store prune 2>/dev/null || true
echo "  ✓ Caché de npm/pnpm limpiado"

echo "▶ Limpiando node_modules antiguos..."
if [[ -d /opt/CitaConsulares ]]; then
    find /opt/CitaConsulares -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true
fi
echo "  ✓ node_modules limpiados"

echo "▶ Limpiando archivos temporales..."
rm -rf /tmp/* 2>/dev/null || true
rm -rf /var/tmp/* 2>/dev/null || true
echo "  ✓ Archivos temporales limpiados"

echo ""
echo "▶ Espacio en disco DESPUÉS de limpiar:"
df -h /
echo ""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ LIMPIEZA COMPLETADA                        ║"
echo "╚════════════════════════════════════════════════════════════╝"

