import React from "react";

const HeroSection = () => {
  return (
    <section className="py-12 mx-auto w-full">
      <div className=" flex items-center justify-between gap-x-10">
        <div className="">
          <h1 className="text-4xl font-bold mb-4 text-gray-500">
            Manage Your Invoices and Products Seamlessly
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            Create, manage, and store invoices efficiently while organizing your
            product and invoice lists. Our tool simplifies inventory, updates,
            and searches for optimal productivity.
          </p>
          <div className="flex space-x-4">
            <a href="/register" className="btn btn-accent">
              Get Started
            </a>
            <a
              href="#"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="">
          <img
            src="/invoice.png"
            alt="Invoice Photo"
            className="rounded-lg mx-auto w-[60rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
