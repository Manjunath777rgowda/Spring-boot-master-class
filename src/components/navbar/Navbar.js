import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
          <div className="logo">Mobile World</div>
          <ul className="menu-list">
              <li><a href="/">Home</a></li>
              <li><a href="/merchant">Merchant</a></li>
              <li><a href="/customer">Customer</a></li>
          </ul>
      </nav>
  );
};

export default Navbar;
