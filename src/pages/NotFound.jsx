// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;