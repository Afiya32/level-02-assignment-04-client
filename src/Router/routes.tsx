import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashBoardLayOut from "../Components/layout/DashBoardLayOut";
import HomePage from "../Pages/home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Carts from "../Pages/Carts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Product /> },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  {
    path: "/dashboard",
    element: <DashBoardLayOut/>,
    children: [{ index: true, element: <Carts /> },
               { path:"checkout",element:<Carts />},
               {path:"manageproduct",element:<Carts/>},
               {path:"productslist",element:<Carts/>}
    ],
  },
]);

export default router;
