const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);
route.patch('/:id', todoController.updateTodo);

module.exports = router;
