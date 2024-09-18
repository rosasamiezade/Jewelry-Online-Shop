import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import NotFoundPage from "../pages/NotFoundPage";
import Messages from "../pages/Messages";
import Users from "../pages/Users";
import AdminPanel from "../components/AdminPanel";
import Products from "../components/Products";
import DynamicCategory from "../components/DynamicCategory";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/contactUs",
          element: <ContactUs />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Signup",
          element: <Signup />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Products/:ProductCategory",
          element: <DynamicCategory />,
        },
      ],
    },
    {
      path: "/Messages",
      element: <Messages />,
    },
    {
      path: "/Users",
      element: <Users />,
    },
    {
      path: "/AdminPanel",
      element: <AdminPanel />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default AppRouter;
