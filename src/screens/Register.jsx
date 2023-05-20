import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Register.css';
const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const togglePassword2 = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown2(!passwordShown2);
  };
  return (
    <div className="login-con">
      <div className="login-logo">
        <img src="/images/login.png" alt="" />
      </div>
      <div className="login-form">
        <div className="name-lastname">
          <div className="name">
            <h2>Name</h2>
            <input type="text" placeholder="Name..." />
          </div>
          <div className="lastname">
            <h2>Last Name</h2>
            <input type="text" placeholder="Lastname..." />
          </div>
        </div>

        <h2>Email Address</h2>
        <input type="email" placeholder="Email..." />
        <h2>Password</h2>
        <input
          type={passwordShown ? 'text' : 'password'}
          placeholder="password"
        />
        <button onClick={togglePassword} className="show-password">
          <AiFillEyeInvisible />
        </button>
        <h2>Confirm Password</h2>
        <input
          type={passwordShown2 ? 'text' : 'password'}
          placeholder="password"
        />
        <button onClick={togglePassword2} className="show-password">
          <AiFillEyeInvisible />
        </button>
        <p className="forgot">forgoten password</p>
        <button type="submit">Log in</button>
        <p>
          Already have an account?
          <Link to={'/Login'}>
            <span>Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
