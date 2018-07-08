const computerModel = require('../models/computerModel')

function computers (req, res, next) {
    computerModel.find().populate({ 
        path: 'end_user',
        populate: {
          path: 'company_name'
        } 
     })
    .then(data => {
        res.send({ Computer: data });
    })
    .catch((err) => {console.log})
}

function postEndUser(req, res, next) {

    computerModel.create({
        ref: req.body.ref,
        bay: req.body.bay,
        issue: req.body.issue,
        current_status: req.body.current_status,
        end_user: req.body.end_user
    })
    .then(computer => {
        return res.status(201).send({ Computer: computer });
    })
    .catch((err) => console.log(err))
}
    


module.exports = {computers, postEndUser}