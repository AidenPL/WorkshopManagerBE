const express = require('express');
const router = express.Router();
const {companies, postCompany} = require('../controller/companyController')

router.get('/', companies);
router.post('/', postCompany);

module.exports = router;