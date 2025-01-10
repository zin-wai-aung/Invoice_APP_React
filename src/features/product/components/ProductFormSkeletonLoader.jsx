import React from "react";

const ProductFormSkeletonLoader = () => {

  return (
    <div className=" mt-16">
      <div className=" flex flex-col gap-y-10">
        <span>
          <div className="skeleton h-5 w-32 mb-3"></div>
          <div className="skeleton h-12 w-96"></div>
        </span>
        <span>
          <div className="skeleton h-5 w-32 mb-3"></div>
          <div className="skeleton h-12 w-96"></div>
        </span>
      </div>

      <div className=" my-5">
        <div className="skeleton h-5 w-60 mb-2"></div>
        <div className="skeleton h-5 w-60"></div>
      </div>

      <div className=" flex items-center gap-x-5">
        <div className="skeleton h-12 w-20"></div>
        <div className="skeleton h-12 w-40"></div>
      </div>
    </div>
  );
};

export default ProductFormSkeletonLoader;
