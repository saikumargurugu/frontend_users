import React from "react";
import { inputItem } from "../../userTypes";

const CheckBox = (checkBoxProps: inputItem) => {
  const { value, label } =checkBoxProps
  return (
    <div>
      <fieldset>
        <div className="flex items-center">
          <input
            id="international-shipping-disabled"
            type="checkbox"
            value={value||false}
            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
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
