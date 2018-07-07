const endUserModel = require('../models/endUserModel')

function endUsers (req, res, next) {
    console.log(req.params)
    endUserModel.find({company_name: req.params.company_id})
        .then((users) => {
            res.send({Users: users })
        })
        .catch((err) => console.log(err))
}

module.exports = {endUsers}