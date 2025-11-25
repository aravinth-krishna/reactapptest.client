// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";

import Layout from "./layouts/Layout.jsx";
import Course from "./components/Course.jsx";
import Schedule from "./components/Schedule.jsx";
import Progress from "./components/Progress.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/", // root path
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/register",
    element: <Signup />,
  },

  // Protected / inside layout
  {
    path: "/",
    element: <Layout />, // this layout wraps its children
    children: [
      { path: "course", element: <Course /> },
      { path: "schedule", element: <Schedule /> },
      { path: "progress", element: <Progress /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
