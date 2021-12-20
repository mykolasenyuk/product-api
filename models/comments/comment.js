const { Schema, model } = require('mongoose')
const Joi = require('joi')

const commentsSchema = Schema(
  {
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },

    productId: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true,
    },
  },
  { versionKey: false },
)

const joiCommentsSchema = Joi.object({
  date: Joi.string().required(),
  description: Joi.string().required(),
  productId: Joi.string().required(),
})

const Comment = model('comment', commentsSchema)

module.exports = { Comment, joiCommentsSchema }
