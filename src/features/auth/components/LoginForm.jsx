import React from 'react'
import { Link } from "react-router-dom";
import Spinner from '../../../components/Spinner'
import useLogin from '../hooks/useLogin';
const LoginForm = () => {
  
  const { register, handleSubmit, isSubmitting, handleLogin } = useLogin();

  return (
    <form className="space-y-3" onSubmit={handleSubmit(handleLogin)}>
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

      <button
        disabled={isSubmitting}
        type="submit"
        className=" btn btn-accent w-full flex justify-center gap-x-3 disabled:pointer-events-none"
      >
        Sign in {isSubmitting && <Spinner />}
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
  );
}

export default LoginForm