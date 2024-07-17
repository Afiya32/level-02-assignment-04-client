// src/components/layout/MainLayout.tsx
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/kth.logo.png";
import person from "../../assets/logo/person-removebg-preview.png";
import { IoIosHome, IoIosContacts } from "react-icons/io";
import {
  MdProductionQuantityLimits,
  MdDashboardCustomize,
} from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useAuth } from "../../utils/useAuth";
import { fetchCartItemsByUser } from "../../api/cartapi";
import { ICartItem } from "../../Redux/Features/types";
import Loading from "../Loading";

const MainLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const email = user?.data?.email || ''; // Adjusted to directly access email if available

  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
     console.log(user)
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (email) {
          const data = await fetchCartItemsByUser(email);
          setCartItems(data);
        }
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [email]);

  if (isLoading) return <Loading/>;

  return (
    <div className="bg-lime-200 w-[90%] mx-auto">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar sticky top-0 z-10 bg-lime-400">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost sticky top-0 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <div className="  flex justify-center items-center gap-2">
                <div className="w-10 h-10">
                  <img src={logo} alt="KeyTechHub Logo" />
                </div>
                <h1 className="font-semibold text-2xl">KeyTechHub</h1>
              </div>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal p-4">
                <summary className="btn">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      {user?.data?.image ? (
                        <img src={user?.data?.image || person} alt="User Avatar" />
                      ) : (
                        <img src={person} alt="Default Avatar" />
                      )}
                    </div>
                  </div>
                </summary>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 text-red-800 underline font-bold"
                      : "font-bold p-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 text-red-800 underline font-bold"
                      : "font-bold p-2"
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 text-red-800 underline font-bold"
                      : "font-bold p-2"
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 text-red-800 underline font-bold"
                      : "font-bold p-2"
                  }
                >
                  About
                </NavLink>
                {user?.data?.email ? (
                  <>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "p-2 text-red-800 underline font-bold"
                          : "font-bold p-2"
                      }
                    >
                      Dashboard
                    </NavLink>
                    <li>
                      <button
                        onClick={logout}
                        className="btn btn-outline btn-success p-2"
                      >
                        <CiLogout className="text-2xl" />
                        Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      isActive
                        ? "p-2 text-red-800 underline font-bold"
                        : "font-bold p-2"
                    }
                  >
                    Sign Up
                  </NavLink>
                )}
                <NavLink to="/dashboard">
                  <div className="avatar placeholder relative">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-xl">
                        <FaShoppingCart />
                      </span>
                      <div className=" -top-2 absolute bg-transparent left-7">
                        {cartItems && cartItems.length > 0 && (
                          <div className="-top-2 badge absolute bg-transparent left-7 text-green-400">
                           + {cartItems.length}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </ul>
            </div>
          </div>
          <Outlet />
          <div className="bg-lime-200 w-full h-[30vh] mx-auto">
            <Footer />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu bg-lime-400 min-h-full w-80 p-4">
            <div className="flex justify-center items-center gap-2">
              <img src={logo} alt="KeyTechHub Logo" />
              <h1 className="font-semibold text-2xl">KeyTechHub</h1>
            </div>
            <NavLink
              to="/dashboard/carts"
              className="mt-5 flex justify-center items-center gap-1"
            >
              <div className="avatar placeholder relative">
                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                  <span className="text-xl">
                    <FaShoppingCart />
                  </span>
                  <div className="badge absolute left-7">
                    {cartItems && cartItems.length > 0 && (
                      <div className="badge absolute left-7">
                        {cartItems.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </NavLink>
            <summary className="btn">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  {user?.data?.image ? (
                    <img
                      src={user?.data?.image || person}
                      alt="User Avatar"
                    />
                  ) : (
                    <img src={person} alt="Default Avatar" />
                  )}
                </div>
              </div>
            </summary>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-red-800 underline font-bold"
                  : "font-bold p-2"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
                <IoIosHome />
                <h1>Home</h1>
              </div>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-red-800 underline font-bold"
                  : "font-bold p-2"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
                <MdProductionQuantityLimits />
                <h1>Products</h1>
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-red-800 underline font-bold"
                  : "font-bold p-2"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
                <IoIosContacts />
                <h1>Contact</h1>
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-red-800 underline font-bold"
                  : "font-bold p-2"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
                <MdDashboardCustomize />
                <h1>About</h1>
              </div>
            </NavLink>
            {user?.data?.email ? (
              <li>
                <button
                  onClick={logout}
                  className="btn btn-outline btn-success p-2"
                >
                  <CiLogout className="text-2xl" />
                  Log Out
                </button>
              </li>
            ) : (
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-red-800 underline font-bold"
                    : "font-bold p-2"
                }
              >
                <div className="flex justify-center items-center gap-1 mt-2">
                  <BiDetail />
                  <h1>Sign Up</h1>
                </div>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
