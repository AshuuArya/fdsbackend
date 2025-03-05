const htpp = require('http')

const server = htpp.createServer((req,res) => {
    res.writeHead(200, {'content-type' : 'application/jason'});

    let dara = {
        name: "JHON doe",
        age: 30
    }

    if (req.url === '/data' && req.method === 'GET') {
        res.end({message: 'data recieved'})
    } else if (req.url ==='/setdata' && req.method === 'POST') {
        res.end({message: 'data recieved'})
    }
})

server.listen(9004, () => {
    console.log('Server is running on port 9004');
});