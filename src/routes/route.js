import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

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
];

export default routes