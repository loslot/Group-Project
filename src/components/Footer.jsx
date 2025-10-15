import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[25%] bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 border-t border-gray-300 dark:border-gray-700 fixed bottom-0">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Product Express
          </h2>
          <p className="text-sm leading-relaxed">
            Delivering high-quality products and services with modern web technologies.
            Follow us for updates and insights.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Products
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">React</a></li>
            <li><a href="#" className="hover:text-blue-500">Angular</a></li>
            <li><a href="#" className="hover:text-blue-500">Vue</a></li>
            <li><a href="#" className="hover:text-blue-500">Laravel</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500">Settings</a></li>
            <li><a href="#" className="hover:text-blue-500">Orders</a></li>
            <li><a href="#" className="hover:text-blue-500">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>📍 Phnom Penh, PP 10012, KH</li>
            <li>📧 info@example.com</li>
            <li>📞 +01 234 567 88</li>
            <li>📞 +01 234 567 89</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-6">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-blue-700"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-200 dark:bg-gray-800 text-center py-4">
        <p className="text-sm">
          © 2025 <span className="font-semibold">Product Express</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
