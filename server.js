const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const mimeTypes = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Serve landing page at root
  if (urlPath === '/' || urlPath === '') {
    const landingPath = path.join(__dirname, 'index.html');
    fs.readFile(landingPath, (err, data) => {
      if (err) {
        res.writeHead(302, { Location: '/html/onboarding-1.html' });
        res.end();
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // If someone requests /onboarding-*.html directly, redirect to /html/onboarding-*.html
  if (/^\/onboarding-\d+\.html$/.test(urlPath)) {
    res.writeHead(302, { Location: '/html' + urlPath });
    res.end();
    return;
  }

  // If someone requests /register.html directly, redirect to /html/register.html
  if (/^\/[a-z-]+\.html$/.test(urlPath)) {
    res.writeHead(302, { Location: '/html' + urlPath });
    res.end();
    return;
  }

  const filePath = path.join(__dirname, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + urlPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`StressCare server running on port ${PORT}`);
});
