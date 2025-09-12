import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Errors from "./Components/Errors";
import ResturantMenuCard from "./Components/ResturantMenuCard";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const rte = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/resturant/:rid",
        element: <ResturantMenuCard />,
      },
    ],
    errorElement: <Errors />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rte} />);
