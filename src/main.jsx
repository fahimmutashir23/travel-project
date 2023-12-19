import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import Provider from "./Provider/Provider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div className="z-40">
          <Toaster />
        </div>
        <RouterProvider router={Router}></RouterProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
