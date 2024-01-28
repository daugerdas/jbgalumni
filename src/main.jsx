import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MentoringPage from "./MentoringPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "mentoryste",
    element: <MentoringPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <MentoringPage />
  </React.StrictMode>
);
