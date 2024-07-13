import Marquee from "react-fast-marquee";
import logo from "../../assets/logo/kth.logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaClipboardList } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
const DashBoardLayOut = () => {
  return (
    <div className="max-w-[1200x] mt-2 mx-auto">
      <div className="mx-auto h-24 max-w-[1200px] bg-lime-200 flex justify-center items-center">
        <div className=" flex justify-center items-center">
          <div className="w-12 h-12">
            <img src={logo} alt="" />
          </div>
          <h1>welcome to DashBoard</h1>
          {/* {user.displayName} */}
        </div>
      </div>
      <div className="max-w-[1220px] mx-auto">
        <Marquee>
          <h1>
            Congrats! <span className="text-red-400"></span> for log in .welcome
            to DashBoard
          </h1>
          {/* {user.displayName} */}
        </Marquee>
      </div>
      <div className="max-w-[1200px] gap-2 mx-auto mt-2 flex h-screen">
        <div className="flex-[1] bg-lime-400">
          <ul className=" text-center mt-5 grid grid-cols-1 justify-center items-center gap-12 menu-horizontal">
            {/* Navbar menu content here */}
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
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-success" : "text-black"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
                <div className="avatar  placeholder relative">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                    <span className="text-xl">
                      <FaCartShopping />
                    </span>
                    <div className="badge absolute right-9 -top-0 ">+99</div>
                  </div>
                </div>
                <div>
                  <h1>Cart</h1>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/productslist"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-success" : "text-black"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
              <FaClipboardList />
                <h1> Products-list</h1>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/manageproduct"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-success" : "text-black"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
              <MdOutlineManageSearch />
                <h1>Manage-products</h1>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/checkout"
              className={({ isActive }) =>
                isActive ? "btn btn-outline btn-success" : "text-black"
              }
            >
              <div className="flex justify-center items-center gap-1 mt-2">
              <IoBagCheckOutline />
                <h1>Checkout</h1>
              </div>
            </NavLink>
          </ul>
        </div>
        <div className="flex-[3] bg-lime-100 ">
          <Outlet />
        </div>
      </div>
      <div className="mt-2">{/* <Footer/> */}</div>
    </div>
  );
};

export default DashBoardLayOut;

// <div className="max-w-[1200x] mt-2 mx-auto">
// <div className="mx-auto h-24 max-w-[1200px] bg-slate-300 flex justify-center items-center">
//   <div className=" flex justify-center items-center">
//    <div className="w-12 h-12">
//    <img src={logo} alt="" />
//    </div>
//    <h1>welcome {user.displayName} to DashBoard</h1>
//   </div>
// </div>
// <div className="max-w-[1220px] mx-auto">
//   <Marquee>
//     <h1>Congrats! <span className="text-red-400">{user.displayName}</span> for log in .welcome to DashBoard </h1>
//   </Marquee>
// </div>
// <div className="max-w-[1200px] gap-2 mx-auto mt-2 flex h-screen">
//   <div className="flex-[1] bg-slate-500">
//   <ul className=" text-center mt-5 grid grid-cols-1 justify-center items-center gap-12 menu-horizontal">
//     {/* Navbar menu content here */}
//     <NavLink to='/'  className={({ isActive }) =>
//             isActive
//               ? "btn btn-outline btn-success":"text-black"
//           }>Home</NavLink>
//     <NavLink to='/dashboard'  className={({ isActive }) =>
//             isActive
//               ? "btn btn-outline btn-success":"text-black"
//           }>DashBoard</NavLink>
//    {
//     userServer[0].role==='admin'?<>
//       <NavLink to='/dashboard/addtour'  className={({ isActive}) =>
// isActive
// ? "btn btn-outline btn-success":"text-black"
// }>Add tour</NavLink>
// <NavLink to='/dashboard/userlist'  className={({ isActive}) =>
// isActive
// ? "btn btn-outline btn-success":"text-black"
// }>user list</NavLink>
//     </>:<>
//       <NavLink to='/dashboard/wish'  className={({ isActive}) =>
// isActive
// ? "btn btn-outline btn-success":"text-black"
// }>My Wish-List</NavLink>

// <NavLink to='/dashboard/booked'  className={({ isActive}) =>
// isActive
// ? "btn btn-outline btn-success":"text-black"
// }>My Booked-package</NavLink>
//     </>
//    }

//   </ul>
//   </div>
//   <div className="flex-[3] bg-slate-400 ">
//       <Outlet/>
//   </div>
// </div>
// <div className="mt-2">
//   <Footer/>
// </div>
// </div>
