const express = require('express');
const router = express.Router();
const { createResult } = require('../controllers/jankenControllers');

router.post('/new', createResult);

module.exports = router;