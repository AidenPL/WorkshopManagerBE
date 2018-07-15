const computerModel = require('../models/computerModel')

function computers (req, res, next) {
    computerModel.find().populate({ 
        path: 'end_user'
     })
    .then(data => {
        res.send({ Computer: data });
    })
    .catch((err) => {console.log})
}

function computerById (req, res, next) {
    computerModel.findById(req.params.computerID).populate({ 
        path: 'end_user'
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

function UpdateComputer(req, res, next) {

    computerModel.findByIdAndUpdate(req.params.computerID,{
        ref: req.body.ref,
        bay: req.body.bay,
        issue: req.body.issue,
        current_status: req.body.current_status,
        end_user: req.body.end_user,
        date: req.body.date,
        stage: req.body.stage
    })
    .then((computer) => {
        return computerModel.findById(computer._id)
    })
    .then(computer => {
        return res.status(201).send({ Computer: computer });
    })
    .catch((err) => console.log(err))
}
    


module.exports = {computers, postEndUser, computerById, UpdateComputer}