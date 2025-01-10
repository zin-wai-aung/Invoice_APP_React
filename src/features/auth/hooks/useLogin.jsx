import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import { loginService } from "../../../services/auth";
const useLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [token, setToken] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  const handleLogin = async (data) => {
    const res = await loginService(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Login successfully");
      setToken(json.token);
      setUserCookie(JSON.stringify(json.user));
      navigate("/dashboard");
    } else {
      toast.error(json.message);
    }
  };

  return { register,handleSubmit,isSubmitting,handleLogin}
};

export default useLogin;
