const express = require('express')
const { validation } = require('../../middlewares')
const { joiCommentsSchema } = require('../../models/comments/comment')
const { comments: ctrl } = require('../../controllers')

const router = express.Router()
const commentsValidation = validation(joiCommentsSchema)

router.post('/add', commentsValidation, ctrl.addComment)

module.exports = router
