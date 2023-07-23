const brands = require("../controllers/brands");

//router
const router = require('express').Router()

//user router
router.post('/addBrands', brands.upload,brands.addBrands);
router.get('/getAll', brands.getAllBrands);
router.put('/:id', brands.upload,brands.updateBrands);
router.delete('/:id', brands.deleteBrands);


module.exports = router;