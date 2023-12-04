const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    const method = request

    if (method === 'GET') {
        response.end('<h1>ini adalah get method</h1>')
    } 
    if (method === 'POST') {
        response.end('<h1>ini adalah post method</h1>')
    }
    if (method === 'PUT') {
        response.end('<h1>ini adalah put method</h1>')
    }
    if (method === 'DELETE') {
        response.end('<h1>ini adalah delete method</h1>')
    }
}

const server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server ini sedang berjalan pada http://${host}:${port}`)    
})