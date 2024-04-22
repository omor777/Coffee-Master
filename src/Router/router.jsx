import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffeePage from "../pages/AddCoffeePage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffeePage />,
      },
    ],
  },
]);

export default router;
