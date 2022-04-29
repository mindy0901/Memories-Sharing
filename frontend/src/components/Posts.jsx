import React from 'react';
import Post from './Post';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/postsAction';

const Posts = ({ user, setCurrentId }) => {
      const { posts, isLoading } = useSelector((state) => state.postsReducer);
      console.log(posts)
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getPosts())
      }, [dispatch]);

      if (!posts.length && !isLoading) return <span className='posts__noti'>No Posts</span>

      return (
            isLoading
                  ? <Loading />
                  : (
                        <div className="posts" >
                              {posts?.map((post) => (
                                    <Post user={user} post={post} setCurrentId={setCurrentId} key={post._id} />
                              ))}
                        </div>
                  )
      )
};

export default Posts;