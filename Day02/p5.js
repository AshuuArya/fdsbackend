const http = require('http');

const server = http.createServer((req,res)=> {
    res.writeHead(200, {'content-Type': 'text/html'});

    if (req.url === '/home'){
        res.end(`<h1>Home Page</h1>`);
    }else if (re1.url === '/about'){
        res.end(`<h1>About Page</h1>`);
    }else if (re1.url === '/contact'){
        res.end(`<h1>Contact Page</h1>`);
    } else {
        res.end(`<h1>404 - Page Not Found </h1>`)
    }

});