import { useForm } from "react-hook-form";
import {  useNavigate, useParams } from "react-router-dom";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import useSWR, { useSWRConfig } from "swr";
import { editProduct, fetchProducts } from "../../../services/product";

tailspin.register();

const useEditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const { mutate } = useSWRConfig();

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetchProducts
  );

  const handleUpdateProduct = async (data) => {
    try {
      await editProduct(id, data.product_name, data.price);

      mutate(import.meta.env.VITE_API_URL + `/products/${id}`);

      toast.success("Product updated successfully");
    } catch (error) {
      toast.error("An error occurred while updating product");
      console.log("error", error);
    } finally {
      if (data.back_to_product_list) {
        navigate("/dashboard/products");
      }
    }
  };

  return {register,handleSubmit,isSubmitting,errors,data,isLoading,handleUpdateProduct}
};

export default useEditProduct;
