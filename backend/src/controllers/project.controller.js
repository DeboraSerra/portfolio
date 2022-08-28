const ProjectService = require('../services/project.service');

const ProjectController = {
  create: async (req, res) => {
    const project = await ProjectService.create(req.body);
    res.status(200).json({ project });
  },
  getAll: async (req, res) => {
    const projects = await ProjectService.getAll();
    res.status(200).json({ projects });
  },
}

module.exports = ProjectController;
