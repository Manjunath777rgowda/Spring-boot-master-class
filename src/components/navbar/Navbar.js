import React from "react";
import { NavLink } from "react-router-dom";
import { Menulist } from "./Menulist";
import "./Navbar.css";

const Navbar = () => {

  const menuList = Menulist.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <div className="logo">Mobile<span>World</span></div>
      <ul className="menu-list">{menuList}</ul>
    </nav>
  );
};

export default Navbar;
