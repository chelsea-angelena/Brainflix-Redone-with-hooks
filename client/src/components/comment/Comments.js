import React from 'react'

export default function Comments({ mainVideo, props }) {
    const comments = props.mainVideo.comments
    return (
        <div>
             <div className="comment__row">
              {comments && mainVideo.comments.map(comment => (
                      <div className="comment__sng">
                          <li key={comment.id} align="start">
                              <div>
                                  <p>{comment.name}</p>
                                  <p>{comment.date}</p>
                              </div>
                          </li>
                          <p>{comment.comment}</p>
                      </div>
                  ))}
                 </div>
        </div>
    )
}



