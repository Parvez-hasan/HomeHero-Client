import React from "react";

const ServiceSkeleton = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl shadow animate-pulse overflow-hidden">
      <div className="h-44 bg-gray-300 dark:bg-gray-600"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>

        <div className="flex justify-between pt-4">
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSkeleton;
