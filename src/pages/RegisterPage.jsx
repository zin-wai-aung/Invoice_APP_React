import React from 'react'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const handleRegister =  async(data) => {

    const res = await fetch(import.meta.env.VITE_API_URL + "/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Register successfully");
      // console.log(json)
      navigate("/")
    } else {
      toast.error(json.message);
      
    }


  }
  


  return (
    <section className="min-h-screen mx-auto flex flex-col justify-center items-center">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-[25rem] bg-neutral p-10 rounded-xl">
          <h1 className=" text-2xl text-accent font-bold mb-5">
            Create an account
          </h1>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Your Name</span>
              </div>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="eg. John Doe"
                required
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="eg. john@company.com"
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

            <label className="form-control">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                id="confirm-password"
                {...register("password_confirmation")}
                placeholder="Confirm Password"
                required
                className="input input-bordered w-full"
              />
            </label>

            <div className="form-control">
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-accent checkbox-sm"
                />
                <span className="label-text ms-1">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </span>
              </label>
            </div>

            <button type="submit" className=" btn btn-accent w-full">
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage