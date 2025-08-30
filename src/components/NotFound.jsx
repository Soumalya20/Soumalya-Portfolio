import React from "react";
import { Link } from "react-router-dom";

export default function NotFound({ theme }) {
  return (
    <section className="py-20 text-center" aria-labelledby="not-found-heading">
      <h2 id="not-found-heading" className="mb-2 text-2xl font-semibold">Page not found</h2>
      <p className={`${theme.sub} mb-6`}>The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        Go Home
      </Link>
    </section>
  );
}
