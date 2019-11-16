const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

async function startDbServer() {
  const mongod = new MongoMemoryServer({
    instance: {
      port: 27071, // by default choose any free port
      dbName: 'myApp', // by default generate random dbName
    },
  });

  const uri = await mongod.getConnectionString();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();

  console.log('Conn string: ', uri, port, dbPath, dbName);
}

startDbServer();
