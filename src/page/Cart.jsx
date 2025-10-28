import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../components/CartContext';
import { motion } from 'framer-motion';

// Custom Quantity Stepper Component
const QuantityStepper = ({ id, quantity, updateQuantity }) => {
  const spanRef = useRef(null);
  const displayRef = useRef(null);

  // Update display width based on text content
  useEffect(() => {
    if (spanRef.current && displayRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      // Add padding (24px) and ensure minimum width of 48px
      const newWidth = Math.max(spanWidth + 24, 48);
      displayRef.current.style.width = `${newWidth}px`;
    }
  }, [quantity]);

  // Handle keyboard events for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
      updateQuantity(id, quantity + 1);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
      if (quantity > 1) {
        updateQuantity(id, quantity - 1);
      }
    }
  };

  return (
    <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1 min-w-[120px]">
      <motion.button
        onClick={() => updateQuantity(id, quantity - 1)}
        disabled={quantity <= 1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-sm hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
        aria-label={`Decrease quantity for item ${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
        </svg>
      </motion.button>
      <div className="relative flex items-center justify-center">
        {/* Hidden span to measure text width */}
        <span
          ref={spanRef}
          className="absolute invisible text-sm font-medium text-gray-900"
          style={{ fontSize: '0.875rem', fontFamily: 'inherit' }}
        >
          {quantity}
        </span>
        <div
          ref={displayRef}
          role="textbox"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="px-3 py-1 text-sm text-center font-medium text-gray-900 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-text"
          style={{ minWidth: '48px' }}
          aria-label={`Quantity for item ${id}: ${quantity}`}
        >
          {quantity}
        </div>
      </div>
      <motion.button
        onClick={() => updateQuantity(id, quantity + 1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full shadow-sm hover:bg-green-600"
        aria-label={`Increase quantity for item ${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.button>
    </div>
  );
};

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart, cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' }
    })
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
        Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
      </motion.h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty.</p>
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
          >
            Continue Shopping
          </motion.button>
        </div>
      ) : (
        <div className="grid gap-6">
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
                onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
                <p className="text-lg font-bold text-gray-900">{item.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <QuantityStepper
                    id={item.id}
                    quantity={item.quantity}
                    updateQuantity={updateQuantity}
                  />
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
            <p className="text-xl font-bold text-gray-900 mb-4">
              Total: ${totalPrice}
            </p>
            <motion.button
              onClick={() => navigate('/checkout')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
            >
              Proceed to Checkout
            </motion.button>
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-200 text-gray-800 text-sm font-medium shadow-sm hover:bg-gray-300"
            >
              Continue Shopping
            </motion.button>
            <motion.button
              onClick={() => clearCart()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-medium shadow-sm hover:bg-red-600"
            >
              Clear Cart
            </motion.button>
          </div>
        </div>
      )}
    </motion.section>
  );
}