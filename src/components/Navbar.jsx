import React from "react";
export default function Navbar() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto px-1  flex items-center">
          {/* <!-- logo --> */}
          <div className="mr-auto flex items-center gap-1 cursor-pointer">
            {/* Logo */}
            <img
              className="h-20 w-26 drop-shadow-md"
              src="logo/logo.png"
              alt="Logo"
            />

            {/* Brand name */}
            <div className="flex flex-col">
              <h1 className="text-xl md:text-xl font-extrabold tracking-wide text-gray-800">
                PRODUCT <span className="text-blue-600">EXPRESS</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-500 tracking-tight">
                Fast • Reliable • Quality
              </p>
            </div>
          </div>

          {/* <!-- search --> */}
          <form
            action="/search"
            method="GET"
            className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200 rounded-full flex items-center overflow-hidden transition-all duration-300 focus-within:shadow-md"
          >
            {/* Category selector */}
            <select
              className="cursor-pointer bg-transparent uppercase font-semibold text-sm px-4 py-3 text-blue-600 focus:outline-none"
              name="category"
              defaultValue="all"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="shoes">Shoes</option>
              <option value="home">House Supplies</option>
              <option value="accessories">Accessories</option>
            </select>

            {/* Vertical divider */}
            <div className="h-6 w-px bg-blue-500/30"></div>

            {/* Search input */}
            <input
              className="flex-1 bg-transparent font-medium text-sm px-4 py-3 text-gray-700 placeholder-gray-400 outline-none"
              type="text"
              name="q"
              placeholder="Search products..."
            />

            {/* Search button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 active:scale-95"
              title="Search"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
              </svg>
            </button>
          </form>

          {/* <!-- buttons --> */}
          <nav className="contents">
            <ul className="ml-4 xl:w-48 flex items-center justify-end">
              {/* User icon */}
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a href="#">
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144z" />
                  </svg>
                </a>
              </li>

              {/* Wishlist icon */}
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a href="#">
                  <div className="absolute -top-1 right-0 z-10 bg-blue-500 text-gray-100 text-xs font-bold px-1 py-0.5 rounded-sm">
                    0
                  </div>
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3z" />
                  </svg>
                </a>
              </li>

              {/* Cart icon */}
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a href="#">
                  <div className="absolute -top-1 right-0 z-10 bg-blue-500 text-gray-100 text-xs font-bold px-1 py-0.5 rounded-sm">
                    0
                  </div>
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- cart count --> */}

          <div className="ml-4 hidden sm:flex flex-col font-bold mx-7">

          <div className="ml-4 hidden sm:flex flex-col font-bold">

            <span>$0.00</span>
          </div>
          </div>
        </div>
      </header>
    </div>
   

  );
}
