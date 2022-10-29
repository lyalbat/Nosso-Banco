const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Main da Template - Aqui');
});

app.listen(DEV_PORT);