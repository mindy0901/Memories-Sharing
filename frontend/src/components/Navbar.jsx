import React, { useEffect, useState } from 'react';
import memories from '../assets/memories.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Navbar = ({ user }) => {
      const [userInfo, setUserInfo] = useState(user);
      const dispatch = useDispatch();
      const location = useLocation();
      const navigate = useNavigate();

      const logout = () => {
            dispatch({ type: 'LOGOUT' });
            navigate('/');
      };

      useEffect(() => {
            setUserInfo(user);
      }, [location, user]);

      return (
            <div className="navbar">
                  <Link to="/" className="navbar-link">
                        <div className="navbar__logo">
                              <h1>Memories</h1>
                              <img src={memories} alt="memories-logo" />
                        </div>
                  </Link>
                  {userInfo?.result
                        ? (
                              <div className="navbar__auth__user">
                                    <img src={userInfo?.result?.imageUrl} alt="user-avatar" />
                                    <span>{userInfo?.result?.name}</span>
                                    <button onClick={logout}>Log Out</button>
                              </div>
                        )
                        : (
                              <Link to="/auth">
                                    <button>Login</button>
                              </Link>
                        )}
            </div>
      )
}

export default Navbar