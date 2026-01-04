import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="py-10 text-center">
        <h2 className="text-3xl text-pink-600 font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Get service updates and offers.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-64"
        />
        <button className="btn bg-green-500 ml-2">Subscribe</button>
      </section>
    </div>
  );
};

export default Newsletter;
