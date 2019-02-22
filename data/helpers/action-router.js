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

  actionRouter.get('/:id', async (req, res) => {
    try {
      const action = await db.get(req.params.id);
  
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'ID not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Cannot retrieve the action with the specified id',
      });
    }
  });

  actionRouter.post('/', async (req, res) => {
    try {
      const requirements = await db.insert(req.body);
      res.status(201).json(requirements);
    } catch (error) {
      res.status(500).json({
        message: 'Error adding the action',
      });
    }
  });

  

  module.exports = actionRouter;
  