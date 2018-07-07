const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const mainRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');
const dburl = require('./config').dburl

mongoose.connect(dburl).then(() => {
})

app.use(bodyParser.json());

app.use('/api', mainRouter);

module.exports = app;
