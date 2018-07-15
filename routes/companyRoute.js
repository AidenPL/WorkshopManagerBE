const express = require('express');
const router = express.Router();
const {companies, postCompany, updateCompany} = require('../controller/companyController')

router.get('/', companies);
router.post('/', postCompany);
router.put('/:companyid', updateCompany)

module.exports = router;