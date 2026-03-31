
const router = require('express').Router()

const productController = require('../apis/product/productController')

router.get('/', (req, res)=>{
    res.send("Welcom")
})

router.post('/product/add', productController.add)
router.post('/product/all', productController.all)
router.post('/product/single', productController.single)
router.post('/product/update', productController.update)


module.exports = router;