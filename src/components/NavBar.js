import React from "react";
import logo from "./../images/logo.png";
import "./../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="app__navBar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
