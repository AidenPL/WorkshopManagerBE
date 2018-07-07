const endUserModel = require('../models/endUserModel')

function endUsers (req, res, next) {

    return res.status(200).send('Working')
}

module.exports = {endUsers}