import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Service = () => {
 
  const { loading } = useContext(AuthContext); 
  const data = useLoaderData();

  const [services , setServices ] = useState(data)
 // console.log(services);
  
   const [min , setMin] = useState("");
   const [max , setMax] = useState("");


  // Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Filter price
  const handleFilter = () => {
    if (!min || !max) {
      toast.error("Please enter both Min & Max price");
      return;
    }

    fetch(
      `https://home-hero-server-silk.vercel.app/services?min=${min}&max=${max}`
    )
      .then(res => res.json())
      .then(data => {
        setServices(data);
        console.log(data);
        
      });
  };

  // Loading 
  if (loading) return <Loading />;

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-3">
        Our Top Home Services
      </h2>
      <p className="text-gray-700 dark:text-gray-300 font-medium max-w-md text-center mx-auto px-2 mb-6">
        Explore our most popular and trusted household services near you.
      </p>
       
       
      {/* Filter price */}
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center dark:text-gray-900 gap-4 bg-gray-50 p-4 rounded-xl shadow mb-8">
        <input
          type="number"
          placeholder="Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        />

        <button
          onClick={handleFilter}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Filter
        </button>

        {/* <button
        //  onClick={resetFilter}
          className="bg-gray-300 px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Reset
        </button> */}
      </div>
 
       {/* all service cart */}
      <motion.div
        className="grid gap-6 py-3 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service._id}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="bg-green-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform ease-in-out duration-300 overflow-hidden"
          >
           
            <motion.img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />

            {/*  Content */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {service.category}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {service.description.slice(0, 60)}...
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-pink-600 dark:text-pink-400 font-bold text-lg">
                  ${service.price}
                </span>
                <Link to={`/serviceDetails/${service._id}`}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ backgroundColor: "#db2777" }} 
                  className="bg-pink-500 text-white text-sm px-4 py-2 rounded-full transition-colors"
                >
                  View Details
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
