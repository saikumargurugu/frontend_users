import React from "react";
import { inputItem } from "../../../users/userTypes";

const TextAreaInput = (itemProps: inputItem) => {
  const { value, keyStr, label, onValueChange } = itemProps;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    onValueChange(keyStr, event.target.value);

  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id="message"
        value={value}
        onChange={handleChange}
        required
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={"Please enter the job description"}
      />

    </div>
  );
};

export default TextAreaInput;
