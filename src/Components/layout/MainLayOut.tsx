import logo from "../../assets/logo/kth.logo.png";
import person from "../../assets/logo/person-removebg-preview.png";
import { IoIosHome } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { IoIosContacts } from "react-icons/io";

import { NavLink, Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
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
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <div className="flex justify-center items-center gap-2">
              <img src={logo} className="w-16 h-16" alt="" />
              <h1 className="font-semibold text-2xl">KeyTechHub</h1>
            </div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal p-4">
              {/* Navbar menu content here */}
              <summary className=" btn ">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={person} />
                  </div>
                </div>
              </summary>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "p-2 text-red-800 underline  font-bold"
                    : "font-bold p-2"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "p-2 text-red-800 underline  font-bold"
                    : "font-bold p-2"
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "p-2 text-red-800 underline  font-bold"
                    : "font-bold p-2"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "p-2 text-red-800 underline  font-bold"
                    : "font-bold p-2"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "p-2 text-red-800 underline  font-bold"
                    : "font-bold p-2"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink to="/dashboard/carts">
                <div className="avatar  placeholder relative">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                    <span className="text-xl">
                      <FaCartShopping />
                    </span>
                    <div className="badge absolute left-7 ">+99</div>
                  </div>
                </div>
              </NavLink>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <div className="flex justify-center items-center gap-2">
            <img src={logo} className="w-16 h-16" alt="" />
            <h1 className="font-semibold text-2xl">KeyTechHub</h1>
          </div>
          {/* Sidebar content here */}
          <NavLink
            to="/dashboard/carts"
            className=" mt-5 flex justify-center items-center gap-1"
          >
            <div className="avatar  placeholder relative">
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                <span className="text-xl">
                  <FaCartShopping />
                </span>
                <div className="badge absolute left-7 ">+99</div>
              </div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending  "
                : isActive
                ? "p-2 text-red-800 underline  font-bold"
                : "font-bold p-2"
            }
            to="/"
          >
            <div className="flex justify-center items-center gap-1 mt-2">
              <IoIosHome />
              <h1>Home</h1>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending "
                : isActive
                ? "p-2 text-red-800 underline  font-bold"
                : "font-bold p-2"
            }
            to="/products"
          >
            <div className="flex justify-center items-center gap-1 mt-2">
              <MdProductionQuantityLimits />
              <h1>Products</h1>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending  mt-2 "
                : isActive
                ? "p-2 text-red-800 underline  font-bold"
                : "font-bold p-2"
            }
            to="/contact"
          >
            
            <div className="flex justify-center items-center gap-1 mt-2">
              <IoIosContacts />
              <h1>Contact</h1>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending flex justify-center items-center gap-1"
                : isActive
                ? "p-2 text-red-800 underline  font-bold"
                : "font-bold p-2"
            }
            to="/about"
          >
            <div className="flex justify-center items-center gap-1 mt-2">
              <BiDetail />
              <h1>About</h1>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending "
                : isActive
                ? "p-2 text-red-800 underline font-bold"
                : "font-bold p-2"
            }
            to="/dashboard"
          >
          
            <div className="flex justify-center items-center gap-1 mt-2">
              <MdDashboardCustomize />

              <h1>Dashboard</h1>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MainLayOut;

// line-45.127:{ user?.email? <img src={user.photoURL}/>:<img src={person} />}

// line-96,175: {user?.email?<>
//   <NavLink className={({ isActive, isPending }) =>
// isPending ? "pending" : isActive ? "p-2 flex justify-center items-center btn btn-outline btn-success text-red-800 underline  font-bold" : "font-bold flex justify-center items-center btn btn-outline btn-success p-2"
// } to='/dashboard' > <MdOutlineSpaceDashboard className='text-2xl'/>Dash Board</NavLink>
// <li>
//   <button onClick={logout}
// className='btn btn-outline btn-success p-2'> <RiLogoutCircleRLine className='text-2xl' />Log Out</button> </li>
// </>:  <NavLink className={({ isActive, isPending }) =>
// isPending ? "pending" : isActive ? "p-2 flex justify-center items-center btn btn-outline btn-success text-red-800 underline  font-bold" : "font-bold flex justify-center items-center btn btn-outline btn-success p-2"
// } to='/signup'> <LuLogIn className='text-2xl' />Sign Up</NavLink>
// }
