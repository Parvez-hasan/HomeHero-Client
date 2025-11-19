import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://home-hero-server-silk.vercel.app/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  // delete service booking
  const handleCancel = async(id) => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    })

    if(result.isConfirmed) {
    fetch(`https://home-hero-server-silk.vercel.app/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {

      
          setBookings(bookings.filter((b) => b._id !== id));
            Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  
        }
      });
    };
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
        My Bookings
      </h2>

      {/* No Bookings */}
      {bookings.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You have no bookings yet.
        </p>
      ) : (
        // Table formet
        <div className="overflow-x-auto rounded-lg shadow-lg mb-3 dark:text-gray-900 bg-white">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-pink-100">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Service</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b._id}
                  className="text-center border hover:bg-gray-50 transition"
                >
                  <td className="p-2 border">
                    <img
                      className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-md mx-auto"
                      src={b.serviceImg}
                      alt={b.serviceName}
                    />
                  </td>

                  <td className="p-2 border font-semibold">{b.serviceName}</td>
                  <td className="p-2 border text-green-700 font-bold">
                    ${b.price}
                  </td>
                  <td className="p-2 border">{b.bookingDate}</td>

                  <td className="p-2 border">
                    <button
                      onClick={() => handleCancel(b._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm md:text-base"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
