const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

(async () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('DATABASE_URL no está definida.');
    process.exit(1);
  }
  const isSupabase = /\.supabase\.co/i.test(url);
  const client = new Client({ connectionString: url, ssl: isSupabase ? { rejectUnauthorized: false } : undefined });

  const sqlPath = path.resolve(__dirname, 'db-init.sql');
  if (!fs.existsSync(sqlPath)) {
    console.error('No se encontró scripts/db-init.sql');
    process.exit(1);
  }
  const sql = fs.readFileSync(sqlPath, 'utf8');

  try {
    await client.connect();
    console.log('✅ Conectado, aplicando esquema...');
    await client.query(sql);
    console.log('✅ Esquema aplicado');
  } catch (e) {
    console.error('❌ Error aplicando esquema:', e.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();


