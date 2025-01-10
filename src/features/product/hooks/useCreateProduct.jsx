import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import { storeProduct } from "../../../services/product";

tailspin.register();

const useCreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    try {
      const res = await storeProduct(data.product_name, data.price);
      const json = res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      if (data.back_to_product_list) {
        navigate("/dashboard/products");
      }

      toast.success("Product created successfully");
      reset();
    } catch (error) {
      toast.error("An error occurred while creating product");
      console.log("error", error);
    }
  };

  return { register, handleSubmit ,isSubmitting,errors,handleCreateProduct};
};

export default useCreateProduct;
