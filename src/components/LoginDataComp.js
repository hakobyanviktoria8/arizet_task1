import React from "react";
import { Link } from "react-router-dom";

export const LoginDataComp = () => {
  return (
    <div className="app__main_form">
      <h2>This page is unavailable!</h2>
      <div className="loginWrapper">
        <span>Don't have an account?</span>
        <Link to="/">Sign up</Link>
      </div>
    </div>
  );
};
