// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
      <SEO
        title="Page not found"
        description="The page you were looking for could not be found."
        path="/404"
        noIndex
      />
      <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
        <h1 className="mb-4 text-4xl font-semibold text-slate-950 dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
