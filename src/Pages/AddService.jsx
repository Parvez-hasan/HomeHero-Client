import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

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

    fetch("http://localhost:4000/services", {
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
    <div className="max-w-3xl mx-auto mt-10 bg-green-50 dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 transition">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 dark:text-pink-400 mb-8">
        Add New Service
      </h2>

      <form onSubmit={handleAddService} className="space-y-5">
        {/* Service Name */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Service Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter service name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Category
          </label>
          <input
            type="text"
            name="category"
            required
            placeholder="e.g. Cleaning, Electrical, Plumbing"
            className="w-full border rounded-lg px-4 py-2 focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            required
            min="1"
            placeholder="Enter price"
            className="w-full border rounded-lg px-4 py-2 focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            required
            placeholder="Write details about the service"
            className="w-full border rounded-lg px-4 py-2 h-24 focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            required
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-4 py-2 focus:outline-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Provider Info */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border mt-4 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Provider Name:
            </span>{" "}
            {user?.displayName || "Unknown Provider"}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Email:
            </span>{" "}
            {user?.email}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition disabled:bg-gray-400"
        >
          {loading ? "Adding Service..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
