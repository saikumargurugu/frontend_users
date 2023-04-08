import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import { UserList } from '../users';
import UserCreate from '../users/userCreate';
import NavBar from '../Navigation/navBar';
function Routers() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<> </>}/>
        <Route path="users" element={<UserList />}/>
        <Route path="users/create" element={<UserCreate />}/>
    </Routes>
    </>
   
  )
}

export default Routers
