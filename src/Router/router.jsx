import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffeePage from "../pages/AddCoffeePage";
import HomePage from "../pages/HomePage";
import SingUpPage from "../pages/SingUpPage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffeePage />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffeePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/singUp",
        element: <SingUpPage />,
      },
    ],
  },
]);

export default router;
