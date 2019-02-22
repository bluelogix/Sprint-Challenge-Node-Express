const express = require('express');
const server = express();

const actionRouter = require('./data/helpers/action-router.js');
const projectRouter = require('./data/helpers/project-router.js');

server.use(express.json());
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

//test get 
server.get('/', (req, res) => {
    res.send(`
    <h1>Node-Express-Sprint-Challenge</h1>`);
});
module.exports = server;