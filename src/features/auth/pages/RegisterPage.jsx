import React from "react";
import  { Toaster } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import useCookie from "react-use-cookie";

const RegisterPage = () => {
    const [token] = useCookie("my_token");
  
   if (token) {
      return <Navigate to="/dashboard" />;
    }
  
  return (
    <section className="min-h-screen mx-auto flex flex-col justify-center items-center">
      <Toaster />
      <Link to={"/"} className="text-2xl text-accent">
        <img src="/LogoWhite.png" alt="Logo" className=" h-12 mb-5" />
      </Link>
      <div className="w-[25rem] bg-neutral px-10 py-5 rounded-xl">
        <h1 className=" text-2xl text-accent font-bold mb-5">
          Create an account
        </h1>
        <RegisterForm/>
      </div>
    </section>
  );
};

export default RegisterPage;
