const express = require('express');
const app = express();

require('./app/hashing/hashingRoutes.js')(app, console);

const Url = require('../node/app/sequelize/sequelize.js');
Url.sync({ force: true });

const port = 3000;

app.listen(port, () => {
  console.log(`Cricketpedia: ${port}`);
});