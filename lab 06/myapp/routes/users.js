var express = require('express');
var router = express.Router();

const UserService = require('../services/user.service');
const svUser = new UserService();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:username', async function(req, res, next) {
  const username = req.params.username;
  const user = await svUser.getByUsername(username);

  res.json(user);
});

module.exports = router;
