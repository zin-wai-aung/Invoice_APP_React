import React, { useState } from "react";
import {
  HiOutlinePencil,
  HiOutlineTrash
} from "react-icons/hi2";
import { useSWRConfig } from "swr";

import { Link } from "react-router-dom";
import ShowDate from "../../../components/ShowDate";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { destroyProduct } from "../../../services/product";

bouncy.register();

const ProductListRow = ({
  product: { id, product_name, price, created_at, updated_at },
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
   try {
     setIsDeleting(true);

     const res = await destroyProduct(id);
     const json = await res.json();

     if (res.status === 200) {
       mutate(import.meta.env.VITE_API_URL + `/products`);
       toast.success(json.message);
     } else {
       toast.error(json.message);
     }
   } catch (error) {
     toast.error("An error occurred while deleting product");
     console.log("error", error);
   } finally {
     setIsDeleting(false);
   } 
  };

  return (
    <tr>
      <td className=" py-8">{id}</td>
      <td>{product_name}</td>
      <td>{price}</td>
      <td>
        <ShowDate timestamp={created_at} />
      </td>
      <td>
        <ShowDate timestamp={updated_at} />
      </td>
      <td>
        <div className="inline-flex gap-x-2 rounded-md shadow-sm" role="group">
          <Link to={`/dashboard/product-edit/${id}`}>
            <button className="btn btn-sm btn-outline btn-accent">
              <HiOutlinePencil />
            </button>
          </Link>

          <button
            type="button"
            onClick={handleDeleteBtn}
            className=" btn btn-sm btn-outline btn-error group"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash className=" text-error group-hover:text-white" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductListRow;
