// src/pages/SearchResults.jsx
import { useSearchParams, Link } from 'react-router';
import { useState } from 'react';
import SEARCH_DATA from '../page/SearchData';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q   = params.get('q')?.trim() || '';
  const mode = params.get('mode') || 'title';   // ← from navbar

  /* ----------  FILTER BY SELECTED MODE ONLY  ---------- */
  const matched = q
    ? SEARCH_DATA.filter(p => {
        switch (mode) {
          case 'id':
            return String(p.id) === q;
          case 'title':
            return p.title.toLowerCase().includes(q.toLowerCase());
          case 'price':
            return p.price.toLowerCase().includes(q.toLowerCase());
          default:
            return false;
        }
      })
    : [];

  /* ----------  SINGLE NATIVE SELECT → choose ONE only  ---------- */
  const handleModeChange = (e) => {
    const newMode = e.target.value;
    // push new mode into URL (keep q)
    params.set('mode', newMode);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    // force re-render
    window.location.reload();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {matched.length} Result{matched.length !== 1 && 's'}
            </h1>

            {q && (
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-slate-800/80 backdrop-blur">
                {mode === 'id' ? `ID: ${q}` : `“${q}”`}
              </span>
            )}
          </div>

          {/* ONE-CHOICE MODE SELECTOR */}
          {/* <div className="flex items-center gap-2">
            <label htmlFor="searchMode" className="text-xs text-slate-500">Search by</label>
            <select
              id="searchMode"
              value={mode}
              onChange={handleModeChange}
              className="px-3 py-2 rounded-lg bg-white/70 backdrop-blur border border-slate-300
                         text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="id">ID</option>
              <option value="title">Title</option>
              <option value="price">Price</option>
            </select>
          </div> */}
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </header>

     {/* NO RESULTS */}
{matched.length === 0 && (
  <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-purple-100 px-4">
    <div className="backdrop-blur-lg bg-white/70 shadow-xl rounded-2xl p-10 text-center max-w-md w-full border border-white/40">
      {/* Icon */}
      <div className="flex items-center justify-center mb-6 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-slate-700 mb-2">
        No Products Found
      </h2>
      <p className="text-slate-500 mb-6">
        We couldn’t find any products for{" "}
        <span className="font-medium text-slate-700">
          {mode === "id" ? "ID" : mode} “{q}”
        </span>.
      </p>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Go Back
      </button>
    </div>
  </div>
)}

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {matched.map(item => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-1">
              <img src={item.image} alt={item.title} loading="lazy" className="h-48 sm:h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
                <p className="mt-2 font-bold text-slate-900">{item.price}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}