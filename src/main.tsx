// src/main
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/routes.tsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./Redux/Features/store.ts";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          {/* Your App Component or Router Configuration */}
        </RouterProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
