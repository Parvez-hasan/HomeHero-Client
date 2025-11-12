import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import logoimg from "..//assets/rero-removebg-preview (1).png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="container mx-auto  bg-green-100  ">
      <div className="footer sm:footer-horizontal text-neutral-content justify-between p-10">
        <nav>
          <div className="flex justify-center items-center">
            <figure>
              <Link to="/">
                <img className="h-6 w-6 md:h-14 md:w-24" src={logoimg} alt="" />
              </Link>
            </figure>
            <a className=" text-gray-700 btn-ghost text-xl font-bold">
              {" "}
              Home Hero
            </a>
            
          </div>
          <p className=" text-gray-700">We provide the best home repair <br />
              services with reliable care.</p>
        </nav>
        <nav>
          <h6 className="font-bold  text-gray-700 py-2">Service</h6>
          <a className="link  text-gray-700 link-hover">Door & Lock Repair</a>
          <a className="link  text-gray-700 link-hover">Electricians Near</a>
          <a className="link  text-gray-700 link-hover">Home Cleaning Services</a>
          <a className="link  text-gray-700 link-hover">Reliable Plumber</a>
          <a className="link  text-gray-700 link-hover">Painting Service</a>
          <a className="link  text-gray-700 link-hover">Home Repairs</a>
        </nav>
        <nav>
          <h6 className="font-bold  text-gray-700 py-2">Contacts Us</h6>
          <a className="link  text-gray-700 link-hover">17 Arlington St, Boston, MA, 02116</a>
          <a className="link  text-gray-700 link-hover">+880 1948-017882</a>
          <a className="link  text-gray-700 link-hover">parvezweb.33@gmail.com</a>
        </nav>

        <nav>
          <h6 className="text-xl text-gray-700">Social Links</h6>
          <div className="flex gap-5 py-2">
            <span>
              <FaXTwitter className=" text-black rounded-full" />
            </span>
            <span>
              <FaLinkedin className=" text-black rounded-full" />
            </span>
            <span>
              <FaFacebook className=" text-black rounded-full" />
            </span>
          </div>
        </nav>
      </div>
      <hr className="p-0.5 w-10/12 mx-auto bg-gray-600" />
      <p className="text-center text-gray-700 py-4 px-3">
        Copyright © 2025 home service - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
