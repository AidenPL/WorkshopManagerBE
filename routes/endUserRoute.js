const express = require('express');
const router = express.Router();
const {endUsers} = require('../controller/endUserController')

router.get('/', endUsers);

module.exports = router;