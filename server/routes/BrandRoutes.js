const express = require('express');
const { createBrand, uploadBrandImages } = require('../controllers/BrandController');

const router = express.Router();

// product add to admin only access
router.route('/admin/brands/create').post(uploadBrandImages, createBrand);


module.exports = router;