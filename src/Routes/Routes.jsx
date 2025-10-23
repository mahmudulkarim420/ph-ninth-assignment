import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Profile from '../Pages/Profile';
import SkillDetails from '../Pages/SkillsDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/skills/:skillId',
        element: 
        <PrivateRoute>
          <SkillDetails/>
        </PrivateRoute>
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
