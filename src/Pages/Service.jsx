


import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import ServiceSkeleton from "./ServiceSkeleton";

const Service = () => {
  const { loading } = useContext(AuthContext);
  const initialData = useLoaderData();

  const [services, setServices] = useState(initialData);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(""); // "price-asc", "price-desc", "rating-desc"

  // Filter + search + sort handler
  const fetchServices = () => {
    const params = new URLSearchParams();
    if (min) params.append("min", min);
    if (max) params.append("max", max);
    if (search) params.append("search", search);
    if (sort) params.append("sort", sort);

    fetch(`https://home-hero-server-silk.vercel.app/services?${params}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => toast.error("Failed to fetch services"));
  };

  const handleFilter = () => {
    if (!min || !max) {
      toast.error("Enter both Min & Max price");
      return;
    }
    fetchServices();
  };

  // Auto fetch on search or sort change
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchServices();
    }, 500); // debounce search 0.5s
    return () => clearTimeout(timer);
  }, [search, sort]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-pink-500">
          Explore Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Professional & trusted home services near you
        </p>
      </div>

      {/* Search + Filter + Sort */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10 flex-wrap">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-60"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="input input-bordered w-full md:w-40"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="input input-bordered w-full md:w-40"
        />
        <button
          onClick={handleFilter}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl"
        >
          Apply Filter
        </button>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="input input-bordered w-full md:w-48"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price Low → High</option>
          <option value="price-desc">Price High → Low</option>
          <option value="rating-desc">Rating High → Low</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <ServiceSkeleton key={i} />)
          : services.map((service) => (
              <motion.div
                key={service._id}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-44 w-full object-cover"
                />

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {service.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {service.description.slice(0, 70)}...
                  </p>

                  {/* Meta */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-3 space-y-1">
                    <div className="flex justify-between">
                      <p>📍 {service.location || "Dhaka"}</p>
                      <p>⭐ {service.rating || 4.8}</p>
                    </div>
                    <p>
                      Status:{" "}
                      <span className="text-green-600 font-medium">Available</span>
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-pink-600 font-bold text-lg">
                      ${service.price}
                    </span>
                    <Link to={`/serviceDetails/${service._id}`}>
                      <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default Service;
