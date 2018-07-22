const express = require('express');
const router = express.Router();
const {commentId, postComment} = require('../controller/commentController')

router.get('/:computer_id', commentId);

router.post('/', postComment)

module.exports = router;