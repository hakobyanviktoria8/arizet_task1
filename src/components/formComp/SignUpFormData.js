import React, { useState, useEffect } from "react";
import { SelectLookingFor } from "./SelectLookingFor";
import { SelectAge } from "./SelectAge";
import { SelectLocation } from "./SelectLocation";
import { Input } from "./Input";
import "./../../styles/SignUpFormData.css";
import { fetchUserData } from "../../helper/fetchUserData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SignUpFormData = () => {
  const [userData, setUserData] = useState({
    looking_for: "",
    age: "",
    location: "",
    email: "",
    password: "",
  });
  const [resData, setResData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setUserData(formJson);

    // console.log({ userData, formJson });
    fetchUserData(formJson.email, formJson.password, setResData);
  };

  useEffect(() => {
    if (resData["Status"] === "ok" && resData["Data"]?.access_token) {
      localStorage.setItem("userData", JSON.stringify(resData));
      navigate("/profile");
    }
  }, [resData]);

  return (
    <div className="app__main_form">
      <h2>GET LOVELY CUTIES IN YOUR AREA!</h2>
      <form onSubmit={handleSubmit}>
        <SelectLookingFor />

        <SelectAge />

        <SelectLocation />

        <Input
          fildName="email"
          labelName="My email:"
          placeholder="your email address"
          type="text"
          handleChange={handleChange}
          errorMess={resData["Error"]?.message}
        />

        <Input
          fildName="password"
          labelName="My password:"
          placeholder="create your password"
          type="password"
          handleChange={handleChange}
        />

        <div className="btnWrapper">
          <button
            type="submit"
            disabled={userData.email === "" && userData.password === ""}
            className={`${
              userData.email === "" && userData.password === ""
                ? "disabled"
                : ""
            } `}
          >
            start!
          </button>
        </div>
      </form>

      <div className="loginWrapper">
        <span>Already signed up?</span>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};
