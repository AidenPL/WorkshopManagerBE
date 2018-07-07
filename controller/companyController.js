const companyModel = require('../models/companyModel')

function companies (req, res, next) {
    companyModel.find().lean()
    .then(data => {
        res.send({ Company: data });
    })
    .catch((err) => {console.log})
}

module.exports = {companies}