import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthProvider";
import Home from "./pages/home/Home";
import PrivateRoute from "./routes/PrivateRoute";
import ChefRecipes from "./pages/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chefRecipe/:id",
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader:()=> fetch('http://localhost:5000/chefData')
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
