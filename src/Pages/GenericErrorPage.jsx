import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const GenericErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center p-6">
      <FaExclamationTriangle className="text-red-600 text-[100px] mb-4 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-3">
        Something Went Wrong
      </h1>
      <p className="text-gray-700 mb-6">
        Sorry! An unexpected error occurred. Please try again later.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg transition"
      >
        <FaHome /> Back to Home
      </Link>

      <div className="mt-8 text-sm text-gray-500">— SkillSwap Platform —</div>
    </div>
  );
};

export default GenericErrorPage;
