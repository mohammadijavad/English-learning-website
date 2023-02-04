import React from 'react'
import Comment from './components/Comment'

function Comments({ comments }) {
  return (
    <div>
      <div>
        <h3>نظرات زبان آموزان</h3>
      </div>
      {comments?.map((comment) => (
        <Comment key={comment.commentID} {...comment} />
      ))}
    </div>
  )
}

export default Comments
