import React, { useState } from "react";
import { generateAge } from "../../helper/generateAge";

export const SelectAge = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const agesArr = generateAge();

  return (
    <>
      <div className="formSelect_age">
        <label htmlFor="age">My age:</label>
        <div>
          <select
            id="age"
            name="age"
            defaultValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            data-placeholder="Выбрать год"
          >
            <option value="" disabled hidden>
              select your age
            </option>
            {agesArr?.map((age) => (
              <option key={age} value={`${age}`}>
                {age}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
