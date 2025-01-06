import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import useCookie from "react-use-cookie";

tailspin.register();

const ProductEditCard = () => {

      const [token] = useCookie("my_token");
  
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  const handleUpdateProduct = async (data) => {
    // console.log(data);
    setIsSending(true);

    await fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
      method: "PUT",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    setIsSending(false);
    if (data.back_to_product_list) {
      navigate("/dashboard/product");
    }
    toast.success("Product update successfully");
  };

  return (
    <div className="  rounded-lg w-full md:w-1/2">
      <h1 className=" text-3xl font-bold mb-3">Edit Product</h1>
      <p className=" mb-10 text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>

      {isLoading ? (
        <ProductListSkeletonLoader />
      ) : (
        <form onSubmit={handleSubmit(handleUpdateProduct)}>
          <div className=" mb-5">
            <label className="form-control">
              <div className="label">
                <span className="label-text"> Product Name</span>
              </div>
              <input
                type="text"
                {...register("product_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                defaultValue={data?.data?.product_name}
                className={`input input-bordered w-full ${
                  errors.product_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : ""
                }`}
              />
            </label>

            {errors.product_name?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.product_name?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.product_name?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
          </div>
          <div className=" mb-8">
            <label className="form-control">
              <div className="label">
                <span className="label-text"> Product Price</span>
              </div>
              <input
                type="number"
                {...register("price", {
                  required: true,
                  min: 100,
                  max: 10000,
                })}
                defaultValue={data?.data?.price}
                className={`input input-bordered w-full ${
                  errors.price
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : ""
                }`}
              />
            </label>
            
            {errors.price?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product price is required
              </p>
            )}
            {errors.price?.type === "min" && (
              <p className=" text-red-500 text-sm mt-1">
                Product price must be greater than 100 characters
              </p>
            )}
            {errors.price?.type === "max" && (
              <p className=" text-red-500 text-sm mt-1">
                Product price must be less than 10000 characters
              </p>
            )}
          </div>

          <div>
            <label className=" cursor-pointer">
              <input
                {...register("all_correct")}
                required
                id="all-correct"
                type="checkbox"
                className="checkbox checkbox-accent checkbox-sm"
              />
              <span className="label-text ms-1">
                {" "}
                Make sure all field are correct
              </span>
            </label>
          </div>

          <div className=" mt-1">
            <label className=" cursor-pointer">
              <input
                {...register("back_to_product_list")}
                id="back-to-product-list"
                type="checkbox"
                value=""
                defaultChecked
                className="checkbox checkbox-accent checkbox-sm"
              />
              <span className="label-text ms-1">
                {" "}
                Back to Product List after saving
              </span>
            </label>
          </div>

          <div className=" mt-5 flex gap-x-3">
            <Link to="/dashboard/product">
              <button className="btn btn-outline btn-accent">Cancel</button>
            </Link>

            <button type="submit" className=" btn btn-accent">
              <span>Update Product</span>
              {isSending && (
                <l-tailspin
                  size="20"
                  stroke="5"
                  speed="0.9"
                  color="white"
                ></l-tailspin>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductEditCard;
