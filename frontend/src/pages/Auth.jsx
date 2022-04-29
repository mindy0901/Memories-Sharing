import React, { useState } from 'react';
import Input from '../components/Input';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
}

const Auth = () => {
      const [formData, setFormData] = useState(initialState);
      const [isSignUp, setIsSignUp] = useState(false);
      const [showPassword, setShowPassword] = useState(false);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleChange = (e) => {
            const name = e.target.name
            setFormData({ ...formData, [name]: e.target.value })
      }

      const handleSwitch = () => {
            setIsSignUp(!isSignUp);
      }

      const handleShowPassword = () => {
            setShowPassword(!showPassword);
      }

      const handleSubmit = (e) => {
            // e.preventDefault();
            // if (isSignUp) {
            //       dispatch(signup(formData, navigate('/auth')))
            // } else {
            //       dispatch(signin(formData, navigate('/')))
            // }
      }

      const responseGoogle = (response) => {
            const result = response.profileObj;
            const token = response.tokenId;
            try {
                  dispatch({ type: 'AUTH', payload: { result, token } });
                  navigate("/");
            } catch (error) {
                  console.log(error);
            }
      };

      return (
            <div className="auth">
                  <div className="auth__container">
                        <div className="auth__top">
                              <h1>{isSignUp ? 'Register' : 'Login'}</h1>
                        </div>
                        <div className="auth__bottom">
                              <form action="" className="auth__bottom__form">
                                    {isSignUp && (
                                          <>
                                                <Input placeholder='FirstName' name='firstName' type='text' handleChange={handleChange} />
                                                <Input placeholder='LastName' name='lastName' type='text' handleChange={handleChange} />
                                          </>
                                    )}
                                    <Input placeholder='Email' name='email' type='email' handleChange={handleChange} />
                                    <Input placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                                    {isSignUp && (
                                          <Input placeholder='ConfirmPassword' name='confirmPassword' type='password' handleChange={handleChange} handleShowPassword={handleShowPassword} />
                                    )}
                              </form>
                              <div className="auth__bottom__button">
                                    <GoogleLogin
                                          clientId='388199177066-o1jglvjrvnqvtiipadurfa24369q59ht.apps.googleusercontent.com'
                                          onSuccess={responseGoogle}
                                          onFailure={responseGoogle}
                                          cookiePolicy="single_host_origin"
                                          render={(props) => (
                                                <button
                                                      type='button'
                                                      onClick={props.onClick}
                                                      disabled={props.disabled}
                                                >
                                                      <FcGoogle style={{ marginRight: "4px", fontSize: "2rem" }} />
                                                      Google Sign In
                                                </button>
                                          )}
                                    />
                                    <button type='submit' onClick={handleSubmit}>
                                          {isSignUp ? 'Sign Up' : 'Sign In'}
                                    </button>
                                    <span onClick={handleSwitch}>
                                          {isSignUp ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
                                    </span>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Auth