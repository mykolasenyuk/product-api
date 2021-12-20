const express = require('express')
const { validation } = require('../../middlewares')
const { joiCommentsSchema } = require('../../models/comments/comment')
const { comments: ctrl } = require('../../controllers')

const router = express.Router()
const commentsValidation = validation(joiCommentsSchema)

router.post('/add', commentsValidation, ctrl.addComment)
router.delete('/:commentId', ctrl.dltComment)
router.get('/:productId', ctrl.getAllComments)
module.exports = router
