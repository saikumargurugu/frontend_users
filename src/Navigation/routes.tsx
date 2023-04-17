import React from "react";
import { UserList, UserCreate } from "../users";



export const navRoutes = [
  {
    path: "/",
    lable: "Home",
    component: <UserList/>
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
