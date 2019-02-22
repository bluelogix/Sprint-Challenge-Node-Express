const express = require('express');

const  db = require('./projectModel.js')
const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
    try {
      const projects = await db.get();   
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving the projects',
      });
    }
  });

  projectRouter.get('/:id', async (req, res) => {
    try {
      const projects = await db.get(req.params.id);
  
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: 'ID not found for project' });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Cannot retrieve the project with the specified id',
      });
    }
  });

  projectRouter.get('/:id/actions', async (req, res) => {
    try {
      const project = await db.get(req.params.id);
  
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'The actions for the project cannot be found' });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Cannot retrieve the actions',
      });
    }
  });

  
  

  module.exports = projectRouter;
  