import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { CartContext } from "../components/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useUser } from "../Context/UserContext";
import { GoHistory } from 'react-icons/go';
import SEARCH_DATA from "../page/SearchData";

const isActive = (path, current) => {
  if (path === "/") return current === "/";
  return current.startsWith(path);
};

export default function Navbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { cartCount } = useContext(CartContext);
    const { wishlistCount } = useWishlist();
    const { user, logout } = useUser();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

   // Search suggestions state
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchMode, setSearchMode] = useState("title");
    const searchRef = useRef(null);

  const handleLogout = () => {
    logout();
  };

  // Extract current category from URL: "/fashion" → "fashion", "/" → "all"
  const currentCategory =
    pathname === "/" ? "all" : pathname.split("/")[1] || "all";
  const categorySegment = currentCategory;

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    setShowSuggestions(false);
  };

  // Handle search input change for suggestions
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length >= 1 && value.length <= 2) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handle mode change
  const handleModeChange = (e) => {
    setSearchMode(e.target.value);
  };

  // Filter suggestions based on query
  const filteredSuggestions = SEARCH_DATA.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5); // Limit to 5 suggestions

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
      <div className="hidden lg:flex w-full h-[70px] my-1 mx-auto px-4 lg:px-6 items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
        >
          <img
            className="h-14 w-auto max-h-[60px] max-w-[110px] object-cover"
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
        <div className="flex-1 flex justify-center px-4 max-w-3xl relative" ref={searchRef}>
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
              value={searchMode}
              onChange={handleModeChange}
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
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="flex-1 bg-transparent font-medium text-xs lg:text-sm px-3 lg:px-4 py-3 text-gray-700 placeholder-gray-400 outline-none"
              placeholder={searchMode === "title" ? "Search by Title..." : "Search by Price..."}
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

          {/* Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {filteredSuggestions.map((product) => (
                <Link
                  key={product.id}
                  to={`/details/${product.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setShowSuggestions(false)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {product.title}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {product.subtitle}
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT ICONS */}
        <nav className="flex items-center flex-shrink-0">
          <ul className="flex items-center justify-end gap-1.5 lg:gap-3">
            {/* ACCOUNT */}
            <li className="block p-1.5 text-blue-500">
              <Link
                to={user ? "/MyAccount" : "/login"}
                aria-label="account"
                className="focus:outline-none"
              >
                <svg
                  className="h-7 lg:h-8 w-7 lg:w-8"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144z" />
                </svg>
              </Link>
            </li>

            {/* WISHLIST */}
            <li>
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="relative block p-1.5 text-blue-500"
              >
                <span className="absolute -top-1 -right-1 z-10 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
                <svg
                  className="h-7 lg:h-8 w-7 lg:w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
            </li>

            {/* ORDER HISTORY */}
            <li>
              <Link
                to="/Order-History"
                aria-label="Order History"
                className={`block p-1.5 ${
                  isActive("/OrderHistory", pathname)
                    ? "text-blue-700"
                    : "text-blue-500 hover:text-blue-700"
                }`}
              >
                <GoHistory className="h-7 lg:h-8 w-7 lg:w-8" />
              </Link>
            </li>

            {/* CART */}
            <li className="relative">
              <Link
                to="/cart"
                aria-label="Cart"
                className={`block p-1.5 ${
                  isActive("/cart", pathname)
                    ? "text-blue-700"
                    : "text-blue-500 hover:text-blue-700"
                }`}
              >
                <span className="absolute -top-1 -right-1 z-10 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount ?? "?"}
                </span>
                <svg
                  className="h-7 lg:h-8 w-7 lg:w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
      <div className="lg:hidden">
        {/* Top Bar with Logo and Actions */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white shadow-sm">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              className="h-12 w-16 object-contain"
              src="/logo/logo.png"
              alt="Product Express Logo"
            />
            <div className=" flex flex-col">
              <h1 className="text-xs font-extrabold tracking-wide text-gray-800">
                PRODUCT <span className="text-blue-600">EXPRESS</span>
              </h1>
            </div>
          </div>

          {/* Mobile Action Icons */}
          <div className="flex items-center gap-1">
            {/* Search Toggle */}
            <button
              onClick={() => {
                setIsMobileSearchOpen(!isMobileSearchOpen);
                if (!isMobileSearchOpen) setIsMobileMenuOpen(false);
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle search"
              aria-expanded={isMobileSearchOpen}
            >
              <svg
                className="h-5 w-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
              </svg>
            </button>

            {/* Account Button */}
            <Link
              to={user ? "/my-account" : "/login"}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Account menu"
            >
              <svg
                className="h-5 w-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144z" />
              </svg>
            </Link>

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Wishlist"
            >
              <span className="absolute -top-1 -right-1 z-10 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {wishlistCount}
              </span>
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>

            {/* ORDER HISTORY  On mobile*/}
            <Link
              to="/Order-History"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Order History"
            >
              <GoHistory className="h-5 w-5 text-blue-500" />
            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Cart"
            >
              <span className="absolute -top-1 -right-1 z-10 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount ?? "?"}
              </span>
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (!isMobileMenuOpen) setIsMobileSearchOpen(false);
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <form onSubmit={handleSearch} className="flex gap-2">
              <select
                name="mode"
                value={searchMode}
                onChange={handleModeChange}
                className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                aria-label="Search mode"
              >
                <option value="title">Title</option>
                {/* <option value="id">ID</option> */}
                <option value="price">Price</option>
              </select>
              <input
                name="q"
                type="text"
                required
                className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder={searchMode === "title" ? "Search by Title..." : "Search by Price..."}
                autoFocus
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors shadow-sm"
              >
                Go
              </button>
            </form>
          </div>
        )}

        {/* Mobile Category Menu */}
        {isMobileMenuOpen && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <nav>
              <label
                htmlFor="category-select"
                className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide"
              >
                Browse Categories
              </label>
              <select
                id="category-select"
                aria-label="Select category"
                value={categorySegment}
                onChange={handleCategory}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              >
                <option value="all">All Categories</option>
                <option value="electronic">Electronics</option>
                <option value="beauty">Beauty and Skincare</option>
                <option value="fashion">Fashion</option>
                <option value="homesupplies">Home Supplies</option>
                <option value="jewellery">Jewellery</option>
              </select>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}