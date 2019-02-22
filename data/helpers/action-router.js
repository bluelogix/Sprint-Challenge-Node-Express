const express = require('express');

const  db = require('./actionModel.js')
const actionRouter = express.Router();

//GET
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
  
//GET BY ID
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

//POST
  actionRouter.post('/', async (req, res) => {
    try {
      const requirements = await db.insert(req.body);
      res.status(201).json(requirements);
    } catch (error) {
      if(req.body.description.length > 128) {
      res.status(500).json({
        message: 'Error adding the action',
      });
    }
    }
  });

//DELETE
  actionRouter.delete('/:id', async (req, res) => {
    try {
      const deleted = await db.remove(req.params.id);
      if (deleted) {
        res.status(200).json({ message: 'The action has been deleted' });
      } else {
        res.status(404).json({ message: 'The action cannot be deleted' });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error removing the action',
      });
    }
  });

//PUT
  actionRouter.put('/:id', async (req, res) => {
    try {
      const updateAction= await db.update(req.params.id, req.body);
      if (updateAction) {
        res.status(200).json(updateAction);
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error updating the action',
      });
    }
  });


  

  module.exports = actionRouter;
  