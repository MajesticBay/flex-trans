const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const jsonParser = require('body-parser').json();
app.use(bodyParser.json());

// const distance = require('google-distance-matrix');

require('dotenv').config();

const distanceController = require('./distanceController');
app.post('/distance', distanceController.getDistance);

const port = process.env.SERVER_PORT || 3050;
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));