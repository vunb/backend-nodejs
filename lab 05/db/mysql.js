const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

connection.connect();

connection.query('select * from users', function (err, results) {
  if (err) {
    console.error('Có lỗi: ', err);
  } else {
    for (const item of results) {
      // const {username, password} = item;
      const username = item.username;
      const password = item.password;
      console.log(`User: ${username}, Password: ${password}`);
    }
  }
});

connection.end();
