const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

async function startDbServerDev(appName) {
  const mongod = new MongoMemoryServer({
    instance: {
      port: 27071, // by default choose any free port
      dbName: appName || 'myApp', // by default generate random dbName
    },
  });

  const uri = await mongod.getConnectionString();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();

  console.log('Conn string: ', uri, port, dbPath, dbName);
  return uri;
}

module.exports = startDbServerDev;
