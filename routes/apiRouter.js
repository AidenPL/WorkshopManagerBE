const express = require('express');
const router = express.Router();
const {GetCompanys} = require('../controller/company')

router.get('/', GetCompanys);

module.exports = router;