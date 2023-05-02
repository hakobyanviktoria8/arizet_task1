import React from "react";

export const Input = ({
  fildName,
  labelName,
  placeholder,
  type,
  handleChange,
  errorMess = null,
}) => {
  return (
    <div>
      <label htmlFor={fildName}>{labelName}</label>
      <div className="inputWrapper">
        <input
          id={fildName}
          name={fildName}
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
          className={errorMess ? "errorBorder" : ""}
        />
        {errorMess && <span>{errorMess}</span>}
      </div>
    </div>
  );
};
