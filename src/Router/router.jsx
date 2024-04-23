import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffeePage from "../pages/AddCoffeePage";
import HomePage from "../pages/HomePage";
import SingUpPage from "../pages/SingUpPage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import UsersPage from "../pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
          fetch("https://coffee-master-server-kappa.vercel.app/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffeePage />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffeePage />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-master-server-kappa.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/singUp",
        element: <SingUpPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
        loader: () =>
          fetch("https://coffee-master-server-kappa.vercel.app/users"),
      },
    ],
  },
]);

export default router;
