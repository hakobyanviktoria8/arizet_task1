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
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};
