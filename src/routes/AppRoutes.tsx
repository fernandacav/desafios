import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Bin2dec from "../pages/Bin2dec";
import BorderRadius from "../pages/BorderRadius/BorderRadius";
import Cvs2Json from "../pages/CSV2JSON";
import Calculator from "../pages/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bin2dec />,
  },
  {
    path: "/borderradius",
    element: <BorderRadius />,
  },
  {
    path: "/csv2json",
    element: <Cvs2Json />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
