import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineDelete, AiOutlineLike } from 'react-icons/ai';
import { deletePost, likePost } from '../redux/actions/postsAction';


const Post = ({ user, post, setCurrentId }) => {
      const dispatch = useDispatch();

      return (
            <div className="post__container">
                  <div className="post__container__top">
                        <img src={post.selectedFile} alt="post-img" />
                        <div className="post__container__top__overlay">
                              <div className="post__container__top__info">
                                    <span className="post__container__img__info__creator">
                                          {post.creator || 'Anonymous'}
                                    </span>
                                    <span className="post__container__img__info__createdAt">
                                          {moment(post.createdAt).fromNow()}
                                    </span>
                              </div>
                              {user?.result?.googleId === post?.creatorId && (
                                    <div className="post__container__top__more">
                                          <button onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentId(post._id);
                                                document.documentElement.scrollTop = 0;
                                          }}>
                                                <FiMoreVertical style={{ color: "white", fontSize: "2rem" }} />
                                          </button>
                                    </div>
                              )}
                        </div>
                  </div>
                  <Link className="post__link" to={`/posts/${post._id}`}>
                        <div className="post__container__bottom">
                              <h3 className="post__container__bottom__title">{post.title}</h3>
                              <div className="post__container__bottom__message">
                                    <span>{post.desc}</span>
                              </div>
                        </div>
                  </Link>
                  <div className="post__container__actions">
                        <button className="button-like " onClick={() => dispatch(likePost(post._id))}>
                              <AiOutlineLike style={{ marginRight: "4px" }} />
                              {post.likes}
                        </button>
                        {user?.result?.googleId === post?.creatorId && (
                              <button className="button-delete button-68" onClick={() => dispatch(deletePost(post._id))}>
                                    <AiOutlineDelete />
                              </button>
                        )}
                  </div>
            </div>
      )
}

export default Post