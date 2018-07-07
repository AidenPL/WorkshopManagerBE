const express = require('express');
const router = express.Router();
const {companies} = require('../controller/companyController')

router.get('/', companies);

module.exports = router;