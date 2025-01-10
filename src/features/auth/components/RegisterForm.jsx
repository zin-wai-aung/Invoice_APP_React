import React from 'react'
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useRegister from '../hooks/useRegister';
 
const RegisterForm = () => {
  
  const { register, handleSubmit, isSubmitting, handleRegister } = useRegister();
  return (
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

      <button
        disabled={isSubmitting}
        type="submit"
        className=" btn btn-accent w-full flex justify-center gap-x-3 disabled:pointer-events-none"
      >
        Create an account {isSubmitting && <Spinner />}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Login here
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm