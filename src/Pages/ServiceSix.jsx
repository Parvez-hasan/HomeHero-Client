import React, { useContext } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const ServiceSix = () => {
  const { loading } = useContext(AuthContext);
  const homeData = useLoaderData();

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
        {homeData.map((service) => (
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

              {/* ⭐ Rating + Price */}
              <div className="mt-4 flex items-center justify-between">
                {/* ⭐ Fake rating */}
                 <span className="text-pink-600 dark:text-pink-400 font-bold text-lg">
                  ${service.price}
                </span>
                <div className="flex items-center gap-1 text-yellow-500 text-base">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span className="text-gray-400">⭐</span>
                  <span className="text-sm text-gray-500 ml-1">(4.0)</span>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Link to="/service">
        <div className="flex justify-center py-2">
          <button className="cursor-pointer bg-gradient-to-b from-green-600 to-green-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                See All Services
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                See All services
              </p>
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ServiceSix;
