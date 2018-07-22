const commentModel = require('../models/commentModel')

function commentId (req, res, next) {
    commentModel.find({computer_id: req.params.computer_id}).populate('computer_id')
        .then((comments) => {
            res.send({Comments: comments })
        })
        .catch((err) => console.log(err))
}

function postComment(req, res, next) {

    commentModel.create({
        computer_id: req.body.computer_id,
        comment: req.body.comment,
        date: req.body.date
    })
    .then(comment => {
        return res.status(201).send({ Comment: comment });
    })
    .catch((err) => console.log(err))
}

module.exports = {commentId, postComment}