const companyModel = require('../models/company')

function GetCompanys (req, res, next) {

    return res.status(200).send('Working')
}

module.exports = {GetCompanys}