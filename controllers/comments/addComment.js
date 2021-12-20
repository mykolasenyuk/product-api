const { Comment } = require('../../models')

const addComment = async (req, res) => {
  try {
    const newComment = { ...req.body }
    console.log(newComment)
    const result = await Comment.create(newComment)
    res.status(201).json({
      status: 'sucess',
      code: 201,
      message: `✔️ Comment  added`,
      data: {
        result,
      },
    })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = addComment
