const todoModel = require('../models/todo');

class TodoService {

  constructor() {

  }

  getList() {
    return todoModel.find({
      active: true
    });
  }

  getById(id) {
    return todoModel.findOne({
      _id: id,
      active: true
    });
  }

  update(id, data) {

    if (!data) {
      throw new Error('Data is invalid!');
    }

    return todoModel.update({
      _id: id,
      active: true
    }, {
      name: data.name,
      description: data.description
    });
  }

  remove(id) {
    return todoModel.update({
      _id: id,
      active: true
    }, {
      active: false
    });
  }

  create(data) {
    return todoModel.create(data);
  }

}

module.exports = TodoService;
