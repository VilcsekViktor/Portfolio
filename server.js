const http = require('http')
const express = require('express')
const app = express()

// server static assets from /public
app.use(express.static('public'))

// when user navigates to / => serve index.html
app.get('/', (req, res) => res.sendfile('public/index.html'))

// create server
const httpServer = http.createServer(app);

// listen on port 80s
const port = 80;
httpServer.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
});