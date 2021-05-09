const express = require('express');
const app = express();

require('./app/hashing/hashingRoutes')(app, console);

const Url = require('../node/app/sequelize/sequelize.js');
Url.sync({ force: true });

const port = parseInt(process.env.PORT, 10) || 3000;

app.listen(port, () => {
  console.log(`The server is running at localhost: ${port}`);
});