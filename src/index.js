import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// import bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// import fontawsame
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// import Component
const root = ReactDOM.createRoot(document.getElementById("root"));
import Main from './Pages/GetData'
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Main/>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
