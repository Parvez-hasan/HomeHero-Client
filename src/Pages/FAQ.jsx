import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-base-200">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">FAQ</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <details className="p-4 bg-base-100 rounded">
            <summary className="font-semibold">How do I book?</summary>
            <p className="mt-2 text-sm">Choose a service and book instantly.</p>
          </details>
          <details className="p-4 bg-base-100 rounded">
            <summary className="font-semibold">Are providers verified?</summary>
            <p className="mt-2 text-sm">Yes, all providers are verified.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
