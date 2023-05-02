import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export const SelectLocation = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div>
      <label htmlFor="location">My location:</label>
      <div className="countrySelectWrapper">
        <Select
          options={options}
          value={value}
          onChange={changeHandler}
          className="countrySelect"
        />
        <p> E.g. New Roads or 70760</p>
        <p> We don't use postal addresses to contact members directly!</p>
      </div>
    </div>
  );
};
