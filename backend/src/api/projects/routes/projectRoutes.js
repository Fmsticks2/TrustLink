const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create', projectController.createProject);
router.get('/:id', projectController.getProject);
router.put('/:id/update', projectController.updateProject);

module.exports = router;
