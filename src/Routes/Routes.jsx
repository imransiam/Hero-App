import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Error1 from "../Pages/Error1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error1 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'app',
        element: <Apps />

      },
      {
        path: 'app/:id',
        element: <AppDetails />

      },
      {
        path: 'installation',
        element: <Installation />
      }
    ]

  },
]);

export default router;