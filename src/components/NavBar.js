import React from "react";
import logo from "./../images/logo.png";
import "./../styles/NavBar.css";

export const NavBar = () => {
  return (
    <div className="app__navBar">
      <img src={logo} alt="logo" />
    </div>
  );
};
