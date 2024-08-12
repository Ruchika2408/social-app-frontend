import ForgetPassword from "../components/ForgetPassword";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Contact from "../components/ContactUs";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />
  },
  { 
    path: "/contact",
    element: <Contact />
  },
];

export default routes