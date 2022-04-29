import React from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

const Input = ({ name, type, handleChange, handleShowPassword, placeholder }) => {
      return (
            <div className="input">
                  <input
                        name={name}
                        type={type}
                        onChange={handleChange}
                        placeholder={placeholder}
                  />
                  {name === 'password' && (
                        <div onClick={handleShowPassword}>
                              {type === 'password' ? <MdOutlineVisibility style={{ fontSize: '2rem', cursor: 'pointer', marginLeft: '4px' }} /> : <MdOutlineVisibilityOff style={{ fontSize: '2rem', cursor: 'pointer', marginLeft: '4px' }} />}
                        </div>
                  )}
            </div>
      )
}

export default Input