

import React, { useContext, useEffect, useState } from "react";
import logoImg from "../assets/rero-removebg-preview (1).png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Logout successful");
    });
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>

      {user && (
        <>
          <li><NavLink to="/my-services">My Services</NavLink></li>
          <li><NavLink to="/add-service">Add Service</NavLink></li>
          <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-green-100 dark:bg-gray-800 shadow-sm px-2 w-full sticky top-0 z-50 ">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/">
            <img src={logoImg} className="h-12" alt="logo" />
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            onChange={(e) => handleTheme(e.target.checked)}
            defaultChecked={theme === "dark"}
          />

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
              >
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
