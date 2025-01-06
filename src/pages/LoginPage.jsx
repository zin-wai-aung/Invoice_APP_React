import React from 'react'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useCookie from 'react-use-cookie';

const LoginPage = () => {

  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [token, setToken] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");

   if (token) {
      return <Navigate to='dashboard'/>
    }

  const handleLogin =async (data) => {

    const res = await fetch(import.meta.env.VITE_API_URL + "/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Login successfully")
      setToken(json.token)
      setUserCookie(JSON.stringify(json.user));
      navigate("/dashboard")
    } else {
      toast.error(json.message);
      
    }
  }

  return (
    <section className='min-h-screen mx-auto flex flex-col justify-center items-center'>
      <Toaster position="top-right" />
      <div className="w-[25rem] bg-neutral p-10 rounded-xl">
        <h1 className=" text-2xl text-accent font-bold mb-5">
          Sign in to your account
        </h1>
        <form
          className="space-y-3"
          onSubmit={handleSubmit(handleLogin)}
        >
          <label className="form-control">
            <div className="label">
              <span className="label-text">Your Email</span>
            </div>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="name@company.com"
              required
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter you Password"
              required
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex items-center justify-between">
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-accent checkbox-sm"
                />
                <span className="label-text ms-1">Remember me</span>
              </label>
            </div>

            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className=" btn btn-accent w-full">
            Sign in
          </button>

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage