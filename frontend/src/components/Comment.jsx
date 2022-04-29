import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { commentPost } from '../redux/actions/postsAction';

const Comment = ({ post, user }) => {
      const [comments, setComments] = useState(post?.comments);
      const [comment, setComment] = useState('');
      const dispatch = useDispatch();
      const commentsRef = useRef();

      const handleClick = async () => {
            const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
            setComment('');
            setComments(newComments);
            commentsRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      return (
            <div className="comment">
                  <div className="comment__container">
                        <h3>Comments</h3>
                        {comments?.map((comment, index) => (
                              <span key={index}>
                                    {comment}
                              </span>
                        ))}
                        <div ref={commentsRef} />
                  </div>
                  <div className="comment__add-comment">
                        <h3>Write a Comments</h3>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="comment" cols="40" rows="4" ></textarea>
                        <button onClick={handleClick} type="submit" disabled={!comment}>Comment</button>
                  </div>
            </div>
      )
}

export default Comment