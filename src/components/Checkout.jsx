// src/components/Checkout.jsx
import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import toast from "react-hot-toast";

// CONFIG
const API_BASE = "http://127.0.0.1:5000";
const PAYMENT_TIMEOUT_SECONDS = 120; // 2 minutes

export default function Checkout() {
  const context = useContext(CartContext);
  const { cart, totalPrice, updateQuantity, removeFromCart } = context;
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [qrImage, setQrImage] = useState("");
  const [md5, setMd5] = useState("");
  const [loadingQR, setLoadingQR] = useState(false);
  const [timeLeft, setTimeLeft] = useState(PAYMENT_TIMEOUT_SECONDS);
  const [qrExpired, setQrExpired] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const [orderId] = useState(() => `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
  const timerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } }),
  };
  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Generate QR from API
  useEffect(() => {
    if (paymentMethod !== "qr" || totalPrice <= 0 || cart.length === 0) return;

    const generateQR = async () => {
      setLoadingQR(true);
      try {
        const response = await fetch(`${API_BASE}/api/generate-qr`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Number(totalPrice).toFixed(2),
            currency: 'USD',
            description: `Payment for Order #${orderId}`,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
          setQrImage(data.qr_image);
          setMd5(data.md5);
        } else {
          console.error('QR generation failed:', data.error);
          toast.error(data.error || 'Failed to generate QR code');
        }
      } catch (e) {
        console.error("Failed to generate QR", e);
        toast.error('Failed to generate QR code. Please check your connection.');
      } finally {
        setLoadingQR(false);
      }
    };

    generateQR();
  }, [paymentMethod, totalPrice, cart.length, orderId]);

  // Timer
  useEffect(() => {
    if (paymentMethod !== "qr" || loadingQR || !qrImage || qrExpired || paymentDone) return;

    setTimeLeft(PAYMENT_TIMEOUT_SECONDS);
    setQrExpired(false);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setQrExpired(true);
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paymentMethod, qrImage, loadingQR, qrExpired, paymentDone]);

  // Check payment status periodically
  useEffect(() => {
    if (paymentMethod !== "qr" || !md5 || paymentDone || qrExpired || loadingQR) return;

    const checkPayment = async () => {
      setIsChecking(true);
      try {
        const res = await fetch(`${API_BASE}/api/check-payment?md5=${md5}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.status === 'PAID') {
          setPaymentDone(true);
          if (timerRef.current) clearInterval(timerRef.current);
          toast.success("Payment confirmed!");

          // Create order and navigate to order history
          const { createOrder } = context;
          const order = createOrder({
            paymentMethod: 'qr',
            md5: md5,
          });
          navigate('/order-history');
        }
      } catch (err) {
        console.error("Payment check failed:", err);
        toast.error("Failed to check payment status");
      } finally {
        setIsChecking(false);
      }
    };

    // Check immediately and then every 5 seconds
    checkPayment();
    const intervalId = setInterval(checkPayment, 5000);

    return () => clearInterval(intervalId);
  }, [paymentMethod, md5, paymentDone, qrExpired, loadingQR]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Card submit
  const handleCardSubmit = (e) => {
    e.preventDefault();
    toast.success("Card payment processed! (Mock)");
    navigate("/");
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <motion.section
        className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100 min-h-screen flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <p className="text-lg text-gray-600">Your cart is empty.</p>
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700"
          >
            Continue Shopping
          </motion.button>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-white text-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl px-6 py-4 mb-8 shadow-lg shadow-indigo-500/50 tracking-tight"
        variants={headerVariants}
      >
        Checkout
      </motion.h1>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Cart Summary */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Order Summary</h2>
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
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100")}
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
                <p className="text-lg font-bold text-gray-900">{item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1">
                    <motion.button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-sm hover:bg-orange-600 disabled:bg-orange-300"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                      </svg>
                    </motion.button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-12 px-2 py-1 bg-transparent text-sm text-center font-medium"
                    />
                    <motion.button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full shadow-sm hover:bg-green-600"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0-6H6" />
                      </svg>
                    </motion.button>
                  </div>
                  <motion.button
                    onClick={() => removeFromCart(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium shadow-sm hover:bg-red-600"
                  >
                    Remove
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">Total: ${totalPrice}</p>
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Payment Method</h2>

          {/* Tabs */}
          <div className="flex gap-2 border-b">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`px-4 py-2 font-medium text-sm rounded-t-lg transition ${
                paymentMethod === "card"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Pay with Card 
            </button>
            <button
              onClick={() => setPaymentMethod("qr")}
              className={`px-4 py-2 font-medium text-sm rounded-t-lg transition ${
                paymentMethod === "qr"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Pay with QR Code
            </button>
          </div>

          {/* Card Form */}
          {paymentMethod === "card" && (
            <form onSubmit={handleCardSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full px-3 py-2 border rounded-md" />
              <input type="email" placeholder="Email" required className="w-full px-3 py-2 border rounded-md" />
              <input type="text" placeholder="Shipping Address" required className="w-full px-3 py-2 border rounded-md" />
              <input type="text" placeholder="Card Number" required className="w-full px-3 py-2 border rounded-md" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" required className="px-3 py-2 border rounded-md" />
                <input type="text" placeholder="CVV" required className="px-3 py-2 border rounded-md" />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <motion.button
                  type="button"
                  onClick={() => navigate("/cart")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl text-sm font-medium"
                >
                  Back to Cart
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium"
                >
                  Pay ${totalPrice}
                </motion.button>
              </div>
            </form>
          )}

          {/* QR Payment */}
          {paymentMethod === "qr" && (
            <div className="text-center space-y-6">
              {loadingQR ? (
                <div className="flex flex-col items-center justify-center gap-4">
                  <svg className="animate-spin h-8 w-8 text-indigo-600" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span className="text-lg text-gray-600">Generating QR Code...</span>
                  <span className="text-sm text-gray-500">Please wait while we prepare your payment</span>
                </div>
              ) : paymentDone ? (
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-green-700">Payment Confirmed!</p>
                </div>
              ) : !qrExpired && qrImage ? (
                <>
                  <p className="text-sm text-gray-500">Order #{orderId}</p>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-2xl inline-block"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img src={qrImage} alt="Payment QR Code" className="w-60 " />
                  </motion.div>
                  <p className="text-3xl font-bold text-gray-800">${totalPrice}</p>
                  <p className={`text-lg font-mono mt-4 ${timeLeft <= 30 ? "text-red-600 animate-pulse" : "text-indigo-600"}`}>
                    Expires in: <strong>{formatTime(timeLeft)}</strong>
                  </p>
                  {isChecking && (
                    <p className="text-sm text-indigo-600 flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Checking payment...
                    </p>
                  )}
                  <motion.button
                    onClick={() => {
                      navigator.clipboard.writeText(qrImage);
                      toast.success("QR image copied!");
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Copy QR image
                  </motion.button>
                </>
              ) : qrExpired ? (
                <div className="bg-red-50 p-6 rounded-2xl">
                  <p className="text-red-700 font-semibold">Payment Window Expired</p>
                  <p className="text-sm text-red-600 mt-1">Please refresh to try again.</p>
                </div>
              ) : null}

              <motion.button
                onClick={() => navigate("/cart")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Back to Cart
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}








