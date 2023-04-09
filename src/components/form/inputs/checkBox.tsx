import React from "react";
import { inputItem } from "../../../users/userTypes";

const CheckBox = (checkBoxProps: inputItem) => {
  const { value, keyStr, label, onValueChange } = checkBoxProps;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    onValueChange(keyStr, event.target.checked);
  return (
    <div className="flex  items-center mt-5 ">
      <fieldset>
        <div className="flex items-center">
          <input
            id="international-shipping-disabled"
            type="checkbox"
            onChange={handleChange}
            required
            value={value || false}
            className="w-4 h-4 border-gray-300  rounded  focus:ring-3 focus:ring-blue-300 checked:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          ></input>
          <label
            htmlFor="international-shipping-disabled"
            className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            {label}
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default CheckBox;
