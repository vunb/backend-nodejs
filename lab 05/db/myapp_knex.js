const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'nodemy2',
    password: 'nodemy1234',
    database: 'nodesqldb'
  }
});

async function getRows() {
  const result = await knex('employe').select('*');
  console.log('Data: ', result);
}


getRows();

