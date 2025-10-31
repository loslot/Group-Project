import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { CartContext } from "../components/CartContext";
import { useWishlist } from "../Context/WishlistContext";

const isActive = (path, current) => {
  if (path === "/") return current === "/";
  return current.startsWith(path);
};

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { cartCount } = useContext(CartContext);
  const { wishlistCount } = useWishlist();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Extract current category from URL: "/fashion" → "fashion", "/" → "all"
  const currentCategory = pathname === "/" ? "all" : pathname.split("/")[1] || "all";
  const categorySegment = currentCategory;

  // Handle category change (desktop)
  const handleCategory = (e) => {
    const value = e.target.value;
    if (value === "all") navigate("/");
    else navigate(`/${value}`);
  };

  // Handle search (desktop)
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const mode = form.mode.value;
    const q = form.q.value.trim();
    if (!q) return;
    if (mode === "price" && isNaN(Number(q))) return;
    navigate(`/search?mode=${mode}&q=${encodeURIComponent(q)}`);
  };

  // Handle category change (mobile)
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "all") navigate("/");
    else navigate(`/${value}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      {/* ==================== DESKTOP VIEW ==================== */}
      <div className="hidden md:flex w-full h-[70px] my-1 mx-auto px-4 lg:px-6 items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
          <img
            className="h-14 w-auto max-h-[60px] max-w-[110px] object-contain"
            src="/logo/logo.png"
            alt="Product Express"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-extrabold tracking-wide text-gray-800 flex">
              PRODUCT <span className="text-blue-600">EXPRESS</span>
            </h1>
            <p className="text-xs text-gray-500 tracking-tight">
              Fast • Reliable • Quality
            </p>
          </div>
        </Link>

        {/* Centered Search Bar */}
        <div className="flex-1 flex justify-center px-4 max-w-3xl">
          <form
            onSubmit={handleSearch}
            className="w-full bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200 rounded-full flex items-center overflow-hidden transition-all duration-300 focus-within:shadow-md"
          >
            <select
              aria-label="Category"
              defaultValue={categorySegment}
              onChange={handleCategory}
              className="cursor-pointer bg-transparent uppercase font-semibold text-xs lg:text-sm px-2 lg:px-4 py-3 text-blue-600 focus:outline-none rounded-l-full"
            >
              <option value="all">All Categories</option>
              <option value="electronic">Electronics</option>
              <option value="beauty">Beauty and Skincare</option>
              <option value="fashion">Fashion</option>
              <option value="homesupplies">Home Supplies</option>
              <option value="jewellery">Jewellery</option>
            </select>
            <div className="h-6 w-px bg-blue-500/30"></div>
            <select
              aria-label="Search by"
              name="mode"
              defaultValue="title"
              className="cursor-pointer bg-transparent font-semibold text-xs lg:text-sm px-2 lg:px-3 py-3 text-indigo-600 focus:outline-none"
            >
              <option value="title">Title</option>
              {/* <option value="id">ID</option> */}
              <option value="price">Price</option>
            </select>
            <div className="h-6 w-px bg-blue-500/30"></div>
            <input
              name="q"
              type="text"
              required
              className="flex-1 bg-transparent font-medium text-xs lg:text-sm px-3 lg:px-4 py-3 text-gray-700 placeholder-gray-400 outline-none"
              placeholder="Search products..."
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 lg:px-5 py-3 rounded-r-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 active:scale-95"
              title="Search"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
              </svg>
            </button>
          </form>
        </div>

        {/* RIGHT ICONS */}
        <nav className="flex items-center flex-shrink-0">
          <ul className="flex items-center justify-end gap-1.5 lg:gap-3">
            {/* ACCOUNT */}
            <li>
              <Link
                to="/account"
                aria-label="Account"
                className={`block p-1.5 ${isActive("/account", pathname)
                  ? "text-blue-700"
                  : "text-blue-500 hover:text-blue-700"
                  }`}
              >
                <svg className="h-7 lg:h-8 w-7 lg:w-8" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                </svg>
              </Link>
            </li>

            {/* WISHLIST */}
            <li>
              <Link to="/wishlist" aria-label="Wishlist" className="relative block p-1.5 text-blue-500">
                <span className="absolute -top-1 -right-1 z-10 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
                <svg className="h-7 lg:h-8 w-7 lg:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
            </li>

            {/* CART */}
            <li className="relative">
              <Link
                to="/cart"
                aria-label="Cart"
                className={`block p-1.5 ${isActive("/cart", pathname)
                  ? "text-blue-700"
                  : "text-blue-500 hover:text-blue-700"
                  }`}
              >
                <span className="absolute -top-1 -right-1 z-10 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount ?? "?"}
                </span>
                <svg className="h-7 lg:h-8 w-7 lg:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ==================== MOBILE HEADER ==================== */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-10 w-10 object-contain" src="/logo/logo.png" alt="Logo" />
          <span className="text-lg font-bold text-gray-800">PRODUCT EXPRESS</span>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="text-blue-600"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {/* CATEGORY SELECT */}
          <select
            value={currentCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border rounded text-sm font-medium text-blue-600"
          >
            <option value="all">All Categories</option>
            <option value="electronic">Electronics</option>
            <option value="beauty">Beauty</option>
            <option value="fashion">Fashion</option>
            <option value="homesupplies">Home Supplies</option>
            <option value="jewellery">Jewellery</option>
          </select>

          {/* SEARCH FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const mode = form.mode.value;
              const q = form.q.value.trim();
              if (!q) return;
              if (mode === "price" && isNaN(Number(q))) return;
              navigate(`/search?mode=${mode}&q=${encodeURIComponent(q)}`);
              setIsMobileMenuOpen(false);
            }}
            className="flex gap-2"
          >
            <input
              name="q"
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 border rounded text-sm"
              required
            />
            <select name="mode" defaultValue="title" className="p-2 border rounded text-sm">
              <option value="title">Title</option>
              <option value="id">ID</option>
              <option value="price">Price</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white px-3 rounded text-sm">
              Go
            </button>
          </form>

          {/* ICON LINKS */}
          <div className="flex justify-around pt-2">
            <Link
              to="/wishlist"
              className="text-center text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-xs">Wishlist ({wishlistCount})</span>
            </Link>

            <Link
              to="/cart"
              className="text-center text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-xs">Cart ({cartCount ?? "?"})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
