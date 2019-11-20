const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send('Hello express!!!');
});

app.listen(3000, () => {
  console.log('Server started ok!');
});
