const mongoose = require('mongoose');
const {dburl} = require('../config/')
const seed= require('./seed');
const {companyData, computerData, commentData} = require('./devData')


mongoose.connect(dburl)
    .then( () => {
        return seed(companyData, computerData, commentData);
    })
    .then(() => {
        mongoose.disconnect();
    }).catch(console.log)

 