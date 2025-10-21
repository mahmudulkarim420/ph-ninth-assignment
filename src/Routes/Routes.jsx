import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />, 
    children: [
      {
        path: "/", 
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
