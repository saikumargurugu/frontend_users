import React from "react";
import Form from "./form/forms";

const UserCreate=()=> {
  const userInputForm = [
    {
      inputType: "text",
      label: "First Name",
      key: "firstName",
      value: "",
  },
  {
    inputType: "text",
    label: "Last Name",
    key: "lastName",
    value: "",
  },    {
    inputType: "number",
    label: "Age",
    key: "age",
    value: "",
},    {
  inputType: "text",
  label: "Email",
  key: "email",
  value: "",
},    {
  inputType: "text",
  label: "Email",
  key: "email",
  value: "",
},    {
  inputType: "text",
  label: "Phone",
  key: "phoneNumber",
  value: "",
},    {
  inputType: "Switch",
  label: "Admin Access",
  key: "isAdmin",
  value: "",
}
  ]


  return (
    <div className="mt-14">
      <Form formSchema={userInputForm} />
    </div>
  );
}

export default UserCreate;
