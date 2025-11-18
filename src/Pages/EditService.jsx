import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import Loading from './Loading';

const EditService = () => {

 const { id } = useParams(); // MongoDB _id
  const navigate = useNavigate();

  const [service, setService] = useState(null);

  //  Load service by _id
  useEffect(() => {
    fetch(`https://home-hero-server-silk.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch(() => toast.error("Failed to load service"));
  }, [id]);

  if (!service) {
    return <Loading></Loading>
  }

  // Update form submit
  const handleUpdate = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;

    const updatedService = {
      title,
      price,
      description,
      image,
    };

    //  PUT request for update
    fetch(`https://home-hero-server-silk.vercel.app/services/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Service Updated Successfully!");
        navigate("/my-services");
      });
  };   

    return (
       <div className="max-w-xl mx-auto p-5 bg-green-50 ">
      <h2 className="text-3xl text-pink-600 font-bold mb-5 text-center">Edit Service</h2>

      <form onSubmit={handleUpdate} className="space-y-4">

        {/* Title */}
        <div>
          <label className="font-medium">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={service.title}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="font-medium">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={service.price}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Image */}
        <div>
          <label className="font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={service.image}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={service.description}
            className="w-full border p-2 rounded h-24"
          />
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded">
          Update Service
        </button>
      </form>
    </div>   
    );
};

export default EditService;