/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/" className="navLink">
        <h1 className="nameNav">Crypto Wallet</h1>
      </Link>
    </div>
  );
}

export default NavBar;
