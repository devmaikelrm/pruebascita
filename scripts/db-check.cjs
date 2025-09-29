const { Client } = require('pg');

const requiredTables = [
  'operators',
  'clients',
  'preferences',
  'queue',
  'appointments',
  'captcha_requests',
  'cooldowns',
];

(async () => {
  const url = process.env.DATABASE_URL || process.argv[2];
  if (!url) {
    console.error('DATABASE_URL no está definida. También puedes pasarla como argumento: node scripts/db-check.cjs "postgresql://..."');
    process.exit(1);
  }
  const isSupabase = /\.supabase\.co/i.test(url);
  const client = new Client({ connectionString: url, ssl: isSupabase ? { rejectUnauthorized: false } : undefined });

  try {
    await client.connect();
    console.log('✅ Conexión OK');

    const { rows } = await client.query(`
      select table_name from information_schema.tables
      where table_schema='public'
      order by table_name
    `);
    const existing = rows.map(r => r.table_name);
    console.log('Tablas existentes:', existing);

    const missing = requiredTables.filter(t => !existing.includes(t));
    if (missing.length) {
      console.log('❌ Faltan tablas:', missing);
    } else {
      console.log('✅ Todas las tablas requeridas existen');
    }

    try {
      const idCount = await client.query('select count(*)::int as c from operators');
      console.log('operators.count =', idCount.rows[0].c);
    } catch (e) {
      console.log('No se pudo leer operators:', e.message);
    }
  } catch (e) {
    console.error('Error comprobando DB:', e.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
})();


