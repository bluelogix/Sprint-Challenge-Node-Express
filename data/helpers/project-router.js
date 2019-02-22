const express = require('express');

const  db = require('./projectModel.js')
const projectRouter = express.Router();

//GET
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

//GET BY ID
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

//GET ACTIONS FOR PROJECTS
  projectRouter.get('/:id/actions', async (req, res) => {
    try {
      const project = await db.getProjectActions(req.params.id);
  
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

//POST
projectRouter.post('/', async (req, res) => {
    try {
      const projectReq = await db.insert(req.body);
      res.status(201).json(projectReq);
    } catch (error) {
      res.status(500).json({
        message: 'Error adding name and description',
      });
    }
  });

//DELETE
  projectRouter.delete('/:id', async (req, res) => {
    try {
      const deletedProjects = await db.remove(req.params.id);
      if (deletedProjects) {
        res.status(200).json({ message: 'The project has been deleted' });
      } else {
        res.status(404).json({ message: 'The project cannot be deleted' });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error removing the project',
      });
    }
  });

  //PUT
  projectRouter.put('/:id', async (req, res) => {
    try {
      const updateProjects = await db.update(req.params.id, req.body);
      if (updateProjects) {
        res.status(200).json(updateProjects);
      } else {
        res.status(404).json({ message: 'The project id could not be found' });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Error updating the project',
      });
    }
  });
  
  

  module.exports = projectRouter;
  