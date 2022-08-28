const { Router } = require('express');
const ProjectController = require('./project.controller');

const router = Router();

router.route('/')
  .get(ProjectController.getAll);

module.exports = router;
