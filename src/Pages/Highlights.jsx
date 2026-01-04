import React from "react";

const Highlights = () => {
  return (
    <section className="py-12 border-gray-400">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-4xl font-bold">500+</h3>
          <p>Verified Providers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">2K+</h3>
          <p>Happy Customers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">98%</h3>
          <p>Positive Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
