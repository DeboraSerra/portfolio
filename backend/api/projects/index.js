const { Router } = require('express');
const ProjectController = require('./project.controller');

const router = Router();

router.route('/')
  .get(ProjectController.getAll)
  .post(ProjectController.create);

module.exports = router;
