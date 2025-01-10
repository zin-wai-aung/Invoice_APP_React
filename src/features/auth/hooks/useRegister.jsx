import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../../services/auth";
import toast from "react-hot-toast";

const useRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleRegister = async (data) => {
    const res = await registerService(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Register successfully");
      navigate("/login");
    } else {
      toast.error(json.message);
    }
  };

  return {register,handleSubmit,isSubmitting,handleRegister}
};

export default useRegister;
