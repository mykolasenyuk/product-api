const express = require('express')
const { validation } = require('../../middlewares')
const { joiSchema } = require('../../models/products/products')
const { products: ctrl } = require('../../controllers')

const router = express.Router()
const productValidation = validation(joiSchema)

router.get('/', ctrl.getAllProducts)
router.post('/', productValidation, ctrl.addProduct)

module.exports = router
