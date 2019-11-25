var express = require('express');
var router = express.Router();
var ToDoService = require('../services/todo.service');

const svTodo = new ToDoService();

/* GET todo list. */
router.get('/', async function(req, res, next) {
  // const data = [{
  //   name: 'Dựng khung dự án',
  //   description: 'Công việc đầu tiên',
  //   active: true,
  //   isDone: false
  // }];
  const data = await svTodo.getList();
  res.render('todo', {data});
});

module.exports = router;
