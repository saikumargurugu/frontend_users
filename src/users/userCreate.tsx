import React from "react";
import Form from "../components/form/forms";
import { useNavigate } from 'react-router-dom';
import { MakeCall } from "../axios/axios";


const UserCreate=()=> {
  const navigate = useNavigate();
  const userInputForm = [
    {
      inputType: "text",
      label: "Job Title",
      keyStr: "jobTitle",
      value: "",
  },
  {
    inputType: "textArea",
    label: "Job Description",
    keyStr: "jobDescription",
    value: "",
  },  {
  inputType: "email",
  label: "Contanct Email",
  keyStr: "contanctEmail",
  value: "",
},    {
  inputType: "tel",
  label: "Contanct Phone",
  keyStr: "contantNumber",
  value: "",
},    {
  inputType: "address",
  label: "Location",
  keyStr: "location",
  value: "",
}
  ]
  const createUser= async(data)=> {
    const req= await MakeCall({
      data:data,
      url:'/jobs/',
      method: "POST",
    })
    
    if (req.data.status===200){
    goToHome() 
  }
  }
  const goToHome= ()=> {
    navigate("/jobs/");
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
