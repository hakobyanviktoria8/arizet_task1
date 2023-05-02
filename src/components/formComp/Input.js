import React, { useState } from "react";

export const Input = ({ fildName, labelName, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor={fildName}>{labelName}</label>
      <input
        id={fildName}
        name={fildName}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
