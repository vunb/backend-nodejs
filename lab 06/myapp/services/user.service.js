const userModel = require('../models/user');

class UserService {

  getList() {
    return userModel.find({
      active: true
    });
  }

  getById(id) {
    return userModel.findOne({
      _id: id,
      active: true
    });
  }

  getByUsername(username) {
    return userModel.findOne({
      username,
      active: true
    });
  }

  update(id, data) {

    if (!data) {
      throw new Error('Data is invalid!');
    }

    return userModel.update({
      _id: id,
      active: true
    }, {
      phone: data.phone,
      // TODO/update: password?
    });
  }

  remove(id) {
    return userModel.update({
      _id: id,
      active: true
    }, {
      active: false
    });
  }

  create(data) {
    return userModel.create(data);
  }

}

module.exports = UserService;
