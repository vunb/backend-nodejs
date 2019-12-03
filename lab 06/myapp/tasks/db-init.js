const TodoService = require('../services/todo.service');
const UserService = require('../services/user.service');

const svTodo = new TodoService();
const svUser = new UserService();

function initDefaultData() {
  const vCreateTodos = svTodo.create([
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
  ]);

  const vCreateUsers = svUser.create([
    {
      username: 'vunb',
      password: '1234',
      phone: '0987654321',
      active: true,
    }
  ]);

  return Promise.all([
    vCreateTodos,
    vCreateUsers
  ]);
}

module.exports = initDefaultData;
