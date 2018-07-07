const express = require('express');
const router = express.Router();
const companyRoute = require('./companyRoute')
const computerRoute = require('./computerRoute')
const endUserRoute = require('./endUserRoute')

router.use('/company', companyRoute);
router.use('/computer', computerRoute);
router.use('/enduser', endUserRoute);

module.exports = router;