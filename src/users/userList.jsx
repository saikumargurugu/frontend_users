import React, { useEffect, useState } from "react";
import { MakeCall } from "../axios/axios";
import UserListTable from "./table/table";

const headers =[
  {
    key: "first_name",
    label: "First Name"
  },
  {
    key: "last_name",
    label: "First Name"
  },
  {
    key: "age",
    label: "Age"
  },
  {
    key: "email",
    label: "Email"
  },
  {
    key: "phone_number",
    label: "Phone"
  },
  {
    key: "is_admin",
    label: "Admin"
  }

]




const UserList=()=> {
  const [data,setData]= useState([{}]) 
  useEffect(()=>{    
    const mountCalls=async()=>{
      const returnData=await MakeCall({
        url:'/users/',
        method:'GET'
      })
      setData(returnData.data.data)
     }
    mountCalls()
  },[])
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <UserListTable tableHeaders={headers} data= {data} />
    </div>
  );
}

export default UserList;
