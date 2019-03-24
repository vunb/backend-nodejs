import {createConnection, MysqlError, FieldInfo} from 'mysql';

/**
 * Ref: https://www.sitepoint.com/using-node-mysql-javascript-client/
 */

const connection = createConnection({
  host: 'localhost',
  user: 'nodemy',
  password: 'pleasefixme',
  database: 'app_todos'
});

connection.query('SELECT 1 + 1 AS solution', (err: MysqlError, rows: FieldInfo[]) => {
  console.log('The solution is: ', rows[0]['solution']);
});

connection.query('SELECT * from todos', (err: MysqlError, rows: FieldInfo[]) => {
  console.log('The solution is: ', rows);
});
