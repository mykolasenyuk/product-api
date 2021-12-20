const { Schema, model } = require('mongoose')
const Joi = require('joi')

const productSchema = Schema(
  {
    imageUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    count: {
      type: Number,
      required: true,
    },
    size: {
      width: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
    },
    weight: {
      type: String,
      required: true,
    },
    // comments: [String],
  },
  { versionKey: false, timestamps: true },
)

const joiSchema = Joi.object({
  imageUrl: Joi.string(),
  name: Joi.string().min(2),
  size: Joi.object({
    width: Joi.number(),
    height: Joi.number(),
  }),
  count: Joi.number(),
  weight: Joi.string(),
  favorite: Joi.boolean(),
})

const Product = model('product', productSchema)

module.exports = {
  Product,
  joiSchema,
}
