import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <div>
      <section className="py-16  dark:text-pink-600 dark:bg-gray-800 bg-gray-100 text-green-600 text-center">
        <h2 className="text-4xl font-bold mb-4">Need a Service Today?</h2>
        <p className="mb-6">Book trusted professionals instantly.</p>
        <Link to="/service" className="btn bg-pink-500">
          Explore Services
        </Link>
      </section>
    </div>
  );
};

export default CTA;
