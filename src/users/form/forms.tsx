import React from "react";
import { inputItem, formProps } from "../userTypes"
 

const Form = (props: formProps) => {
  const { formSchema } = props;
  return (
    <form>
      <div className="grid grid-cols-2 gap-4 m-auto p-6 justify-center bg-white border-2 w-1/2 rounded-lg">
        {formSchema.map((item: inputItem) => (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {item.label}
            </label>
            <input
              type="text"
              id="small-input"
              value={item.value}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
              </input>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Form;
