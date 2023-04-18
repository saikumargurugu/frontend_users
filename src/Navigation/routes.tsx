import React from "react";
import Home from "../Home/home";
import { UserList, UserCreate } from "../users";



export const navRoutes = [
  {
    path: "/",
    lable: "Home",
    component: <Home/>
  },
  {
    path: "/jobs/",
    lable: "Job List",
    component: <UserList/>

  },
  {
    path: "/users/create",
    lable: "Add Job",
    component: <UserCreate/>
  },
];
