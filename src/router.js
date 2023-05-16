import Layout from "@/layout";
import ContactUs from "@/modules/contact-us";
import ErrorPage from "@/modules/error";
import Home from "@/modules/home";
import Order from "@/modules/order";
import Shop from "@/modules/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./modules/details";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/pizza/:name",
          element: <Details />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
