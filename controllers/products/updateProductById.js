const { Product } = require('../../models')

const updProduct = async (req, res, next) => {
  try {
    const { productId } = req.params
    const product = { productId }
    const result = await Product.findByIdAndUpdate(
      product.productId,
      req.body,
      {
        new: true,
      },
    )
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Product with ID=${productId} not found`,
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      message: '✔️ Product updated',
      data: { result },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updProduct
