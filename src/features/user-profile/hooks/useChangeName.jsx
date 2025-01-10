import useCookie from "react-use-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../../../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import { changeName } from "../../../services/profile";

const userChangeName = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { name } = JSON.parse(userCookie);

  const navigate = useNavigate();
    const {
        register,
        handleSubmit,formState:{errors,isSubmitting},
    reset,
  } = useForm();

  const { user, setUser } = useUserStore();

  const handleUpdateName = async (data) => {
    const res = await changeName(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      navigate("/dashboard/user-profile");
      reset();
    } else {
      toast.error(json.message);
    }
  };

  return { register, handleSubmit, errors,isSubmitting,name, handleUpdateName };
};

export default userChangeName;
