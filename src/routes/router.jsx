import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Donation from "../Pages/Donations/Donation";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Dashboard/Profile/Profile";
import AddEvent from "../Dashboard/Admin/AddEvent";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../Dashboard/Admin/AllUsers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'events',
          element: <Events></Events>
        },
        {
          path:'donation',
          element: <Donation></Donation>
        },
        {
          path:'about',
          element: <About></About>
        },
        {
          path:'contact',
          element: <Contact></Contact>
        },
        {
          path:'profile',
          element: <Profile></Profile>
        },
        {
         
        },
      ]
    },

    {
      path: "/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'allUser',
          element: <AllUsers></AllUsers>
        },
        {
          path:'addevent',
          element:<AddEvent></AddEvent>
        }
      ]
    }
  ]);