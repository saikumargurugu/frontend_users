import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/routers";

function App() {
  return (
    <React.StrictMode>
      <div className="h-full">
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
