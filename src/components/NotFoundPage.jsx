import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl font-semibold">
          Page Not Found
        </p>
        <p className="mt-2">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-accent text-black rounded hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
