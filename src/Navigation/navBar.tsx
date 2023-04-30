import React from "react";
import { navRoutes } from './routes'
import { Link } from "react-router-dom";

const NavBar=() => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 mb-4 w-full  top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex ">
            <img
              src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Group.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Job Management
            </span>
          </div>
          <div className="flex  md:order-2 cursor-pointer">
          <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Profile
            </span>
            </div>            
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navRoutes.map(route=>(<li>
                <Link
                  to={route.path}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {route.lable}
                </Link>
              </li>))}
               </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
