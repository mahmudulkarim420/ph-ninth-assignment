import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Profile from '../Pages/Profile';
import SkillsDetails from '../Pages/SkillsDetails';
import ForgetPassword from '../Pages/ForgetPassword';
import ErrorPage from '../Pages/ErrorPage';
import AllItems from '../Pages/AllItems';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import Support from '../Pages/Support';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
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
        path: '/all-items',
        element: <AllItems />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: 'support',
        element: <Support />,
      },
      {
        path: '/skills/:skillId',
        element: <SkillsDetails />,
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
        path: '/forget-password',
        element: <ForgetPassword />,
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
