const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {log} = require("./logging");
// const jsonParser = require('body-parser').json();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.use((req, res, next) => {
    const realIP = req.header("x-forwarded-for");
    const loggedIP = realIP || req.ip;
    log(loggedIP + " has requested " + req.url);
    next();
})

// const distance = require('google-distance-matrix');

require('dotenv').config();

const distanceController = require('./distanceController');
app.post('/distance', distanceController.getDistance);

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = process.env.SERVER_PORT || 3050;
const server = app.listen(port, () => console.log(`Listening on port: ${port}`));