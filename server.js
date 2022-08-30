const express = require('express');

const server = express();

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));
server.use(express.json());

server.listen(3000);
console.log('Server is running...')