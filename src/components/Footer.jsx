
import React from 'react';
import { FaFacebook, FaLinkedin} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import logoimg from "..//assets/rero-removebg-preview (1).png"
import { Link } from 'react-router';
const Footer = () => {
    return (
        <footer className="container mx-auto  bg-green-100  ">
            <div className='footer sm:footer-horizontal text-neutral-content justify-between p-10'>
                <nav>
                    <div className='flex justify-center items-center'>
                        <figure><Link to='/'><img className='h-6 w-6 md:h-14 md:w-24' src={logoimg} alt="" /></Link></figure>
                        <a className=" text-gray-700 btn-ghost text-xl font-bold"> Home Hero</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="text-xl text-gray-700">Social Links</h6>
                    <div className='flex gap-5 py-2'>
                        <span>
                            <FaXTwitter className=" text-black rounded-full"/>
                        </span>
                        <span>
                            <FaLinkedin className=" text-black rounded-full"/>
                         </span>
                          <span>
                            <FaFacebook className=" text-black rounded-full"/>
                         </span>
                    </div>
                </nav>
            </div>
            <hr className='p-0.5 w-10/12 mx-auto bg-gray-600'/>
            <p className='text-center text-gray-700 py-4 px-3'>Copyright © 2025 - All right reserved</p>
        </footer>
    );
};

export default Footer;
