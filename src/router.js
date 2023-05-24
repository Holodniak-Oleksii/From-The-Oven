import Layout from "@/layout";
import ContactUs from "@/modules/contact-us";
import ErrorPage from "@/modules/error";
import Home from "@/modules/home";
import Shop from "@/modules/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./modules/admin";
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
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/pizza-admin",
          element: <AdminDashboard />,
        },
        {
          path: "/pizza/:id",
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
