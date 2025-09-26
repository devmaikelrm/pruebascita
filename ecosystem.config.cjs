module.exports = {
  apps: [
    {
      name: 'worker',
      cwd: '/opt/CitaConsulares/worker',
      script: 'dist/index.js',
      env_file: '/opt/CitaConsulares/worker/.env',
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/worker.out.log',
      error_file: '/var/log/pm2/worker.error.log',
      merge_logs: true
    },
    {
      name: 'bot',
      cwd: '/opt/CitaConsulares/bot',
      script: 'dist/index.js',
      env_file: '/opt/CitaConsulares/bot/.env',
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/bot.out.log',
      error_file: '/var/log/pm2/bot.error.log',
      merge_logs: true
    },
    {
      name: 'healthcheck',
      cwd: '/opt/CitaConsulares/healthcheck',
      script: 'server.js',
      env: {
        HEALTHCHECK_PORT: process.env.HEALTHCHECK_PORT || '8080'
      },
      max_restarts: 5,
      restart_delay: 5000,
      out_file: '/var/log/pm2/healthcheck.out.log',
      error_file: '/var/log/pm2/healthcheck.error.log',
      merge_logs: true
    }
  ]
};
