import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { UserList, UserCreate } from './users';
import Routers from './router/routers';


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Routers />
  </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
