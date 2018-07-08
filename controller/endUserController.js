const endUserModel = require('../models/endUserModel')

function endUsers (req, res, next) {
    endUserModel.find({company_id: req.params.company_id}).populate('company_id')
        .then((users) => {
            res.send({EndUsers: users })
        })
        .catch((err) => console.log(err))
}

function postEndUser(req, res, next) {

    endUserModel.create({
        company_id: req.body.company_id,
        name: req.body.name,
        contact_number: req.body.contact_number
    })
    .then(endUser => {
        return res.status(201).send({ EndUser: endUser });
    })
    .catch((err) => console.log(err))
}

module.exports = {endUsers, postEndUser}