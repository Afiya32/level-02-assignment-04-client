import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashBoardLayOut from "../Components/layout/DashBoardLayOut";
import HomePage from "../Pages/home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import SignIn from "../Pages/SignIn";
import Carts from "../Pages/Carts";
import CheckOut from "../Pages/CheckOut";
import ProductManagement from "../Pages/ProductManagement";
import ProductList from "../Pages/ProductList";
import ProductDetails from "../Components/SingleCard";
import SignUp from "../Pages/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Product /> },
      { path: "products/:productId",element:<ProductDetails/>}
    ],
  },
  { path: "/signup", element:<SignUp/> },
  { path: "/login", element: <SignIn /> },
  {
    path: "/dashboard",
    element: <DashBoardLayOut/>,
    children: [{ index: true, element: <Carts /> },
               { path:"checkout",element:<CheckOut />},
               {path:"manageproduct",element:<ProductManagement/>},
               {path:"productslist",element:<ProductList/>}
    ],
  },
]);

export default router;
