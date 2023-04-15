import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from '../Navigation/navBar';
import { navRoutes } from '../Navigation/routes';

function Routers() {

  return (
    <div className="flex flex-col h-screen overflow-y-auto bg-white border-b dark:bg-gray-900">
    <NavBar />
      <Routes>
          {navRoutes.map((navItem:any)=>(
          <Route path={navItem.path} element={navItem.component}/>
          ))}
      </Routes>
    </div>
   
  )
}

export default Routers
