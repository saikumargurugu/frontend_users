import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { inputItem, formProps, buttonFormItem } from "../../users/userTypes";
import Button from "../button/button";
import Inputs from "./inputs";

const Form = (props: formProps) => {
  const { formSchema, formActions } = props;
  const [formData, setFormData]: any = useState({});
  const [errors, setErrors]: any = useState({});

  useEffect(() => {
    const data: any = {};
    formSchema.forEach((item: inputItem) => {
      data[item.keyStr] = "";
      if(item.inputType==="switch"||item.inputType==="checkbox"){
        data[item.keyStr] = false;
      }
    });
    setFormData(data);
  }, [formSchema]);

  const onValueChange = (keyStr: string, value: any) => {
    const newErrors = errors
    setFormData({
      ...formData,
      [keyStr]: value,
    });
    if (newErrors[keyStr]){
      delete newErrors[keyStr]
    }
    setErrors(newErrors)
  };

  const handleSubmit = (action: buttonFormItem) => {
    if(action.action==='redirect'){
      action.clickAction();
      return;
    }
    let newErrors = errors;
    formSchema.forEach((item) => {      
      if (!formData[item.keyStr]&& !(item.inputType==="switch" || item.inputType==="checkbox")) {
        newErrors = {
          ...newErrors,
          [item.keyStr]: `${item.label} is required`,
        };
      }
      if (
        item.inputType === "email" &&
        // eslint-disable-next-line no-useless-escape
        !formData[item.keyStr].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      ) {
        newErrors = {
          ...newErrors,
          [item.keyStr]: `invalid ${item.label}`,
        };
      }
    });
    
    setErrors(newErrors);
    if (!(Object.keys(formSchema).length === 0)) {
      action.clickAction(formData);
    }
    return;
  };

  return (
    <div className="flex flex-col m-auto bg-white border-2 w-3/4 rounded-lg">
      <div className="bg-white flex flex-auto items-center dark:bg-gray-900 w-full  m-auto p-6  border-2 border-b-0 border-gray-200  dark:border-gray-600">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2522/2522090.png"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <h1 className="text-black dark:text-white text-3xl font-bold ">
          Add User
        </h1>
      </div>
      <form>
        <div className="md:grid md:grid-cols-2 sm:flex gap-4 m-auto p-6 justify-center dark:bg-gray-900 bg-white border-2 ">
          {formSchema.map((item: inputItem) => (
            <div className="flex flex-col">
              <Inputs
                inputItem={{ ...item, value: formData[item.keyStr] }}
                onValueChange={onValueChange}
              />
              {errors[item.keyStr] && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">*</span>
                  {errors[item.keyStr]}
                </p>
              )}
            </div>
          ))}
        </div>
      </form>
      <div className="flex flex-row-reverse justify-between bg-white dark:bg-gray-900 w-full  m-auto p-6  border-2 border-y-0 border-gray-200  dark:border-gray-600">
        {formActions.map((action: buttonFormItem) => (
          <Button
            type={action.type}
            label={action.label}
            clickAction={() => handleSubmit(action)}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
