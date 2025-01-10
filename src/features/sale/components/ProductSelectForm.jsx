import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import {fetchProducts} from "../../../services/product"
const ProductSelectForm = () => {

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products?limit=50",
    fetchProducts
  );

  const { register, handleSubmit, reset } = useForm();

  const { addRecord, changeQuantity, records } = useSaleProductStore();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;

    const isExited = records.find(
      ({ product: { id } }) => currentProductId === id
    );

    if (isExited) {
      changeQuantity(isExited.id, data.quantity);
    } else {
      addRecord({
        product: currentProduct,
        product_id: currentProduct.id,
        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      });
    }
    reset();
  };
  return (
    <div className="p-5 rounded-lg border border-neutral mb-5">
      <form action="#" id="recordForm" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex items-end gap-x-5">
          <label className="form-control w-[50%]">
            <div className="label">
              <span className="label-text"> Select Your Product</span>
            </div>

            <select
              id="productSelect"
              {...register("product")}
              className="select select-accent w-full max-w-xs"
              required
            >
              <option disabled selected>
                Select
              </option>
              {!isLoading &&
                data?.data?.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
          </label>

          <label className="form-control w-[20%]">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="number"
              id="quantityInput"
              min={1}
              {...register("quantity")}
              required
              className="input input-bordered w-full"
            />
          </label>
          <button
            type="submit"
            className="btn btn-active btn-accent text-nowrap w-[30%]"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSelectForm;
