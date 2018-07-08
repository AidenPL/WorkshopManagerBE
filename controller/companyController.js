const companyModel = require('../models/companyModel')

function companies(req, res, next) {
    companyModel.find().lean()
        .then(data => {
            res.send({ Company: data });
        })
        .catch((err) => { console.log })
}

function postCompany(req, res, next) {

    companyModel.create({
        company_name: req.body.company_name
    })
    .then(company => {
        return res.status(201).send({ Company: company });
    })
    .catch((err) => console.log(err))
}


module.exports = { companies, postCompany }