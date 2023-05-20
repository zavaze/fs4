import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import '../styles/Login.css';
import { redirect } from 'react-router-dom';
const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    redirect('/');
  };
  return (
    <div className="login-con">
      <div className="login-logo">
        <img src="/images/login.png" alt="" />
      </div>
      <div className="login-form">
        <h2>Email Address</h2>
        <input
          type="username"
          placeholder="Email..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type={passwordShown ? 'text' : 'password'}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={togglePassword} className="show-password">
          <AiFillEyeInvisible />
        </button>
        <p className="forgot">forgoten password</p>
        <button
          type="submit"
          className="login-btn"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Log in
        </button>
        {error && <span className="error">Something Went Wrong...</span>}
        <p>
          Don't have an account?
          <Link to={'/Register'}>
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
