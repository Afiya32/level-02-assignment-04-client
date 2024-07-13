import { NavLink } from "react-router-dom";
import logo from "../assets/logo/kth.logo.png"

const Footer = () => {
  return (
    <div>
     <footer className="footer footer-center bg-lime-400 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <NavLink to='/about' className="link link-hover">About us</NavLink>
    <NavLink to='/contact' className="link link-hover">Contact</NavLink>
    <NavLink to='/' className="link link-hover">Home</NavLink>
    <NavLink to='/dashboard' className="link link-hover">DashBoard</NavLink>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      
      <img src={logo} alt="" />
      
    </div>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by KeyTechHub Industries Ltd</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;