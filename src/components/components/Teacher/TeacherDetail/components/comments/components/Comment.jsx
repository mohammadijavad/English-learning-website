import React from 'react'
import { BsFillStarFill, BsLightningFill } from 'react-icons/bs'
function Comment({
  sudentPicture,
  commentCreatorName,
  rateStudent,
  commentBody,
  commentTime,
  commentID,
}) {
  const rateCountTeacher = [...new Array(4)]

  return (
    <div className="mt-3 border-bottom border-gradient1">
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <div>
              <img
                width={40}
                className="rounded-circle"
                src={sudentPicture}
                alt="comment creattor"
              />
            </div>
            <div className="mx-2">
              <span>{commentCreatorName}</span>
              <div>
                {rateCountTeacher.map((rate, index) => (
                  <BsFillStarFill
                    key={index}
                    style={{ marginRight: '4px' }}
                    color="#ffba04"
                    size={14}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <span>{commentTime}</span>
          </div>
        </div>
        <div className="mt-2 mb-3">{commentBody}</div>
      </div>
      <div></div>
    </div>
  )
}

export default Comment
