import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import Provider from "./Provider/Provider";
AOS.init();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
