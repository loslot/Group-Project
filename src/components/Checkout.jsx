// import React, { useContext } from "react";
// import { useNavigate, Link } from "react-router";
// import { CartContext } from "../components/CartContext";
// import { motion } from "framer-motion";

// export default function Checkout() {
//   const { cart, updateQuantity, removeFromCart, totalPrice } =
//     useContext(CartContext);
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
//     }),
//   };

//   const headerVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const navVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Purchase completed successfully!");
//     navigate("/");
//   };

//   return (
//     <motion.section
//       className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h1
//         className="
//           text-4xl sm:text-5xl font-extrabold text-white text-center
//           bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
//           rounded-xl px-6 py-4 mb-8
//           shadow-lg shadow-indigo-500/50
//           tracking-tight
//         "
//         variants={headerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         Checkout
//       </motion.h1>

//       {cart.length === 0 ? (
//         <div className="text-center">
//           <p className="text-lg text-gray-600">Your cart is empty.</p>
//           <motion.button
//             onClick={() => navigate("/")}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
//           >
//             Continue Shopping
//           </motion.button>
//         </div>
//       ) : (
//         <div className="grid gap-6 lg:grid-cols-2">
//           {/* Cart Summary */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-semibold text-gray-900">
//               Order Summary
//             </h2>
//             {cart.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 custom={index}
//                 variants={itemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-24 h-24 object-cover rounded-md"
//                   onError={(e) =>
//                     (e.target.src = "https://via.placeholder.com/100")
//                   }
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">{item.subtitle}</p>
//                   <p className="text-lg font-bold text-gray-900">
//                     {item.price}
//                   </p>
//                   <div className="flex items-center gap-3 mt-3">
//                     <div className="flex items-center gap-1 bg-gray-50 rounded-full p-1">
//                       <motion.button
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity - 1)
//                         }
//                         disabled={item.quantity <= 1}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-sm hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
//                         aria-label="Decrease quantity"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M18 12H6"
//                           />
//                         </svg>
//                       </motion.button>
//                       <input
//                         id={`quantity-${item.id}`}
//                         type="number"
//                         min="1"
//                         value={item.quantity}
//                         onChange={(e) =>
//                           updateQuantity(item.id, parseInt(e.target.value))
//                         }
//                         className="w-12 px-2 py-1 border-none bg-transparent text-sm text-center font-medium text-gray-900"
//                       />
//                       <motion.button
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity + 1)
//                         }
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full shadow-sm hover:bg-green-600"
//                         aria-label="Increase quantity"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                           />
//                         </svg>
//                       </motion.button>
//                     </div>
//                     <motion.button
//                       onClick={() => removeFromCart(item.id)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium shadow-sm hover:bg-red-600"
//                       aria-label="Remove item"
//                     >
//                       Remove
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//             <div className="text-right">
//               <p className="text-xl font-bold text-gray-900">
//                 Total: ${totalPrice}
//               </p>
//             </div>
//           </div>

//           {/* Checkout Form */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Shipping & Payment
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   required
//                   className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="john@example.com"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="address"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Shipping Address
//                 </label>
//                 <input
//                   id="address"
//                   type="text"
//                   required
//                   className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="123 Main St, City, Country"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="cardNumber"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Card Number
//                 </label>
//                 <input
//                   id="cardNumber"
//                   type="text"
//                   required
//                   className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   placeholder="1234 5678 9012 3456"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="expiry"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Expiry Date
//                   </label>
//                   <input
//                     id="expiry"
//                     type="text"
//                     required
//                     className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="MM/YY"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="cvv"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     CVV
//                   </label>
//                   <input
//                     id="cvv"
//                     type="text"
//                     required
//                     className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="123"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-end gap-4 mt-6">
//                 <motion.button
//                   type="button"
//                   onClick={() => navigate("/cart")}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gray-200 text-gray-800 text-sm font-medium shadow-sm hover:bg-gray-300"
//                 >
//                   Back to Cart
//                 </motion.button>
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
//                 >
//                   Complete Purchase
//                 </motion.button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </motion.section>
//   );
// }






// src/components/Checkout.tsx
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router";
// import { CartContext } from "../components/CartContext";
// import { motion } from "framer-motion";
// import { QRCodeCanvas } from "qrcode.react";

// // CONFIG
// const MERCHANT_WALLET = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
// const PRICE_API = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
// const PAYMENT_TIMEOUT_SECONDS = 120; // 2 minutes

// export default function Checkout() {
//   const { cart, totalPrice } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [paymentURI, setPaymentURI] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [timeLeft, setTimeLeft] = useState(PAYMENT_TIMEOUT_SECONDS);
//   const [qrExpired, setQrExpired] = useState(false);
//   const [paymentDone, setPaymentDone] = useState(false);
//   const [isChecking, setIsChecking] = useState(false);

//   // Regenerate orderId EVERY TIME component mounts
//   const [orderId] = useState(() => `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   // ---------------------------------------------------------------
//   // 1. Build QR Code (USD to BTC conversion)
//   // ---------------------------------------------------------------
//   useEffect(() => {
//     const buildURI = async () => {
//       if (totalPrice <= 0 || cart.length === 0) return;

//       try {
//         const res = await fetch(PRICE_API);
//         const data = await res.json();
//         const btcPriceUSD = data.bitcoin.usd;

//         const usdAmount = Number(totalPrice);
//         const btcAmount = (usdAmount / btcPriceUSD).toFixed(8);

//         const label = encodeURIComponent(`Order #${orderId}`);
//         const message = encodeURIComponent(`Payment for $${usdAmount}`);

//         const uri = `bitcoin:${MERCHANT_WALLET}?amount=${btcAmount}&label=${label}&message=${message}`;
//         setPaymentURI(uri);
//       } catch (e) {
//         console.error("Failed to fetch price", e);
//         const btcAmount = (Number(totalPrice) / 60000).toFixed(8);
//         const uri = `bitcoin:${MERCHANT_WALLET}?amount=${btcAmount}&label=Order%20%23${orderId}`;
//         setPaymentURI(uri);
//       } finally {
//         setLoading(false);
//       }
//     };

//     buildURI();
//   }, [totalPrice, cart, orderId]); // ← orderId in dependency array

//   // ---------------------------------------------------------------
//   // 2. Start 2-minute timer when QR is ready
//   // ---------------------------------------------------------------
//   useEffect(() => {
//     if (loading || !paymentURI || qrExpired || paymentDone) return;

//     setTimeLeft(PAYMENT_TIMEOUT_SECONDS);
//     setQrExpired(false);

//     timerRef.current = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           setQrExpired(true);
//           if (timerRef.current) clearInterval(timerRef.current);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [paymentURI, loading, qrExpired, paymentDone]);

//   // ---------------------------------------------------------------
//   // 3. ONE-TIME payment check
//   // ---------------------------------------------------------------
//   useEffect(() => {
//     if (!paymentURI || paymentDone || qrExpired || loading) return;

//     const checkPayment = async () => {
//       setIsChecking(true);
//       try {
//         const res = await fetch(`/api/payment-status?orderId=${orderId}&wallet=${MERCHANT_WALLET}`);
//         const data = await res.json();
//         if (data.paid === true) {
//           setPaymentDone(true);
//           if (timerRef.current) clearInterval(timerRef.current);
//         }
//       } catch (err) {
//         console.error("Payment check failed:", err);
//       } finally {
//         setIsChecking(false);
//       }
//     };

//     checkPayment();
//   }, [paymentURI, paymentDone, qrExpired, loading, orderId]);

//   // ---------------------------------------------------------------
//   // 4. Format MM:SS
//   // ---------------------------------------------------------------
//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   // ---------------------------------------------------------------
//   // 5. Empty Cart
//   // ---------------------------------------------------------------
//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
//         <div className="text-center">
//           <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ---------------------------------------------------------------
//   // 6. Loading
//   // ---------------------------------------------------------------
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-lg text-gray-600 flex items-center gap-2">
//           <svg className="animate-spin h-5 w-5 text-indigo-600" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//           </svg>
//           Preparing payment…
//         </div>
//       </div>
//     );
//   }

//   // ---------------------------------------------------------------
//   // 7. Final UI
//   // ---------------------------------------------------------------
//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.div
//         className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center"
//         initial={{ scale: 0.9, y: 30 }}
//         animate={{ scale: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <motion.h1
//           className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           Scan to Pay
//         </motion.h1>

//         <p className="text-sm text-gray-500 mb-8">Order #{orderId}</p>

//         {/* Success */}
//         {paymentDone && (
//           <div className="space-y-4">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-green-700">Payment Confirmed!</p>
//               <p className="text-sm text-gray-600">Your order is being processed.</p>
//             </div>
//           </div>
//         )}

//         {/* QR Code */}
//         {!paymentDone && !qrExpired && paymentURI && (
//           <motion.div
//             className="bg-gray-50 p-6 rounded-2xl inline-block"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//           >
//             <QRCodeCanvas
//               value={paymentURI}
//               size={240}
//               level="H"
//               bgColor="#ffffff"
//               fgColor="#000000"
//               includeMargin
//             />
//           </motion.div>
//         )}

//         {/* Expired */}
//         {!paymentDone && qrExpired && (
//           <div className="bg-red-50 p-6 rounded-2xl">
//             <p className="text-red-700 font-semibold">Payment Window Expired</p>
//             <p className="text-sm text-red-600 mt-1">Please refresh to try again.</p>
//           </div>
//         )}

//         {/* Price + Timer */}
//         <motion.div
//           className="mt-8"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <p className="text-3xl font-bold text-gray-800">
//             ${totalPrice}
//           </p>
//           <p className="text-xs text-gray-500 mt-1">
//             {cart.length} item{cart.length > 1 ? "s" : ""}
//           </p>

//           {/* Timer */}
//           {!paymentDone && !qrExpired && (
//             <p
//               className={`text-lg font-mono mt-4 ${
//                 timeLeft <= 30 ? "text-red-600 animate-pulse" : "text-indigo-600"
//               }`}
//             >
//               Waiting for payment: <strong>{formatTime(timeLeft)}</strong>
//             </p>
//           )}
//         </motion.div>

//         {/* Checking */}
//         {!paymentDone && !qrExpired && isChecking && (
//           <p className="text-sm text-indigo-600 flex items-center justify-center gap-2 mt-2">
//             <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//             </svg>
//             Checking payment...
//           </p>
//         )}

//         {/* Copy Link */}
//         {!paymentDone && !qrExpired && (
//           <motion.button
//             onClick={() => {
//               navigator.clipboard.writeText(paymentURI);
//               alert("Payment link copied!");
//             }}
//             className="mt-6 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Tap to copy payment link
//           </motion.button>
//         )}
//       </motion.div>

//       {/* Back */}
//       <motion.button
//         onClick={() => navigate("/cart")}
//         className="mt-8 text-sm text-gray-600 hover:text-gray-800 underline"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         Back to Cart
//       </motion.button>
//     </motion.div>
//   );
// }
















// src/components/Checkout.jsx
import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import toast from "react-hot-toast";

// CONFIG
const MERCHANT_LIGHTNING = "merchant@your-wallet.com";
const PAYMENT_TIMEOUT_SECONDS = 120; // 2 minutes

export default function Checkout() {
  const { cart, totalPrice, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentURI, setPaymentURI] = useState("");
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

  // Build QR URI
  useEffect(() => {
    if (paymentMethod !== "qr" || totalPrice <= 0 || cart.length === 0) return;

    const buildURI = async () => {
      setLoadingQR(true);
      try {
        const usdAmount = Number(totalPrice).toFixed(2);
        const label = encodeURIComponent(`Order #${orderId}`);
        const message = encodeURIComponent(`Payment for $${usdAmount}`);

        const uri = `lightning:${MERCHANT_LIGHTNING}?amount=${usdAmount}&currency=USD&label=${label}&message=${message}`;
        setPaymentURI(uri);
      } catch (e) {
        console.error("Failed to build URI", e);
        setPaymentURI(`lightning:${MERCHANT_LIGHTNING}?amount=${totalPrice}&currency=USD&label=Order%20%23${orderId}`);
      } finally {
        setLoadingQR(false);
      }
    };

    buildURI();
  }, [paymentMethod, totalPrice, cart.length, orderId]);

  // Timer
  useEffect(() => {
    if (paymentMethod !== "qr" || loadingQR || !paymentURI || qrExpired || paymentDone) return;

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
  }, [paymentMethod, paymentURI, loadingQR, qrExpired, paymentDone]);

  // Check payment status
  useEffect(() => {
    if (paymentMethod !== "qr" || !paymentURI || paymentDone || qrExpired || loadingQR) return;

    const checkPayment = async () => {
      setIsChecking(true);
      try {
        const res = await fetch(`/api/payment-status?orderId=${orderId}`);
        const data = await res.json();
        if (data.paid === true) {
          setPaymentDone(true);
          if (timerRef.current) clearInterval(timerRef.current);
          toast.success("Payment confirmed!");
        }
      } catch (err) {
        console.error("Payment check failed:", err);
      } finally {
        setIsChecking(false);
      }
    };

    checkPayment();
  }, [paymentMethod, paymentURI, paymentDone, qrExpired, loadingQR, orderId]);

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
              Pay with QR (USD)
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
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-indigo-600" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Generating QR...</span>
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
              ) : !qrExpired && paymentURI ? (
                <>
                  <p className="text-sm text-gray-500">Order #{orderId}</p>
                  <motion.div
                    className="bg-gray-50 p-6 rounded-2xl inline-block"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <QRCodeCanvas value={paymentURI} size={240} level="H" />
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
                      navigator.clipboard.writeText(paymentURI);
                      toast.success("Payment link copied!");
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Copy payment link
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