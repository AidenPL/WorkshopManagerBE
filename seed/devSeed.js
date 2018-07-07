const mongoose = require('mongoose');
const {dburl} = require('../config/')
const seed= require('./seed');
const {companyData, computerData, endUserData} = require('./devData')


mongoose.connect(dburl)
    .then( () => {
        return seed(companyData, computerData, endUserData);
    })
    .then(() => {
        mongoose.disconnect();
    }).catch(console.log)

 