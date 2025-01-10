import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <section className="min-h-screen mx-auto flex flex-col justify-center items-center">
      <Toaster position="top-right" />
      <Link to={"/"} className="text-2xl text-accent">
        <img src="/LogoWhite.png" alt="Logo" className=" h-12 mb-5" />
      </Link>
      <div className="w-[25rem] bg-neutral p-10 rounded-xl">
        <h1 className=" text-2xl text-accent font-bold mb-5">
          Sign in to your account
        </h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
