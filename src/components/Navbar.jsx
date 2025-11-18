import React, { use, useEffect, useState } from "react";
import logoImg from "..//assets/rero-removebg-preview (1).png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, } = use(AuthContext);

   const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
   
    useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])

   const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }
  //logout
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       toast.success("Your account logOut successful");
  //       //        Swal.fire({
  //       //   title: "LogOut Successful!",
  //       //   icon: "success",
  //       //   draggable: true
  //       // });
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(error.message);
  //     });
  // };

  const links = (
    <>
      <li className="hover:text-pink-500 hover:font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="hover:text-pink-500 hover:font-bold" to="/service">
          Services
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className="hover:text-pink-500 hover:font-bold"
              to="/my-services"
            >
              My Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-pink-500 hover:font-bold"
              to="/add-service"
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-pink-500 hover:font-bold"
              to="/my-bookings"
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-pink-500 hover:font-bold"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-green-100 dark:bg-gray-800 shadow-sm px-2 sticky top-0 z-50">
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
          <Link to="/">
            <img
              className="btn-ghost h-14 w-20 md:h-16 md:w-28 text-xl"
              src={logoImg}
              alt=""
            />
          </Link>
        </figure>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">

          <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle toggle-secondary"/>

           {/* <input type="checkbox" defaultChecked className="toggle toggle-secondary" /> */}


        {user ? (
          <Link to="/profile">
            {" "}
            <img
              className="w-12 h-12 rounded-full"
              src={`${user ? user.photoURL : ""}`}
              alt=""
            />{" "}
          </Link>
        ) : (
        
          <>
            <Link to="/register" className="btn mr-2 btn-outline btn-secondary">
              Register
            </Link>

            <Link
              to="/login"
              className="btn bg-green-500 text-white rounded-xl px-4 hover:bg-green-600"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
