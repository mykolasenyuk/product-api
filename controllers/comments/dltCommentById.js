const { Comment } = require('../../models')

const dltComment = async (req, res, next) => {
  try {
    const { commentId } = req.params

    const comment = { commentId }
    // console.log(comment)
    const result = await Comment.findByIdAndDelete(comment.commentId)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `❌  Comment with ID=${comment.commentId} not found`,
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      message: ' ✔️ Comment deleted',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = dltComment
