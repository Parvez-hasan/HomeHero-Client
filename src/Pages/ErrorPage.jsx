import React from "react";
import {Link} from "react-router"
import errorImg from "..//assets/Error-404-Page-Not-Found.png"


const ErrorPage = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 min-h-screen">
      <figure className="flex mx-auto justify-center px-4">
        <img className="min-w-36 h-32 md:h-48 md:min-w-48 lg:h-80 lg:min-w-80" src={errorImg} alt="" />
      </figure>
      <h2 className="text-2xl md:text-4xl text-center font-bold">
        Oops, page not found!
      </h2>
      <p className="text-center text-gray-600 py-3 px-3">
        The page you are looking for is not available.
      </p>
      
      <Link to="/">
        <button className="bg-green-600 rounded-sm py-2 px-4 flex mx-auto justify-center items-center">
          <span className="text-white  font-stretch-50%">Go Home</span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
