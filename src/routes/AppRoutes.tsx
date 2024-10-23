import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Bin2dec from "../pages/Bin2dec";
import BorderRadius from "../pages/BorderRadius/BorderRadius";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bin2dec />,
  },
  {
    path: "/borderradius",
    element: <BorderRadius />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
