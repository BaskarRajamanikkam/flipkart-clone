const express = require('express');
const { getAllProducts, createProduct, uploadProductImages, getProductDetails } = require('../controllers/ProductController');
const { isAuthenticated, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.route('/products').get(getAllProducts);

router.route('/product/:id').get(getProductDetails);

// product add to admin only access
router.route('/admin/products/create').post(isAuthenticated, authorizeRoles("admin"), uploadProductImages, createProduct);


module.exports = router;




