const express = require('express');
const server = express();

const actionRouter = require('./data/helpers/action-router.js');
const projectRouter = require('./data/helpers/project-router.js');

server.use(express.json());
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

module.exports = server;