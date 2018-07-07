const computerModel = require('../models/computerModel')

function computers (req, res, next) {

    return res.status(200).send('Working')
}

module.exports = {computers}