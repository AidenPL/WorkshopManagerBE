const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const mainRouter = require('./routes/apiRouter');


app.use(bodyParser.json());

app.use('/api', mainRouter);

module.exports = app;
