import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const ServiceDetails = () => {

  const service = useLoaderData();
  console.log(service);
  
  const { user } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookingData = {
      userEmail: user?.email,
      serviceId: service._id,
      bookingDate: form.date.value,
      price: service.price,
    };

    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Booking Successful!");
        setOpenModal(false);
      });
  };
  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Image */}
      <motion.img
        src={service.image}
        alt={service.name}
        className="w-full h-72 object-cover rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Info Section */}
      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold text-pink-600">{service.name}</h1>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-gray-600">
            Category: {service.category}
          </p>
          <p className="text-2xl font-bold text-green-600">${service.price}</p>
        </div>

        <p className="text-gray-700 leading-relaxed">{service.description}</p>

        <div className="mt-3">
          <p className="font-semibold text-gray-800">
            Provided By:{" "}
            <span className="text-pink-500">{service.providerName}</span>
          </p>
          <p className="text-gray-600">Contact: {service.email}</p>
        </div>

        {/* Book Button */}
        <button
          onClick={() => setOpenModal(true)}
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-lg font-semibold transition"
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold text-center mb-4 text-pink-600">
              Confirm Booking
            </h2>

            <div className="mb-3">
              <p>
                <strong>Service:</strong> {service.name}
              </p>
              <p>
                <strong>Price:</strong> ${service.price}
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-3">
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full px-4 py-2 border rounded"
              />

              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-2 border rounded"
              />

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                Confirm Booking
              </button>
            </form>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-3 w-full py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
