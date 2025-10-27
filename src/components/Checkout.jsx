import React, { useContext } from "react";
import { useNavigate, Link } from "react-router";
import { CartContext } from "../components/CartContext";
import { motion } from "framer-motion";

export default function Checkout() {
  const { cart, updateQuantity, removeFromCart, totalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Purchase completed successfully!");
    navigate("/");
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Navigation Bar */}
      <motion.nav
        className="bg-white rounded-xl shadow-sm p-4 mb-6 flex justify-end items-center"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex items-center space-x-2 lg:space-x-4">
          <li className="relative inline-block">
            <Link to="/account" aria-label="Account">
              <svg
                className="h-9 lg:h-10 p-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144z" />
              </svg>
            </Link>
          </li>
          <li className="relative inline-block">
            <Link to="/wishlist" aria-label="Wishlist">
              <div className="absolute -top-1 right-0 z-10 bg-blue-500 text-gray-100 text-xs font-bold px-1 py-0.5 rounded-sm">
                0
              </div>
              <svg
                className="h-9 lg:h-10 p-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3z" />
              </svg>
            </Link>
          </li>
        </ul>
      </motion.nav>

      <motion.h1
        className="
          text-4xl sm:text-5xl font-extrabold text-white text-center
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
          rounded-xl px-6 py-4 mb-8
          shadow-lg shadow-indigo-500/50
          tracking-tight
        "
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        Checkout
      </motion.h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty.</p>
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
          >
            Continue Shopping
          </motion.button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Cart Summary */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Order Summary
            </h2>
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/100")
                  }
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                  <p className="text-lg font-bold text-gray-900">
                    {item.price}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1">
                      <motion.button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-sm hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
                        aria-label="Decrease quantity"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 12H6"
                          />
                        </svg>
                      </motion.button>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-12 px-2 py-1 border-none bg-transparent text-sm text-center font-medium text-gray-900"
                      />
                      <motion.button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full shadow-sm hover:bg-green-600"
                        aria-label="Increase quantity"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </motion.button>
                    </div>
                    <motion.button
                      onClick={() => removeFromCart(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium shadow-sm hover:bg-red-600"
                      aria-label="Remove item"
                    >
                      Remove
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">
                Total: ${totalPrice}
              </p>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Shipping & Payment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shipping Address
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="123 Main St, City, Country"
                />
              </div>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    required
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    required
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="123"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <motion.button
                  type="button"
                  onClick={() => navigate("/cart")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-200 text-gray-800 text-sm font-medium shadow-sm hover:bg-gray-300"
                >
                  Back to Cart
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
                >
                  Complete Purchase
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.section>
  );
}
