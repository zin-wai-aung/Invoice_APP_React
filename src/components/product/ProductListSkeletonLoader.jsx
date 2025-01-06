import React from "react";

const ProductListSkeletonLoader = () => {
  const skeletonRows = Array.from({ length: 5 }); // Creates an array with 5 empty items

  return (
    <>
      {skeletonRows.map((_, index) => (
        <tr key={index}>
          <td>
            <div className="skeleton h-4 w-6 my-4"></div>
          </td>
          <td>
            <div className="skeleton h-4 w-24"></div>
          </td>{" "}
          <td>
            <div className="skeleton h-4 w-20"></div>
          </td>{" "}
          <td>
            <div className="skeleton h-3 w-20"></div>
            <div className="skeleton h-3 w-20 my-1"></div>
          </td>
          <td>
            <div className="skeleton h-3 w-20"></div>
            <div className="skeleton h-3 w-20 my-1"></div>
          </td>
          <td className=" flex gap-x-2">
            <div className="skeleton w-8 h-8"></div>
            <div className="skeleton w-8 h-8"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductListSkeletonLoader;
