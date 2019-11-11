const axios = require('axios');

async function getMyIp() {
  var result = await axios.get('https://api.ipify.org/?format=json');

  console.log('My ip: ', result.data);
}

// chạy chương trình!
getMyIp();

