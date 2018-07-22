const computerModel = require('../models/computerModel')
const commentModel = require('../models/commentModel')

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

function postComputer(req, res, next) {

    computerModel.create({
        ref: req.body.ref,
        bay: req.body.bay,
        issue: req.body.issue,
        current_status: req.body.current_status,
        end_user: req.body.end_user,
        date: req.body.date,
        stage: req.body.stage
    })
    .then(computer => {
       return Promise.all([commentModel.create({computer_id: computer._id, comment: `Computer Booked in and is due in on ${computer.date}`, date: '02/02/18'}), computer])
    })
    .then((comment, computer) => {
        return res.status(201).send({ Computer: computer });
    })
    .catch((err) => console.log(err))
}

function UpdateComputer(req, res, next) {
    if (req.query.comment === 'true'){
        const commentToAdd = req.body.comment
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
        .then((computer) => {
            console.log(computer)
            return Promise.all([commentModel.create({computer_id: computer._id, comment: commentToAdd, date: '02/02/18'}), computer])
        })
        .then((comment, computer) => {
            return res.status(201).send({ Computer: computer });
        })
        .catch((err) => console.log(err))

    }else {
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
}
    


module.exports = {computers, postComputer, computerById, UpdateComputer}