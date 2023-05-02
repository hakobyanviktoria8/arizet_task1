import React from "react";
import { SelectLookingFor } from "./SelectLookingFor";
import { SelectAge } from "./SelectAge";
import { SelectLocation } from "./SelectLocation";
import { Input } from "./Input";
import "./../../styles/FormDataComp.css";

export const FormDataComp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log("formData_____", formJson);
  };

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
        />

        <Input
          fildName="password"
          labelName="My password:"
          placeholder="create your password"
        />

        <button type="submit">start!</button>
      </form>

      <div>
        <span>Already signed up?</span>
        <a href="">Log in</a>
      </div>
    </div>
  );
};
