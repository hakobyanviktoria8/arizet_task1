import React from "react";
import { SelectLookingFor } from "./SelectLookingFor";
import { SelectAge } from "./SelectAge";

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
