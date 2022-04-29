import React, { useEffect, useState } from 'react';
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPostsBySearch, updatePost } from '../redux/actions/postsAction';
import { useNavigate } from 'react-router-dom';

const Form = ({ user, currentId, setCurrentId }) => {
      const [postData, setPostData] = useState({ title: '', desc: '', selectedFile: '' });
      const [searchForm, setSearchForm] = useState('')
      const post = useSelector((state) =>
      (currentId
            ? state.postsReducer.posts.find((x) => x._id === currentId)
            : null));
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
            if (post) setPostData(post)
      }, [post]);

      const handleChange = (e) => {
            const name = e.target.name
            setPostData({
                  ...postData,
                  [name]: e.target.value,
            })
      }

      const handleClear = () => {
            setCurrentId(0);
            setPostData({ title: '', desc: '', tags: [], selectedFile: '' });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            if (currentId === 0) {
                  dispatch(createPost({ ...postData, creator: user?.result?.name, creatorId: user?.result?.googleId }));
                  handleClear();
            } else {
                  dispatch(updatePost(postData, currentId));
                  handleClear();
                 
            }
      };

      const handleSearch = (e) => {
            e.preventDefault();
            if (searchForm.trim()) {
                  dispatch(getPostsBySearch(searchForm));
                  setSearchForm("");
                  navigate(`/posts/search?searchQuery=${searchForm}`)
            } else {
                  navigate('/')
            }
      }

      return (
            <div className="form">
                  {!user
                        ? <div className="form__disabled">
                              <span>PLEASE SIGN IN TO POST</span>
                        </div>
                        : <div className="form__container">
                              <div className="form__container__search">
                                    <input onChange={(e) => setSearchForm(e.target.value)} value={searchForm} type='search' placeholder='Search..' />
                                    <button className="button-36" onClick={handleSearch}>Search</button>
                              </div>
                              <h6>{currentId ? "Editing" : "Creating"} a Memory</h6>
                              <input value={postData.title} name='title' type="text" onChange={handleChange} placeholder="Title..." min="1" max="10" />
                              <input value={postData.desc} name='desc' type="text" onChange={handleChange} placeholder="Description..." />
                              <div className="form__container__filebase64">
                                    <FileBase64
                                          type="file"
                                          multiple={false}
                                          onDone={(file) => {
                                                setPostData({ ...postData, selectedFile: file.base64 })
                                          }}
                                    />
                              </div>
                              <button className="button-36" onClick={handleSubmit}>Submit</button>
                              <button className="button-36" onClick={handleClear}>Clear</button>
                        </div>
                  }

            </div>
      )
}

export default Form