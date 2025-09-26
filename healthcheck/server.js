import http from 'http';

const port = Number(process.env.HEALTHCHECK_PORT || 8080);

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.writeHead(405);
    res.end();
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`[healthcheck] listening on port ${port}`);
});

