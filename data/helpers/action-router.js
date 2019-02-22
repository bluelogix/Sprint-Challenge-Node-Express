const express = require('express');

const  db = require('./actionModel.js')
const actionRouter = express.Router();

actionRouter.get('/', async (req, res) => {
    try {
      const actions = await db.get();   
      res.status(200).json(actions);
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving the actions',
      });
    }
  });



  module.exports = actionRouter;
  