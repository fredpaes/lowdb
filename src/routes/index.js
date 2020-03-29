const { Router } = require('express');
const router = Router();

const controller = require('../controllers/');

router.get('/', controller.getTasks);

router.get('/:id', controller.getTaskById);

router.post('/', controller.setTask);

router.put('/:id', controller.editTask);

router.delete('/:id', controller.removeTask);

module.exports = router;
