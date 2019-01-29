const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const app = express()


app.use(express.static('public'))

app.get('/', (req, res) => res.sendfile('public/index.html'))

const httpServer = http.createServer(app);


httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port 443');
});