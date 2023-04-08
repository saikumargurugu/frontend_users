import React from "react";
import { UserList, UserCreate } from "../users";



export const navRoutes = [
  {
    path: "/",
    lable: "Home",
    component: <UserList/>
  },
  {
    path: "/users/",
    lable: "Users List",
    component: <UserList/>

  },
  {
    path: "/users/create",
    lable: "Add User",
    component: <UserCreate/>
  },
];
