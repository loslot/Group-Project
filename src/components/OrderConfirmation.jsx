import React from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderDetails = state?.orderDetails || {};

  return (
    <section className="max-w-7xl mx-auto my-3 px-4 sm:px-6 lg:px-8 py-10 bg-slate-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Order Confirmed</h1>
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-lg text-gray-700 mb-4">
          Thank you for your order, {orderDetails.name || 'Customer'}!
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Your order totaling ${orderDetails.total || '0.00'} has been placed successfully.
          We'll send a confirmation to {orderDetails.email || 'your email'}.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Shipping to: {orderDetails.address}, {orderDetails.city}, {orderDetails.zip}
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}