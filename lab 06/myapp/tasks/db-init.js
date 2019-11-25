const TodoService = require('../services/todo.service');
const svTodo = new TodoService();

function initDefaultData() {
  return svTodo.create([
    {
      name: 'Dựng khung dự án',
      description: 'Công việc đầu tiên',
      active: true,
      isDone: false
    },
    {
      name: 'Định nghĩa các model dữ liệu',
      description: 'Công việc thứ 2',
      active: true,
      isDone: false
    },
  ])
}

module.exports = initDefaultData;
