import React, { useState } from "react";

export const SelectLookingFor = () => {
  const [selectedValue, setSelectedValue] = useState("hetero_male");

  return (
    <div className="formSelect_looking_for">
      <label htmlFor="looking_for">I am:</label>

      <select
        id="looking_for"
        name="looking_for"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="hetero_male">a man looking for a woman</option>
        <option value="hetero_female">a woman looking for a man</option>
        <option value="homo_male">a man looking for a man</option>
        <option value="homo_female">a woman looking for a woman</option>
      </select>
    </div>
  );
};
