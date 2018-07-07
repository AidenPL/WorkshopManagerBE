const endUserModel = require('../models/endUserModel')

function endUsers (req, res, next) {
    endUserModel.find({company_name: req.params.company_id}).populate('company_name')
        .then((users) => {
            res.send({EndUsers: users })
        })
        .catch((err) => console.log(err))
}

module.exports = {endUsers}