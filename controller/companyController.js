const companyModel = require('../models/companyModel')

function companies (req, res, next) {

    return res.status(200).send('Working')
}

module.exports = {companies}