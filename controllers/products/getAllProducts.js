const { Product } = require('../../models')

const getAllProducts = async (req, res, next) => {
  try {
    // const { _id } = req.user
    // const searchOption = { owner: _id }
    const products = await Product.find({})
    res.json({
      status: '✔️ Success',
      code: 200,
      products,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllProducts
