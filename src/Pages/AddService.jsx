import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import addServiceImg from "..//assets/home-services-investments.jpg";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddService = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const image = form.image.value;

    // service data
    const newService = {
      name,
      category,
      price,
      description,
      image,
      providerName: user?.displayName || "Unknown Provider",
      email: user?.email,
    };

    fetch("https://home-hero-server-silk.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          toast.success("✅ Service added successfully!");
          form.reset();
          navigate("/my-services");
        } else {
          toast.error("❌ Failed to add service!");
        }
      })
      .catch(() => toast.error("Server error!"))
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="max-w-6xl mx-auto mt-10 p-6 sm:p-8 bg-green-50 dark:bg-gray-800 
          shadow-lg rounded-xl border border-gray-100 dark:border-gray-700
             transition grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-start justify-center space-y-4"
      >
        <img
          className="w-auto h-auto rounded-lg shadow-md"
          src={addServiceImg}
          alt=""
        />

        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          A Trusted Home Service Company
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Providing reliable and professional home services you can trust. you add your favorite home service. which a home owner well buy the service.
        </p>
      </motion.div>

      {/* Right Side - Add Service Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl p-3 font-bold text-center text-pink-600 dark:text-pink-400 mb-6">
          Add New Service
        </h2>

        <form onSubmit={handleAddService} className="space-y-5">
          {/* Service Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter service name"
              className="w-full border rounded-lg px-4 py-2 
          focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Category
            </label>
            <input
              type="text"
              name="category"
              required
              placeholder="e.g. Cleaning, Electrical, Plumbing"
              className="w-full border rounded-lg px-4 py-2 focus:outline-pink-400 
          dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              required
              min="1"
              placeholder="Enter price"
              className="w-full border rounded-lg px-4 py-2 
          focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              required
              placeholder="Write details about the service"
              className="w-full border rounded-lg px-4 py-2 h-24 
          focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              placeholder="Enter image URL"
              className="w-full border rounded-lg px-4 py-2 
          focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>

          {/* Provider Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border mt-4 dark:border-gray-600"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              <span className="font-semibold">Provider Name:</span>{" "}
              {user?.displayName}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white 
             font-semibold py-2 rounded-lg transition disabled:bg-gray-400" >
            {loading ? "Adding Service..." : "Add Service"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddService;
