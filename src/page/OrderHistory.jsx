import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../components/CartContext';
import { motion } from 'framer-motion';

export default function OrderHistory() {
  const { getOrders, updateDeliveryStatus } = useContext(CartContext);
  const navigate = useNavigate();
  const orders = getOrders();

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-purple-100 text-purple-800';
      case 'waiting_for_delivery': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Paid';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'waiting_for_delivery': return 'Waiting for Delivery';
      default: return status;
    }
  };

  const handleStatusUpdate = (orderId, currentStatus) => {
    let nextStatus;
    switch (currentStatus) {
      case 'waiting_for_delivery': nextStatus = 'shipped'; break;
      case 'shipped': nextStatus = 'delivered'; break;
      default: return;
    }
    updateDeliveryStatus(orderId, nextStatus);
  };

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
        Order History
      </motion.h1>

      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">No orders found.</p>
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700"
          >
            Start Shopping
          </motion.button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, orderIndex) => (
            <motion.div
              key={order.id}
              custom={orderIndex}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Order #{order.id}</h2>
                  <p className="text-sm text-gray-500">
                    Ordered on {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.deliveryStatus)}`}>
                    {getStatusText(order.deliveryStatus)}
                  </span>
                  <p className="text-xl font-bold text-gray-900 mt-2">Total: ${order.total}</p>
                </div>
              </div>

              <div className="space-y-4">
                {order.items.map((item, itemIndex) => (
                  <div key={`${item.id}-${itemIndex}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                      onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/100")}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                      <p className="text-md font-bold text-gray-900">{item.price} × {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Paid
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {order.deliveryStatus !== 'delivered' && (
                <div className="mt-6 flex justify-end">
                  <motion.button
                    onClick={() => handleStatusUpdate(order.id, order.deliveryStatus)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700"
                  >
                    {order.deliveryStatus === 'waiting_for_delivery' ? 'Mark as Shipped' : 'Mark as Delivered'}
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 block mx-auto"
      >
        Back to Home
      </motion.button>
    </motion.section>
  );
}