import React, { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import { Link } from "react-router";
import Loading from "./Loading";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);

  // provider own services
  useEffect(() => {
    if (user?.email) {
      fetch(`https://home-hero-server-silk.vercel.app/services?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setServices(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);


  //  Delete Service
 
  const handleDelete = (_id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://home-hero-server-silk.vercel.app/services/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
    
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
            setServices((prev) => prev.filter((s) => s._id !== _id));
          }
        })
        .catch((err) => console.error(err));
    }
  });
};


  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-3 sm:px-6 lg:px-8" >
      
      <div  className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 text-center sm:text-left">
    
        <h2 className="text-2xl font-bold text-pink-600">
          My Services ({services.length})
        </h2>
        <Link
          to="/add-service"
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
        >
          + Add New Service
        </Link>
      </div>

      {/*Services Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <table className="table-auto w-full text-sm sm:text-base border-collapse">
          <thead>
            <tr className="bg-pink-100 text-gray-700">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Service Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr
                key={service._id}
                className="border-b  items-center transition"
              >
                <td className="p-3">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"

                  />
                </td>
                <td className="p-3 font-medium">{service.name}</td>
                <td className="p-3">{service.category}</td>
                <td className="p-3">${service.price}</td>
                <td className="p-3 flex gap-3">
                  <Link
                    to={`/edit-service/${service._id}`}
                    className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base hover:bg-green-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500 font-medium"
                >
                  No services found. Add your first service!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyService;
