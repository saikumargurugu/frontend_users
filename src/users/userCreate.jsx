import React from "react";
import Form from "../components/form/forms";
import { useNavigate } from 'react-router-dom';
import { MakeCall } from "../axios/axios";


const UserCreate=()=> {
  const navigate = useNavigate();
  const userInputForm = [
    {
      inputType: "text",
      label: "First Name",
      keyStr: "firstName",
      value: "",
  },
  {
    inputType: "text",
    label: "Last Name",
    keyStr: "lastName",
    value: "",
  },    {
    inputType: "number",
    label: "Age",
    keyStr: "age",
    value: "",
},    {
  inputType: "email",
  label: "Email",
  keyStr: "email",
  value: "",
},    {
  inputType: "tel",
  label: "Phone",
  keyStr: "phoneNumber",
  value: "",
},    {
  inputType: "switch",
  label: "Admin Access",
  keyStr: "isAdmin",
  value: "",
}
  ]
  const createUser= async(data)=> {
    console.log("innnnnnnnnn");
    const req= await MakeCall({
      data:data,
      url:'/users/',
      method: "POST",
    })
    console.log(req);
    // goToHome() 
  }
  const goToHome= ()=> {
    navigate("/users");
  }

  const formActions = [
    {
      label: "Create",
      action: "ApiCall",
      endpoint: "/",
      clickAction: createUser,
      type: "primary",
      redirectUrl: "/"
    },
    {
      label: "Cancle",
      action: "redirect",
      type: "secondry",
      redirectUrl: "/",
      clickAction:goToHome
    }
  ]
  return (
    <div className="mt-14">
      <Form formSchema={userInputForm} formActions={formActions} />
    </div>
  );
}

export default UserCreate;
