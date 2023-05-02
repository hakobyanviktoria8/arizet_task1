import React, { useState } from "react";
import { SelectLookingFor } from "./SelectLookingFor";
import { SelectAge } from "./SelectAge";
import { SelectLocation } from "./SelectLocation";
import { Input } from "./Input";
import "./../../styles/FormDataComp.css";
import { fetchUserData } from "../../helper/fetchUserData";

export const FormDataComp = () => {
  const [userData, setUserData] = useState({
    looking_for: "",
    age: "",
    location: "",
    email: "",
    password: "",
  });
  const [resData, setResData] = useState({});

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

  console.log(111111, resData);

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
        <a href="/">Log in</a>
      </div>
    </div>
  );
};
