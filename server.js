const express = require('express');
const server = express();

const actionRouter = require('./data/helpers/action-router.js');

server.use(express.json());
server.use('/api/actions', actionRouter);

module.exports = server;