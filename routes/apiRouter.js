const express = require('express');
const router = express.Router();
const companyRoute = require('./companyRoute')
const computerRoute = require('./computerRoute')
const commentRoute = require('./commentRoute')

router.use('/company', companyRoute);
router.use('/computer', computerRoute);
router.use('/comment', commentRoute);

module.exports = router;