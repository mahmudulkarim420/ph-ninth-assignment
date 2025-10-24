import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-indigo-100 to-white text-center p-6">
      <h1 className="text-[120px] font-extrabold text-indigo-600 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        {error?.statusText || error?.message || "The page you’re looking for doesn’t exist."}
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg transition"
      >
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="mt-8 text-sm text-gray-500">
        — SkillSwap Platform —
      </div>
    </div>
  );
};

export default ErrorPage;
