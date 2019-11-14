const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nodemy2',
  password: 'nodemy1234',
  database: 'nodesqldb'
});

connection.connect();

connection.query(
  `update employe set addres = ? WHERE ssn = ?`, ['Hanoi', '123456789'],
  function (err, results) {
    if (err) {
      console.error('Error: ', err);
    } else {
      console.log('Ok!');
    }
  });

connection.end();
