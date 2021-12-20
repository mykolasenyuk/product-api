const { Comment } = require('../../models')

const getAllComments = async (req, res, next) => {
  try {
    const { productId } = req.params
    const product = { productId }
    // console.log(product)
    const products = await Comment.find(product)
    res.json({
      status: '✔️ Success',
      code: 200,
      products,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllComments
