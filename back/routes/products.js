const express =require("express")
const router= express.Router();


const {getProducts, newProducts, getProductsById, updateProduct, deleteProduct} = require ("../controllers/productsControllers")


router.route('/productos').get(getProducts);
router.route('/productos/nuevo').post(newProducts);
router.route('/productos/:id').get(getProductsById);
router.route('/productos/:id').put(updateProduct);
router.route('/productos/:id').delete(deleteProduct);

module.exports=router;
