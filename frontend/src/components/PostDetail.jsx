import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../redux/actions/postsAction';
import Loading from './Loading';
import moment from 'moment';
import Comment from './Comment';

const PostDetail = ({ user }) => {
      const { post, isLoading } = useSelector((state) => state.postsReducer)
      const dispatch = useDispatch();
      const { id } = useParams();

      useEffect(() => {
            dispatch(getPost(id))
      }, [dispatch, id])

      if (isLoading) return <Loading />;

      return (
            <div className="post-detail">
                  <div className="post-detail__container">
                        <div className="post-detail__container__info">
                              <img src={post?.selectedFile} alt="post_img" />
                              <div className="post-detail__container__info__content">
                                    <h3>{post?.title}</h3>
                                    <span>{post?.desc}</span>
                                    <span>{moment(post?.createdAt).fromNow()}</span>
                              </div>
                        </div>
                        {user
                              ? <Comment post={post} user={user} />
                              : <div className="post-detail__container__comments">
                                    <Link to='/auth'>
                                          <span>SIGN IN FOR COMMENT</span>
                                    </Link>
                              </div>
                        }
                  </div>
            </div>
      )
}

export default PostDetail