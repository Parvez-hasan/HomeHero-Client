import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { AuthContext } from "../Context/AuthContext";

const Service = () => {

  const { loading } = useContext(AuthContext); 
  const data = useLoaderData();

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

      <motion.div
        className="grid gap-6 py-3 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((service) => (
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
                <Link to={`/service/${service._id}`}>
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
