import http from 'http';
http.createServer((req, res) => res.end('ok'))
  .listen(process.env.PORT || 3000);
await import('./index.js');