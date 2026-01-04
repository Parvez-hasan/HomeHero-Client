import React from "react";

const Categories = () => {
  return (
    <div>
      <section className="py-10 px-4 bg-base-200 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-500 mb-8">Service Categories</h2>

          <div className="grid grid-cols-2 md:grid-cols-4  text-green-500 gap-5">
            {["Electrician", "Plumber", "Cleaner", "Painter"].map((cat) => (
              <div key={cat} className="p-6 bg-base-100 rounded-xl shadow">
                <h4 className="font-semibold">{cat}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
