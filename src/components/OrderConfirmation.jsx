// // import React from 'react';
// // import { useNavigate, useLocation } from 'react-router';

// // export default function OrderConfirmation() {
// //   const navigate = useNavigate();
// //   const { state } = useLocation();
// //   const orderDetails = state?.orderDetails || {};

// //   return (
// //     <section className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100">
// //       <h1 className="text-3xl font-bold text-gray-900 mb-6">Order Confirmed</h1>
// //       <div className="bg-white rounded-xl shadow-md p-6">
// //         <p className="text-lg text-gray-700 mb-4">
// //           Thank you for your order, {orderDetails.name || 'Customer'}!
// //         </p>
// //         <p className="text-sm text-gray-600 mb-4">
// //           Your order totaling ${orderDetails.total || '0.00'} has been placed successfully.
// //           We'll send a confirmation to {orderDetails.email || 'your email'}.
// //         </p>
// //         <p className="text-sm text-gray-600 mb-4">
// //           Shipping to: {orderDetails.address}, {orderDetails.city}, {orderDetails.zip}
// //         </p>
// //         <button
// //           onClick={() => navigate('/')}
// //           className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
// //         >
// //           Back to Home
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }


// // src/components/OrderConfirmation.tsx
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
// import { QRCodeCanvas } from 'qrcode.react';   // reliable named import


// // ---------------------------------------------------------------
// // CONFIG – change only these
// // ---------------------------------------------------------------
// const MERCHANT_WALLET = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';
// const CURRENCY = 'USD';                     // UI currency
// // const CRYPTO = 'BTC';                       // crypto used for payment
// const PRICE_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

// export default function OrderConfirmation() {
//   const { state } = useLocation();
//   const orderDetails = state?.orderDetails || {};

//   const [paymentURI, setPaymentURI] = useState<string>('');
//   const [btcAmount, setBtcAmount] = useState<string>('');   // BTC amount for QR
//   const [usdPrice, setUsdPrice] = useState<number>(0);      // BTC → USD rate
//   const [loading, setLoading] = useState<boolean>(true);

//   // ---------------------------------------------------------------
//   // 1. Fetch current BTC price (once)
//   // ---------------------------------------------------------------
//   useEffect(() => {
//     const fetchPrice = async () => {
//       try {
//         const res = await fetch(PRICE_API);
//         const data = await res.json();
//         const price = data.bitcoin.usd;
//         setUsdPrice(price);
//       } catch (e) {
//         console.error('Failed to fetch BTC price', e);
//         setUsdPrice(0);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPrice();
//   }, []);

//   // ---------------------------------------------------------------
//   // 2. Build payment URI (USD → BTC conversion)
//   // ---------------------------------------------------------------
//   useEffect(() => {
//     if (!orderDetails.total || usdPrice === 0) return;

//     const usdTotal = Number(orderDetails.total);
//     const btcTotal = (usdTotal / usdPrice).toFixed(8);   // 8-decimal precision
//     setBtcAmount(btcTotal);

//     const label = encodeURIComponent(`Order #${orderDetails.id || 'N/A'}`);
//     const message = encodeURIComponent(`Total: $${usdTotal} (${btcTotal} ${CRYPTO})`);

//     const uri = `USD:${MERCHANT_WALLET}?amount=${btcTotal}&label=${label}&message=${message}`;
//     setPaymentURI(uri);
//   }, [orderDetails, usdPrice]);

//   // ---------------------------------------------------------------
//   // 3. Guard UI
//   // ---------------------------------------------------------------
//   if (!paymentURI || loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-lg text-gray-600">Loading payment details…</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6">

//       {/* QR + Price Card */}
//       <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm w-full">

//         {/* QR Code (contains exact BTC amount) */}
//         <div className="inline-block p-2 bg-gray-50 rounded-2xl">
//           <QRCodeCanvas
//             value={paymentURI}
//             size={240}
//             level="H"
//             includeMargin
//             bgColor="#ffffff"
//             fgColor="#000000"
//           />
//         </div>

//         {/* USD Total (big & bold) */}
//         <div className="mt-6">
//           <p className="text-5xl font-extrabold text-gray-900">
//             ${orderDetails.total}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">
//             ≈ {btcAmount} {CRYPTO}
//           </p>
//           <p className="text-xs text-gray-400 mt-2">
//             Scan to pay
//           </p>
//         </div>
//       </div>

//       {/* Copy link */}
//       <button
//         onClick={() => {
//           navigator.clipboard.writeText(paymentURI);
//           alert('Payment link copied!');
//         }}
//         className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 underline"
//       >
//         Tap to copy payment link
//       </button>
//     </div>
//   );
// }


// src/components/OrderConfirmation.tsx
import React from 'react';
import { useLocation } from 'react-router';
import { QRCodeCanvas } from 'qrcode.react';

// ---------------------------------------------------------------
// CONFIG – CHANGE ONLY THESE
// ---------------------------------------------------------------
const PAYMENT_LINK = 'https://example.com/pay?amount=';
// Example: PayPal, Stripe, Cash App, etc.
// Replace with your real USD payment URL

export default function OrderConfirmation() {
  const { state } = useLocation();
  const orderDetails = state?.orderDetails || {};

  // Build full USD payment URL
  const usdAmount = Number(orderDetails.total || 0).toFixed(2);
  const paymentURL = `${PAYMENT_LINK}${usdAmount}&id=${orderDetails.id || 'N/A'}`;

  if (!usdAmount || usdAmount === '0.00') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-red-600">Invalid order amount.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6">

      {/* Payment Card */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm w-full space-y-6">

        {/* QR Code */}
        <div className="inline-block p-3 bg-gray-50 rounded-2xl">
          <QRCodeCanvas
            value={paymentURL}
            size={240}
            level="H"
            includeMargin
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>

        {/* USD Total */}
        <div>
          <p className="text-5xl font-extrabold text-gray-900">
            ${usdAmount}
          </p>
          <p className="text-lg font-medium text-indigo-600 mt-2">
            Pay with USD
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Scan to pay
          </p>
        </div>
      </div>

      {/* Copy Link */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(paymentURL);
          alert('Payment link copied!');
        }}
        className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800 underline"
      >
        Tap to copy payment link
      </button>

      <p className="mt-4 text-xs text-gray-500 max-w-xs text-center">
        Works with any QR scanner or payment app
      </p>
    </div>
  );
}