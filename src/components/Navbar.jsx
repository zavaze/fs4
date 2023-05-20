import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { CgShoppingBag } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { logout } from '../redux/userRedux';
import { useDispatch } from 'react-redux';
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="nav-con">
      <Link to="/">
        <img className="logo" src="/images/logo_header.png" alt="logo" />
      </Link>
      <input type="text" placeholder="What ingredients are you looking for?" />
      {user ? (
        <p
          onClick={() => {
            dispatch(logout());
          }}
        >
          log out
        </p>
      ) : (
        <Link to="/Login">Sign In</Link>
      )}
      <Link to="/Cart" className="cart-con">
        <CgShoppingBag className="cart" />
        <span className="counter">{quantity}</span>
      </Link>
    </div>
  );
};

export default Navbar;
