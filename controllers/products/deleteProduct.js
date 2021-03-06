const { Product } = require('../../models')

const dltProduct = async (req, res, next) => {
  try {
    const { productId } = req.params

    const product = { productId }
    console.log(product)
    const result = await Product.findByIdAndDelete(product.productId)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `❌ Product with ID=${product.productId} not found`,
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      message: ' ✔️ Product deleted',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = dltProduct
