import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import Error from "./pages/Error";
import CoffeeDetails from "./pages/CoffeeDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Users from "./pages/Users";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      { path: "add-coffee", Component: AddCoffee },
      {
        path: "update-coffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "coffee-details/:id",
        Component: CoffeeDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "users",
        loader: () => fetch("http://localhost:5000/users"),
        Component: Users,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
