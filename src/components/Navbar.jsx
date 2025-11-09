import React from "react";
import logoImg from "..//assets/rero-removebg-preview (1).png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/service">Services</NavLink>
      </li>
      <li>
        <NavLink to="/my-services">My Services</NavLink>
      </li>
      <li>
        <NavLink to="/add-service">Add Service</NavLink>
      </li>
      <li>
        <NavLink to="/my-bookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-green-100 shadow-sm px-2 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <figure>
         <Link to='/'>
             <img
            className="btn-ghost h-16 w-28 text-xl"
            src={logoImg}
            alt=""
          /> 
         </Link>
        </figure>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/register' className="btn mr-2 btn-outline btn-secondary">Register</Link>

        <Link to="/login" className="btn bg-green-500 text-white rounded-xl px-4 hover:bg-green-600">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
