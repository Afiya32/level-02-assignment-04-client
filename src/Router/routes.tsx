// src/router/routes
import { createBrowserRouter  } from "react-router-dom";
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
import SignUp from "../Pages/SignUp";
import PrivateRouter from "./PrivateRouter";
import ProductDetails from "../Components/SingleCard";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from "../Components/Errorpage";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'products', element: <PrivateRouter><Product /></PrivateRouter> },
      { path: 'products/:productId', element: <PrivateRouter><ProductDetails /></PrivateRouter> }
    ],
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <SignIn /> },
  {
    path: '/dashboard',
    element: <PrivateRouter><DashBoardLayOut /></PrivateRouter>,
    children: [
      { index: true, element: <Carts /> },
      { path: 'checkout', element: <CheckOut /> },
      { path: 'manageproduct', element: <ProductManagement /> },
      { path: 'productslist', element: <ProductList /> }
    ],
  },
]);

export default router ;
