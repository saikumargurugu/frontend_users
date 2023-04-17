import { stringify } from "querystring";
import React, { useState } from "react";
import { inputItem } from "../../../users/userTypes";

type AddType={
  key: string,
  label: string,
  placeholder: string
  }

  type AddObjType={
    Street:string,
    City:string,
    State:string,
    Country:string,
    PostCode:string
  }

  type Key = string | "Street"|"Country"|"PostCode"| "City" | "State"

const Address = (itemProps: inputItem) => {
  const { value, inputType, keyStr, label, onValueChange } = itemProps;
  const [address,setAddress]= useState<AddObjType>({})
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>,key:Key): void =>
  {
    console.log(key);
    
    setAddress({...address,[key]:event.target.value})
    onValueChange(keyStr, address);
    console.log(address);
    

  }



  const AddrObj =[
    {key:"Street",label:"Street",placeholder:"Street Name"},
    {key:"City",label:"City",placeholder:"City Name"},
    {key:"State",label:"State",placeholder:"State Name"},
    {key:"Country",label:"Country",placeholder:"Country Name"},
    {key:"PostCode",label:"Post Code",placeholder:"Post Code"}
  ]

  return (
    <div className="md:grid md:grid-cols-2 sm:flex gap-4">
      {AddrObj.map((addr:AddType)=><div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {addr.label}
      </label>
      <input
        type={inputType}
        value={address[addr.key]}
        onChange={(e)=>{handleChange(e,addr.key)}}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={addr.placeholder}
      ></input></div>)}

    </div>
  );
};

export default Address;
