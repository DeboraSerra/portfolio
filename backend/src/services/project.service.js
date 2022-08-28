const Project = require('../models/projects.model');

const ProjectService = {
  verifyInfo: async (info) => {
    const { description, name, module, link, src } = info;
    if (!description || !name || !module || !link || !src) {
      throw new Error('Missing information');
    }
  },
  create: async (project) => {
    verifyInfo(project);
    const proj = await Project.createProject(project);
    return proj;
  },
  getAll: async () => {
    const projects = await Project.getAll();
    return projects;
  }
}

module.exports = ProjectService;
