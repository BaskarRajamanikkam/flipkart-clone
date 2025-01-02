const express = require('express');
const { createCategorry } = require('../controllers/CategoryController');

const router = express.Router();

router.route('/create-category').post(createCategorry);


module.exports = router;