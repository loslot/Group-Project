import React from "react";
import { Link } from "react-router"; // Add this import

export default function Footer() {
  return (
    <footer className="w-full min-h-[100px] bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700 sticky bottom-0 z-10 px-5 ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 py-6 sm:py-8 lg:py-10">
          {/* Brand / About */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Product Express
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              Delivering high-quality products and services with modern web
              technologies.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/electronic"
                  className="hover:text-blue-500 transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/beauty"
                  className="hover:text-blue-500 transition-colors"
                >
                  Beauty and Skincare
                </Link>
              </li>
              <li>
                <Link
                  to="/fashion"
                  className="hover:text-blue-500 transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/homesupplies"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home Supplies
                </Link>
              </li>
              <li>
                <Link
                  to="/jewellery"
                  className="hover:text-blue-500 transition-colors"
                >
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-blue-500 transition-colors"
                >
                  Map
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="hover:text-blue-500 transition-colors"
                >
                  Settings
                </Link>
              </li>
              <li>
                {/* <Link
                  to="/orders"
                  className="hover:text-blue-500 transition-colors"
                >
                  Orders
                </Link> */}
              </li>
              <li>
                {/* <Link
                  to="/help"
                  className="hover:text-blue-500 transition-colors"
                >
                  Help
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-3">
              <div className="cursor-pointer hover:text-blue-500 transition-colors">
                <Link to="/contact">Contact Us</Link>
              </div>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>📍 Phnom Penh, PP 10012, KH</li>
              <li>📧 productepress@shop.com</li>
              <li>📞 +01 234 567 88</li>
              <li>📞 +01 234 567 89</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Social Icons */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 sm:py-6">
        <div className="flex justify-around space-x-4 sm:space-x-6">
          <Link
            to="https://facebook.com"
            className="text-xl hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            to="https://twitter.com"
            className="text-xl hover:text-sky-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            to="https://instagram.com"
            className="text-xl hover:text-pink-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            to="https://github.com"
            className="text-xl hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </Link>
          <Link
            to="https://linkedin.com"
            className="text-xl hover:text-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-200 dark:bg-gray-800 text-center py-3 sm:py-4">
        <p className="text-xs sm:text-sm">
          © 2025 <span className="font-semibold">Product Express</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
