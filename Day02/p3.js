const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1 style='background-color: blue; color: white;'>Hello jii</h1>`);
});

server.listen(9001, () => {
    console.log('Server running on port number 9001.');
});
