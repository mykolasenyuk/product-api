const { Product } = require('../../models')
const { Conflict } = require('http-errors')

const addProduct = async (req, res, next) => {
  try {
    // const { name } = req.body
    // const category = await Product.findOne({ name })
    // if (category) {
    //   throw new Conflict(`Product already exist`)
    // }
    console.log(req.body)
    const newProduct = { ...req.body }
    const result = await Product.create(newProduct)
    res.status(201).json({
      status: 'sucess',
      code: 201,
      message: `✔️ Product '${req.body.name}' added`,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}
module.exports = addProduct
