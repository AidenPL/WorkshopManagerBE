if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const mainRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');
const dburl = require('./config').dburl

mongoose.connect(dburl, { useNewUrlParser: true }).then(() => {
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json());

app.use('/api', mainRouter);

module.exports = app;
