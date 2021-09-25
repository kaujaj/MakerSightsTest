const router = require('express').Router();
const productController = require('../controllers/products.controller')

//getData api endPoint gets productData from database
router.get('/getData',productController.getData);
//addProduct api endpoint adds a product to the database
router.post('addProduct',productController.addProduct);

module.exports=router;