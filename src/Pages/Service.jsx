import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { AuthContext } from "../Context/AuthContext";

const Service = () => {

 const {loading} = AuthContext;
  const data = useLoaderData();
 // console.log(data);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  if(loading) return <Loading></Loading>

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">
        All Home Services
      </h2>

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
            whileHover={{ scale: 1.05 }}
            className="bg-green-100  rounded-2xl shadow-md hover:scale-95 transition ease-in-out duration-500 overflow-hidden"
          >
            {/* Image */}
            <motion.img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6}}
            />

            {/* Content */}
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
                  $ {service.price}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-full transition"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
