import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Auth from './pages/Auth';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PostDetail from './components/PostDetail';

const App = () => {
      const user = useSelector((state) => state.authReducer.authData)
      return (
            <div className="app">
                  <Navbar user={user} />
                  <Routes>
                        <Route path="/" element={<Navigate to="/posts" />} />

                        <Route path="/auth" element={<Auth />} />
                        <Route path="/posts" element={<Home user={user} />} />
                        <Route path="/posts/search" element={<Home user={user} />} />
                        <Route path="/posts/:id" element={<PostDetail user={user} />} />
                  </Routes>
            </div>
      );
};

export default App;
