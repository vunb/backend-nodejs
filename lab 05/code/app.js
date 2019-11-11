const _ = require('lodash');

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

var result = _.findIndex(users, function(o) { return o.age < 40; });

console.log(result)
