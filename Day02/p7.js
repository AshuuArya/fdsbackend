const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type' : 'application/json'})

    if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';;
        req.on('data',chunk => {
            body += chunk
        })
        req.on('end', () => {
            const user = JSON.parse(body)
            URLSearchParams.push(user)
            res.end("Data Recieved")
        })
    }
})